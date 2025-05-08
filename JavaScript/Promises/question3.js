"use strict";

let num = 10;

/* new Promise((resolve, reject) => {
    resolve(num);
}).then((num)=>{
    const multiplyPromise = new Promise((resolve, reject) => {
        resolve(num*2);
    })
    return multiplyPromise;
}).then((num)=>{
    const subtractPromise = new Promise((resolve, reject) => {
        resolve(num-3);
    })
    return subtractPromise;
}).then((data)=>{
    console.log(data);
}) */

new Promise((resolve, reject)=>{
    resolve(num);
})
.then((num)=>num*2)
.then((num)=>num-3)
.then((num)=>console.log(num));
