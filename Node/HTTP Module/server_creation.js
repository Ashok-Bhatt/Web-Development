const http = require('node:http');

const server = http.createServer((req, res)=>{
    const person = {
        firstName : "Ashok",
        lastName : "Bhatt",
        friends : [
            {
                firstName : "Irfan",
                lastName : "Ansari",
            },
            {
                firstName : "Ankit",
                lastName : "Gautam",
            }
        ]
    }
    res.writeHead(200, {"Content-type" : "application/json"});
    res.end(JSON.stringify(person));
});

server.listen(3100, ()=>{
    console.log("Running on port 3100...");
});