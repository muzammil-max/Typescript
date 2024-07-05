//Synchrnous function
//It is a function which runs sequently and simuletnously
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
//Runs in parallel and wait for the another task to be  completed
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

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("order pizza")
//     }, 5000);

//   });
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

/*
1) it can sucessful
2) it can be failed (not sucessful)
3) it can be in pending
*/
let mypromise = new Promise<any>((resolve, reject) => {
  // <> this is the place where the type of the paramter for resolve and  set in case weuse any
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
      reject("Wrong  or password please try again later");
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
checkstudent("muzammil", 123)
  .then((message) => {
    console.log(`${message}`);
    console.log("Fetching results...");
    return fetchmarks(true);
  })
  .then((recieve) => {
    console.log(recieve);
  })
  .catch((message2) => {
    console.log(message2);
  });
//async function

// replaces .catch and .then
let getstudentdetails = async () => {
  let checkdata = await checkstudent("muzammil", 123); //await tells typescript to wait until a task is completed this is also an asynchronous type
  console.log(checkdata);
  let get = await fetchmarks(true);
  console.log(get);
};
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
