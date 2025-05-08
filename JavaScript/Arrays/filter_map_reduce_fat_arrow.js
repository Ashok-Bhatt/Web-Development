let arr = [1,2,3,4,5]

// difference between map and forEach is that foeEach make changes in original array while map reflects changes in new array        <----- point not sured
// forEach return undefined
let newArr1 = arr.map((element) => {
    return element*element;
})

let newArr2 = arr.filter((element) => {
    return element%2==0
})

let newArr3 = arr.reduce((sum, element) => {
    return sum = sum + element;
})

let newArr4 = arr.reduce((sum, element) => {
    return sum = sum + element;
}, 10)

console.log(newArr1)
console.log(newArr2)
console.log(newArr3)
console.log(newArr4)