"use strict";
//OOPS [Final class]
Object.defineProperty(exports, "__esModule", { value: true });
//Static
class speak {
    brand;
    constructor(mybrand) {
        this.brand = mybrand;
    }
    static say() {
        console.log("s");
    }
}
speak.say();
// Getters and Setters
//example
class test {
    _name;
    constructor(myname) {
        this._name = myname;
    }
    get check() {
        return this._name;
    }
    set changer(thisname) {
        this._name = thisname;
        console.log(this._name);
    }
}
var a1 = new test("ABC");
a1.changer;
// use of get
// console.log(a1.check);
