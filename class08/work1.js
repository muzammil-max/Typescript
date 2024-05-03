let obj2;
obj2 = {
    carname: "mehran",
    carnumber: 291210,
    carstatus: true,
};
let user1 = {
    name: "Muzammil",
    age: 21,
    role: "Employee",
};
let child1 = {
    name: "muzammil",
    age: 16,
    gender: "Male",
    guardian: {
        guardianname: "Irfan",
        guardianage: 45,
    },
};
console.log(child1.guardian.guardianname);
let dress1 = {
    name: "J.",
    fabric: "Denim",
    color: "Blue",
    designer: {
        designername: "Hasan",
        designerage: "39",
        designergender: "Male",
    },
};
console.log(dress1.designer.designername);
// console.log(`${perform} ${practicing} `)
//type literals
let trafficlight1 = "Red";
console.log(trafficlight1);
// union types |
let age = 291;
let lights = "yellow";
console.log(lights);
let student1 = {
    name: "muzammil",
    age: 16,
    qualification: "AS level",
    rollnumber: 3199,
};
//making a code for a person who is both student & teacher
let both1 = {
    name: "haseeb",
    age: 21,
    qualification: "AS level",
    rollnumber: 2942,
    exp: "4 years experience",
    class: "nine",
};
console.log(both1.name);
console.log(both1.age);
console.log(both1.qualification);
export {};
