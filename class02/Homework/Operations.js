"use strict";
//basic operations in Ts
console.log("Basic mathematical operations in typescript");
//case 01 (directly console)
//-----------------------------------------------------------------------------------------------------------------
// (i) Addition and subraction
console.log(4 + 4);
console.log(-5 + 2);
console.log(-5 + 5);
console.log(999 + 1);
// (ii) Division and multiplcation
console.log(46 * 3);
console.log(100 / 5);
console.log(45 / 2);
console.log(1 / 0);
// (iii) Exponention
console.log(3 ** 2); //We dont use ^ for power, but use ** in ts
console.log(4 ** 0.5);
console.log(3 ** 901);
console.log(100 * 3.41);
// (iv) Modulus (%)
console.log(4 % 2); //In A level CS we use MOD function which gives remainder for eg 4MOD2 gives zero. since 4 is the muliple of 2 in typescript MOD function is now written as %. so 4%2 gives 0. hence 5%2 gives 1
console.log(2 % 3);
console.log(10 % 2);
//-----------------------------------------------------------------------------------------------------------------------
///Case 02 (With Variables)
//(i) Addition and subraction and division
let num1 = 20;
let num3 = 10;
let sum;
sum = num1 + num3;
console.log(`Your total is ${sum}`);
//example
//marks in subject are given use it to find the average overall marks of 5 subjects.
let physics = 23;
let addmaths = 30;
let urdu = 21;
let Maths = 31;
let chemistry = 34;
let mysum1; //SHORTCUT !! let mysum1 = physics + chemistry + addmaths + urdu + maths;
let avg; //SHORTCUT  let avg = mysum1/5
mysum1 = physics + chemistry + urdu + Maths + addmaths;
avg = mysum1 / 5;
console.log(`Total marks of the student are ${mysum1}`);
console.log(`Average marks of the student are ${avg}`);
//(ii) Multiplication
let n1 = 32;
let n2 = 10;
let product;
product = n1 * n2;
console.log(`Product of ${n1} and ${n2} is ${product}`);
// (iii) Exponent
//find the square , cube of the following numbers 3 , 2 and 5. You must make variables to perform operations.
let myNum = 3;
let myNum2 = 2;
let myNum3 = 5;
let Square;
let Cube;
Square = myNum ** 2;
Cube = myNum ** 3;
console.log(`The square of 3 is ${Square}`);
console.log(`The cube of 3 is ${Cube}`);
Square = myNum2 ** 2;
Cube = myNum2 ** 3;
console.log(`The Square of 2 is ${Square}`);
console.log(`The cube of 2 is ${Cube}`);
Square = myNum3 ** 2;
Cube = myNum3 ** 3;
console.log(`The square of 5 is ${Square}`);
console.log(`The cube of 5 is ${Cube}`);
// (iv) Modulus
//Find the remainder for the following number if they are being divided by two : 21 ,34 and 36. Tip:if the out put is non zero number then the number is not multiple of 2
let Number1 = 21;
let Number2 = 34;
let Number3 = 36;
let result;
result = Number1 % 2;
console.log(`The remainder is ${result}`);
result = Number2 % 2;
console.log(`The remainder is ${result}`);
result = Number3 % 2;
console.log(`The remainder is ${result}`);
