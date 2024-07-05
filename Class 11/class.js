"use strict";
let Val1;
Val1 = 2;
//explicit Casting
// Val1 = 12.9314;
// toFixed add decimal for eg the output will be 12.00
console.log(Val1.toFixed(2));
//alternatively let myVar1: unknown = 12.5.toFixed()
let myVar2 = (12.5).toFixed();
console.log(myVar2);
//Rest parameters
let converttodollar = (num1, ...rests) => {
    console.log(rests);
    return (num1 / 278.3).toFixed(2);
};
converttodollar(2000, 30, 0, 90, 99);
let result = converttodollar(4820, 983140941);
// console.log(result);
// let sum1 = 0;
// let mysum: number;
// function sum( ...rests: number[]) {
//     for (let i = 0; i <= rests.length; i++){
//         sum1 += rests[i]
//     }
//     console.log(sum1) ;
// }
let sum1 = 0;
let mysum;
function sum(...rests) {
    for (let i = 0; i < rests.length; i++) {
        sum1 += rests[i];
    }
    return sum1;
}
sum(100, 200, 300);
console.log(sum(100));
let sum2 = 0;
function subract(...more) {
    for (let index = 0; index < more.length; index++) {
        sum2 = more[index] - sum2;
    }
    return sum2;
}
console.log(subract(2000, 1000));
function add(num1, num2) {
    //this main function must have any so that it can use the matching overload
    return num1 + num2;
}
add(2, 4); //performs addition
add("21", "4"); //perform concatination
add("13", 4); //perform concatination
function login(email, pass) {
    if (email === "xyz@gmail.com") {
        return true;
    }
    if (email === "xyz@gmail.com" || pass === "123hello") {
        return true;
    }
}
let check1 = login("xyz@gmail.com");
let check2 = login("xyz@gmail.com", "123hello");
let check3 = login("dqodnh");
if (check1 === true) {
    console.log(`right email`);
}
else {
    console.log(`wrong email`);
}
if (check2 === true) {
    console.log(`correct email and pass`);
}
else {
    console.log(`wrong email and pass`);
}
if (check3 === true) {
    console.log(`Right email`);
}
else {
    console.log(`wrong email`);
}
//upper case and lower case
let firstname = "muzammil";
console.log(firstname.toUpperCase()); //capitalize all the letters in firstname
console.log(firstname.toLowerCase());
//length
let stringlength;
stringlength = firstname.length;
console.log(stringlength);
// slice
//           01234
firstname = "hamza";
let extract = firstname.slice(1, 5);
console.log(extract);
let extract2 = firstname.slice(0, 1);
console.log(extract2);
let genstring = "";
genstring = extract2.toUpperCase();
genstring = genstring + extract;
console.log(genstring);
