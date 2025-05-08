
const obj1 = {"ashok": 2, "bhatt": 4, "king": 7};
for (let i in obj1){
    console.log(i, obj1[i])
}

let arr1 = ["ashok", "bhatt", "is", "great"]

arr1.forEach((element) => {
    console.log(element)
});

arr1.forEach((element, index) => {
    console.log(element + "  " + index)
});

arr1.forEach((element, index, array) => {
    console.log(element + "  " + index + "  " + array)
});