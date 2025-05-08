let arr = [1,4,9,16,25];

// 1. Find the sqaure root of each element in an array?

let arr1 = arr.map((element) => {
    return element**0.5;
})

console.log(arr1)

// 2. Multiply each element by 2 and return only those elements which are greater than 10

/*
let arr2 = arr.map((element) => {
    return element*2;
}).filter((element) => {
    return element>10;
})
*/

let arr2 = arr.map((element) => element*2).filter((element) => element>10);

console.log(arr2)