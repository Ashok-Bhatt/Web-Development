const fs =  require("node:fs");

const fileContents = fs.readFileSync("./text1.txt", "utf-8");
console.log("First: " + fileContents);

const fileContents1 = fs.readFile("./text2.txt", "utf-8", (error, data)=>{
    setTimeout(()=>{
        if (error){
            console.log(error);
        } else {
            console.log("Second: ");
        }
    }, 0);
});

const fileContents2 = fs.readFile("./text1.txt", "utf-8", (error, data)=>{
    if (error){
        console.log(error);
    } else {
        console.log("Third: ");
    }
});