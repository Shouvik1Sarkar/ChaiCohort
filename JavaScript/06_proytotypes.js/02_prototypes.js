const arr = [1, 2, 3, 4];
arr.fill(0); //gotta know how it works

const str = "Piyush";
console.log(str.length);

const obj = { x: 1 };
console.log(obj.x);

// dot operator object er property access korte help kore

// Question: dot operator is working on array,string and object
console.log(arr.__proto__.push(0));
console.log(arr);
// console.log(Array.prototype.);

let arr2 = new Array(1, 2, 3, 4);
