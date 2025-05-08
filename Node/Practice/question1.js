/* 1. Implement Module Caching */
const animal1 = require('./animal.js');
animal1.setName("elephant");
console.log(animal1.getName());

const animal2 = require('./animal.js');
console.log(animal2.getName());


/* 2. Now try to implement solution to module caching */
const animalClass = require("./animal2.js");
const animal3 = new animalClass("elephant");
animal3.setName("cat");
console.log(animal3.getName());

const animal4 = new animalClass("donkey");
console.log(animal4.getName());