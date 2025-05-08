// Date object represents total number of milliseconds since 1st January 1970 UTC
// 4 ways to create date object in javscript

// GMT+0530 (GreenWich Mean Time)
let currentDate = new Date()
console.log(currentDate)    // (year-month-date)T(Time)Z
console.log(currentDate.toString())
console.log(currentDate.toLocaleString())


// No of milliseconds since 1st January 1970 UTC
console.log(Date.now())


// seven parameters in constructor: (year, month, day, hour, minute, second, millisecond)
// month : 0-11
let d1 = new Date(2023, 1, 4, 11, 48, 45, 100)
let d2 = new Date(2023, 1, 4)
let d3 = new Date(2023)
let d4 = new Date(2023, 11)         // 1/(month)/year, (time)(am/pm)
console.log(d1.toLocaleString())
console.log(d2.toLocaleString())
console.log(d3.toLocaleString())
console.log(d4.toLocaleString())


// date constructor with date argument
let date1 = new Date("January 3, 2023 08:00:30")
console.log(date1.toLocaleString())


// date constructor with millisecond argument
let date2 = new Date(1704351314736)
console.log(date2.toLocaleString())