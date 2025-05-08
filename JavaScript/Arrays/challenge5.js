const months = ["january", "march", "april", "june", "july"]

// 1. Add december at the end of an array?
// 2. What is the return value of splice method?

// splice(startsFrom, noOfElementGoingToBeDeleted, elementToInsert)
console.log(months.splice(months.length,0,"december"))      // []   <----- returns deleted elements
console.log(months)

// 3. update march to March?
months.splice(months.indexOf("march"),1,"March")
console.log(months)

// 4. Delete June from an array?
months.splice(months.indexOf("june"),1)
console.log(months)

// 5. Remove all elements after april
months.splice(months.indexOf("july"), Infinity)
console.log(months)