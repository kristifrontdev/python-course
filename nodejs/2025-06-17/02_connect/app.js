// require('dotenv').config();

// console.log(process.env.PORT);

const config = require('config');
console.log(config);

const http = require('http');
const path = require('path');
const fs = require('fs');
const serveStatic = require('serve-static');

const connect = require('connect');
const app = connect();

http.createServer(app).listen(config.port, () => console.log(`server work, port : ${config.port}`));

app.use(serveStatic(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    console.log(req.method);
    console.log(req.url);
    next();
});

app.use((req, res, next) => {
    console.log('log');
    next();
});

// /category/notebook

app.use((req, res, next) => {
    if (req.url === "/" && req.method === 'GET') {
        res.end('Main page');
    }
    else if (req.url === "/about" && req.method === 'GET') {
        res.end('About page');
    }
    else if (req.url === "/contact" && req.method === 'GET') {
        
    }
    else {
        next();
    }
});


// Middleware для ответа
app.use((req, res) => {
    res.statusCode = 404;
    res.end('Not found');
});



