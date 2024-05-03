let obj2: {
  carname: string;
  carnumber: number;
  carstatus: boolean;
};

obj2 = {
  carname: "mehran",
  carnumber: 291210,
  carstatus: true,
};

//type alias

type user = {
  //user is the data type we made
  name: string;
  age: number;
  role: string;
};

let user1: user = {
  name: "Muzammil",
  age: 21,
  role: "Employee",
};

//CASE 03
//Nested Objects

//type 01

type child = {
  name: string;
  age: number;
  gender: string;
  guardian: { guardianname: string; guardianage: number };
};

let child1: child = {
  name: "muzammil",
  age: 16,
  gender: "Male",
  guardian: {
    guardianname: "Irfan",
    guardianage: 45,
  },
};

console.log(child1.guardian.guardianname);

//type 02

type dress = {
  name: string;
  fabric: string;
  color: string;
  designer: {
    designername: string;
    designerage: number;
    designergender: string;
  };
};

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

let trafficlight1: "Red" = "Red";

console.log(trafficlight1)

// union types |

let age: string | number  = 291 ;


let lights: "red" | "yellow" | "green" = "yellow";
console.log(lights);


//intersection &

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
  rollnumber: 3199,
}

//making a code for a person who is both student & teacher


let both1: student & teacher = {
  name: "haseeb",
  age: 21,
  qualification: "AS level",
  rollnumber: 2942,
  exp: "4 years experience",
  class: "nine",
}
