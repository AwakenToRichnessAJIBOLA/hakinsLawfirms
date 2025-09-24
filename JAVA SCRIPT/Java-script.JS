// // console.log("Hello World");

// // Declerators - They are part of code that define or initialize a name (Variable or Functions) with specific attributes.

// // var - It allows multiple decleratoins but is no longer in the coding world.

// // let - It allows multiple declerations as well and it is very much used.

// // const - Allow a single decleration and it is still very much used

// // var myName = "Bobaoye";

// // console.log(myName);

// // DammieGee = "James";

// // console.log(DammieGee);

// // myName = "De-facer";

// // console.log(myName);

// // const Student = "Bubble Gum";

// // console.log(Student);

// // const Student1 = "WiseWeb";

// // console.log(Student1);

// // ---------------------------------------------------------------------------------
// // Ways to write in different Language

// //Pascal Casing - WelcomeToADayInTheLifeOfATwelveYearOld(G.R.W.M) - Each Word letter begins with a capital letter

// //camelCasing - wiseIsDeeplyInLoveWithEgg(O.O.T.D)- The first word begins with a small letter and then the rest of the word begins each letter with capital

// //snake_casing - Bubble_Gum_Needs_To_Stop_Eating_Sugar - The Spacing between every word must be an underscore instead of an empty space

// // ------------------------------------------------------------------------------------

// // Variables
// //Data Types - There are two types of data types Primitive Data Type and Non-Primitive(Complex) Data Type.

// // Primitive Data Type
// // Strings
// // Numbers
// // Booleans
// // Null
// // Undefined

// //Complex Data Type
// //Array
// //Object

// // const randomText = "Sweet is Divine";
// // console.log(randomText);
// // console.log(typeof randomText);

// // const digit = 234;
// // console.log(digit);
// // console.log(typeof digit);

// // const value = true;
// // console.log(value);
// // console.log(typeof value);

// // Type of Strings
// // 1. toLowerCase

// // const Sky = "Welcome to Jumaji";
// // console.log(Sky);

// // console.log(Sky.toLowerCase());

// // const change = Sky.toLowerCase();
// // console.log(change);

// //2. toUpperCase
// // const K1Ultimate = "no road ahead";
// // console.log(K1Ultimate);

// // console.log(K1Ultimate.toUpperCase());

// // const mafia = [
// //   "Baby Lord",
// //   "Crusher",
// //   "Dosh",
// //   "DammieGee",
// //   "MayorOfFullStack",
// //   "Bobaoye",
// //   "Wise",
// //   "Noah",
// //   "Bubble Gum",
// //   "Defacer",
// //   "Aj",
// // ];

// // function pickRandomName() {
// //   if (mafia.length === 0) {
// //     console.log("All names have been picked");
// //     return null;
// //   }

// //   const randomIndex = Math.floor(Math.random() * mafia.length);

// //   const randomName = mafia[randomIndex];

// //   mafia.splice(randomIndex, 1);

// //   console.log("Randomly picked name:", randomName);
// // }

// // for (let i = 0; i < 11; i++) {
// //   pickRandomName();
// // }

// // Class-Work

// // Instructions:
// // Create examples for each of the following tasks. Work on them individually, and feel free to experiment.
// // Submit your solutions after break (2:30). Thank you!

// // 1. Create examples of checking the type of a string and a number using the `typeof` operator.

// // 2. Provide examples of three different string methods with proper usage and explanations.

// // 3. Combine two string methods in one example. For instance, use `length` with another string method to create something unique.

// // 4. Write an example that demonstrates both string concatenation and template literals.

// // Note: Ensure your code is clean and properly commented

// // Template Literals -  They are created using the backticks (`) instead of quotations (') and also make use of the dollar sign ($) and curly braces ({})

// // Example of Template Literals
// // const place = "OTA";
// // const year = 2035;

// // const message = `By the year ${digit} it is believed by many people that ${place} is going to be a mega city`;

// // console.log(message);

// // // Write an example that demonstrates both string concatenation and template literals.
// // //first method
// // const example =
// //   `Bobaoye said in ${year} he would be a father of two` +
// //   " " +
// //   `and he would have left ${place} for Germany`;
// // console.log(example);

// // // second method
// // const example2 = `Wise Web would be on forbes list by the year ${year}`;
// // const example3 = `He would have left Europe and created a mega company in ${place}`;

// // console.log(example2.concat(" ", example3));

// // ==================== Numbers ============================
// // Math Operators
// // Addition (+)
// // Subtraction (-)
// // Multiplication (*)
// // Divison (/)
// // Modulus (%)
// // Exponential (**)
// // Incremental (++)
// // Decremental (--)

// // const num1 = "3";
// // const num2 = "4";

// // const Answer = num1 + num2;
// // console.log(Answer);
// // // Note: You cant add two string method together if you the result is going to be combination of the two string and not an addition which is concatenation

// // const gee = 4;
// // const masun = "6";

// // const geeMasun = gee + masun;
// // console.log(geeMasun);
// // console.log(typeof geeMasun);
// // //Note: Whenever you add a Number Data Type with a String Data Type the resulting effect is a string which means the number will join with the string to produce a value of both numbers.

// // // Addition
// // const num3 = 7;
// // const num4 = 4;

// // const result = num3 + num4;
// // console.log(result);

// // const num7 = 234;
// // const num9 = 456;
// // const res = num7 + num9;
// // console.log(res);

// // //Subtraction
// // const years = 1985;
// // const currentYear = 2024;

// // const age = years - currentYear;
// // console.log(age);

// // const ages = currentYear - years;
// // console.log(ages);

// // const newNumber = -23;
// // const oldNumber = -83;

// // const currentNumber = newNumber - oldNumber;
// // console.log(currentNumber);
// // //This follows the law of BODMAS - times - is plus

// // //Multiplication
// // const product = 245;
// // const price = 92;

// // const combine = product * price;
// // console.log(combine);

// // const newPrice = -234;
// // const oldPrice = -5;

// // const comingPrice = newPrice * oldPrice;
// // console.log(comingPrice);

// // //Division
// // const valu3 = 346;
// // const change = 5;

// // const quotient = valu3 / change;
// // console.log(quotient);

// // // modulus - remainder of a divison

// // const coding = 5;
// // const data = 2;

// // const remainder = coding % data;
// // console.log(remainder);

// // //Exponential - This means the raise to the power of another number -------
// // const Anu = 2;
// // const Aj = 10;

// // const lifeStyle = Anu ** Aj;
// // console.log(lifeStyle);

// // // Incremental (++) and Decremental (--)
// // let Scorpio = 24;
// // let gemini = 12;

// // Scorpio++;
// // Scorpio++;
// // Scorpio++;

// // console.log(Scorpio);

// // gemini--;
// // gemini--;
// // gemini--;

// // console.log(gemini);

// // let ban = 20 + 10 + 20 + 30 + "30" + 30 + "30";

// // console.log(ban);
// // console.log(typeof ban);

// // ------------- Comparison Operators and Boolean -------------------
// // Boolean have two answer within it True and False

// // Greater than >
// // Less than <
// // Greater than or equal to >=
// // Less than or equal to <=
// // Strictly equals to ===
// // loosely equals to ==

// // let a = 6;
// // let b = 9;

// // let difference = b > a;
// // console.log(difference);
// // console.log(typeof difference);

// // let news = b < a;
// // console.log(news);

// // let sporty = 25367;
// // let bet9ja = "25367";

// // let lessons = sporty === bet9ja;
// // console.log(lessons);
// // //This considers both the content and data type

// // let caution = sporty == bet9ja;
// // console.log(caution);
// // //This considers the content alone and not the data type

// // // ----------------- Logical Operators -------------------
// // //  Logical And (&&)
// // //  Logical OR (||)
// // // Logical Not (!)

// // // Logical Not (!) This converts and changes the behaviour of datatype(boolean) to the opposite

// // let valued = false;
// // console.log(valued);
// // console.log(!valued);

// // let change = true;
// // console.log(change);
// // console.log(!change);

// // // Logical And (&&) The two condition must be the same before a response is given

// // let output = 1;
// // let input = 1;

// // let datum = output && input;
// // console.log(datum);

// // true and true = true
// // 1 x 1 = 1

// // true and false = false
// // 1 x 0 = 0

// // false and true = false
// // 0 x 1 = 0

// // false and false = false
// // 0 x 0 = 0

// // Logical OR (||)

// // true or true = true
// //  1 + 1 = 1

// // true or false = true
// // 1 + 0 = 1

// // false or true = true
// // 0 + 1 = 1

// // false or false = false
// // 0 + 0 = 0

// // ============ Conditional Statement ====================
// // Conditional Statement is used to control the flow of our code depending on whether a specified condiition evaluates to true or false

// //  There are three types of conditional statements: If and Else, Ternary Operator and switch case

// //  If and Else Statement
// //  The if statement is used to execute a block of code, if a specified condition is true. While the Else statement can execute a block of code if the codition in the if statement is false.

// //Exercise: a.)Write a condition that checks a users age if they are below the age of 18 tell them i will call your parents and if they are 18 and above ask them what kind of drink they want.

// // b. If yetunde is 17 tell her to wait one more year before she can have her first drink

// // let Yetunde = 19;

// // // a.
// // if (Yetunde >= 18) {
// //   console.log("What kind of drink do you want");
// // } else {
// //   console.log("I will call your parents");
// // }

// // // b.
// // if (Yetunde >= 18) {
// //   console.log("What kind of drink do you want");
// // } else if (Yetunde === 17) {
// //   console.log("Wait one more year for your first drink");
// // } else {
// //   console.log("I will call your parents");
// // }

// // Exercise 2: Write a condition that checks the skin color of people if they are black they should go to room 1, if they are white they should go to room 3 but if they are neither black or white they should stay in room 2

// // let skin = "white";

// // if (skin === "black") {
// //   console.log("go to room 1");
// // } else if (skin === "white") {
// //   console.log("go to room 3");
// // } else {
// //   console.log("stay in room 2");
// // }

// // if (skin.toLowerCase().trim() === "black") {
// //   console.log("go to room 1");
// // } else if (skin.toLowerCase().trim() === "white") {
// //   console.log("go to room 3");
// // } else {
// //   console.log("stay in room 2");
// // }

// //Exercise 3: A customer walks into a carlot to buy a car . the cars availble are: Toyota, Jeep, Lexus, and Benz. The price: Toyota - #7,000,000, jeep - #17,000,000, lexus - #8,500,000, Benz - #37,000,000. if the car the user input is available log to the console the price of the car , if it is mot available to the console.log car not available.

// // let car = "lexus";

// // if (car.toLowerCase().trim() === "toyota") {
// //   console.log("The Price is #7,000,000");
// // } else if (car.toLowerCase().trim() === "jeep") {
// //   console.log("The Price is #17,000,000");
// // } else if (car.toLowerCase().trim() === "lexus") {
// //   console.log("The Price is #8,500,000");
// // } else if (car.toLowerCase().trim() === "benz") {
// //   console.log("The Price is #37,000,000");
// // } else {
// //   console.log("car not available");
// // }

// //Exercise 4: A resturant charges based of the total of the meal you order and you tip them based of the meal. if your meal is less than 99 dollars your tip must be 10% of the money, if your meal is 100 dollars but less than 499 dollars your tip must be 20% and if your meal is and greater than 500 dollars your tip is 25%. Write a condition that displays the tip amount.

// //0-99 - 10% which is 10/100= (0.1)
// //100 - 499 - 20% which is 20/100= (0.2)
// //500 and above - 25% which is 25/100= (0.25)

// // let bill = 350;

// // if (bill <= 99) {
// //   let tip = bill * 0.1;
// //   console.log(`Your tip is ${tip} dollars for spending ${bill} dollars`);
// // } else if (bill >= 100 || bill <= 499) {
// //   let tip = bill * 0.2;
// //   console.log(`Your tip is ${tip} dollars for spending ${bill} dollars`);
// // } else {
// //   let tip = bill * 0.25;
// //   console.log(`Your tip is ${tip} dollars for spending ${bill} dollars`);
// // }

// // On goods less than or equal to 3000 a discount of 7%, On goods greater than or equal to 3001 and less than pr equal to 15000 a discount of 14% and on goods equal to and above 15001 discount of 20%

// // // The message should be: "Thank you for shopping with us today your total purchase of --- amount you received a discount of --- amount "

// // 0-3000 7% which is 7/100 = (0.07)
// //3001 - 15000 14% which is 14/100 = (0.14)
// //15001 and above 20% which is 20/100 = (0.2)

// // let goods = 15000;

// // if (goods <= 3000) {
// //   let discount = goods * 0.07;
// //   console.log(
// //     `Thank you for shopping with us today your total purchase of ${goods} naira you received a discount of ${discount} amount`
// //   );
// // } else if (goods >= 3001 || goods <= 15000) {
// //   let discount = goods * 0.14;
// //   console.log(
// //     `Thank you for shopping with us today your total purchase of ${goods} naira you received a discount of ${discount} amount`
// //   );
// // } else {
// //   let discount = goods * 0.2;
// //   console.log(
// //     `Thank you for shopping with us today your total purchase of ${goods} naira you received a discount of ${discount} amount`
// //   );
// // }

// // Question 4: Student Grades
// // A school uses the following grading system:

// // 90 and above: A
// // 80-89: B
// // 70-79: C
// // 60-69: D
// // Below 60: F
// // Write a JavaScript function that takes a student's score as input and logs their grade.

// // Question 5:
// // Age Classification
// // Write a JavaScript program that takes a person's age as input and logs:

// // "Child" if the age is less than 13.
// // "Teenager" if the age is between 13 and 19 (inclusive).
// // "Adult" if the age is between 20 and 64 (inclusive).
// // "Senior" if the age is 65 or older.

// // ======================= Assignment ========================
// // Question 1:
// // A bookstore sells the following books and prices:

// // "Harry Potter" - #5,000
// // "Game of Thrones" - #8,000
// // "The Alchemist" - #3,500
// // "To Kill a Mockingbird" - #6,000
// // Write a JavaScript program that takes a book title as input. If the book is available, log its price to the console. If not, log "Book not available".

// let books = "Harry Potter";

// if (books.toLowerCase().trim() == "harry potter") {
//   console.log(`The book ${books} cost a total of #5,000`);
// } else if (books.toLowerCase().trim() == "game of thrones") {
//   console.log(`The book ${books} cost a total of #8,000`);
// } else if (books.toLowerCase().trim() == "the alchemist") {
//   console.log(`The book ${books} cost a total of #3,500`);
// } else if (books.toLowerCase().trim() == "to kill a mockingbird") {
//   console.log(`The book ${books} cost a total of #6,000`);
// } else {
//   console.log("Book not Available");
// }

// // Question 2:
// // Weather Recommendation
// // Write a JavaScript program that takes a weather condition as input ("sunny", "rainy", "cloudy", or "snowy") and logs an appropriate activity:

// // "Wear sunglasses and go outside" for sunny.
// // "Take an umbrella" for rainy.
// // "Enjoy the cool breeze" for cloudy.
// // "Wear a jacket" for snowy.
// // If the input doesn't match any of these, log "Invalid weather condition".

// let weather = "snowy";

// if (weather.toLowerCase().trim() === "sunny") {
//   console.log(`On ${weather} days wear sunglasses and go outside`);
// } else if (weather.toLowerCase().trim() === "rainy") {
//   console.log(`On ${weather} days Take an umbrella`);
// } else if (weather.toLowerCase().trim() === "cloudy") {
//   console.log(`On ${weather} days Enjoy the cool breeze`);
// } else if (weather.toLowerCase().trim() === "snowy") {
//   console.log(`On ${weather} days Wear a jacket`);
// } else {
//   console.log("Invalid weather condition");
// }

// // Question 3:
// // Even or Odd Checker
// // Write a JavaScript program that:

// // Takes a number as input.
// // Logs "Even" if the number is even.
// // Logs "Odd" if the number is odd.
// // Logs "Invalid Input" if the input is not a number.

// let number = 82;

// // if (number % 2 === 0) {
// //   console.log("Even Number");
// // } else {
// //   console.log("Odd Number");
// // }

// if (isNaN(number)) {
//   console.log("Invalid Input");
// } else if (number % 2 === 0) {
//   console.log("Even Number");
// } else {
//   console.log("Odd Number");
// }

// // ============= Ternary Operator ==============
// // There are two symbol needed in Ternary Operation ? and :

// let password = "000";

// let check =
//   password === "000"
//     ? "Welcome to Your Home Screen"
//     : "Wrong Password or Incorrect Password";

// console.log(check);

// let fakeAge = 70;

// // let smoking = fakeAge >= 20 ? "How many Pack do you want" : "You wan run mad";

// // first condition and then response,followed by either a new condition or final response

// // console.log(smoking);

// let smoking1 =
//   fakeAge === 19
//     ? "Calm down senior man"
//     : fakeAge >= 21
//     ? "francisco"
//     : fakeAge === 20
//     ? "One Pack at a time"
//     : "Commot for here";

// console.log(smoking1);

// // Question:
// // Write a JavaScript program that takes a number as input and checks whether it is positive, negative, or zero using the ternary operator.
// // Log the appropriate message to the console:

// // "Positive Number" if the number is greater than 0. 1 - infinity
// // "Negative Number" if the number is less than 0. infinity - -1
// // "Zero" if the number equals 0. 0

// let num = 0;

// let confirm =
//   num > 0 ? "Positive Number" : num < 0 ? "Negative Number" : "Zero";

// console.log(confirm);

// // Question:
// // Write a JavaScript program that takes a person's age as input and uses the ternary operator to determine their age category.

// // The program should log:

// // "Child" if the age is less than 13.
// // "Teenager" if the age is between 13 and 19 (inclusive).
// // "Adult" if the age is 20 or older.

// let age = 20;

// let category =
//   age < 13 ? "Child" : age >= 13 && age <= 19 ? "Teenager" : "Adult";

// console.log(category);

// // Question:
// // Write a JavaScript program that takes two numbers as input and uses the ternary operator to determine the largest number.

// // The program should log:

// // "Number 1 is larger" if the first number is larger.
// // "Number 2 is larger" if the second number is larger.
// // "Both numbers are equal" if the two numbers are the same.

// let num1 = 12; // Change this value to test different inputs
// let num2 = 12; // Change this value to test different inputs

// let result =
//   num1 > num2
//     ? "Number 1 is larger"
//     : num1 < num2
//     ? "Number 2 is larger"
//     : "Both numbers are equal";

// console.log(result);

// // 2. Learn about 2 Array Method and how they are used

// // ========================= Complex Data Types ========================

// // ==================== ARRAY ===============
// // Arrays are data structure (Flexible) that can contain element of different types which includes String, Number, boolens, null, undefined, objext and even an array. Each element in an array is identified by an index, starting from 0 as the first element. Array are identified by their square bracket [].

// // Types of Array
// //1. PUSH - Defacer
// let arr = [1, 2, 3];

// // arr.push(4, 5);

// // arr.push("mango", "Tomatoe");

// // arr.push(true, false);

// // arr.push(null, undefined);

// // arr.push(["Glock", "rifle", "sniper", "AK47"]);

// console.log(arr);

// //2. Concat- Bubble Gum

// let girls = ["ayo", "gloria", "nini"];
// let boys = ["femi", "segun", "ola"];

// let myPeople = girls.concat(boys);

// console.log(myPeople);

// // 2nd Method- converts the array to string and does not automatically add a space inbetween them
// let people = girls + boys;

// console.log(people);

// //3. Noah - Shift

// let color = ["Red", "Yellow", "Green"];

// color.shift();

// console.log(color);

// // Unshift

// color.unshift("Black");

// console.log(color);

// //4. DammieGee - Join

// console.log(color.join(" + "));

// console.log(arr.join("😂"));

// console.log(color.at(2));

// //5. Wise - Reverse
// let colors = ["blue", "red", "yellow", "green"];

// colors.reverse();

// console.log(colors);

// // sort - In Alphabetical or Numerical Order
// let yettiFemi = [
//   "Bayo",
//   "Ogunmepon",
//   "Saliu",
//   "Adigun",
//   "Jelili",
//   "Wise",
//   "Joker",
// ];

// yettiFemi.sort();

// console.log(yettiFemi);

// //6. AJ - Delete

// delete yettiFemi[6];
// console.log(yettiFemi);

// // flat
// let petite = ["1", "2", "3", ["4", "5", "6"]];

// console.log(petite.flat());

// // 7. Dosh - POP

// let fruit = ["banana", "orange", "apple", "mango"];

// fruit.pop();

// console.log(fruit);

// // 8. Indexof
// let nunu = [
//   "david",
//   23,
//   true,
//   null,
//   false,
//   "3000",
//   [23, "Diceyy", true, undefined],
// ];

// console.log(nunu.indexOf(23));

// console.log(nunu);

// // 9. Slice
// let bankai = [
//   "david",
//   23,
//   true,
//   null,
//   false,
//   "3000",
//   [23, "Diceyy", true, undefined],
// ];

// let bleach = bankai.slice(2, 6);

// console.log(bleach);

// // =================== Array Destructuring ========================
// let fruity = ["banana", "orange", "apple", "mango"];

// console.log(fruity);

// let [a, b, c, d] = fruity;

// console.log(d);
// console.log(b);

// let yetti = [
//   "Bayo",
//   "Ogunmepon",
//   "Saliu",
//   "Adigun",
//   "Jelili",
//   "Wise",
//   "Joker",
//   "Thomas",
// ];

// let [red, blue, yellow, green, indigo, white, orange, violet] = yetti;

// console.log(yellow);
// console.log(blue);

// let colours = ["blue", "red", "yellow", "green"];

// // ................ Spread Operator ......................
// // To use spread operator you have to call out a triple full stop ...
// let parts = ["Ear", "Nose", "Eyes", "Hands", "Heads"];

// let horrorMovie = [
//   "IT",
//   "Conjuring",
//   "Journey of no return",
//   "final destination",
//   "Agbara Nla",
// ];

// console.log(horrorMovie);

// // ================== Loop ==========================
// // In JavaScript, loops are used to execute a block of code repeatedly, based on a condition. There are several types of loops in JavaScript, each serving different purposes:
// // for loop
// // do while loop
// // while loop
// // for in loop
// // for of loop

// // 1. for loop
// // for (intialization; condition; increment/decrement){
// //   block of code
// // }

// // for (let i = 1; i < 10; i++) {
// //   console.log(i);
// // }

// for (let p = 5; p >= 2; p--) {
//   console.log(p);
// }

// let fruits = [
//   "Orange",
//   "Apple",
//   "Strawberry",
//   "Cherry",
//   "Kiwi",
//   "Banana",
//   "Floating Berries",
// ];

// for (let f = 0; f < fruits.length; f++) {
//   if (fruits[f].toLocaleLowerCase().includes("e")) {
//     console.log(`This fruit ${fruits[f]} contains the letter e`);
//   } else {
//     console.log(`This fruit ${fruits[f]} does not contains the letter e`);
//   }
// }

// let Water = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange", "Cyan"];

// for (let a = 0; a < Water.length; a++) {
//   if (Water[a].includes("r")) {
//     console.log(`This colors ${Water[a]} contains the letter r`);
//   } else {
//     console.log(`This colors ${Water[a]} does mot contains the letter r`);
//   }
// }

// let Numbersss = [12, 7, 45, 23, 9, 18, 33];

// for (let b = 0; b < Numbersss.length; b++) {
//   if (Numbersss[b] % 3 === 0) {
//     console.log(`The Number ${Numbersss[b]} can be divided by 3`);
//   } else {
//     console.log(`The Number ${Numbersss[b]} can not be divided by 3`);
//   }
// }

// let temperatures = [28, 31, 25, 19, 34, 29, 22];
// let index = 0;

// do {
//   if (temperatures[index] >= 30) {
//     console.log(`Temperator of ${temperatures[index]} °C :Warm Day`);
//   } else {
//     console.log(`Temperator of ${temperatures[index]} °C :Cool Day`);
//   }
//   index++;
// } while (index < temperatures.length);

// // Write a JavaScript program using a *do...while* loop that iterates through the following array of student scores:
// // javascript
// // let scores = [85, 92, 78, 63, 95, 70, 88];
// //

// // For each score in the array:
// // - Log "Passed" if the score is 70 or above.
// // - Log "Failed" if the score is below 70.

// // The loop should stop after processing all the elements in the array.

// let scoress = [85, 92, 78, 63, 95, 70, 88];
// let indexx = 0;

// do {
//   if (scoress[indexx] >= 70) {
//     console.log("Passed");
//   } else {
//     console.log("Failed");
//   }
//   indexx++;
// } while (indexx < scoress.length);

// // While Loop - The while loop repeats a block of code as long as a specified condition is true. It is often used when the number of iterations is not known beforehand.
// let count = 1;

// while (count <= 10) {
//   console.log(`Count is: ${count}`);
//   count++;
// }

// //Small letter
// let alphabet = 97;
// // while (alphabet <= 122) {
// //   console.log(String.fromCharCode(alphabet));
// //   alphabet++;
// // }

// // let capLetter = 65;
// // while (capLetter <= 90) {
// //   console.log(String.fromCharCode(capLetter));
// //   capLetter++;
// // }

// // while (alphabet <= 122) {
// //   let letter = String.fromCharCode(alphabet);
// //   if ("aeiou".includes(letter)) {
// //     console.log(`This letter ${letter} is a vowel`);
// //   } else {
// //     console.log(`This letter ${letter} is a consonant`);
// //   }
// //   alphabet++;

// // }"a","e","i","o","u"

// // while (alphabet <= 122) {
// //   let letter = String.fromCharCode(alphabet);
// //   if (letter.includes("a")) {
// //     console.log(`This letter ${letter} is a vowel`);
// //   } else if (letter.includes("e")) {
// //     console.log(`This letter ${letter} is a vowel`);
// //   } else {
// //     console.log(`This letter ${letter} is a consonant`);
// //   }
// //   alphabet++;
// // }

// // ================== Functions ===================
// //  Functions are a set of instructions set aside to be executed at a later time when called/invoked

// // Types
// //Function Decleration or OG Function
// // Function Expression
// // Arrow Function

// //Function Decleration or OG Function

// function welcome() {
//   console.log("Welcome to Javascript");
// }

// welcome();

// // Write a function named multiply that takes two numbers as arguments and returns their product.

// function multiply(a, b) {
//   return a * b;
// }

// console.log(multiply(8, 9));

// // Write a function that takes in place and time and logs to the console the time and place as you deem fit

// function locations(place, time) {
//   console.log(`Welcome to ${place}`);
//   console.log(`The time is ${time}`);
// }

// locations("Nigeria", "12:55");
// locations("Ota", "2:30");

// // parameter-: are place holders for incoming values that is provided at the point of calling or invoking the function e.g function locations(place, time) {locations("Ota", "2:30");}

// // create a function that takes in a parameter called num and check if the num is an even or odd number

// function normalz(num) {
//   if (num % 2 === 0) {
//     console.log(`${num} is an even number`);
//   } else {
//     console.log(`${num} is a odd number`);
//   }
// }

// normalz(75);

// // create a function that takes in a parameter called students which would be an Array.
// // - Youre to loop through the array and log to the console only the names of those with A

// let students = [
//   "dosh",
//   "dammie",
//   "mayor",
//   "Aj",
//   "Noah",
//   "Bubble Gum",
//   "Baby Lord",
//   "Bobaoye",
// ];

// function namesWithA(students) {
//   for (s = 0; s < students.length; s++) {
//     if (students[s].toLowerCase().includes("a")) {
//       console.log(`This name: ${students[s]} contains the letter a`);
//     } else {
//       console.log(`This name: ${students[s]} does not contain the letter a`);
//     }
//   }
// }

// namesWithA(students);

// // // ==================== Function Expression ===================
// // let welcomes = function () {
// //   console.log("Welcome Back Everyone");
// // };

// // welcomes();

// // // --------------------------

// // let divide = function (e, f) {
// //   return e / f;
// // };

// // console.log(divide(8, 2));

// // // create a function that takes a word (string) and check if the length is an even number, if it is log to the console the two middle letters, if it is odd log to the console just the middle letter

// // const checkMiddleLetter = function (word) {
// //   const dosh = word.length;
// //   const indexed = dosh / 2;

// //   if (dosh % 2 === 0) {
// //     const middle1 = word[indexed - 1];
// //     const middle2 = word[indexed];
// //     console.log(`The Middle letters are: ${middle1}${middle2}`);
// //   } else {
// //     const middle = word[(dosh - 1) / 2];
// //     console.log(`The Middle letter is: ${middle}`);
// //   }
// // };

// // checkMiddleLetter("hello");
// // checkMiddleLetter("Javascript");
// // checkMiddleLetter("Kayewise");
// // checkMiddleLetter("Bobaoye");

// // // create a function that takes in a parameter called employees which would be an Array.
// // // - Youre to loop through the array and log to the console only the names of those with R

// // let employees = [
// //   "Bobaoye",
// //   "Crusher",
// //   "Wise",
// //   "Dele",
// //   "Asabary",
// //   "Tpain",
// //   "Buhari",
// //   "Dosh",
// //   "Lungu",
// //   "LowKey Demon",
// //   "Ferrari",
// // ];

// // let checker = function (employees) {
// //   for (p = 0; p < employees.length; p++) {
// //     if (employees[p].toLowerCase().includes("r")) {
// //       console.log(`This name: ${employees[p]} contains the letter r`);
// //     } else {
// //       console.log(`This name: ${employees[p]} does not contain the letter r`);
// //     }
// //   }
// // };

// // checker(employees);

// // // ================ Arrow Function ==========================

// // let greet = () => {
// //   console.log("Hello Africa");
// // };

// // greet();

// // // ----------------
// // let expo = (s, k) => {
// //   return s ** k;
// // };

// // console.log(expo(4, 2));

// // -------------------------
// ////////////////////////////////// Welcome Back To Class /////////////////////////////////////////
// // 1. Check If a Word Is the Same Backward

// // Write a function to check if a word reads the same backward as forward. Use loops and a ternary operator.

// // Example Input: "madam"
// // Example Output: true

// let reverseChecker = function (word) {
//   let reverse = "";
//   for (let i = word.length - 1; i >= 0; i--) {
//     reverse += word[i];
//   }
//   return word === reverse ? true : false;
// };

// console.log(reverseChecker("mad"));

// // 2. Replace a Word in a Sentence

// // Write a function that replaces a target word in a sentence with "*" and counts how many times it was replaced. Use loops and basic array methods.

// // Example Input: ("I like coding because I like to learn", "like")
// // Example Output: ["I *** coding because I *** to learn", 2]

// function replaceWord(sentence, target) {
//   const words = sentence.split(" ");
//   let count = 0;
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].replace(/[^a-zA-Z]/g, " ") === target) {
//       words[i] = words[i].replace(target, "*****");
//       count++;
//     }
//   }
//   return [words.join(" "), count];
// }

// console.log(
//   replaceWord(
//     "I like coding because i like to learn and i like to feel like an hacker",
//     "like"
//   )
// );

// // 3. Find the Longest Word in a Sentence

// // Write a function to find the longest word in a sentence. Use loops and string methods.

// // Example Input: "Coding is fun"
// // Example Output: "Coding"

// // let longestWord = (input) => {
// //   const word = input.split(" ");
// //   let longest = "";
// //   for (const words of word) {
// //     if (words.length > longest.length) {
// //       longest = words;
// //     }
// //   }
// //   return longest;
// // };

// // console.log(longestWord("The Longest month in the year is January"));

// let longestWord = (input) => {
//   const words = input.split(" "); // words instead of word
//   let longest = "";
//   let longestWords = [];

//   for (const word of words) {
//     // word, not words
//     if (word.length > longest.length) {
//       longest = word;
//       longestWords = [word]; // Reset the longestWords array
//     } else if (word.length === longest.length) {
//       longestWords.push(word); // Add word to the list
//     }
//   }

//   // Return the longest word(s)
//   return longestWords.length > 1 ? longestWords : longest;
// };

// console.log(longestWord("The Longest month in the year is January"));
// console.log(
//   longestWord(
//     "The Longest month in the year is January and it is quite a month of targets"
//   )
// );

// // 4. Add Up Positive Numbers

// // Write a function that adds up all the positive numbers in an array. Use a loop and a ternary operator.

// // Example Input: [3, -1, 2, -4, 5]
// // Example Output: 10

// function sumPositiveNumber(arr) {
//   let sum = 0;
//   for (const num of arr) {
//     sum += num > 0 ? num : 0;
//   }
//   return sum;
// }

// console.log(sumPositiveNumber([3, 9, -1, 43, -2, 0, -90]));

// // 5. Count Letters in a Word

// // Write a function to count how many times each letter appears in a word. Ignore spaces and make all letters lowercase.

// // Example Input: "Balloon"
// // Example Output: { b: 1, a: 1, l: 3, o: 2, n: 1 }

// function countLetters(word) {
//   const count = {};
//   const cleanedWord = word.toLowerCase().replace(/\s+/g, " ");
//   for (const letter of cleanedWord) {
//     count[letter] = (count[letter] || 0) + 1;
//   }
//   return count;
// }

// console.log(countLetters("Balloon Prettier than Balls"));

// //Scope

// const Nonye = [0, 1, 2, 3, 4]; // A Global

// function loopingT(a) {
//   let i = 0;
//   for (; i < a.length; i++) {
//     console.log(a[i]);
//   }
// }

// loopingT(Nonye);

// ///// Higher Order Function ////////////////
// // Higher order function takes in another function as an argument

// //map
// //filter
// //foreach
// //reduce

// //ForEach - This Method elimates looping through an array. it allows you to iterate over the element of an array.

// // const fruits =["apple", "banana", "Cherry"]

// const fruits = [0, 1, 2, 3, 4];

// fruits.forEach((food) => {
//   console.log(food);
// });

// //Multiplication of an array
// const numbers = [1, 2, 3];

// numbers.forEach((num, index, array) => {
//   array[index] = num * 2;
//   console.log(numbers);
// });

// numbers.forEach((num, index, array) => {
//   array[index] = num * 2;
// });

// console.log(numbers);

// //Filter
// // with filter, we can return a brand new filttered array

// const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const even = elements.filter((num) => {
//   return num % 2 === 0;
// });

// console.log(even);

// const odd = elements.filter((num) => {
//   return num % 2 !== 0;
// });

// console.log(odd);

// const celebrity = [
//   "Asake",
//   "Burna-Boy",
//   "Speed Darlington",
//   "Portable",
//   "Wizkid",
//   "Johnny Drill",
// ];

// const psycho = celebrity.filter((names) => {
//   return names.includes("e");
// });
// console.log(psycho);

// const psychoA = celebrity.filter((names) => {
//   return names.startsWith("D");
// });

// console.log(psychoA);

//Map
// With map, we can return a brand new modified array

// let students = ["D1", "Adura", "Opeyemi", "Yinka", "Kcee", "Peace", "Joy"];

// let naira = students.map((singular) => {
//   if (singular.toLowerCase() === "peace") {
//     return `Hello ${singular}`;
//   } else {
//     return singular;
//   }
// });

// console.log(naira);

// const finds = students.map((each) => {
//   if (each.toLowerCase() == "yinka") {
//     return "I have found Yinka";
//   }
// });

// console.log(finds);

// const caps = ["alice", "bob", "charlie"];
// const captalized = caps.map((letter) => {
//   return letter.toUpperCase();
// });

// console.log(captalized);

// //HARD MODE OF HIGHER ORDER FUNCTION

// //Filter and Map
// //1. Multiply all even numbers by 2 and filter them out
// const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const double = Numbers.filter((num) => {
//   return num % 2 === 0;
// }).map((num) => {
//   return num * 2;
// });

// console.log(double);

// //2. Look for cities with A in them and then convert to uppercase

// const cities = [
//   "Berlin",
//   "Argentia",
//   "Paris",
//   "Rio",
//   "Lagos",
//   "Amsterdan",
//   "Aba",
// ];

// const startA = cities
//   .filter((city) => {
//     return city.startsWith("A");
//   })
//   .map((city) => {
//     return city.toUpperCase();
//   });

// console.log(startA);

// const cartoon = [
//   "teletubbies",
//   "scoobydoo",
//   "powerpuff girls",
//   "justice league",
//   "X-men",
//   "silver hawk",
//   "biker mouse mars",
// ];

// const longNames = cartoon
//   .filter((cart) => {
//     return cart.length > 10;
//   })
//   .map((cart) => {
//     return cart.toUpperCase();
//   });

// console.log(longNames);

// Filter and ForEach

// 1. Filter out numbers greater than 5 and print them out

// const greater = [1, 2, 3, 8, 6, 18, 10];
// const greaterNum = greater
//   .filter((num) => num >= 5)
//   .forEach((num) => console.log(num));

// console.log(greaterNum);

// Filter names starting with J and print them out

// const names = ["John", "Jane", "Alex", "Jack", "Emily"];

// const jNames = names.filter(name => names.startsWith('J')).forEach(name => console.log(name));

// const jNames = names.filter((name) => name.startsWith("J"));
// jNames.forEach((name) => console.log(name));

// Assignment - Try out forEach and Map

//////// OBJECT ///////////////////
// It is used to score properties which come in key and values pairs
// the value can be of any data type in javascript

//Sychronous and Asychronous Code
//Sychronous Code- This are codes that run line by line

// function greet() {
//   console.log("Hello World");
// }

// greet();

// function getNames() {
//   console.log("Whats your name");
//   setTimeout(() => {
//     console.log("Dave");
//   }, 5000);
// }

// getNames();

// function spy() {
//   console.log("Intiating Encrypted Conversation Between Agent A and Agent x");
//   setTimeout(() => {
//     console.log("Agent X Online for Agent A");
//   }, 2000);
//   setTimeout(() => {
//     console.log("Hello Agent X do you have the package");
//   }, 5000);
//   setTimeout(() => {
//     console.log("Yes Agent A package Secured");
//   }, 8000);
//   setTimeout(() => {
//     console.log("Do you have my money Agent X");
//   }, 11000);
//   setTimeout(() => {
//     console.log("Yes Meet me at Bimas Resturant by 800 hours");
//   }, 14000);
//   setTimeout(() => {
//     console.log("Alright see you soon");
//   }, 18000);
//   setTimeout(() => {
//     console.log("Agent X ended conversation with Agent A");
//   }, 19500);
// }

// spy()

//Log out the student and their score and also add a bonus of 5 to every student who score below

// const numbers = [1, 2, 3, 4];
// numbers.forEach((number) => {
//   console.log(number * 4);
// });

// const numberss = [1, 2, 3, 4];
// const doubledNumbers = numbers.map((number) => {
//   return number * 2;
// });
// console.log(doubledNumbers);

// const studentScore = [
//   ["Alice", 45],
//   ["Bob", 92],
//   ["Charlie", 38],
//   ["Diana", 95],
//   ["Eve", 50],
// ];

// const scoreBoard = studentScore
//   .map(([names, score]) => {
//     if (score < 50) {
//       return `The Student whose name is ${names} has a fixed score of ${
//         score + 5
//       } because of an additional 5`;
//     } else {
//       return `This student whose name is ${names} has a fixed score of ${score}`;
//     }
//   })
//   .forEach((entry) => {
//     console.log(entry);
//   });

// // Pick one person name and score

// const singleScore = studentScore
//   .map(([names, score]) => {
//     if (names === "Alice" && score === 45) {
//       return `The student whose name is ${names} has a score of ${score}`;
//     }
//   })
//   .forEach((board) => {
//     console.log(board);
//   });

// const singleScore = studentScore.find(([names, score]) => {
//   return names === "Alice" && score === 45;
// });

// if (singleScore) {
//   console.log(
//     `The student whose names is ${singleScore[0]} has a score of ${singleScore[1]}`
//   );
// }

// ////// OBJECT//////////////////////
// // It is used to store properties which come in key and value pairs
// //the value can be of any data type in Javascript
// //Objects are identified with the curly braces {}

// const newTask = {
//   opueh: "Precious",
//   oskro: "Oskaroba",
//   price: 2000,
//   agreed: true,
//   details: ["Precious Oskaroba", 22, "@sexzyYettieM", "Benz", false],
//   otherDetails: {
//     location: "Fam-City",
//     hairColor: "Green",
//     favoriteFood: [
//       "Seafood",
//       "Beans",
//       "Pkitza",
//       "Izecream",
//       "Indomie Alata and Fry Egg",
//     ],
//   },
// };

// //There are two access properties of an object: Square Bracket Notation and Dot Notation.

// //Square Bracket Notation
// console.log(newTask["opueh"]);
// console.log(newTask["details"][2]);
// console.log(newTask["otherDetails"]["hairColor"]);
// console.log(newTask["otherDetails"]["favoriteFood"][4]);

// //Dot Notation
// console.log(newTask.oskro);
// console.log(newTask.agreed);
// console.log(newTask.details[1]);
// console.log(newTask.otherDetails.location);
// console.log(newTask.otherDetails.favoriteFood[2]);

// //Math object
// //1. Math.floor()- This return the largest integer less than or equal to a given number

// const numerals = [4.7, 5.9, 3.2];
// const roundOff = numerals.map((num) => Math.floor(num));
// console.log(roundOff);

// //2. Math.Ceil() - Returns the smallest integer greater than or equal to a given number

// const decimals = [2.3, 4.5, 9.8];

// const knownValue = decimals.map((num) => Math.ceil(num));

// // decimals.forEach((num) => {
// //   console.log(`The new values of ${num} are ${Math.ceil(num)}`);
// // });

// decimals.forEach((num) => {
//   console.log(Math.ceil(num));
// });
// console.log(knownValue);

// //3. Math.round()
// const wiseWeb = {
//   Wise: 1.5,
//   Dush: 0.5,
//   Mayor: 0.0001,
//   Nonye: 4.0,
//   Deefacer: 6,
//   Aj: 2.3,
// };

// //Object.entries - it is used to extract all values of the properties in an object and then return it as an array

// // const iqs = Object.values(wiseWeb).map(
// //   ([names, iq]) =>
// //     `The person bearing the name ${names} has an iq of ${Math.round(iq)} `
// // );

// // console.log(iq);
// const iq = Object.entries(wiseWeb).map(
//   ([names, iq]) =>
//     `The person bearing the name ${names} has an iq of ${Math.round(iq)} `
// );

// console.log(iq);

// //4. Math.random()

// const orientations = ["Alice", "Bob", "Charlie", "Diana"];

// const shuffle = orientations.sort(() => Math.random() - 0.5);

// shuffle.forEach((student) => {
//   console.log(student);
// });

// // 5. Math.min() - Returns the smallest number from a list of arguments.

// const scores = [45, 12, 89, 23, 2];

// console.log(`Lowest score: ${Math.min(...scores)}`);

// //6. Math.max() - Returns the largest number from a list of argument

// const heights = [150, 165, 172, 100];

// console.log(`Highest Score: ${Math.max(...heights)}`);

// //7. Math.sqrt() - Returns the square root of a number

// const wawa = [4, 16, 36, 64];

// wawa.forEach((num) => {
//   console.log(`Square root of ${num}: ${Math.sqrt(num)}`);
// });

// Math.Pi, Math.Pow, Math.abs

// Math.Pi
// The Math.PI property in JavaScript represents the ratio of the circumference of a circle to its diameter, approximately 3.14159

// let radius = 5;
// let circumference = 2 * Math.PI * radius;
// console.log(circumference);

//Math.Pow
//The Math.pow() method in JavaScript is used to calculate the power of a number. It returns the value of a base raised to a power.
//The Math.pow() method takes two arguments: the base and the exponent. It computes the base raised to the power of the exponent
1;
// .

// Syntax

// Math.pow(base, exponent)
// Parameters

// base: The base number.

// exponent: The exponent number.

// let result = Math.pow(7, 5);
// console.log(result);

//The Math.abs() method in JavaScript returns the absolute value of a number. This means it converts negative numbers to positive numbers while leaving positive numbers and zero unchanged

// let x = Math.abs(+127.25);
// console.log(x);

// let y = Math.abs(-3375);
// console.log(y);

// const data = [
//   { name: "D1", age: 44, gender: "male", isMarried: true },
//   { name: "Kingsley", age: 48, gender: "male", isMarried: true },
//   { name: "adura", age: 22, gender: "male", isMarried: false },
//   { name: "Ola", age: 30, gender: "male", isMarried: false },
//   { name: "peace", age: 22, gender: "female", isMarried: false },
//   { name: "Yinka", age: 32, gender: "male", isMarried: true },
//   { name: "Kcee", age: 33, gender: "male", isMarried: false },
//   { name: "Ibrahim", age: 32, gender: "male", isMarried: true },
//   { name: "Opeyemi", age: 26, gender: "male", isMarried: true },
//   { name: "Joy", age: 55, gender: "female", isMarried: false },
//   { name: "Abiodun", age: 29, gender: "male", isMarried: false },
// ];

// 1. Loop  through this array and log just the names of everyone to the console
// for (i = 0; i < data.length; i++) {
//   console.log(data[i].name);
// }

// 2. using a forEach, loop through the above array and log just the names

// data.forEach((names) => {
//   console.log(names.name);
// });

// 3. using a forEach, loop through the array and log only the people above the age of 26

// data.forEach((person) => {
//   if (person.age > 26) console.log(person.name);
// });

//3a
// data.forEach((person) => {
//   if (person.isMarried === true) {
//     console.log(person.name, person.gender);
//   }
// });

// data.forEach((person) => {
//   if (person.isMarried === true) {
//     console.log(`Name: ${person.name}, Gender:${person.gender}`);
//   }
// });

// 4. using the map method loop through the above array and add a new key of location to each object with a value of onipkan and log the brand new return array to the console

// const A = data.map((person) => {
//   return {...person, location: "onipkan" };
// });
// console.log(A);

// const A = data.map((person) => {
//   return { ...person, Status: "Active", carType: "LAMBO" };
// });
// console.log(A);

// const whip = data.map((typed) => {
//   if (typed.name.toLowerCase() === "d1") {
//     let newWhip = { ...typed, carType: "SUV" };
//     return newWhip;
//   } else if (typed.name.toLowerCase() === "kingsley") {
//     let newWhip = { ...typed, carType: "Bentley" };
//     return newWhip;
//   } else if (typed.name.toLowerCase() === "adura") {
//     let newWhip = { ...typed, carType: "Audi" };
//     return newWhip;
//   } else if (typed.name.toLowerCase() === "ola") {
//     let newWhip = { ...typed, carType: "volvo" };
//     return newWhip;
//   } else {
//     let newWhip = { ...typed, carType: "Range-Rover" };
//     return newWhip;
//   }
// });

// console.log(whip);

// const B = data.map((person) => {
//   return { ...person };
// });
// console.log(B);

// 5. using either for loop or a forEach, log to the console the names of just the female

// data.forEach((person) => {
//   if (person.gender === "female") {
//     console.log(person.name);
//   }
// });

// =========================== DOM (Document Object Model) ============================

// let playBoy = document.getElementById("java");

// console.log(playBoy);

// playBoy.textContent = "FireBoy";
// playBoy.style.color = "Green";
// playBoy.style.fontSize = "50px";

// let playGirl = document.getElementsByClassName("lists");

// console.log(playGirl);

// playGirl[0].textContent = "Cassava";
// playGirl[2].style.color = "tomato";

// let listItems = document.getElementsByTagName("h1");

// console.log(listItems);

// listItems[6].style.color = "peach";
// listItems[6].style.fontSize = "22px";
// listItems[6].textContent =
//   "All Bad quote: Steal from the rich give to the poor, collect from devil and run to God, collect everything wey belong to ceaser, pack all that glitter when you reach house pick the gold, bite more than you can chew, cut pass your size, wetin adult see when hin sit down picking go use drone see am for inside room, what money cant solve more money will solve is, to air is human to forgive na 50k, dog wey dey patient nah ulcer kill am. Collect all that belongs to ceaser and hola amigos";

// listItems[6].style.fontFamily = "Playwrite VN, serif";

// const boba = document.getElementsByTagName("button")[0];

// boba.style.borderRadius = "90px";

// let changeColor = document.querySelector("h1");

// changeColor.style.color = "yellow";

// let changeAll = document.querySelectorAll("h1");

// changeAll.forEach((element) => {
//   element.style.fontSize = "10px";
// });

// --------------------------------------

//Functional Aspect

// const changeNumber = document.querySelector(".counter");

// const dosh = document.querySelector(".Tap");

// let count = 0;

// //Event Listener

// dosh.addEventListener("click", () => {
//   count++;
//   changeNumber.textContent = count;
//   console.log("You clicked on me");
// });

// -------------------------
//Timer

// const timerDisplay = document.querySelector(".pest");
// const timerButton = document.querySelector(".timer");

// let counter = 0;
// let start = null;
// let command = false;

// timerButton.addEventListener("click", () => {
//   if (command) {
//     clearInterval(start);
//     command = false;
//   } else {
//     start = setInterval(() => {
//       counter++;
//       timerDisplay.textContent = counter;
//     }, 20);
//     command = true;
//   }
// });

const books = [
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    year: 1988,
    isAvailable: true,
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    genre: "Non-Fiction",
    year: 2011,
    isAvailable: false,
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    year: 1949,
    isAvailable: true,
  },
  {
    title: "Becoming",
    author: "Michelle Obama",
    genre: "Memoir",
    year: 2018,
    isAvailable: false,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    year: 1925,
    isAvailable: true,
  },
  {
    title: "Educated",
    author: "Tara Westover",
    genre: "Memoir",
    year: 2018,
    isAvailable: true,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    year: 1960,
    isAvailable: false,
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-Help",
    year: 2018,
    isAvailable: true,
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    year: 1951,
    isAvailable: true,
  },
  {
    title: "The Power of Habit",
    author: "Charles Duhigg",
    genre: "Self-Help",
    year: 2012,
    isAvailable: false,
  },
];

// Tasks:

// 1. Write a for loop to log the titles of all the books to the console.

// for (let i = 0; i < books.length; i++) {
//   console.log(books[i].title);
// }

// 2. Use the forEach method to log the author and genre of each book to the console.

// books.forEach(book => {
//   console.log(book.author,book.genre);
// });

// 3. Using a for loop, log the titles of books published after the year 2000.

// for (let i = 0; i < books.length; i++) {
//   if (books[i].year > 2000) {
//     console.log(books[i].title);
//   }
// }

// 4. Use the filter method to create a new array of only the books that are currently available. Log this new array to the console.

// const availableBooks = books.filter(book => book.isAvailable);
// console.log(availableBooks);

// 5. Using the map method, add a new key called "rating" with a default value of 4.5 to each book object. Log the updated array to the console.

const updatedBooks = books.map((book) => ({
  ...book,
  rating: 4.5,
}));
console.log(updatedBooks);

// const B = books.map((novela) => {
//   let newB = { ...novela, rating: 4.5 };
//   return newB;
// });

// console.log(B);

// 6. Write a function to check if all the books in the array belong to the "Fiction" genre. Use the every method to implement this.

function BB(booksArray) {
  return booksArray.every((book) => book.genre === "Fiction");
}
console.log(BB(books));

// 7. Using the reduce method, calculate the total number of years since all the books were published. Log the result to the console.

const currentYear = new Date().getFullYear();
const totalYears = books.reduce(
  (acc, book) => acc + (currentYear - book.year),
  0
);
console.log(totalYears);

// 8. Use the sort method to sort the books by their publication year in descending order. Log the sorted array to the console.

const sortBooks = books.slice().sort((a, b) => a.year - b.year);
console.log(sortBooks);

// 9. Create a function that accepts a genre as a parameter and uses the filter method to return all books of that genre. Call the function with different genres and log the results.

function getBooksByGenre(genre) {
  return books.filter((book) => book.genre === genre);
}

console.log(getBooksByGenre("Fiction"));
console.log(getBooksByGenre("Memoir"));
console.log(getBooksByGenre("Self-Help"));

// 10. Using a for loop or forEach, log the titles of all the books that are in the "Memoir" genre and were published in 2018.

books.forEach((book) => {
  if (book.genre === "Memoir" && book.year === 2018) {
    console.log(book.title);
  }
});

//for loop
for (i = 0; i < books.length; i++) {
  if (books[i].genre === "Memoir" && books[i].year === 2018) {
    console.log(books[i].title );
  }
}
