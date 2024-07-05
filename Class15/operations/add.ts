//! To export we do this

export let num: number = 23;

export
let num2: number = 69;


//? Now we can import like this.

import {} from "../main.js";

// we use ../ to gao back we are now in operation file but to go to parent folder of operation file we do ../


function sum(n1: number, n2: number) {
    return n1 + n1;
}

export default sum;
