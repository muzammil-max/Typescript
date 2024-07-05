---

## Class 01

. is used to specify the path

To install typescript first install node.js

It is a software to compile the typescript codes to javascript
Benefit: We dont need brwoser to run the code.

Java script is madew for browsers.

Use npm install -g typescript

Npm means node package manager.

Variable must not be same.

To make config file do

tsc --init

it is used to define the configuration of typescript compiler

to make package for node.js do

npm init --y

JSON full form

Java Script Object Notation

If variable is declared called name and stores string so to print it
${name}

Create a folder Dont INCLUDE ANY SPACES OR UPPERcASE

then u have to goto the path then type cmd
then do code .

the dot (.) is used to specify the path (tells the vs code to open that paricular file)

when vscode is open from code . command do create new file.

make a file and do not include any spaces or uppercase

for eg

---

main.ts is normal
but Main 01.ts is abnormal

after writing code

make sure to save the file when doing tsc main.ts so that javascript file to be made is not blank.

Tip: Enable autosave.

## now then do node main.js and run the code and the display will be given.

## CLASS 02

NOTE:
names for identifiers must not be same as keywords already declared for typescript for eg making console as a name for variable gives error.

Let

// var , const and let
export
let myname = "icecream";//ice cream
// let myname = "Hassan" un commenting this code will give error because in let we cannot again use let command.In javascript there was no let or const so var was used but the problem of var was that the variable weith same could be made ( 2 child with same name )
myname = "mutter kay danay";//mutter dana
console.log(myname)

Variable

//var
var user = "Jack";
var user = "Jane";
console.log(user);
// we know that var is a variable so it can be changed.
// variable constants only start with either

constant

variable constant only start with either letter , $ or \_
variable can end with any character.

Developers follow a standard called camelCase

in this scenario the the name of variable for eg

MYNAME --> invalid
myname ---> invalid
myName ----> valid
Myname---->invalid

a
Declaration

let g = "pop"

now if we see this the data type will be set to "any"
just like i have two boxes on with

sugar (label)and the spice also labelled in it.
This makes me Easier to knwo that this is sugar and this is spice by the aid of label
This same thing is done in typescript by
telling the typedscript that following variable has the following datatype

this is called strong declaration
in typescript we do as follow:

let myName:string = "Catherine";

in this we already told ts that the variable myName is a string which will only store string.

Now I have another box but with no label in it.
now i dont know what it will have but i know it have any thing which i dont know what is it.

This same case is on ts where when we declare the var or constant with no data type. typescript count this as 'any'

let myID = "11e244"

now here when we hover (put cursor) it will tell that data type of myID is string becuase the value asssigned is strring but this case is not best.
now if i do this

myID = 0651 <----this gives error because the data type of myID is already string ,so gives error.

Operations:

The global variable x and y are declared.

case 01 (Strings)

CONCATINATION

let x = "MONK"
let y = "EY"

combine them to form a new string

to combine string we add + between strings this is called concatination.
in this we concatinate the two strings.

console.log(x+y);

the output will be:

MONKEY

if we add minus divide mutliply in it this will give error

example 2:

console.log("MON"+"KEY"); Output: MONKEY
console.log("MERC"+"URY"); Output: MERCURY
console.log("SIR" + " " + "ZIA"); output: SIR ZIA

CASE 02:
(numbers)

Two global variable are declared E and F.

E=10
Y=2

console.log(E + Y); Output: 12
console.log(E / Y); Output: 5
console.log(E \* Y); Output: 20
console.log(E - Y); output: 8

Case 03 (Number and strings)

In this case we can only concatinate.
If we do minus , divide or mutliply so it will give error.

two global variable
S and Q are declared

S= 3;
Q = "X";

console.log(S + Q); Output: 3X

Example 02:

console.log(3 + "R"); Output: 3R
console.log(6 + "BURGER"); Output: 6BURGER
console.log (4 + RS); ERROR !!!!

To give a prompt in the code we use this symbol ``
this can be found opposite to 1 in keyboard.

for eg

let myName = "Muzammil";
console.log(`My name is ${myName}`); //${variablename}

Output:

My name is Muzammil

Operators:

- ADD

* SUBRACT

- MULTIPLY
  / DIVIDE
  \*\*n Power raised with n
  for eg

let num = 4
let square = num \*\* 2;
console.log(square);

OUTPUT: 16

% Modulus ( gives remainder) IN ALEVEL CS we know MOD function 8MOD2 gives remainder 0 because 8 is the multiple of 2. if 5MOD2 then return 1 becuase remainder is 1 when 5 is divided by 2. so in typescript 4%2 will give zero.

---

## CLASS 03

SLIDE 131 ---> Homework,
SLIDE 121 ---> Homework.

BMI (body Mass index) = Weight / h^2 OR WEight / h\*h

Template literals:

We can concatinate the strings by using + , alternatively we can do this also by,
myName = "Muzammil";
mylastName = "Irfan"
console.log(`${myName}${mylastName});

OUTPUT: MuzammilIrfan

Unary Operations

Pre increment/decrement

let index = 2;

//Case 01 if we do ++index this will increment the value of index.

++index

console.log(index)
OUTPUT: 3

//caSe 02 if we do --index this will increment the value of index.

let index = 10;

--index
console.log (index);
OUTPUT : 1

//case 03 (Mix plate 01)

let Index = 30;

++index; //Index is now 31
++index; //Index is now 32
--index; //Index is now 31
--index; //Index is now 30
++index; //Index is now 31
++index; //Index is now 32

console.log(index);

OUTPUT: 32

2. POST Increment/Decrement

i) Increment.
myNumber = 20;
let result = ++myNumber;
console.log (result);
OUTPUT: 21;

myNumber = 20;
let result = myNumber++;
console.log(result);
OUTPUT: 20; // Asal mai post consdition mai pehele number ata hay phir increment hta to hamari value myNumber agaye hay lkin woh increment nhi hwi hya

Post mai pehhle number ata hay then operation

for eg

num1 = 21;
num2 = 33;
result = num1++ + num2;
// num1 is now 22 (poori operation chali hay) and num2 is 33
console.log(result);
OUTPUT: 55

ii) Decrement
myNumber = 20;
// let result = --myNumber;
console.log (result);
OUTPUT: 20; // //<--- this is is pre

myNumber = 20;
let result = myNumber--;
console.log (result);
OUTPUT: 20; // pehle number phir operator in postfix

example 2:

num1 = 21;
num2 = 33;
result = num1-- + ++num2;
// num1 is now 20 (poori operation chali hay) and num2 is 34 because operation first then number (Pre increment)
console.log(result);
OUTPUT: 54

//BEST CASE

let myNum = 30;
result = ++myNum + myNum++ + myNum--;
console.log(result);

//How browser sees this: 31 + 32 (becuase myNum was 31 so when incremented is now 32 as whole is run) + 32 (becuase post fix so first number then operation so ++ was not consisidered) so final answer is 32+32+31 = 95
OUT put: 95

//Case 04 (Mix plate 02)
let index = 40;
// 41 40 41 45 44 34 54 55 56
let finalIndex = ++index + --index + ++index + 4 + --index - 10 + 20 + ++index + ++index
console.log (finalIndex);

OUTPUT : 56

Assignment Operators

let myNum = 20;

//Without using loop or adding directly value to myNum , increment 5 times in myNum
// We use += it helps in increment in existing value.

myNum += 5; // alternative myNum = myNum + 5;

console.log(myNum);

OUTPUT: 25;

myNum -= 10 //alternativelty myNum = myNum - 10

console.log (myNum);

OUTPUT: 10

Comparsion Operators

1. ==

//checks whether two indetifiers are equal or not.
//Returns boolean if the condition is met based on comparision.
//If equal so gives true
// if not gives false

//CASE 01
let apple = 10;
let orange = 30;

let result = apple == orange //kya apple orange hy barabr hay?
console.log(result);

OUTPUT: false

//CASE 02
let age1 = 32;
let age2 = 32;

let result2 = age1 == age2 //kya age1 age2 ky barabar hy?
console.log(result2);

OUTPUT: True

2. !==

// check that if they are not equal
// if not equal so gives true
// if equal so gives false

//CASE 01

let n2 = 32;
let n1 = 20;

let result = n2 != n1; //kya n1 aur n2 barabar nhi hay?
console.log(result);

OUTPUT: True

//CASE 02

let mynum1 = 20;
let mynum2 = 20;

let myResult = mynum1 != mynum2; //kya mynum1 and mynum2 barbar nhi hay? agr hy then true other wise false

console.log(myResult);

OUTPUT: False

3. greater than or less than >/<

//case 01

let myNum1 = 31;
let myNum2 = 19;

let myResult = myNum1 > myNum2 //kya num1 bara hay num2 say if yes then print true otherwise false.

console.log(myResult);

OUTPUT:

True

//case 02

let myNum1 = 10;
let myNum2 = 12;

let myResult = myNum1 > myNum2 //kya num 1 bara hay num 2 say if yes then true or vice versa

console.log(myResult);

OUTPUT:
False

//case 03 (SPECIAL CASE) for < and >

let myNum1 = 20;
let myNum2 = 20;
let myResult = myNum1 > myNum2
console.log(myResult);

OUTPUT: False

4. greater than equals to >= / less than equals to <=

//case01

let num1 = 20;
let num2 =30;
let result = num1 >= num2 //kya num1 num2 ya num2 say bara hay if yess then True otherwise False
console.log(result);

OUPUT
False

//case 02

let num1 = 30;
let num2 =10;
let result = num1 >= num2 //kya num1 num2 ya num2 say bara hay if yess then True otherwise False
console.log(result);

OUPUT
True

//Case 03

let num1 = 30;
let num2 =30;
let result = num1 >= num2 //kya num1 num2 ya num2 say bara hay if yess then True otherwise False
console.log(result);

OUPUT
True

5. ===
   Checks that if the value is equal to value2 and both have same data type
   num1 = 23;
   num2 = 23;
   console.log( num1 === num2 );
   //Checks that num1 and num2 have equal value and have same data types.

OUTPUT: True

6. !===
   Checks that if the value are not equal and their are also not equal

//Case 01
x= "2";
y= 2;
console.log( x !=== y )
checks that the if x and y are not equal and doesnot have same data type.
OUTPUT: false

//case 02

a = "2";
b = 10;
console.log(a !=== b ); // kay a aur b har lihaz barabar nhi hay ?
OUTPUT: True

---

## CLASS 04

Logical Operators:

True is 1.
False is 0.

1)AND OPERATOR [&&]

//AND operator (&& operator)
multiply

true 1
false 0

AND

console.log((5 > 0) && (3 < 5)); // 0 x 1 = 0 and 0 is false (RE CALL A LEVEL CS)
console.log((true) && (true));
console.log((false) && (false));
console.log((true) && (false));

2. OR OPERATOR [ || ]

addition

//OR operator (|| operator)
console.log((true) || (true)); // 1 + 1
console.log((false) || (false)); // 0 + 0
console.log((true) || (false));
console.log((3>2) ||(2<5)); // 1 + 0

3. NOT OPERATOR [ ! ]

// NOT OPERATOR
console.log(!true) // prints false
console.log(!false)
console.log(!((true) || (true)));
console.log(!((false) || (false)));
console.log(!((true) || (false)));
console.log(!((10>20) || (30>=23))); // NOT( (FALSE) OR (TRUE) ) ===> evaluate NOT (TRUE) ==> gives FALSE

---

## CLASS 05

Conditional Statements:

If Else (conditional statements)

let check = "yes"

if (check == "yes") { //(true) is the key to first curly brackets

console.log("accepted");

} else {

console.log("Rejected");

(curly brackets act as a door and the the item in bracket is key)

// TERNARY OPERATORS
// condition ? expression1:expression2
let q = 4;
console.log(q == 4 ? "Yes" : "No");

let w = "Pass"
console.log(w == "Pass" ? "Keep it up" : "Mehnat krni pregi");

---

## Class 05

Functions

Return value

//Example 01
function greet() {
return "Hello World";
}

console.log(greet());

//output is Hello World

//Example 02
function sum() {
let ans: number;
ans = 2 + 2;
return ans
}
console.log(sum());

OR

function sum() {
return 2+2;
}

console.log(sum())

<add notes>

arrow function

let sum = () => {

}

converts variable into function.

export //Example 01

function greet() {
return "Hello World";
}

console.log(greet());

//output is Hello World

//Example 02
function sum() {
return 2 + 2;
}

console.log(sum());

//example 02 with parameter and arguments
function mySum(num1: number, num2: number) {
let result1 = num1 + num2;
let result2 = num1 - num2;
let result3 = num1 \* num2;
let result4 = num1 / num2;
return result1 + result2 + result3 + result4;
}

console.log(mySum(10, 20));
//here in console.log the 10 and 20 are argument

//Functin example 2
function calculateArea(width: number, height: number): number{
return width \* height;
}
console.log(calculateArea(40, 60));

//Function 3: default parameters
function printFullName(fName: string, lName = "Khan") {
return `${fName} ${lName}`
}
let ans = printFullName('Muzammil')
console.log(ans);

//Arrow Function or lamda Function
let greet99 = () => 'Hello World'
let result = greet99()
console.log(result)

Homework

Learn function from YT.

## CLASS 07

Variable scope

global vareiable:

A variable which is used in all modules.

//Variable Scope

let age = 18; //---> global variable because can be used anywhere in the main code , can be used in any block!

if (true) {
console.log(age);
}

if (false) {
console.log(age);
}

Local Variable

cannot be used in whole program can be used within the block ( {} ).
for eg declaring a variable in if else make it local and can be used within the if else statement.

//Variable Scope

let age = 18; //---> global variable because can be used anywhere in the main code

if (true) {
console.log(age);
}

if (false) {
console.log(age);
}

if (true) {
let age = 35; // this is local variable
console.log(age)///THis will print 34 because console.log firstlychecks the age in block
}

//case 02

age =10
if (true){
}
console.log(age)

//This will print 10.

Inn java script

console.log(age)
let age = 12;
g
THis will give error because when java script runs console.log the age was not declared.

## Hoisting

In javascript

console.log(myNum)
var myNum = 10;

//Hoisting is only applicable in var.

typescript doesnot prefer hoisting

console.log(age) // undefined
var age = 18;

in hoisting only the declaration is (var age)
is gone to up so only declaration is gone up not the value 18 so gives undefined

Modules

it is a small block of code written and can be called many times.

---

| |
| MAIN PROGRAM | | Module 01| |MODULE 03|
| |
| | |MODULE 02|  
| |
|--------------|

if there is any problem in main program the whole program will not run.

But if there is any problem in Module 01 so this will not effect module 03 or module 02.

inquirer is a module which can be call

In Js and ts function is call using import.

Objects:

It is used to store the groups of data

let myCar = {
name: "Alto", //name is property
model: "2007",
manufacturer: "Suzuki" //manufacturer is property
}

console.log(myCar.name); //print Alto

//alternatively

myCar["name"] // print Alto

import inquirer from "inquirer";

## inquirer:

let questions = await inquirer.prompt([
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

---

## CLASS 08

Objects (revision):

delcaring

let user1: {
name: string;
age : number;
role: string;
}

// In this we declared the object with their properties.

//case 01 delcaring + intialize objects

let obj1 = {
name: "ABC",
age: 10,
role: "XYZ",
}

console.log(obj1.name);

//prints ABC

//case 02 Declaring objects

let obj2 : {
carname: string
carnumber: number
carmodel: string
carstatus: boolean
}

// now intialize it

obj2 = {
carname : "mehran",
carnumber : 291210,
carmodel: 2019,
carstatus: ok,
}

using case 02 is bad approach.

//alternatively,

let obj2: {
carname: string
carnumber: number
carmodel: string
carstatus: boolean
} = {
carname : "mehran",
carnumber : 291210,
carmodel: 2019,
carstatus: ok,
}

intialize the properties with their values.

## Type Alias:

In this we can make our custom data type.

Not used in javascript.

type User =
{
name:string
age: number
role:string
}

// in this we defined the type of the properties of any object with type user.

let user1:user = { //user1 has now a data type of user
name : "Muzammil",
age : 16,
//role : 24,
//uncommenting the above line gives error becuase the type of property role is declared with string the user1 has a data type of user.

//case 03

nested objects

dot ( . ) means notation

Object kay andar dhondna

type child = {
name: string
age : number
gender: string
parent: {parentname:string, parentage: number}

here the object contain object.

NOTE: Objects data types declared must not be left empty

type child = {
name: string
age : number
gender: string
guardian: {guardianname:string, guardianage: number}

let child1: child = {
name: "muzammil",
age: 16,
gender: "Male",
guardian:
{
guardianname: "Irfan",
//note that guardianage is missing so give error
}
}

## Type Literals

let trafficlight1: "Red" = "Red";

Inn this topic we set data type as a value for eg in above code the trafficlight1 has literal type of string ( Red )

union types

it is denoted by |

in this we can add more datatypes in variables for eg

let data : string | number

data = 21
console.log(data) //print 21

data = "Apples"
console.log(data) //print Apples

// if i add other value like

data = false
console.log(data) //This gives error because data is declared with type of string and number NOT boolean

Implementing union type in type literals

let lights: "red" | "yellow" | "green" = "red"
console.log (lights);

it will print:

red

Reason: becuase the light have the value of red

what if ....

lights = "Blue"
console.log(lights);

//This gives error becuase the light only have 3 values stored with type string i.e Red Green and Yellow so other than these values are not allowed.

Intersection

A student has written a code to store the contents of student and teachers.

type student = {
name: string,
age: number,
qualification: string,
rollnumber: number,
}

type teacher = {
name: string,
age: number,
exp: string,
class: string,
}

let student1: student = {
name: "muzammil",
age: 16,
qualification: "AS level",
rollnumber: 199,
}

let teacher1 : teacher = {
name: "Ahmed"
age: 24
exp: "14 years"
class: "IGCSE"

here is the code for storing the data of teacher and student.

but what is the student is also teacher so we use a new thing called

Intersection

it is denoted by &

here is a code for both

let both1: student & teacher = {
name: "haseeb",
age: 21,
qualification: "AS level",
rollnumber: 2942,
exp: "4 years experience",
class: "nine",
}

now here name is also in teacher and student so it will pick the common.

anything common types can be take as common properties but now we can also add the properties of type teacher and type student also.

so no need to write another code

-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
CLASS 09
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-==-=-=-=-=-

ARRAYS: Store multiple data of same type

denoted with square brackets []

[a,b,c,d,e,f,g]

a,b,c,d,e,f,g is the element

their position are index

First index start with 0

so index of a is 0.

index of b is 1 and so on as follow

//ARRAYS

let colors = ["red", "green", "yellow", "orange",];
console.log(colors[1]);

to acces array elements we put in sq bracket [] the index of element for eg if i want to print green i will put name of array then [1]

this will print the word

"green"

now if we do this
console.log(colors[5]);

This will not give error but will print "undefined". because no element is on the index/position of 5

Array function 1:
console.log(colors.length)

This function of array is used to count how many elements are in array for eg in the above exampple it will 4 as it has 4 elements.

Array function 2:

to replace any element with new element we just do this

//replacing the element yellow with purple

colors[1] = "purple"; // replace green with purple

console.log(colors[1]);

//OUT PUT WILL BE purple

Array function 3

Push:

to add new element in array we use .push("<element we want to add>")

colors.push("indigio");
console.log(colors);

this will add new element indigio in last most index/position.

Pop:

To remove the last most element in the array we use .pop()
color.pop() //This will remoce the last element of the array for eg array state is [red,green,blue] <--- .pop() will remove the element blue
console.log(colors);

This will print the [red,green]

Extra:

PUSH

let colors = [red,green,pink]

if we store colors.push("white") in variable called x

x= colors.push("white"); <---- new element is added so now there are 4 elements
console.log(x);

this will print 4 <--- length of array.

POP

let colors = [yellow,green,indigio];

if we store color.pop() in variable called y.

y = color.pop();

console.log(y);

this will print indigio.

this wilkl print the element which is to be removedd but the

action for pop and push will not be done in array because the global action is not done.

summary:

POP will always remove the last element of array
PUSH will always add the new element but the position of the element will be last.

Array function 4:

SHIFT

Shift rmeoves the first most element of array

//Shift and Unshift
//shift
// removes the first element
// if stored in variable will return same value as pop
colors.shift();
console.log(colors);
console.log(colors[0]);

UNSHIFT

adds the new element in the first index.

//UNSHIFT
// add new element from the first

colors.unshift("cyan");
console.log(colors);
console.log(colors[0]);

//SLICE

//SLICE

//Extract the specfic part of array we want to extract.
// colors.slice(position of the element to start, position of the element but one less)
console.log("NEW ARRAY")
// 0 1 2 3
let colors2 = ["red", "green", "blue", "orange"]
let v = colors2.slice(2,3) //start pos must be less than end pos
console.log(v);

//SPLICE

//Adds or delete from the specific part of array

the first paramter is starting position of the element and second parameter is how many elememts to delete.... we wan to remove for eg karachi below has index of 0 i want to remove karachi singapore and add lahore so

                 0            1           2         3

let places = ["karachi", "singapore", "florida", "ohio"];

places.splice(0,2,"lahore");
console.log(places)
OUTPUT: [lahore , florida , ohio]

//Splice
/// 0 1 2 3
let places = ["karachi", "singapore", "florida", "ohio"];
places.splice(0, 1, "london");
console.log(places);

let letters = ["a", "b", "c", "d", "e", "f"];
letters.splice(1, 3);
console.log(letters);

// 0 1 2 3 4
let fruits = ["apple", "mango", "grapes", "kiwi", "banana"];

//Q1
fruits.splice(2, 3)
console.log(fruits);

//Q2
//part1
fruits.pop();

//part2
fruits.splice(1, 2);

console.log(fruits);

//Q3

fruits.splice(2, 2, "orange", "strawberry");
console.log(fruits);

Difference b/w objects and arrays ?

//Tuples

in tuples we can set the limit of array.

let subjects: [string, string] = ["", ""];

// we set the limit of array where we can add only 2 elements and their data type MUST be string

first index must have element of string and second index must have datatype of string.

//case02

let subjects2: [string, number, string] = ["",78, ""];

the first index must have string and 2nd must have number and the 3rd (which is final) must have string

//case03

let subjects2: [string, number, string] = ["",78, 31];

first index has string correct
2nd index has string correct
3rd have number incorrect

it gives error becauase third index has datatype of number but we set that 3rd must hve datatype of string that why it gives error.

Arrays are represented by square brackets [].

In array

-to add element in a list we do

push()

-To remove the last element of the array we do

pop()

-To add a new list on a existing list (append) we do

concat([])

Example 01 Push

let mySubjects = ["physics","addmaths","chemistry"]

//Now i want to add a new subject for eg Maths in mySubjects array so we do push

mySubjects.push("Maths");

console.log(mySubjects)

OUTPUT:

[physics,addmaths,chemistry,Maths]

Example 02 Pop

let mySubjects = ["physics","addmaths","chemistry"]

//Now i want to remove Maths in mySubjects array so we do pop

mySubjects.pop()

console.log(mySubjects)

OUTPUT:

[physics,addmaths,chemistry]

Example 03 Concat

let mySubjects = ["physics","addmaths","chemistry"]

//Now i want to add a list of subject in my array mySubjects so we do concat()

mySubjects = mySubjects.concat(["islamiat,"History","ComputerScience"])

console.log(mySubjects)

OUTPUT:

[physics,addmaths,chemistry,islamiat,History,ComputerScience]

1. indexOf()
   Every array element has an index. This method returns the index of an element in an array.

a. If specific element doesn’t exist within array, indexOf() returns -1.

Hence, this method can be used to check whether an element exists in an array or not.

syntax:
array.indexOf(element)

2. lastIndexOf()
   This method returns an array’s last element’s index.

a. If an array is empty then, it returns -1 as of the indexOf() function.
b. If an array has one more same element, then it returns the maximum index of duplicate items.

syntax:
array.lastIndexOf(element)

3. concat()
   As the name suggests, this method simply merges two arrays and returns a combined result.

syntax:
array1.concat(array2)

4. join()
   According to the name, this method joins all elements of the array into a string with a given operator.

a. If an operator is not given, it joins elements with a comma(,).

syntax:
array.join(operator)

5. push()
   This method pushes/adds one or more elements to the array at the last of an array.

syntax:
array.push(element)

6. pop()
   This method pops/removes the last element from an array.

syntax:
array.pop()

7. reverse()
   As per the name, this method reverts the order of an array.

syntax:
array.reverse()

8. shift()
   This method removes starting(first) element from an array and returns the removed element.
   We can say that it’s the exact opposite of pop() method, which removes the last element and returns the result.

syntax:
array.shift()

9. unshift()
   It has the exact opposite behavior to the shift() method. It adds an element at starting of an array and returns a new array.

syntax:
array.unshift(element)

10. slice()
    This method cuts an array, in whichever manner we want and returns the trimmed array.
    a. It excludes the last index from an argument.

syntax:
array.slice(start_index, end_index)

11. splice()
    This method can be used for multiple purposes. For,
1. Add an element to an array
1. Replace specific elements within an array
1. Remove specific elements from an array

syntax:
array.splice(index, number of elements to be removed, element1,..,elementN)

12. toString()
    This method converts an array to a comma-separated string.

syntax:
array.toString()

13. filter()
    This method can also be used in multiple use cases. Like, such as finding even numbers from an array, finding common items from two arrays, or getting a distinct array.

Basically, it checks the conditions which are provided and returns a filtered array.

syntax:
array.filter(callback)

14. map()
    This method creates a new array with the results of calling a provided function on every element in this array.
    In the example, we’ve invoked map() with Math.ceil which returns the lowest maximum number.

syntax:
array.map(callback)

15. every()
    This method tests whether all the elements in an array pass the test implemented by the provided function.

In the example, we have checked for even numbers.

syntax:
array.every(callback)

16. reduceRight()
    This method applies a function simultaneously against two values of the array (from right to left) to reduce it to a single value.

In the example, the array is reduced with the addition of an element to the previous one(right to left).

syntax:
array.reduceRight(callback)

17. reduce()
    This method behaves the exact opposite of the reduceRight() method.
    It applies a function simultaneously against two values of the array (from left to right) to reduce it to a single value.

In the example, an array is reduced with the subtraction of an element from the previous one(left to right).

syntax:
array.reduce(callback)

18. some()
    This method is generally used for testing purposes.
    i.e. To know whether at least a single item from an array is fulfilling a given condition or not.

In the example, again we’ve checked for at least a single even number present in an array.

syntax:
array.some(callback)

19. sort()
    As the name suggests, this method arranges array elements in sorting orders.

In the example, we’ve sorted an array in ascending order. It will sort in descending order, with the condition b-a instead of a-b . similarly, we do in js.

syntax:
array.sort(callback)

20. fill()
    This method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length) and returns the modified array.

a. It can add new elements to specific(multiple) positions

syntax:
array.fill(value, start_index, end_index)

DATATYPES

//DATA TYPES

// any
let num1: any;
num1 = 4;
num1 = true;
num1 = ["apple", true, 314];
num1.xyz;
//no error becuase datatype is ANY (mtlab kch bhi!)

//unknown (pta nhi)
//if we dont know the datatype of variable so we use unknown
let val1: unknown;
val1 = 4;
val1 = true;
val1 = "hello";
// val1.xyz uncommenting this gives error, becausa we dont know the datatype of val1 but can use like this

//number

let val2: unknown;
let val3: any = 12;

val3 = val2;
val2 = val3;
//doesnt give error because val3 has any it can have any datatype
//moreover if set

let val4: unknown;
let val5: number = 13;

val4 = val5;
//val5 = val4; // uncommenting this gives error because val 5 has datatype unknown ( we dont know what datatype is) so we cant assign to other datatype for safe side

-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
CLASS 10 (NOT TAKEN)
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

Loops: A thing which repeats for a number of n times.

where n is known

1. Do while loop
   Recall AS CS

it is post conditional loop which in which if the condition satisfies it runs

//Loops

let i = 0;

do {
console.log("Muzammil");
i++;
}
while (i <= 102); the loop will run 103 times because there is <= more over it will run until the condition is satisfied as we can see that

dureing 1st iteration
i will be 1 then 2 then 3 then 4 then 5 and so on till 103 and will perform the task in it here task is console.log("hello world");

2. While loop

it is pre conditional loop which checks the condition first then run the loop

let num2 = 15;
while (num2 > 0) {
num2--;
console.log(num2);
}

3. For loops

for (<initialize variable> ; <condition> ; <increment>){ //semicolon is used for seperation

}

NOTE: to stop loops we use break.

Codes:

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
console.log(`5 x ${m1} = `, m1 \* 5);
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
console.log(`10 x ${num1} = `, num1 \* 10);
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
// sum = sum + count4;
// console.log(sum);
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

Enums, unknown , never , any , explicit casting , loops

More to be covered

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=--=-=-=-=-=-=-=-=-=-=-=-
CLASS 11
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-==-=-=-=-=-=-=-=-=-

explicit casting:

Used in numbers only

1. toFixed() (only used in numbers)

it adds decimals numbers on the string if the number has already decimal number it will set limit of decimal in the toFixed().

let num = 32.1;
console.log((num as number).toFixed(2))

OUTPUT: 32.10

if num is 32 then output will 32.00

but if the number is 12.5

and we do .toFixed() //didnt add the any decimal place but round off the number (gives estimate value)

## Rest parameter:

parameters based topic.

//Rest parameters

let converttodollar = (num1: number , ... rests: number[]) => {

    console.log(rests);
    return (num1 / 278.3).toFixed(2)

}
converttodollar(2000, 30, 0, 90, 99);

let result = converttodollar(4820,983140941)

console.log(result);

//in rest parametrers we can add more parameterrs. It means that we dont need to add parameters manually.
//parameters can be added with array

let sum1 = 0;

let mysum: number;
function sum(...rests: number[]) { // we do ...<name of array>[]:<type of array> ///in this we can multiple data by setting paramter as an array.
for (let i = 0; i < rests.length; i++) {
sum1 += rests[i];
}
return sum1;
}
sum(100, 200, 300);
console.log(sum(100));

let sum2: number = 0;
function subract(...more: number[]) {
for (let index = 0; index < more.length; index++) {
sum2 = more[index] - sum2;
}
return sum2;
}

console.log(subract(2000, 1000));

// let Val1: any
// Val1 = 2;

// //explicit Casting

// // Val1 = 12.9314;

// // toFixed add decimal for eg the output will be 12.00
// console.log((Val1 as number).toFixed(2));

// //alternatively let myVar1: unknown = 12.5.toFixed()

// let myVar2: unknown = 12.5.toFixed();
// console.log(myVar2);

// //Rest parameters

// let converttodollar = (num1: number , ... rests: number[]) => {

// console.log(rests);
// return (num1 / 278.3).toFixed(2)
// }
// converttodollar(2000, 30, 0, 90, 99);

// let result = converttodollar(4820,983140941)

// console.log(result);
let sum1 = 0;

let mysum: number;
function sum( ...rests: number[]) {
for (let i = 0; i <= rests.length; i++){
sum1 += rests[i]
}

    console.log(sum1) ;

}

Function overload:

if the function is returning nothing then thing to be written is void

type is any.

function add(num1: number, num2: number): number; //overload1 //after () we add : number this means that the value to be retutrn as datatype number (recall AS CS)
function add(num1: string, num2: string): string; //overload2
function add(num1: string, num2: number): string;
function add(num1: any, num2: any): any {
//this main function must have any so that it can use the matching overload

return num1 + num2;
}

add(2, 4);
add("21", "4");
add("13", 4);

Now we go to sign in when we click google to sign in we dont need to add password.

now in login we add email and password

there is a function login which have 2 overload which will accept email and pass word
and the other overload will accept email just

function login(email: string, pass: any): boolean;
function login(email: string): boolean;
function login(email: any, pass?: any): any {
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
} else {
console.log(`wrong email`);
}

if (check2 === true) {
console.log(`correct email and pass`);
} else {
console.log(`wrong email and pass`);
}

if (check3 === true) {
console.log(`Right email`);
} else {
console.log(`wrong email`);
}

3. Uppercase and lowercase

String handling

1. upper case and lower case

.toUpperCase() <--------- used to capitilze all the letters

.toLowerCase() <------------ used to de capitilize all the letters (make all letter to small)

let firstname = "muzammil";
console.log(firstname.toUpperCase());//capitalize all the letters in firstname

console.log(firstname.toLowerCase());

2. Length

.length

//return the number of letters/charcters in string

let stringlength: number;

stringlength = firstname.length

console.log(stringlength);

//length

let stringlength: number;

stringlength = firstname.length

console.log(stringlength);

// slice
// 01234
firstname = "hamza"

let extract = firstname.slice(1,5)

console.log(extract);

let extract2 = firstname.slice(0, 1)
console.log(extract2);

let genstring = ""
genstring = extract2.toUpperCase()

genstring = genstring + extract

console.log(genstring);

Certainly! TypeScript provides several string methods that allow you to manipulate and work with strings. Here's a list of commonly used string methods in TypeScript:

1. **`charAt(index: number): string`**:

   - Returns the character at the specified index.
   - Example: `"hello".charAt(1)` returns `"e"`.

2. **`concat(...strings: string[]): string`**:

   - Combines two or more strings into a single string.
   - Example: `"hello".concat(" world")` returns `"hello world"`.

3. **`indexOf(substring: string, fromIndex?: number): number`**:

   - Finds the index of the first occurrence of a substring within the string.
   - Returns `-1` if not found.
   - Example: `"hello world".indexOf("world")` returns `6`.

4. **`replace(searchValue: string | RegExp, replaceValue: string): string`**:

   - Replaces occurrences of a substring or regular expression with a new substring.
   - Example: `"hello world".replace("world", "universe")` returns `"hello universe"`.

5. **`split(separator: string | RegExp, limit?: number): string[]`**:

   - Splits the string into an array of substrings based on the specified separator.
   - Example: `"apple,banana,orange".split(",")` returns `["apple", "banana", "orange"]`.

6. **`toUpperCase(): string`**:

   - Converts all characters of the string to uppercase.
   - Example: `"hello".toUpperCase()` returns `"HELLO"`.

7. \*\*`toLowerCase(): string`

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
CLASS 12
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

Narrowing:
Setting mulitplee types to one type

//Narrowing
let age: number | string;
age = 15; //narrowing is te method is to set mutlitple type to one type

age.toFixed()

age has number and string but now using narrowing it has one data type.

//Narrowing
let age: number | string;
age = 13//narrowing is te method is to set mutlitple type to one type

now we can use function for number like .tofixed or other becuase its datatype is number rn

age = "Shayan Muzammil" // narrowing of string

//typeof

it tells the type of data assigned to variable/constant

let u1
console.log(typeof u1) //gives undefined

age = 12;
console.log(typeof age == "number") //This will print true becuase typeof return string and since age is number so return "number" and since the condiution mets so gives true

age = "hello"
console.log(typeof age == "string") //prints true

//Math.random()

To generate random number we do

Math.random();

-it generates value b/w 0.000 to 0.999..
-it generates real values
-To increase the no of digits we do

Math.random() \*<finalbound>

finalbound is the last number in range

for eg if i want the number to be generated between 0 to 10 so i will do

Math.random() \* 10

//Math.floor()

converts real number to integer number

let fName = Math.random() > 0.5 ? "Eligible" : 10 //Now it has mutliple data type becuase u see that if the condition mets it can be string or number

if (typeof fName == "string") {
console.log(`fName is string`);

} else {
console.log(`fName is number`)
}

// My example

let GPA = Math.random() > 0.5 ? "U can apply in university" : 10;

if (typeof GPA == "string") { ///narrowing
console.log("Congrats u can now apply for IVY league");
} else {
console.log("Try again later");

}

Interface:

same to typealias and assign data type to property.

// interface

interface Student {
name: string;
age: number;
grade: number | string;
adress: Adress;

}

interface Adress {
town: string;
city: string;
}

let Student1: Student = {
name: "hassan",
age: 12,
grade: "A\*",
adress: {
town: "malir",
city: "karachi",
},
};

Stale and fresh object

stale object is object which is already made (allow extra property)
Fresh object is the object which is made right now (not allow property)

//Fresh object example
let table3: deal1 = {
food: "momos",
drink: "juice", //See it gives error becoz new object is made which doesnot allow new property to be add.
};
// console.log(Table1);
console.log(Table2);

//stale object example

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
grade: "A\*",
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

//Fresh object example
let table3: deal1 = {
food: "momos",
drink: "juice", //See it gives error becoz new object is made which doesnot allow new property to be add.
};
// console.log(Table1);
console.log(Table2);

HOMEWORK:
learn async function
structural typing step 05c

=-=-==-=-==-=-==-=-==-=-==-=-==-=-==-=-==-=-==-=-==-=-==-=-==-=-==-=-==-=-==-=-==-=-==-=-==-=-==-=-==-=-==-=-==-=-==-=-==-=-==-=-==-=-==-=-==-=-==-=-==-=-==
CLASS 13
=-=-==-=-==-=-==-=-==-=-==-=-==-=-==-=-==-=-==-=-==-=-==-=-==-=-==-=-==-=-==-=-==-=-==-=-==-=-==-=-==-=-==-=-==-=-==-=-==-=-==-=-==-=-==-=-==-=-==-=-==-=-==

Concept of Asynchronouse and synchronouse progamming in javascript:

SYNCHRNOUSE
It means to perfortm task line by line.
Each task wait for the previous task to be complete before executing

Blocking code:

block the flow of program for eg

X Y Z are people using atm.

First X arrives and use atm, whiile the X was using atm , y arrived and waits for the X to complete the task. This makes Y to do nothing but just waiting for the x to comeout. when the x comeout y goes in and use atm. this similar step also goes for z.

Example:

//Function Callbacks

function myfirst() {
console.log("Hello");
}

function mysecond() {
console.log("World");
}

myfirst(); //perform the task of the first function
mysecond(); // perform the task of 2nd function

ASYNCHRONOUSE FUNCTION:

Asynchronous programming is a way for a computer program to handle multiple tasks simultaneously rather than executing them one after the other.
it doesnot block the other tasks.

1 console.log("Start of script");
2
3 setTimeout(function() {
4 console.log("First timeout completed");
5 }, 2000);

console.log("End of script");

OUTPUT:

Start of script
End of script
First timeout completed

as u can see that in this code it doesnot run line by line. It's asynchrornous.

First the line 1 execute but u see that it jumps of too line 5. it means that it performs job simultenousy and wothout blocking other task and then the line 3 execute. However the output is made according to the current task being performed.

Promise:
A promise in TypeScript is an object representing the eventual completion or failure of an asynchronous operation. It is a placeholder for a value that may be available now, or in the future, or never.

The async/await syntax in TypeScript provides a more concise and readable way to work with promises. It makes asynchronous code look and behave like synchronous code, making it easier to understand.

Using async/await with promises helps avoid the callback hell (also known as the pyramid of doom) and makes error handling more straightforward

ASYNC FUNCTION

// Function returning a promise
function fetchData(): Promise<string> {
return new Promise((resolve, reject) => {
// Simulating an asynchronous operation
// (e.g., fetching data)
setTimeout(() => {
const data = "Async data has been fetched!";
resolve(data);
}, 2000);
});
}

Import and Export:

The folder has contents

app.ts
first.ts
second.ts

another has a file called third.ts. the name of file is my2file

to import the first.ts from app.ts (main file)

do this

import first from "./first" //the "./" determine the directory

//do import three.ts we do this

import three from "./my2file/third" //this will go to my2file and search for file third.ts

this is called default importing where the file is import which already with main file in the same folder
but before that we need to export in first second and third

we do export a; // in first

Changing name:

import second from "./second"

import {a,b as x} from "./second" // name of b is now change to x

## ASYNC AND SYNC

1. setTimeout()
   adds a delay on the code to execute the code when the specific time reaches.
   the number passed is in milliseconds

callback() function

A function where the argument is passed as function on other function.

case01

let check = () => {
setTimeout(() = > {
console.log("order pizza")
return "order pizza"
}
}
result = check();
console.log(result);

OUTPUT is undefined cuz when the setimeout comes the code goes to other place and will be executeed after 2 second but the problem is that the code will be run to end and the function will be also completed so the it will no use to return since result has no value.

Promise is 3 types
1)Success 2) Failure 3) Pending

//homework

call stack
event queue
WeB API

Sir Hamza

Async callback promises and much more

//case01
const a1 = (v1:number,v2:number,cb:any) => {
setTimeout(() => {
return ("Hello world") //return "Hello World" waiting for 5 seconds
},5000);
};

console.log(a1(1,2,8)); // console.log has no value to print so gives undefined

//OUTPUT this code and it gives undefined becuase u see that in setTimeout the line of the code goes to other place and wait for specific time to combeback
//but since all the lines are not waiting they just read up by typescript and therefore when the part of function is completed it will
// return no value since console.log has already been run it got no value to return.

//Call bck function

const a2 = (callback: any) => { //ghhor say dekho yaha par hamra parameter callback hay

console.log("first function");
callback(); // agar yh dekho to yh callback function
}
const a3 = () => {
console.log("2nd function")
}

const a4 = () => {
console.log("3rd function")
}

let a5;

a2(a3) // a3 mera callback function hay cuz a2 ma dekho to callback() aik paramter hy jo woh call krega to mera function paramter yaha par a3 hay to woh a3() ko call krega

a2(a4) //note this gives error becose its not a function.

a2(a5)

//Synchrnous function
//It is a function which runs sequently and simultennously / in parallel
//
//Function Callbacks
function myfirst() {
console.log("Hello");
}
function mysecond() {
console.log("World");
}
myfirst(); //perform the task of the first function

mysecond(); // perform the task of 2nd function
//Asynchronous function

//They are the function which wait for the other function to complete task.
//Runs in parallel and wait for the another task to be completed
console.log("Start of script");

setTimeout(function () {
console.log("First timeout completed");
}, 2000);
// Callback()

let myFunc = () => {
console.log("Hello World");
};
let op = setInterval(myFunc, 5000);

clearInterval(op);

let delay = () => {
console.log(`print2`);
};
let x = "print1";

let y = "print3";
// console.log(x);

// setTimeout(delay, 0);
// console.log(y);
// //OUTPUT

// // print1
// //print2
// //print3
// // since this is async so the print2 task is on paraalel while the other print1 and print3 will be printed in sequence with a speed of light

// //Pizza making

// //promise

// function orderPizza() {

// return new Promise((resolve, reject) => {
// setTimeout(() => {
// console.log("order pizza")
// }, 5000);

// });
// }
// orderPizza();

// // ASYNCHRNONUS CONCEPT BY SIR HAMZA

//case01

let a1 = (v1: number, v2: number, cb: any) => {
setTimeout(() => {
return "Hello world"; //return "Hello World" waiting for 5 seconds
}, 5000);
};
console.log(a1(1, 2, 8)); // console.log has no value to print so gives undefined

//OUTPUT this code and it gives undefined becuase u see that in setTimeout the line of the code goes to other place and wait for specific time to combeback

//but since all the lines are not waiting they just read up by typescript and therefore when the part of function is completed it will
// return no value since console.log has already been run it got no value to return.
//Call bck function

let a2 = (callback: any) => {
//ghhor say dekho yaha par hamra parameter callback hay
console.log("first function");

callback(); // agar yh dekho to yh callback function
};
let a3 = () => {
console.log("2nd function");
};
let a4 = () => {
console.log("3rd function");
};
let a5;

a2(a3); // a3 mera callback function hay cuz a2 ma dekho to callback() aik paramter hy jo woh call krega to mera function paramter yaha par a3 hay to woh a3() ko call krega

a2(a4);

`allternatively we can also do this`;

a2(() => console.log("Hello WORRLD")); //in this case the callback function is this
// a2(a5) this gives error becuase it's not a callback function but its a variable.

//SetTimeout()

//Adds delay
let test1 = () => {
console.log("Oh Hi");
};
setTimeout(test1, 5000);

//Example 01

let login = (email: string, pass: string, cb: any) => {
setTimeout(() => {
console.log(`1st function invoked`);
cb(email);
}, 5000);
};
let fetchvideos = (email: any, cb: any) => {
setTimeout(() => {
console.log("2nd function invoked!");
cb([`video1`, `video2`, `video3`]);
}, 6500);
};
console.log(
login(`xyz@gmail.com`, `123helpme`, (email: any) => {
console.log(`userlogged in`, email, "fetching videos...");
fetchvideos(email, (videos: any) => {
//this is the body of the callback function its paramter is video and u can see that the argument is in the fetchvideo()function
setTimeout(() => {
console.log(videos);
});
});
})
);
// Promise

// // promise can be in three states

/\*

1. it can sucessful
2. it can be failed (not sucessful)
3. it can be in pending
   \*/
   let mypromise = new Promise<any>((resolve, reject) => {
   // <> this is the place where the type of the paramter for resolve and set in case weuse any
   let marks = 80;
   if (marks >= 80) {
   resolve("A");
   } else {
   reject(23);
   }
   });
   mypromise

.then((grade) => {
console.log(grade);
//.then is used to pass the resolve function which is an callback function.The body of that resolve function is formed in .then
return "treat"; //now we also return "treat"
})
.then((res) => {
//the thing return in the preceeding .then() is stored in the parameter in next .then function here the res paramter has value "Treat"
console.log(res); //Output Treat
});
//here resolve and reject is the call back function

console.log(mypromise);

//promise is actually a class which is an special function which helps to generate objects
// Best way to write promise

let mypromise1 = () => {
return new Promise<any>((resolve, reject) => {
let marks1 = 70;
if (marks1 >= 70) {
resolve("A");
} else {
reject();
}
});
};
mypromise1().then((myGrade) => {
console.log("Pass");
console.log(`your grade is ${myGrade}`);
});
//Login user

let getvid = (...videos: any[]) => {
console.log(videos);
};
let loginuser = (email: any, pass: any) => {
return new Promise<any>((resolve, reject) => {
if (email === "abc@gmail.com" && pass === "1234") {
resolve(email);
} else {
reject("Wrong or password please try again later");
}
});
};
loginuser("123@gmail.com", "33145")
.then((email: any) => {
console.log(`user logged in ${email}`);
console.log("fetching videos.....");

    setTimeout(() => {
      getvid("video1", ":video2", "video3");
    }, 5500);

}) //remember if i put ; in here the code block is completed so dont put ; here becuase next block is to be run also!
.catch((err: any) => {
//.catch is used to form the body of reject function
console.log(err);
});

let checkstudent = (student: string, ID: number) => {
return new Promise<any>((resolve, reject) => {
if (student == "muzammil" && ID == 123) {
resolve("Student found!");
} else {
reject("student not found");
}
});
};

let fetchmarks = (flag: boolean) => {
return new Promise<any>((resolve) => {
flag = true;
if (flag) {
setTimeout(() => {
resolve([
`maths:90`,
`addmaths:92`,
`chemistry: 97`,
`physics:94`,
`ComputerScience:96`,
]);
}, 4000);
}
});
};
// checkstudent("muzammil", 123)

// .then((message) => {
// console.log(`${message}`);
// console.log("Fetching results...");
// return fetchmarks(true);
// })
// .then((recieve) => {
// console.log(recieve);
// })
// .catch((message2) => {
// console.log(message2);
// });
//async function

// replaces .catch and .then
// let getstudentdetails = async () => {
// let checkdata = await checkstudent("muzammil", 123); //await tells typescript to wait until a task is completed this is also an asynchronous type
// console.log(checkdata);
// let get = await fetchmarks(true);
// console.log(get);
// };
//However there is a problem in this code if the ID or name is incorrect then how this situation can be handled?
// Actually the reject function is not calling and moreover if u give the wrong name or id then we'll get to see error
// therefore we use two new things called .try{} and .catch{}
// getstudentdetails();
//alternatively we can ddo this

let getdetails = async () => {
//in this step the typecript checks that if the condition satisfies what to do it will first try the first condition (resolve)
try {
let checkdata = await checkstudent("muzammil", 1223);
console.log(checkdata);
let get = await fetchmarks(true);
console.log(get);
//if typescript tries the first step (resolve) but it gets error so it will move to catch and print the result or perform action
} catch (notfound) {
console.log(notfound);
}
};

getdetails();

-=-==-=-==-==-=-=-=-=-=-=-=-=-=-=-
CLASS 14
=-=-=-=-=-==-=-=-=-=-==-=-=-=-=-=-

## Object Oriented Progamming:

Class:

it is blueprint for making objects.

class House{ //this is the class
}

Methods:

They are the functions inside the objects

If there is function in an object then it is called method

for eg

let todo:any = []

todo.split(/)
todo.push(Hello)

.split is the method and .push is also method

super function

it calls the constructur function of parent class

if the constructor function of parent class has needs n paramter so we need to pass n paramters to super

for eg is three paramter to be pass in contructor of parent class so three parameter must also be passed on super as we have inherited the parent properties.

homework
Abstract classes and members
static members

code:

// export {};
// class House {
// houseNumber: string = "A2H2";
// ownerName: string = "Muzammil";
// }

// // let h2 = {
// // //❌❌❌ dont use this
// // housenumber: "AB22",
// // ownerName: "Hassan",
// // };
// // console.log(h1.ownerName); //prints "Muzammil"

// class House2 {
// readonly houseNumber: string; // Now this proeprty will not change
// ownerName: string;

// constructor(number: string, name: string) {
// //Constructor function creates objects
// this.houseNumber = number; //The property of houseNumber can be accessed using this. the value is now changed to B123.
// this.ownerName = name; // same with above
// }
// }

// let h1 = new House(); //✅
// let h2 = new House2("G219", "Haseeb");
// let h3 = new House2("K2HA", "Junaid"); //if we dont pass arguments we get error ✅
// console.log(h2);
// console.log(h3);
// console.log(h3.ownerName);

// console.log(this); //Gives {}
// // The value of this vary in node.js and in browser

// // h2.houseNumber = "20Y2N"; uncommenting this line gives error //House number cannot be change so we write readonly so it doesnt change
// console.log(h1.houseNumber);

// // class house5 {
// // houseNumber: string
// // ownerName : string
// // }

// //uncommenting this gives error becuase value is not inistialized so we have to initliazed but if i dont want to initialized and dont want error we usse !

// class house5 {
// houseNumber: string = "I283";
// ownerName: string = "Muzammil";
// numberofWindows!: number;
// }

// let details = {
// name: "muzammil",
// class: "A2",
// age: "17",
// };
// console.table(details);
// console.table(h2);

// let clear = () =>
// setTimeout(() => {
// console.clear();
// }, 10000);

// clear();

// // More classes
// //

// //DOG

// class animalaction {
// //Parent clas
// name: string;
// constructor(animalname: string) {
// this.name = animalname;
// }
// walking() {
// console.log("Walking 🚶 ");
// }
// }
// class Dog extends animalaction {
// isWaf: boolean;
// //Extends include the property of animalselection in Dog
// constructor(name: string, wafadar: boolean) {
// super(name); // the name is passed to the parent constructur function of animal
// this.isWaf = wafadar;
// }
// woof() {
// console.log(`${this.name} : Woof`);
// }
// }
// let d0 = new Dog("MyDog", true);
// d0.woof();

// //CAT
// class Cat {
// name: string;

// constructor(Catname: string) {
// this.name = Catname;
// }
// sound() {
// console.log(`${this.name} :Meow`);
// }
// }
// let c2 = new Cat("kitty");
// c2.sound();
// console.log(c2.name); //print the name of property

// let d1 = new Dog("Tommy", true); //This name goes to animal class
// console.log(d1.name);
// d1.walking();
// `03343394479`;

// COntinued Class
//
class shayan {
name: string;

constructor(thisname: string) {
this.name = thisname;
}

makesound() {
console.log(`Hello Hello ${this.name}`); //This. access all the properties of object in class.
}
}

let name1 = new shayan("Tommy");
console.log(name1.name);
name1.makesound();

class haseeb extends shayan {}

class Animal {
name: string;

constructor(thisname: string) {
this.name = thisname;
}

walking() {
console.log("Walking ....");
}
}

class Dog extends Animal {
isWaf: boolean;

constructor(thisname: string, wafadar: boolean) {
super(thisname);
this.isWaf = wafadar;
}

walking() {
console.log(`Walking.. ${this.name}`); // As we can seee that it has also the walking function but it overwrite to parent function
} /_ For eg  
 walking is changed to
walking() {
console.log(WALKING...)
}
now this walk function is overwriteen to parent class but for Dog only!
This concept is called Polymorphesim
Polymorphism is one of the most important concepts in OOP. It describes the ability of something to have or to be displayed in more than one form. The different forms arise because these entities can be assigned different meanings and used in various ways in multiple contexts
_/
}

class Cat extends Animal {
isCute: boolean;

constructor(thisname: string, cute: boolean) {
super(thisname);
this.isCute = cute;
}
}

class racoon extends Animal {}

let myDog = new Dog("Tommy", false);
let myCat = new Cat("Kitty", true);
let myRacon = new racoon("");

myDog.walking();
console.log(myRacon.name);

// concept of Private, public and protected

class Parent {
public name: string; //can be visible
private cardnum: number; // Cannot be visible outside class
protected secretcode: number;

constructor(name: string, num: number, code: number) {
this.name = name;
this.cardnum = num;
this.secretcode = code;
}
}

class children extends Parent {
// notice we didnt made constructur function and super here becuase typescript autromatcaly makes constructuor and super function in backend
withdraw(pin: number) {
// this.cardnum uncommenting gives error since its private it cannot be access outside object so set moode of it to protected
// now we can acess this becuase it is protected, it can be acess to only parent and its children classes
if (this.secretcode == pin) {
console.log("Withrawed");
} else {
console.log("Invalid code");
}
}
}
let q1 = new children("Ali", 213, 124);
console.log(q1);
q1.withdraw(122);
// console.log(q1.secretcode) // it gives error becuase we can only use it in children and parent class

//Prints the whole object where it includes the card number & name
// console.log(q1.cardnum) //uncommenting this code will give errror becuase ,now here we see that we can see the card num but we dont want to see this so set the mode of card num to private

//Interface
interface Ishape {
draw: () => void; //type of function is set
// the function of draw is set so whenever it is implement it will require the devloeper to make the function of draw
}

class Triangle implements Ishape {
// this is called abstraction
// the class of triangle is made but it must have draw funtion because we know that it implements the Ishape ( interface)
draw() {
console.log("drawing triangle");
}
}

Extra any value assigned to the property in objects are called fields

Super calls:

The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.

By using the super function we get acces to all properties of parent function , as we are callng the parent's constructur function

Constructor Function:

The constructor() method is a special method for creating and initializing objects created within a class.

The constructor() method is called automatically when a class is initiated, and it has to have the exact name "constructor", in fact, if you do not have a constructor method, JavaScript will add an invisible and empty constructor method.

Moreover a class can only have one constructor otherwise it will throw an error

Now if i dont want to initialize the property directly or indirectly we add ! to it .

Static methods:

if the method is set as static so we dont neeed to create object to call that methid we can just use class name to call the method.

The static keyword defines static methods for classes.

Static methods are called directly on the class (Car from the example above) - without creating an instance/object (mycar) of the class.

class speak {
brand: string;

constructor(mybrand: string) {
this.brand = mybrand;
}

static say() {
console.log("s");
}
}

speak.say();

The static property is related to its class,it means that we can change the values also

for eg

Class user {
name:string
static userID : number =1
myid : number

constructor (myname:string) {
this.name = myname
myid = ++ static user.userID

}

let a1 = new user(haseeb);
console.log(a1.myid);

WE get 2

now if we do like this

let a2= new user(hassan);
console.log(a2.myid)

we get 3

Ths is because due to static property

In TypeScript, you can use the static keyword to define static class members, including properties.
A static property is a property that is shared across all instances of a class, and can be accessed without creating an instance of the class.

Getters and setters

The meaning of Encapsulation, is to make sure that "sensitive" data is hidden from users. To achieve this, you must:

declare class variables/attributes as private
provide public get and set methods to access and update the value of a private variable

using get and set we can update the values of private properties.

We learned from the previous chapter that private variables can only be accessed within the same class (an outside class has no access to it). However, it is possible to access them if we provide public get and set methods.

The get method returns the variable value, and the set method sets the value.

get return the value of the variable
set takes the parameter and assign it to the variable.

here is the code:

