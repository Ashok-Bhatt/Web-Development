import math from "./math.mjs"
import {add2, subtract2} from "./math2.mjs"
// import * as math from "./math2.mjs"

console.log(math.add(2,3))          // 5
console.log(math.subtract(2,3))     // -1

const {subtract, add} = math;

console.log(add(2,3))               // 5
console.log(subtract(2,3))          // -1

console.log(add2(2,3))
console.log(subtract2(2,3))