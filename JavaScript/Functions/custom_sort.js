
let arr = ["person", "orange", "apple", "banana", "nasikabadrachusiyadrensis", "jaw", "crocodile"];

console.log(arr.sort());
console.log(arr.sort((a,b)=>b.localeCompare(a)));
console.log(arr.sort((a,b)=>a.length - b.length));