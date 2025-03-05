// Problem: Create an object representing a type of tea with properties for name, price, and caffeine level

const teas = {
  name: "Lemon tea",
  type: "Green",
  caffine: "low",
  l: {
    a: "a",
    b: "b",
  },
};

// Problem: Access and print the name and rype properties of the tea object.

console.log(teas.name);
console.log(teas["type"]);

// Problem: Add a new property origin
teas.origin = "China";

console.log(teas); // although it was const we can still add properties to it

// Problem: change the caffine pbject to medium
teas.caffine = "medium";

// Problem: remove the type property

delete teas.type;
console.log(teas);

// Problem: check if there's a origin property in the teas object

console.log(teas.hasOwnProperty("origin")); // true
console.log("origin" in teas); // true

// Problem: Use for...in property to print all the properties of the teas object
for (const i in teas) {
  console.log(`${i} : ${teas[i]}`);
}

// Problem: Create a nested object

const myTeas = {
  greentea: {
    name: "Green tea",
  },
  blacktea: {
    name: "black tea",
  },
};

// Problem: copy of teas object

// const new_tea = teas; // this will change the original object - it's not a copy just passing the reference
const new_tea = { ...teas }; //  shallow copy   .only copies first level .... although it's a shallow copy, won't change the object here bcz no nested copies
new_tea.name = "oolong tea";
console.log(teas);

let x = Object.assign({}, teas); // shallow copy - works on the first level
console.log(x);
x.l.a = "Shouvik";

console.log(x.l.a);
console.log(teas.l.a);
