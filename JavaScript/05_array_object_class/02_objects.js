import { log } from "node:console";

let person = {
  x: 10,
  firstName: "Piyush",
  lastName: "Garg",
  hobbies: ["Coding", "Gyn"],

  isMarried: false,
  hasGF: false,
  hadGF: false,
  hadCrush: Infinity,

  getFullName: function () {
    return "Piyush Garg";
  },
  address: {
    hno: 1,
    street: 1,
    countryCode: "IN",
    state: "PB",
  },
};

console.log(person.address.state);

const remote = {
  color: "black",
  brand: "xyz",
  dimentions: { heighr: 1, width: 1 },
  turnOff: function () {},
  volumeUp: function () {},
};

let fName = "Hitesh";
let fName2 = fName;

console.log(fName);
console.log(fName2);

fName2 = "Piyush";

console.log(fName);
console.log(fName2);

let p1 = {
  fName: "Hitesh",
  lName: "Ch",
  address: {
    h: 1,
    l: 1,
  },
};

// let p2 = p1;
// let p2 = {
//     fName: p1.fName,
//     lName: p1.lName,
//     addres: p1.address // it's copy by reference soo it'll change
// };

let p1String = JSON.stringify(p1);
console.log(p1String);

// let p2 = {
//   ...p1, // it's copy by reference soo it'll change,   shallow copy
// //   address:{
// //     ...p1.address
// //   }
// };

let p2 = JSON.parse(p1String);

console.log(p2);

p2.address.h = "hacked";
console.log(p1);
console.log(p2);

// console.log(p1.fName);
// console.log(p2.fName);

// p2.fName = "Piyush"

// console.log(p1.fName);
// console.log(p2.fName);
