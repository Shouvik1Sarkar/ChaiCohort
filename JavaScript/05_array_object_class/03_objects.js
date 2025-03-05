let a = {
  fName: "Shouvik",
  lName: "Sarkar",
};
b = {
  fName: a.fName,
  lName: a.lName,
};

a.fName = "hrithik";
console.log(a);
console.log(b);

function increment() {
  let count = 0;

  count++;
  return count;
}
let x = increment();

console.log(x);
console.log(x);
console.log(x);
console.log(x);
