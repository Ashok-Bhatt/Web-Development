// finding string inside string
const Name = "Ashok Bhatt";
console.log(Name.indexOf("Bhatt"));     // we can specify 2nd argument for starting position
console.log(Name.lastIndexOf("Bhatt"));
console.log(Name.search("Bhatt"));      // we cannot specify 2nd argument for starting position


// slice method
// returns part of string in the new string
console.log(Name.slice(0,4))
console.log(Name.slice(2,-4))
console.log(Name.slice(5))


// substring method
// same as slice but negative indexing is not possible
console.log(Name.substring(0,4))
console.log(Name.substring(2,-4))   // negative specifies that only first x characters would be shown


// substr method
// 2nd parameter specifies no of characters required
console.log(Name.substr(2,5))
console.log(Name.substr(2,-4))   // always empty
console.log(Name.substr(-10))    // last 10 characters


// replace method:  does not change the original string but return a new string
let sentence = "twinkle twinkle little star"
let sentence2 = "TWINKLE TWINKLE LITTLE STAR"
console.log(sentence.replace("twinkle", "Twinkle"))     // changes only first instance,   changes nothing if not found


// Extracting the string characters
console.log(sentence.charAt(7))     // space character
console.log(sentence.charCodeAt(7)) // 32


// ES-5 (2009) allows the property access [ ] on strings
console.log(sentence[4])        // return 4th indexed character


// upper and lower case
console.log(sentence.toUpperCase())
console.log(sentence2.toLowerCase())


// concatenation
console.log(sentence.concat(sentence2))
console.log(sentence.concat(" ", sentence2, "\n"))


// trim method
let sentence3 = "               Ashok           Bhatt    ";
console.log(sentence3.trim())


// coverting the string to an array
console.log(sentence.split())       // entire string as one element
console.log(sentence.split(""))     // Each character is considered as an element
console.log(sentence.split(" "))    // 4 elements here
console.log(sentence.split("|"))    // entire string as one element