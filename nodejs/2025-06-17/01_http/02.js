const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.method);
    console.log(req.url);

    if (req.method === 'GET' && req.url === '/') {
        res.statusCode = 200;
        res.end('main page');
    }
    else if (req.method === 'GET' && req.url === '/about') {
        res.statusCode = 200;
        res.end('about page');
    }
    else if (req.method === 'GET' && req.url === '/contact') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.write('1');
        res.write('2');
        res.end();
    }
    else if (req.method === 'GET' && req.url === '/map') {
        // res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end('<h1>map</h1>');
    }
    else if (req.method === 'GET' && req.url === '/file') {
        // res.setHeader('Content-Type', 'text/plain');
        // res.setHeader('Content-Type', 'text/html; charset=utf-8');
        // res.end('<h1>map</h1>');
        fs.readFile('file.html', 'utf8', (err, data) =>{
            res.end(data);
        });
    }
    else {
        res.statusCode = 404;
        res.end('404');
    }
});

server.listen(3050, () => console.log('new server'));