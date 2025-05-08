
let arr1 = [1, 2, 3, 4];

let ans = arr1.reduce((prev, current)=>{
    return prev+current;
}, 0)

console.log(ans);