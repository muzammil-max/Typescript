//ARRAYS
let colors = ["red", "green", "yellow", "orange"];
console.log(colors[1]);
console.log(colors.length); //counts the no of elements in array
//replacing the element yellow with purple
colors[1] = "purple"; // replace green with purple
console.log(colors[1]);
//adding new element in array
//.push() add new element in last index
colors.push("indigio");
console.log(colors);
// removing element in arrray
// .pop() is used to remove the last element.
colors.pop();
let y = colors.push("violet"); //return  curreent length of array
let x = colors.pop(); // return the element which is removed
console.log(colors);
console.log("");
console.log("");
console.log("");
console.log("");
console.log("");
console.log("");
//Shift and Unshift
//shift
// removes the first element
// if stored in variable will return same value as pop
colors.shift();
console.log(colors);
console.log(colors[0]);
//UNSHIFT
// add new element from the first
colors.unshift("cyan");
console.log(colors);
console.log(colors[0]);
//SLICE
//Extract the specfic part of array we want to extract.
// colors.slice(position of the element to start, position of the element but one less)
console.log("NEW ARRAY");
//                0       1        2        3
let colors2 = ["red", "green", "blue", "orange"];
let v = colors2.slice(1, 3);
let h = colors2.slice(3, 4); //start pos must be less than end pos
console.log(v);
console.log(h);
//Splice
///               0            1          2         3
let places = ["karachi", "singapore", "florida", "ohio"];
places.splice(0, 1, "london");
console.log(places);
let letters = ["a", "b", "c", "d", "e", "f"];
letters.splice(1, 3);
console.log(letters);
//              0         1          2       3       4
let fruits = ["apple", "mango", "grapes", "kiwi", "banana"];
//Q1
// fruits.splice(2, 3)
// console.log(fruits);
//Q2
//part1
// fruits.pop();
// //part2
// fruits.splice(1, 2);
// console.log(fruits);
//Q3
fruits.splice(2, 2, "orange", "strawberry");
console.log(fruits);
export {};