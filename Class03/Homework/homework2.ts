//HOMEWORK
//@ts-nocheck
let a = 22;
let b = 12; 
let c =31;
let d = 12;

let Result : number;

Result = a++ + b-- + c++ + --a + ++d + --d; //In this a was 22 after ++ it become 23 now when --a comes a becomes 22
//       22  +  12  + 31 + 22 + 13 + 12

console.log(Result);