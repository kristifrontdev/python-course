const http = require('http');
const port = 3050;

const server = http.createServer(serverFunction);

function serverFunction(req, res){
    console.log(req.method);
    console.log(req.url);
    console.log('res');
    res.end('work');
}

server.listen(port, ()=> console.log('server work'));

