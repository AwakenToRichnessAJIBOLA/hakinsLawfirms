let book = "Harry Potter";
if (book.toLowerCase().trim() === "harry potter") {
  console.log(`the price of ${book} is #5,000 `);
} else if (book.toLowerCase().trim() === "game of thrones") {
  console.log(`the price of ${book} is #8,000 `);
} else if (book.toLowerCase().trim() === "The Alchemist") {
  console.log(`the price of ${book}is #3,500 `);
} else if (book.toLowerCase().trim() === "To Kill a Mockingbird") {
  console.log(`the price of ${book} is #6,000 `);
} else {
  console.log("book not available");
}

let weather = "cloudy";
if (weather.toUpperCase().trim() === "SUNNY") {
  console.log("Wear sunglasses and go outside");
} else if (weather.toUpperCase().trim() === "RAINY") {
  console.log("Take an umbrella");
} else if (weather.toUpperCase().trim() === "CLOUDY") {
  console.log("Enjoy the cool breeze");
} else if (weather.toUpperCase().trim() === "SNOWY") {
  console.log("Wear a jacket");
} else {
  console.log("Invalid weather condition");
}

let score = 100;
if (score >= 90) {
  console.log("A");
} else if (score >= 80 && score <= 89) {
  console.log("B");
} else if (score >= 70 && score <= 79) {
  console.log("C");
} else if (score >= 60 && score <= 69) {
  console.log("D");
} else {
  console.log("F");
}

let age = 10;
if (age < 13) {
  console.log("Child");
} else if (age >= 13 && age <= 19) {
  console.log("Teenager");
} else if (age >= 20 && age <= 64) {
  console.log("Adult");
} else if (age >= 65) {
  console.log("Senior");
} else {
  console.log("Invalid Age");
}

let nums = -12;
let check =
  nums > 0 ? "Positive Number" : nums < 0 ? "Negetive Number" : "Zero";

console.log(check);

let ages = 70;

let confirm =
  ages < 13 ? "Child" : ages >= 13 && ages <= 19 ? "Teenager" : "Adult";
console.log(confirm);

// Question:
// Write a JavaScript program that takes two numbers as input and uses the ternary operator to determine the largest number.

// The program should log:

// "Number 1 is larger" if the first number is larger.
// "Number 2 is larger" if the second number is larger.
// "Both numbers are equal" if the two numbers are the same.

// 2. Learn about 2 Array Method and how they are used

let nums1 = 5;
let num2 = 5;

let chek =
  nums1 > num2
    ? "Number 1 is larger"
    : num2 > nums1
    ? "Number 2 is larger"
    : "Both numbers are equal";

console.log(chek);

// Push(); Adds one or more elements to the end of an array and returns the new length of the array.

let Fruits = ["apple", "banana"];
Fruits.push("PawPaw");
console.log(Fruits);

// let fruit = ["Banana", "Orange", "Apple", "Mango"];
// fruit.join(" * ");
// console.log(join);

let myBoys = ["Russell", "Boya"];
let myGirls = ["Emily", "Eula"];
let myKids = myGirls.concat(myBoys);
console.log(myKids);

let fruitss = ["Banana", "Orange", "Apple", "Mango"];
fruitss.splice("Lemon", "Kiwi");
console.log(fruitss);

let myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
let newArr = myArr.flat();

// The delete operator is used to delete the given value which can be an object, array, or anything.

let Bio = {
  firstName: "Ajibola",
  lastName: "Emmanuel",
  salary: 40000,
}; 

console.log(delete Bio.salary);
console.log(Bio);

// JavaScript Array flat() Method
// The flat() method is used to flatten the array i.e. it merges all the given array and reduces all the nesting present in it.
// Creating multilevel array

const arr = [
  ["1", "2"],
  ["3", "4", "5", ["6"], "7"],
];

// Flat the multilevel array
const flatArr = arr.flat( );
console.log(flatArr);
