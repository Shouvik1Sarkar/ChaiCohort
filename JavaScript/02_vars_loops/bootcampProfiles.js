// two ways to declare variable let and const
// let is mutable const is immutable

// String - Sequence of characters
let name = "Rohit";

//Number - 25, 25.9

let age = 25;

//Boolean - true or false

let isPaid = true;

//null ->

let favClass = null;

let hometown1;
let hometown2 = undefined; //Baad mein dekh lenge

//array
let skills = ["HTML", "CSS", "JAVA SCRIPT", `Git`];

//object
let studentProfile = {
  name: "Haseeb",
  age: 22,
  isPaid: true,
  skills: ["HTML", "CSS", "JAVA SCRIPT", `Git`],
  favClass: null,
};

console.log(typeof skills);
console.log(typeof studentProfile);

function namef(params) {
  return true;
}

console.log(typeof namef);

let salary = undefined;
console.log(typeof salary);
