"use strict";
//Variable Scope
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
let age = 18; //---> global variable because can be used anywhere in the main code
if (true) {
    console.log(age);
}
if (false) {
    console.log(age);
}
if (true) {
    let age = 35;
    console.log(age); ///THis will print 34 because console.log firstlychecks the age in block
}
//Objects
let subject = "Chemistry";
let myName = "Muzammil";
let rollNo = 235;
// Draawback we need to make seperate variables so we use objects.
let car1 = {
    color: "Red",
    Manufacturer: "Suzuki",
    model: "2016",
    carName: "Mehran",
}; /// car is the object and color manufacturer model and carName are property
console.log(car1.color);
//This will  print Red
// if I do console.log(cars)
//inquirer
const inquirer_1 = __importDefault(require("inquirer"));
let questions = await inquirer_1.default.prompt([
    {
        name: "q1",
        type: "input",
        message: "Enter your name",
    },
    {
        name: "q2",
        type: "list",
        message: "what is your gender",
        choices: ["Male", "Female"],
    },
]);
console.log(`Welcome ${questions.q1}`);
console.log(`Your gender is ${questions.q2}`);
