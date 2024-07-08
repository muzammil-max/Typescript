"use strict";
let sum1 = 0;
let mysum;
function sum(...rests) {
    for (let i = 0; i < rests.length; i++) {
        sum1 += rests[i];
    }
    return sum1;
}
sum(100, 200, 300);
console.log(sum(100));
let sum2 = 0;
function subract(...more) {
    for (let index = 0; index < more.length; index++) {
        sum2 = more[index] - sum2;
    }
    return sum2;
}
console.log(subract(2000, 1000));
