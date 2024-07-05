"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Factorial
const inquirer_1 = __importDefault(require("inquirer"));
let num = 10;
let result = 1;
let count_num = 1;
let final_result = 0;
let flag = true;
///setting up input
const userInput = await inquirer_1.default.prompt([
    {
        name: "myInput",
        type: "number",
    },
]);
count_num = userInput.myInput;
while (flag) {
    if (count_num == 0) {
        final_result = result;
        flag = false;
    }
    else {
        //Will multiply the number to the result
        result = result * count_num;
        count_num = count_num - 1;
    }
}
console.log(final_result);
