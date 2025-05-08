"use strict";

const sayHello = (x) => {
    const pr = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(x);
        }, 2000);
    });

    return pr;
}

const promise = sayHello("Hello world!");
promise.then((data)=>{
    console.log(data);
});