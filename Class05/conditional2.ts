// Second Example conditional statements.
let x = "good";
let y = "bad";

x !== y;



let isHandsome = false;
let isRich = false;
let canCook = false;
let isSwkian = false;

if (isHandsome || isSwkian) { //ya handsome ya swkian dono mai say agar koi aik quality hogi to rishta pakka
    console.log("Rishta Pakka :D")
} else if (isRich && canCook) {
    console.log("Rishta Pakka :)") //agar Rich bhi hay aur Cook bhi krta hay to Rishta Pakka
} else {
    console.log("Rishta War gaya :(") //rich bhi nhi aur cook bhi nhi krskta to warr gaye (wargya)
};
