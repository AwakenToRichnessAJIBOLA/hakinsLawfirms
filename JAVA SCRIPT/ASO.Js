// console.log("Hello World");

// Declerators - They are part of code that define or initialize a name (Variable or Functions) with specific attributes.

// var - It allows multiple decleratoins but is no longer in the coding world.

// let - It allows multiple declerations as well and it is very much used.

// const - Allow a single decleration and it is still very much used

// var myName = "Bobaoye";

// console.log(myName);

// DammieGee = "James";

// console.log(DammieGee);

// myName = "De-facer";

// console.log(myName);

// const Student = "Bubble Gum";

// console.log(Student);

// const Student1 = "WiseWeb";

// console.log(Student1);

// ---------------------------------------------------------------------------------
// Ways to write in different Language

//Pascal Casing - WelcomeToADayInTheLifeOfATwelveYearOld(G.R.W.M) - Each Word letter begins with a capital letter

//camelCasing - wiseIsDeeplyInLoveWithEgg(O.O.T.D)- The first word begins with a small letter and then the rest of the word begins each letter with capital

//snake_casing - Bubble_Gum_Needs_To_Stop_Eating_Sugar - The Spacing between every word must be an underscore instead of an empty space

// ------------------------------------------------------------------------------------

// Variables
//Data Types - There are two types of data types Primitive Data Type and Non-Primitive(Complex) Data Type.

// Primitive Data Type
// Strings
// Numbers
// Booleans
// Null
// Undefined

//Complex Data Type
//Array
//Object

const randomText = "Sweet is Divine";
console.log(randomText);
console.log(typeof randomText);

const digit = 234;
console.log(digit);
console.log(typeof digit);

const value = true;
console.log(value);
console.log(typeof value);

// Type of Strings
// 1. toLowerCase

const Sky = "Welcome to Jumaji";
console.log(Sky);

console.log(Sky.toLowerCase());

// const change = Sky.toLowerCase();
// console.log(change);

//2. toUpperCase
const K1Ultimate = "no road ahead";
console.log(K1Ultimate);

console.log(K1Ultimate.toUpperCase());

const mafia = [
  "Baby Lord",
  "Crusher",
  "Dosh",
  "DammieGee",
  "MayorOfFullStack",
  "Bobaoye",
  "Wise",
  "Noah",
  "Bubble Gum",
  "Defacer",
  "Aj",
];

function pickRandomName() {
  if (mafia.length === 0) {
    console.log("All names have been picked");
    return null;
  }

  const randomIndex = Math.floor(Math.random() * mafia.length);

  const randomName = mafia[randomIndex];

  mafia.splice(randomIndex, 1);

  console.log("Randomly picked name:", randomName);
}

for (let i = 0; i < 11; i++) {
  pickRandomName();
}

// Class-Work

// Instructions:
// Create examples for each of the following tasks. Work on them individually, and feel free to experiment.
// Submit your solutions after break (2:30). Thank you!

// 1. Create examples of checking the type of a string and a number using the typeof operator.

// 2. Provide examples of three different string methods with proper usage and explanations.

// 3. Combine two string methods in one example. For instance, use length with another string method to create something unique.

// 4. Write an example that demonstrates both string concatenation and template literals.

// Note: Ensure your code is clean and properly commented

// Template Literals -  They are created using the backticks (`) instead of quotations (') and also make use of the dollar sign ($) and curly braces ({})

// Example of Template Literals
const place = "OTA";
const year = 2035;

const message = `By the year ${digit} it is believed by many people that ${place} is going to be a mega city`;

console.log(message);

// // Write an example that demonstrates both string concatenation and template literals.
// //first method
// const example =
//   Bobaoye said in ${year} he would be a father of two +
//   " " +
//   and he would have left ${place} for Germany;
// console.log(example);

// // second method
// const example2 = Wise Web would be on forbes list by the year ${year};
// const example3 = He would have left Europe and created a mega company in ${place};

// console.log(example2.concat(" ", example3));

// ==================== Numbers ============================
// Math Operators
// Addition (+)
// Subtraction (-)
// Multiplication (*)
// Divison (/)
// Modulus (%)
// Exponential (**)
// Incremental (++)
// Decremental (--)

// const num1 = "3";
// const num2 = "4";

// const Answer = num1 + num2;
// console.log(Answer);
// // Note: You cant add two string method together if you the result is going to be combination of the two string and not an addition which is concatenation

// const gee = 4;
// const masun = "6";

// const geeMasun = gee + masun;
// console.log(geeMasun);
// console.log(typeof geeMasun);
// //Note: Whenever you add a Number Data Type with a String Data Type the resulting effect is a string which means the number will join with the string to produce a value of both numbers.

// // Addition
// const num3 = 7;
// const num4 = 4;

// const result = num3 + num4;
// console.log(result);

// const num7 = 234;
// const num9 = 456;
// const res = num7 + num9;
// console.log(res);

// //Subtraction
// const years = 1985;
// const currentYear = 2024;

// const age = years - currentYear;
// console.log(age);

// const ages = currentYear - years;
// console.log(ages);

const newNumber = -23;
const oldNumber = -83;

const currentNumber = newNumber - oldNumber;
console.log(currentNumber);
//This follows the law of BODMAS - times - is plus

//Multiplication
const product = 245;
const price = 92;

const combine = product * price;
console.log(combine);

const newPrice = -234;
const oldPrice = -5;

const comingPrice = newPrice * oldPrice;
console.log(comingPrice);

//Division
const valu3 = 346;
const change = 5;

const quotient = valu3 / change;
console.log(quotient);

// modulus - remainder of a divison

const coding = 5;
const data = 2;

const remainder = coding % data;
console.log(remainder);

//Exponential - This means the raise to the power of another number -------
const Anu = 2;
const Aj = 10;

const lifeStyle = Anu ** Aj;
console.log(lifeStyle);

// Incremental (++) and Decremental (--)
let Scorpio = 24;
let gemini = 12;

Scorpio++;
Scorpio++;
Scorpio++;

console.log(Scorpio);

gemini--;
gemini--;
gemini--;

console.log(gemini);

let ban = 20 + 10 + 20 + 30 + "30" + 30 + "30";

console.log(ban);
console.log(typeof ban);

let a = 6;
let b = 9;

let different = b > a;
console.log(different);
console.log(typeof different);

let news = b < a;
console.log(news);

let sporty = 25367;
let bet9ja = "25367";

let lessons = sporty === bet9ja;
console.log(lessons);
console.log(typeof lessons);

let caution = sporty == bet9ja;
console.log(caution);
console.log(typeof caution);

let car = "BMW";

if (car.toLowerCase().trim() === "toyota") {
  console.log("the price is #7,000,000");
} else if (car.toLowerCase().trim() === "jeep") {
  console.log("the price is #17,000,000");
} else if (car.toLowerCase().trim() === "lexus") {
  console.log("the price is #8,500,000");
} else if (car.toLowerCase().trim() === "Benz") {
  console.log("the price is #37,000,000");
} else {
  console.log("car not available");
}

let bill = 14500;

if (bill <= 3000) {
  let discount = bill * 0.07;
}
console.log(`your discount is ${bill} of your bill ${discount}`);
else if (bill >=);


//Exercise 4: A resturant charges based of the total of the meal you order and you tip them based of the meal. if your meal is less than 99 dollars your tip must be 10% of the money, if your meal is 100 dollars but less than 499 dollars your tip must be 20% and if your meal is and greater than 500 dollars your tip is 25%. Write a condition that displays the tip amount.

//0-99 - 10% which is 10/100= (0.1)
//100 - 499 - 20% which is 20/100= (0.2)
//500 and above - 25% which is 25/100= (0.25)

let bill = 350;

if (bill <= 99) {
  let tip = bill * 0.1;
  console.log(`Your tip is ${tip} dollars for spending ${bill} dollars`);
} else if (bill >= 100 || bill <= 499) {
  let tip = bill * 0.2;
  console.log(`Your tip is ${tip} dollars for spending ${bill} dollars`);
} else {
  let tip = bill * 0.25;
  console.log(`Your tip is ${tip} dollars for spending ${bill} dollars`);
}

// On goods less than or equal to 3000 a discount of 7%, On goods greater than or equal to 3001 and less than pr equal to 15000 a discount of 14% and on goods equal to and above 15001 discount of 20%

// // The message should be: "Thank you for shopping with us today your total purchase of --- amount you received a discount of --- amount "

// 0-3000 7% which is 7/100 = (0.07)
//3001 - 15000 14% which is 14/100 = (0.14)
//15001 and above 20% which is 20/100 = (0.2)

let goods = 15000;

if (goods <= 3000) {
  let discount = goods * 0.07;
  console.log(
    `Thank you for shopping with us today your total purchase of ${goods} naira you received a discount of ${discount} amount`
  );
} else if (goods >= 3001 || goods <= 15000) {
  let discount = goods * 0.14;
  console.log(
    `Thank you for shopping with us today your total purchase of ${goods} naira you received a discount of ${discount} amount`
  );
} else {
  let discount = goods * 0.2;
  console.log(
    `Thank you for shopping with us today your total purchase of ${goods} naira you received a discount of ${discount} amount`
  );
}


