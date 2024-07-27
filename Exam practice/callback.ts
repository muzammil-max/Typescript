// function f1(cb: any) {
//   let x = "Hello";
//   cb(x);
// }

// f1((x: string) => {
//   console.log(x + "world");
// });

// function number(a: string, cb: any) {
//   let q: number = 10;
//   cb(q, a);
// }

// number("Hello", (q: any, a: any) => {
//   console.log(`Value of q is ${q}`);
//   console.log(`value of a is ${a}`);
// });

// //Pizza

// function MakingPizza(cb: any) {
//   console.log("Pizza has been started to be baked");
//   setTimeout(() => {
//     console.log("Pizza has been baked!");
//     console.log("");

//     cb();
//   }, 2000);
// }

// function Addspice(cb: any) {
//   console.log("Adding spices in pizza ...");
//   setTimeout(() => {
//     console.log("Spices has been added!");
//     console.log("");
//     cb();
//   }, 1000);
// }

// function slicepizza(cb: any) {
//   console.log("Slicing pizza...");
//   setTimeout(() => {
//     console.log("Pizza has been sliced...");
//     console.log("");
//     cb();
//   }, 3000);
// }

// function deliveringpizza() {
//   console.log("Delivering pizza....");
//   setTimeout(() => {
//     console.log("Pizza has been delivered!");
//   }, 5000);
// }

// MakingPizza(() => {
//   Addspice(() => {
//     slicepizza(() => {
//       deliveringpizza();
//     });
//   });
// });

// function func1(cb: any) {
//   console.log("1st");

//   cb();
// }

// function func2(cb: any) {
//   console.log("2nd");

//   cb();
// }

// function func3(cb: any) {
//   console.log("3rd");
//   cb();
// }

// function func4(cb: any) {
//   console.log("4th");
//   cb();
// }

// function func5(cb: any) {
//   console.log("5th");
//   cb();
// }

// function func6(cb: any) {
//   console.log("6th");
//   cb();
// }

// function func7(cb: any) {
//   console.log("7th");
//   cb();
// }

// function func8(cb: any) {
//   console.log("8th");
//   cb();
// }

// function func9(cb: any) {
//   console.log("9th");
//   cb();
// }

// function func10() {
//   console.log("10th");
// }

// func1(() => {
//   func2(() => {
//     func3(() => {
//       func4(() => {
//         func5(() => {
//           func6(() => {
//             func7(() => {
//               func8(() => {
//                 func9(() => {
//                   func10();
//                 });
//               });
//             });
//           });
//         });
//       });
//     });
//   });
// });

// let promise = new Promise((resolve, reject) => {
//   resolve("Sucess");
// });

// promise.then((p1) => {
//   console.log(p1);
// });

// let promise2 = new Promise((resolve, reject) => {
//   reject("Not sucess");
// });

// promise2.catch((error) => {
//   console.log(error);
// });

// //Example
// let gotMoney = "no";

// let promise3 = new Promise((resolve, reject) => {
//   if (gotMoney == "yes") {
//     resolve("I got my money");
//   } else {
//     reject("I didnt got money");
//   }
// });

// promise3
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((message) => {
//     console.log(message);
//   });

//Making Pizza usin promises

function makePizza() {
  console.log("Dough is getting ready to be made...");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Dough is ready! Now bakings....");
    }, 2000);
  });
}

function bakePizza() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Pizza has been baked, adding spices...");
    }, 3000);
  });
}

function addSpice() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Spices has not been added , Terminating service..");
    }, 5000);
  });
}
function deliverPizza() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Pizza has been delivered!");
    }, 6000);
  });
}

// makePizza()
//   .then((make) => {
//     console.log(make);
//     return bakePizza();
//   })
//   .then((make) => {
//     console.log(make);
//     return addSpice();
//   })
//   .then((make) => {
//     console.log(make);
//     return deliverPizza();
//   })
//   .then((make) => {
//     console.log(make);
//   })
//   .finally(() => {
//     setTimeout(() => {
//       console.log("This is the process of making the pizza!");
//     },2500);
//   });

/// This is the best way
//way 01
// async function caller() {
//   await makePizza();
//   await bakePizza();
//   await addSpice();
//   await deliverPizza();
// }
// now this function will invoke the function but it will run the promise part because we knew we were returnniing the promise there fore it is not good way now
// lets use way2

// async function caller2() {
//   let r1 = await makePizza();
//   console.log(r1);
//   let r2 = await bakePizza();
//   console.log(r2);
//   let r3 = await addSpice();
//   console.log(r3);
//   let r4 = await deliverPizza();
//   console.log(r4);
// }

// caller2();

async function caller() {
  try {
    const r1 = await makePizza();
    console.log(r1);
    const r2 = await bakePizza();
    console.log(r2);
    const r3 = await addSpice();
    console.log(r3);
    const r4 = await deliverPizza();
    console.log(r4);
  } catch (error) {
    console.log(error);
  } finally {
      console.log("This was the testing of pizza services!");
      
  }
}

caller();


async function processData() {
    return Promise.resolve("Data processed");
}

processData().then(console.log);
