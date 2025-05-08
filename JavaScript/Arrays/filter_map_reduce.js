let numbers = [1,4,5,2,7,5,85,7,5,7]

function getFilteredNumbers(number){
    return number >= 5;
}

// (element, index, arr)
function getChangedNumbers(number){
    return number**2;
}

// (accumulator, element, index, arr)
function getReducedNumber(accumulator, number){
    return accumulator = accumulator + number;
}

console.log(numbers.filter(getFilteredNumbers));
console.log(numbers.map(getChangedNumbers));
console.log(numbers.reduce(getReducedNumber));