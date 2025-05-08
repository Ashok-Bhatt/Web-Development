
let data = `[
    {
        "name" : "Ashok Bhatt",
        "age" : 19,
        "occupation" : "SDE-1",
        "company" : "Amazon"
    },
    {
        "name" : "Irfan Ansari",
        "age" : 18,
        "occupation" : "Data Analyst",
        "company" : "Microsoft"
    }
]`;

let json_data = JSON.parse(data);

console.log(data);
console.log(json_data);
console.log(json_data[0].age);