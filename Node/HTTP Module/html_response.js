const http = require('node:http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    res.writeHead(200, {"Content-type" : "text/html"});
    let file = fs.readFileSync("./index.html", "utf-8");
    let name = "Ashok Bhatt";
    file = file.replace("#name#", name);
    res.end(file);
});

server.listen(3100, ()=>{
    console.log("Running on port 3100...");
});