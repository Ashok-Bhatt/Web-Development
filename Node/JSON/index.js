// we can also write require("./data") but in that case it will first search for the data.js and then will search for data.json
const data = require("./data.json");

console.log(data);
console.log(data.location.country);
console.log(data.location);