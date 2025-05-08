const currentDate = new Date();

// Some date methods
console.log(currentDate.toLocaleDateString());
console.log(currentDate.getFullYear());
console.log(currentDate.getMonth());
console.log(currentDate.getDate());
console.log(currentDate.getDay());


console.log(currentDate.setFullYear(2022))
console.log(currentDate.setFullYear(2020, 11, 1))
console.log(currentDate.setMonth(3))
console.log(currentDate.setDate(10))