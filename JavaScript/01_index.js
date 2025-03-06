const obj1 = {
  fname: "Piyush",
  lname: "Garg",
  getFullname: function () {
    if (this.lname) {
      return `${this.fname} ${this.lname}`;
    }
    return `${this.fname}`;
  },
};
const obj2 = {
  fname: "Anirudh",
  lname: "Jwala",
  //   getFullname: function () {
  //     return `${this.fname} ${this.lname}`;
  //   },
};

obj1.__proto__ = null;
obj2.__proto__ = obj1;

console.log(obj1.getFullname());
console.log(obj2.getFullname());
// console.log(obj1.toString());  // Since __proto__ = null, __proto__ te kichhu paoa jabe na.
// console.log(obj2.toString());  // since __proto__ = obj1 and obj1.  __proto__ = null kichhu paoa jabe na.
