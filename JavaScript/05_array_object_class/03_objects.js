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
