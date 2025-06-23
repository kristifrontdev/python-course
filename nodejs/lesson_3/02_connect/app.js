// require('dotenv').config();

// console.log(process.env.PORT);

const config = require('config');
console.log(config);

const http = require('http');
const path = require('path');
const fs = require('fs');

const connect = require('connect');
const app = connect();

http.createServer(app).listen(config.port, () => console.log(`server work, port : ${config.port}`));

app.use((req, res, next) => {
    console.log(req.method);
    console.log(req.url);
    next();
});

app.use((req, res, next) => {
    console.log('log');

    next();
});

app.use((req, res) => {
    if (req.url === "/" && req.method === 'GET') {
        res.end('Main page');
    }
});



