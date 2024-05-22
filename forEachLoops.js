let array = [1, 2, 3, 4, 5];
// 1. Use a forEach loop to print each element to the console.
array.forEach(e => console.log(e));

console.log("\n\n");
h = document.querySelector("h1");

array.forEach(function(element, index) {
  console.log(`element: ${element}, index: ${index}`);
  // h.innerHTML = `element: ${element}, index: ${index}`;
});

console.log("\n\n");

// 2. Create an array of colors . 
//  - Use a forEach loop to add "Color:" before each element and print them to the console. 
//  - The output should look like "Color: red", "Color: green", "Color: blue".
colors = ['red', 'green', 'blue'];
colors.forEach(e => console.log(`Color: ${e}`));


let numbers = [1, 2, 3, 4, 5];
let sum = 0;
// 3. Use a forEach loop to calculate and print the sum of all the elements in the array.
//  - There's a couple ways to solve this one - think through the logic and ask for support if you need it :)
numbers.forEach(e => {
  sum += e;
});
console.log(sum);

console.log("\n\n");

let fruits = ["apple", "banana", "cherry"]
// 4. Use a forEach loop to print each element to the console.
fruits.forEach( e => console.log(e));

console.log("\n\n");

let names = ["Simba", "Scar", "Nala", "Mufasa", "Zazu"];
// 5. Use a forEach loop to print each name along with its index number.
//  - Remember: the index can be put as a second parameter.
//  - Example: the first message should read something like "Simba (Index: 0)"
names.forEach((e,i) => console.log(`${e} (index: ${i})`));