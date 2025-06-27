const config = require('config');
console.log(config.port);

const path = require('path');
const fs = require('fs');
const multer = require('multer');

const express = require('express');
const app = express();

app.listen(config.port, () => { console.log(`server on http://localhost:${config.port}`) });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const json = require('./public/sample.json');
console.log(json);

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // if (!file.mimetype.startsWith('image/')) {
        //     return cb(new Error('only images'));
        // }
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const name = path.basename(file.originalname, ext);
        cb(null, `${name}-${Date.now()}${ext}`);
    }
});

const fileFilter = (req, file, cb) => {
    if (!file.mimetype.startsWith('image/')) {
        return cb(null, false);
    }
    cb(null, true);
}

const limits = {
    fileSize: 1 * 1024 * 1024
}

const upload = multer({ storage, fileFilter, limits });

app.get('/', (req, res) => {
    res.send('home');
});

app.get('/form', (req, res) => {
    const file = path.join(__dirname, 'public', 'form.html');
    res.sendFile(file);
});

app.get('/page', (req, res) => {
    const file = path.join(__dirname, 'public', 'page.html');
    res.sendFile(file);
});

app.post('/post-data', (req, res) => {
    console.log(req.body);
    res.json(req.body);
});

// app.post('/upload-file', upload.single('file'), (req, res) => {
//     if (!req.file) {
//         console.log('error only image');
//         return res.status(400).json({ "error": "only image" });
//     }
//     console.log('load file: ', req.file);
//     res.send('file was loaded');
// });

app.post('/upload-file', (req, res) => {
    // manual invocation of middleware function
    upload.single('file')(req, res, err => {
        if (err) {
            if (err.code === 'LIMIT_FILE_SIZE') {
                console.log('error only image');
                return res.status(400).json({ "error": "file too large" });
            }
            if (err instanceof multer.MulterError) {
                return res.status(400).json({ error: 'File upload error: ' + err.message });
            }
            return res.status(500).json({ "error": "server error" });
        }
        if (!req.file) {
            console.log('error only image');
            return res.status(400).json({ "error": "only image" });
        }
         console.log('load file: ', req.file);
        res.send('file was loaded');
    });
});

app.get("/get-json", (req, res) => {
    const filePath = path.join(__dirname, 'public', 'sample.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('File error');
        }

        try {
            const json = JSON.parse(data);
            res.json(json);
        } catch (e) {
            res.status(500).send('JSON error');
        }
    });
});