const fs = require('node:fs');

const fileWritter = fs.writeFileSync("./about.txt", "Myself Ashok Bhatt, A passionate leetcoder.");

const fileContents1 = fs.writeFile("./about1.txt", "This is my text", (error, data)=>{
    if (error){
        console.log(error);
    } else {
        console.log("First Executed!");
    }
});

const fileContents2 = fs.writeFile("./about2.txt", "Get this smell", (error, data)=>{
    if (error){
        console.log(error);
    } else {
        console.log("Second Executed!");
    }
});

const fileContents3 = fs.writeFileSync("./about3.txt", "Trial Text" + "\n", {flag : "a"});