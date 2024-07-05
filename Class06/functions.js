"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greet = void 0;
function greet() {
    return "Hello World";
}
exports.greet = greet;
console.log(greet());
//output is Hello World
//Example 02
function sum() {
    return 2 + 2;
}
console.log(sum());
//example 02 with parameter and arguments
function mySum(num1, num2) {
    let result1 = num1 + num2;
    let result2 = num1 - num2;
    let result3 = num1 * num2;
    let result4 = num1 / num2;
    return result1 + result2 + result3 + result4;
}
console.log(mySum(10, 20));
//here in console.log the 10 and 20 are argument
//Functin example 2
function calculateArea(width, height) {
    return width * height;
}
console.log(calculateArea(40, 60));
//Function 3: default parameters
function printFullName(fName, lName = "Khan") {
    return `${fName} ${lName}`;
}
let ans = printFullName('Muzammil');
console.log(ans);
//Arrow Function or lamda Function
let greet99 = () => 'Hello World';
let result = greet99();
console.log(result);
