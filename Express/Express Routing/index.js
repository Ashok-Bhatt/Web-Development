const express = require('express');
const path = require('path');

const app = express();
app.set('view engine', 'pug');

const port = 3000;
const staticPath = path.join(__dirname,  "public");
const aboutPath = path.join(__dirname, "public/about.html");

/* In express.js, every thing is a middleware
middleware means anything that lies between request and response
E.g. express.static */

// Express static is one of the built-in middlewares
// this will read only index.html inside public folder
app.use(express.static(staticPath));

app.get("/home", (req, res) => {
    res.send("Home Page");
});

app.get("/about", (req, res) => {
    res.sendFile(aboutPath);
});

app.get("/contact", (req, res) => {
    let color = "red";
    let htmlContent = `<h2 style="color:${color};">Contact page</h2><p>Ashok Bhatt : 8153889431</p>`
    res.send(htmlContent);
});

app.get("/temperature", (req, res) => {
    data = [
        {
            "city": "Vadodara",
            "temperature": "40 C"
        },
        {
            "city": "Ahmedabad",
            "temperature": "44 C"
        },
        {
            "city": "Surat",
            "temperature": "38 C"
        }
    ]
    res.json(data);     // we can use res.send() too, but res.json() converts even non-objects like null, undefined,etc. (not valid json) to objects
});

app.listen(port, ()=>{
    console.log(`Listening to port ${port}`);
});