const config = require('config');
const path = require('path');
console.log(config);

const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended : true}));


app.listen(config.port, () => {
    console.log(`Server is running on http://localhost:${config.port}`);
});

app.get("/", (req, res) => {
    res.send('Main page');
});
app.post("/", (req, res) => {
    res.send('Use post method');
});
app.get("/about", (req, res) => {
    // res.type('text/plain').status(205).send('<h1>About</h1>');
    res.send('<h1>About</h1>');
});
app.get("/json", (req, res) => {
    res.json({ "one": 1, "two": 22 });
});

app.get("/red", (req, res) => {
    res.redirect("/");
});

app.get("/file", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'image.zip'));
});

app.get("/file1", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'file.html'));
});

app.get("/image", (req, res) => {
    res.download(path.join(__dirname, 'public', 'image.jpg'));
});

// http://localhost:3070/qqq?id=457&name=alex


app.get('/qqq', (req, res) => {
    console.log(req.query);
    console.log(req.query.name);
    res.send('qqq');
});

// http://localhost:3070/category/notebook
// http://localhost:3070/category/books
// http://localhost:3070/category/dress


app.get('/category/:foo/', (req, res) => {
    console.log(req.params);
    console.log(req.params.foo);
    res.send(req.params.foo);
});

app.get('/form-get', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'form_get.html'));
});

app.get('/form-get-submit', (req, res) => {
    console.log(req.query);
    console.log(req.query.user);
    res.send('form - done');
});

app.get('/form-post', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'form_post.html'));
});

app.post('/form-get-submit', (req, res) => {
    console.log(req.body);
    console.log(req.body.password);
    res.send('form - post -  done');
});

app.use((req, res)=> {
    res.status(404).send('404 page not found');
})

// https://hard.rozetka.com.ua/ua/monitors/c80089/
// https://hard.rozetka.com.ua/monitors/c80089/

app.use('/ua/monitors/c80089/', (req, res) => {
    res.send('form - post -  done');
});
app.use('/ua/monitors/c80090/', (req, res) => {
    res.send('form - post -  done');
});

