import PromptSync from "prompt-sync";
import inquirer from "inquirer";
//Loops



//do while
let i = 0;

do {
  console.log("Muzammil");
  i++;
} while (i <= 20);

// while loop

let count = 0;

while (count < 20) {
  console.log("Iterate loop...");
  count++;
}

//examples of loop
let count1 = 0;
do {
  count1 = count1 + 1; //alternatively, count1++
  console.log(count1);
} while (count1 <= 25);

let count2 = 0;

while (count2 <= 25) {
  count2++;
  console.log(count2);
}

//making table of 5

let m1 = 0;
while (m1 != 10) {
  m1++;
  console.log(`5 x ${m1} = `, m1 * 5);
}

//making table of 10

console.log("");
console.log("");
console.log("");
console.log("");
console.log("");
console.log("");

let num1 = 0;
do {
  num1++;
  console.log(`10 x ${num1} = `, num1 * 10);
} while (num1 != 10);

let num2 = 15;
while (num2 > 0) {
  num2--;
  console.log(num2);
}

//check for even and odd numbers

let num3 = 100;

while (num3 != 0) {
  num3--;
  if (num3 % 2 === 0) {
    console.log("Number is even");
    console.log(`that number was ${num3}`);
  }
}

do {
  console.log("Hello");
  break;
} while (true);

//For loop
let count3: number;

for (count3 = 0; count3 <= 100; count3++) {
  console.log("FOR LOOPS",count3);
}


// find the sum of first n numbers
// let count4:number
// let sum = 0
// let input = Number(prompt("Enter your number"));

// for (count4 = 1; count4 < input; count4++){
//     sum = sum + count4;
//     console.log(sum);
// }


let findBase: number = 1;
let result: number = 0;
const myinput = await inquirer.prompt(
    {
        name: "uservalue",
        type: "number",
        message: "please input your number"


    }

)
let flag = false;
for (let count4 = 1 ; count4 <= myinput.uservalue; count4++) {
    result = result + count4
}

console.log(result);
