const fs = require("node:fs/promises");

async function readFile(){
    try{
        const data = await fs.readFile("about.txt", "utf8");
        console.log("Second: " + data);
    } catch(error){
        console.log(error);
    }
}

fs.readFile("about.txt", "utf8")
    .then((data) => console.log("First: " + data))
    .catch((err) => console.log(err));

readFile();