const arr = [
    ['1', '2'],
    ['3', '4'],
    ['5', '6'],
    ['7', '8']
]

let arr1 = arr.reduce((newElement, element) => {
    return newElement.concat(element);
})

console.log(arr)
console.log(arr.length)
console.log(arr1)
console.log(arr1.length)