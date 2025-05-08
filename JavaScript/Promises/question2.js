"use strict";

const sayHello = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(()=>{
            let x = Math.ceil(Math.random()*2);
            if (x === 1){
                resolve("Promise Resolved");
            } else {
                const err = new Error("Promise not resolved!");
                reject(err);
            }
        }, 1000);
    });

    return promise;
}

const promise = sayHello();
promise.then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err.message);
});
