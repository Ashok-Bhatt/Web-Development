/* 
const sum = () => {
    let a = 5, b = 6;
    return `Sum: ${a+b}`;
}
 */

/* 
const sum = () => {
    return `Sum: ${(a=5) + (b=6)}`;
}
 */


// const sum = () => {return `Sum: ${(a=5) + (b=6)}`;}      // 11
// const sum = () => {`Sum: ${(a=5) + (b=6)}`;}      // undefined
const sum = () => `Sum: ${(a=5) + (b=6)}`;        // 11


// While using fat arrow function, you cannot call it before defining it
console.log(sum());