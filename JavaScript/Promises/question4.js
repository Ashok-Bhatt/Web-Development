"use strict";

new Promise((resolve, reject) => {
    reject(new Error("Something went wrong!"));
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err.message);
});