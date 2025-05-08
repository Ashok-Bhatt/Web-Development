
const arr1 = [4,3,45,3,4,3,41,2,45,1]

const arr2 = [...(new Set(arr1))];

const arr3 = arr1.filter((element, index)=>{
    return index == arr1.indexOf(element);
})

const arr4 = arr1.reduce((accumulator, element, index)=>{
    if (index == arr1.indexOf(element)){
        accumulator.push(element);
    }
    return accumulator;
}, [])

console.log(arr2);
console.log(arr3);
console.log(arr4);