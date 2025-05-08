//  question 1
var character = "String";
console.log(character)
var num = 23;
console.log(num)
var num2 = 34;
console.log(num2)
result = character + num;        // on adding number with string , the javascript system interprets the number as string
result2 = num + num2        // On adding two or more numbers, the javascript actually performs the real arithmetic solution
console.log("character + num = " + result)
console.log("num + num2 = " + result2)


// question 2
console.log("The data type of the character object is:" + typeof character)
console.log("The data type of the num object is:" + typeof num)


// question 3
const set = {
  "Ashok": 18,
  "Irfan": 19,
  "Chetan": 20
}
console.log("The age of Ashok is " + set["Ashok"])
{
  let set = 3.1428;        // The value object defined with const keyword cannot be changed but can be re-declared at local scope
  console.log("The value of set can also be written as:" + set)
}


// question 4
set["Total"] = 58
console.log(set["Total"])
console.log(set)


// question 5
let ls = {
  "Happiness": "The human emotion that shows the joyness",
  "Liquid": "The state of matter that is fluid and non-rigid in nature",
  "Cell": "The constituent of human body",
  "Chemistry": "The basic science which explains about chemicals and their reaction",
  "Monk": "A person who performs religious rituals or yagnas"
}
console.log(ls["Monk"])