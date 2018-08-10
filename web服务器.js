const http=require('http');
const config=require('./config').config;

const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('content-Type','text/plain');
    res.end('Hello node world\n');
});

server.listen(config.port,config.hostname,()=>{
    console.log(`server running at http://${config.hostname}:${config.port}/`);
    //es6语法用`${}`!!!
});

// const http = require('http');
//
// const hostname = '127.0.0.1';
// const port = 3000;
//
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello Node.js World\n');
// });
//
// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });