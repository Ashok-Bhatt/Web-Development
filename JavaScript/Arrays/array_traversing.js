let friends = ["Irfan", "Chetan", "Ankit", "Tushar"]

// length of array
console.log(friends.length)     // 4


// Traversing the array
/* 
console.log("\nAll friends using for in loop:")
for (let index in friends){
    console.log(friends[index])
} */

/* 
console.log("\nAll friends using for of loop:")
for (let friend of friends){
    console.log(friend)
} */


// Using for each loop with traditional function
// element index array
friends.forEach(function(index, element){
    console.log(`Element: ${element}    Index: ${index}`);
});


// Using for each loop with flat arrow function
friends.forEach((element, index, array) => {
    console.log(`Element: ${element}    Index: ${index}     ${array}`);
});