function greet(name){
    console.log(`Hello ${name}`);
}

function higherOrderFunction(callback){
    let name = "Ashok";
    callback(name);
}

higherOrderFunction(greet);