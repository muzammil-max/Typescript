//Narrowing
let age: number | string;
age = 13.38764; //narrowing is te method is to set mutlitple type to one type

console.log(age.toFixed(2));
age = "Shayan Muzammil"; // narrowing of string

console.log(age.toLowerCase());
let result;
let num = 18;
result = typeof num; // it tells the type of age.
console.log(result);

let myString = "Hello";
console.log(typeof myString);

let myAge = "18";

let o1 = typeof myAge;
console.log(typeof myAge, myAge);

let u1;
console.log(typeof u1);

age = 12;
console.log(typeof age == "number"); //This will print true becuase typeof return string and since age is number so return "number" and since the condiution mets so gives true

//Math.floor()

let store1 = Math.random();

//more examples

// TERNARY OPERATORS
// condition ? expression1:expression2
let q = 4;
console.log(q == 4 ? "Yes" : "No");

let w = "Pass";
console.log(w == "Pass" ? "Keep it up" : "Mehnat krni pregi"); // in this the colon mean else

let fName = Math.random() > 0.5 ? "Eligible" : 10; //Now it has mutliple data type becuase u see that if the condition mets it can be string or number

if (typeof fName == "string") {
  console.log(`fName is string`);
} else {
  console.log(`fName is number`);
}

// My example

let GPA = Math.random() > 0.5 ? "U can apply in university" : 10;

if (typeof GPA == "string") {
  console.log("Congrats u can now apply for IVY league");
} else {
  console.log("Try again later");
}

let age1: null | number = null;

// interface

interface Student {
  name: string;
  age: number;
  grade: number | string;
  address: Adress;
}

interface Adress {
  town: string;
  city: string;
}

let Student1: Student = {
  name: "hassan",
  age: 12,
  grade: "A*",
  address: {
    town: "malir",
    city: "karachi",
  },
};

interface deal1 {
  food: string;
}

interface deal2 {
  food: string;
  drink?: string;
}

let order1: deal1 = {
  food: "Anda biryani",
};

let order2: deal2 = {
  food: "Beef Biryani",
  drink: "sting",
};

let Table1: deal1 = order2; //order 2 is stale object moreover we can add more properties.
let Table2: deal2 = order1; //order1 is also stale object
// let Table2: deal2 = order1 uncommenting this gives error becuase drink is misssing. the deal

//Fresh  object example
let table3: deal1 = {
  food: "momos",
  //   drink: "juice", //See it gives error becoz new object is made which doesnot allow new property to be add.
};
// console.log(Table1);
console.log(Table2);
