
const arr1 = [4,2,5,2,4,2,3,2,3,1];

let ans1 = 0;
arr1.forEach((element)=>{
    ans1 += element;
});
ans1 = ans1/arr1.length;

let ans2 = arr1.reduce((a,b)=>{
    return a+b;
}, 0);
ans2 = ans2/arr1.length;

console.log(ans1);
console.log(ans2);