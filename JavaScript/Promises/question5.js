"use strict";

const getUserData = ()=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let num = Math.ceil(Math.random()*10);
            console.log(num);
            if (num > 1 && num < 10){
                resolve(JSON.parse('{"name" : "Ashok", "age" : 18}'));
            } else {
                reject(new Error("Data not Found!"));
            }
        });
    }, 1000);
}

const promise = getUserData();
promise.then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err.message);
});