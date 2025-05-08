const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    if (req.url == "/"){
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("Starting Page!");
    } else if (req.url == "/home"){
        res.writeHead(200, {"Content-Type": "text/html"});
        let html = fs.readFileSync("./index.html", "utf-8");
        html = html.replace("#name#", "Ashok Bhatt");
        res.end(html);
    } else if (req.url == "/about"){
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify({
            "name": "Ashok Bhatt",
            "age": 18
        }));
    } else {
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end(req.url);
    }
});

server.listen(3100, ()=>{
    console.log("Website running at port 3100...")}
);