
const obj1 = {"Ashok" : "SDE",
            "Irfan" : "Business",
            "Ankit" : "Research"}

for (let [key, value] of Object.entries(obj1)) {
    console.log(`key : ${key}       value : ${value}`);
}