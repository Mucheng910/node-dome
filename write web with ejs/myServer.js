const http = require('http');
const fs=require('fs');
const ejs=require('ejs');
var template=fs.readFileSync(__dirname+'//..//hello.ejs','utf-8');
const sever=http.createServer((req,res)=>{
    var data=ejs.render(template,{
        title:"hello ejs",
        content:'<strong>big hello ejs.</strong>'
    });
    res.setHeader('Content-Type','text/html');
    res.statusCode=200;
    res.end(data);
});
const hostname='127.0.0.1';
const port=3000;
sever.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}`);
});