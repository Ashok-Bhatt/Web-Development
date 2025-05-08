module.exports.add = (a,b)=>{
    return a+b;
}

// exports.subtract or exports.add is also valid but not preferable
module.exports.subtract = (a,b)=>{
    return a-b;
}

// module.exports can be returned in the form of key value pairs;
/* module.exports = {
    addition : add,
    subtraction : subtract
} */

// if key value have same name then instead of writing x:x, we can write x
/* module.exports = {
    add,
    subtract
} */