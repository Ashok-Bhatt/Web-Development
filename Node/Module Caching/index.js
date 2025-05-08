// module imported for the first time, so for the next time it is not going to be imported again instead it will be using cached data
const superhero1 = require("./superhero.js");
console.log(superhero1.getName());
superhero1.setName("Thor");
console.log(superhero1.getName());

const superhero2 = require("./superhero.js");
console.log(superhero2.getName());  // will print Thor instead of Batman

const SuperHero = require("./superhero2.js");

const superhero3 = new SuperHero("Batman");
console.log(superhero3.getName());

const superhero4 = new SuperHero("Doctor Strange");
console.log(superhero4.getName());