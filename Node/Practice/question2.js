1. /* Create a basics http server using node */

const http = require("node:http");
const fs = require("node:fs");
const url = require("node:url");

const server = http.createServer((req, res) => {
    if (req.url === "/"){
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("Hello World!");
    } else if (req.url === "/about"){
        res.writeHead(200, {"Content-Type": "text/html"});
        const file = fs.readFileSync("./about.html", "utf-8");
        res.end(file);
    } else if (req.url.startsWith("/user")){
        const parsedUrl = url.parse(req.url, true);
        const query = parsedUrl.query;
        const name = query.name || "Anonymous";
        const age = parseInt(query.age) || 10;
        const userInfo = {
            "name" : name,
            "age" : age
        }
        res.end(JSON.stringify(userInfo));
    } else {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end("Page Not Found!");
    }
});

server.listen(3000, ()=>{
    console.log("Server running on port 3000");
});