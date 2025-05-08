const curTime = new Date();
console.log(curTime)

console.log(curTime.getTime())
console.log(curTime.getHours())
console.log(curTime.getMinutes())
console.log(curTime.getSeconds())
console.log(curTime.getMilliseconds())

// console.log(curTime.setTime())
console.log(curTime.setHours(2))
console.log(curTime.setMinutes(45))
console.log(curTime.setSeconds(23))


// To get only time
console.log(curTime.toLocaleString())
console.log(curTime.toLocaleDateString())
console.log(curTime.toLocaleTimeString())