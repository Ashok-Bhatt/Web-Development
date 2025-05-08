
let arr1 = [1,2,3];

let arr2 = arr1;
arr2[0] = 10;
console.log(arr1, arr2);

let arr3 = [...arr1];
arr3[1] = 10;
console.log(arr1, arr3);