import { StringToUpperCase } from "@ilihub/string-to-upper-case";

function greet(name){
    console.log(StringToUpperCase(`Hello ${name}`));
}

greet("Ashok");
export default greet;