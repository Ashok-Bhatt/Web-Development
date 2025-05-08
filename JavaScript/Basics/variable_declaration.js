
// ; is not compulsory in js
// Variable (key)   VariableName = Value
var myName = "Ashok Bhatt"
var myAge = 20;
var isFaangEngineer = true;

/* 
console.log(myName)                         // Ashok Bhatt
console.log(typeof(myAge))                  // Number
console.log(typeof(isFaangEngineer))        // Boolean
console.log(typeof(mySalary))               // undefined
 */



// ----------------------- var v.s. let v.s. const --------------------------------

// ----------------------- Block Scope -----------------------------
/* 
{
    var x = 30;
    let y = 20;
    const z = 10;

    console.log(x);     // 30
    console.log(y);     // 20
    console.log(z);     // 10
}

console.log(x);         // 10
console.log(y);         // Error
console.log(z);         // Error
 */


// ---------------------- Changing the value ---------------------

/* 
var x = 10;
let y = 20;
const z = 40;

x++;
y++;
z++;    // Error
 */