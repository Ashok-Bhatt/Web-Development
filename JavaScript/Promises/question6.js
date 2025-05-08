"use strict";

let num = 10;
new Promise((resolve, reject) => {
    resolve(num);
}).then((data)=>data*2)
.then((data)=>data-5)
.then((data)=>{
    if (data < 10)return num;
    else throw new Error("Invalid number");
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err.message);
})