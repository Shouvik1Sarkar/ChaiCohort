// Problem: create an array containing different types of teas

const teas = [
  "Grean tea",
  "Black tea",
  "Oolong tea",
  "White tea",
  "Herbal tea",
];

// console.log(teas);

// Problem: Add "Chamomile tea" to the existing list of teas

teas.push("Chamomile tea");
// console.log(teas);

// Problem: Remove "Oolong tea" from the list

const index = teas.indexOf("Oolong tea");
if (index > -1) {
  teas.splice(index, 1);
}

console.log(teas);

// Problem: Filter the list to only include teas that are caffeinated

const newTea = teas.filter((tea) => tea != "Herbal tea");
console.log(newTea);

// Problem: Sort the list of teas in alphabetical order

console.log(teas.sort());

const test = ["🐔", "🥚"];
console.log(test.sort());

// Problem: Use a for loop to print each type of tea in array

for (let i = 0; i < teas.length; i++) {
  console.log(teas[i]);
}
// Problem: Use a for loop to count how many teas are caffeinated.(not herbal)
let count = 0;
for (let i = 0; i < teas.length; i++) {
  if (teas[i] != "Herbal tea") {
    count += 1;
  }
}
console.log(count);

// Problem: Use a for loop to create new array with all teas in uppercase

let upper_teas = [];
for (let i = 0; i < teas.length; i++) {
  upper_teas.push(teas[i].toUpperCase());
  //   upper_teas += teas[i].toUpperCase();  //treats as string
}

console.log(upper_teas);

// Problem: Use a for loop to find the tea with most characters

// console.log(teas);

let count_1 = 0;
let ans = "";
for (let i = 0; i < teas.length; i++) {
  if (teas[i].length > count_1) {
    ans = teas[i];
    count_1 = teas[i].length;
  }
}

console.log(ans);
console.log(ans.length);

// Problem: Use a for loop to reverse the order of the array

const reversedArray = [];

for (let i = teas.length - 1; i >= 0; i--) {
  reversedArray.push(teas[i]);
}
console.log(reversedArray);
