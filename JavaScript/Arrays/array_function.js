let numbers = [1,12,5,12,424]
let months = ["january", "february", "march", "april", "may", "june"]

/* 
// Finding the index number 
console.log(numbers.indexOf(12))        // 1
console.log(numbers.indexOf(12, 2))     // 3
console.log(numbers.indexOf(3))         // -1
console.log(numbers.lastIndexOf(12))    // 3 <--- starts searching from end
 */

/* 
// Checking if element is available in array or not
console.log(numbers.includes(12));      // true
 */

/* 
// Using find function
function getNewNumbers(number){
    return number >= 10;
}

console.log(numbers.find(getNewNumbers))    // returns undefined if not found
console.log(numbers.findIndex(getNewNumbers))   // returns -1 if not found
 */


// Using filter method
function getNewNumbers(number){
    return number >= 10;
}

let numbers2 = numbers.filter(getNewNumbers);
console.log(numbers2)



// Sorting the array
console.log(numbers.sort())
console.log(months.sort())
