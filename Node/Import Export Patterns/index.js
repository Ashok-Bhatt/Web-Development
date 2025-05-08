const math = require("./math.js");
console.log(math.add(2,6));
console.log(math.subtract(2,1));

const math2 = require("./math.js");
const {add, subtract} = math2;
console.log(add(2,6));
console.log(subtract(2,1));