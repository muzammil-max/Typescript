// export {};
// class House {
//   houseNumber: string = "A2H2";
//   ownerName: string = "Muzammil";
// }
// // let h2 = {
// //     //❌❌❌ dont use this
// //     housenumber: "AB22",
// //     ownerName: "Hassan",
// //     };
// // console.log(h1.ownerName); //prints "Muzammil"
// class House2 {
//   readonly houseNumber: string; // Now this proeprty will not change
//   ownerName: string;
//   constructor(number: string, name: string) {
//     //Constructor function creates objects
//     this.houseNumber = number; //The property of houseNumber can be accessed using this. the value is now changed to B123.
//     this.ownerName = name; // same with above
//   }
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
// //     houseNumber: string
// //     ownerName : string
// //  }
// //uncommenting this gives error becuase value is not inistialized so we have to initliazed but if i dont want to initialized and dont want error we usse !
// class house5 {
//   houseNumber: string = "I283";
//   ownerName: string = "Muzammil";
//   numberofWindows!: number;
// }
// let details = {
//   name: "muzammil",
//   class: "A2",
//   age: "17",
// };
// console.table(details);
// console.table(h2);
// let clear = () =>
//   setTimeout(() => {
//     console.clear();
//   }, 10000);
// clear();
// // More classes
// //
// //DOG
// class animalaction {
//   //Parent clas
//   name: string;
//   constructor(animalname: string) {
//     this.name = animalname;
//   }
//   walking() {
//     console.log("Walking 🚶 ");
//   }
// }
// class Dog extends animalaction {
//   isWaf: boolean;
//   //Extends include the property of animalselection in Dog
//   constructor(name: string, wafadar: boolean) {
//     super(name); // the name is passed to the parent constructur function of animal
//     this.isWaf = wafadar;
//   }
//   woof() {
//     console.log(`${this.name} : Woof`);
//   }
// }
// let d0 = new Dog("MyDog", true);
// d0.woof();
// //CAT
// class Cat {
//   name: string;
//   constructor(Catname: string) {
//     this.name = Catname;
//   }
//   sound() {
//     console.log(`${this.name} :Meow`);
//   }
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
    name;
    constructor(thisname) {
        this.name = thisname;
    }
    makesound() {
        console.log(`Hello Hello ${this.name}`); //This. access all the properties of object in class.
    }
}
let name1 = new shayan("Tommy");
console.log(name1.name);
name1.makesound();
class haseeb extends shayan {
}
class Animal {
    name;
    constructor(thisname) {
        this.name = thisname;
    }
    walking() {
        console.log("Walking ....");
    }
}
class Dog extends Animal {
    isWaf;
    constructor(thisname, wafadar) {
        super(thisname);
        this.isWaf = wafadar;
    }
    walking() {
        console.log(`Walking.. ${this.name}`); // As we can seee that it has also the walking function but it overwrite to parent function
    } /* For eg
                                                        walking is changed to
                                                        walking() {
                                                        console.log(WALKING...)
                                                        }
                                                        now this walk function is overwriteen to parent class but for Dog only!
                                                        This concept is called Polymorphesim
                                                        Polymorphism is one of the most important concepts in OOP. It describes the ability of something to have or to be displayed in more than one form. The different forms arise because these entities can be assigned different meanings and used in various ways in multiple contexts
                                                        */
}
class Cat extends Animal {
    isCute;
    constructor(thisname, cute) {
        super(thisname);
        this.isCute = cute;
    }
}
class racoon extends Animal {
}
let myDog = new Dog("Tommy", false);
let myCat = new Cat("Kitty", true);
let myRacon = new racoon("");
myDog.walking();
console.log(myRacon.name);
// concept of Private, public and protected
class Parent {
    name; //can be visible
    cardnum; // Cannot be visible outside class
    secretcode;
    constructor(name, num, code) {
        this.name = name;
        this.cardnum = num;
        this.secretcode = code;
    }
}
class children extends Parent {
    // notice we didnt made constructur function and super here becuase typescript autromatcaly makes constructuor and super function in backend
    withdraw(pin) {
        // this.cardnum uncommenting gives error since its private it cannot be access outside object so set moode of it to protected
        // now we can acess this becuase it is protected, it can be acess to only parent and its children classes
        if (this.secretcode == pin) {
            console.log("Withrawed");
        }
        else {
            console.log("Invalid code");
        }
    }
}
let q1 = new children("Ali", 213, 124);
console.log(q1);
q1.withdraw(122);
export {};
// console.log(q1.secretcode) // it gives error becuase we can only use it in children and parent class
//Prints the whole object where it includes the card number & name
// console.log(q1.cardnum) //uncommenting this code will give errror becuase ,now here we see that we can see the card num but we dont want to see this so set the mode of card num to private
