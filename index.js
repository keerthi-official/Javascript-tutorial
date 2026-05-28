//console.log("Hello World!");

//console.log(myCityName);
//var myCityName = "New York City";
///myCityName = "Pondy";

// EX: 01. template literals and prompt / alert
//const myName = prompt("What is your name?");
//const myBirthDate = prompt("What is your birth date?");
//const myBirthMonth = prompt("What is your birth month?");
//const myBirthYear = prompt("What is your birth year?");
//const myCityName = prompt("What city do you live in?");
//console.log(
//`${myName} is learning javascript from the scratch
//${myBirthDate} of ${myBirthMonth},${myBirthYear} is my birthday.
//${myCityName} is my city.`,
//);

// day 2 if else statement

/*
const age = prompt("Enter your age: ");

if (age > 17) {
  console.log("You can cast vote.");
  console.log(
    "You are going to play a important Role by Choosing a Right Candidate",
  );
} else if (age > 15) {
  console.log("Get yourself Politicized and be aware of things around you!");
  console.log("You're going to be eligible to vote in a few years");
} else if (age > 8) {
  console.log("Live your life and build your own Ethics");
} else {
  console.log("You cannot vote...");
  console.log(`Wait for ${18 - age} years to cast your vote`);
} */

// AND OR Logics

//console.log(true && false && true && true);
//console.log(false || true || false || false);
//console.log(!false);

// FIZZ BUZZ Game

// 1. A number is divisible by 3 and 5 it should say FizzBuzz
// 2. A number is divisible by 3 it should say Fizz
// 3. A number is divisible by 5 it should say Buzz
// 4. Else it should say the number itself.

//const num = 30;
//if (num % 3 === 0 && num % 5 === 0) {
//    console.log("FizzBuzz");
//} else if (num % 3 === 0) {
//    console.log("Fizz");
//} else if (num % 5 === 0) {
//    console.log("Buzz");
//} else {
//    console.log(num);
//}

//EX: 02 Get persons weight (kgs) and height (m), person's Body Mass Index (BMI's)

//Note:
//Finding BMI common formula
//BMI weight [kgs] / (height height) [m]
//Underweight: BMI below 18.5
//Healthy Weight: BMI 18.5 to 24.9
//Overweight: BMI 25.0 to 29.9
//Obesity: BMI 30.0 or greater.
//Give me program ang get the input form user

/*const weight = prompt("Enter your weight:");
const height = prompt("Enter your height:");

// BMI Formula
const bmi = weight / (height * height);
console.log("Your BMI is: " + bmi);
if (bmi < 18.5) {
  console.log("Your Category is Underweight");
} else if (bmi >= 18.5 && bmi <= 24.9) {
  console.log("Your Category is Healthy Weight");
} else if (bmi >= 25 && bmi <= 29.9) {
//  console.log("Your Category is Overweight");
//} else {
//  console.log("Your Category is Obesity");
//} */

// Regular Function
//function greetUser(nameOfPerson) {
//  return `Hello, ${nameOfPerson}`;
//}

// function greetUser(nameOfPerson) {
//   console.log(arguments);
//   return `Hello, ${nameOfPerson}`;
// }

// const greetUser = (nameOfPerson) => `Hello, ${nameOfPerson}`;

// Function Call
// greetUser("keerthi");
// greetUser("kiki");

//console.log(greetUser("Hilary"));
// console.log(greetUser("Hilary"));
// console.log("Hello Everyone");

// function myAgeCalc(birth) {
//   return 2026 - birth;
// }

// Function Expression or Expression Function
// let myAgeCalc = function (birth) {
//   return 2026 - birth;
// };

// Arrow Function
// const myAgeCalc = (birth) => 2026 - birth;
// console.log(myAgeCalc(2000));

// IIFE Immeditely Invoked Functions
// const age = ((birth) => 2026 - birth)(2000);
// console.log(age);

// console.dir(greetUser("keerthi"));

// Rest and Spread
// const [x, y, arr] = [123, 345, ["keerthi", "Pondicherry"]];
// const result = [y, ...arr];
// console.log(result);

// const exampleArrFn = (...args) => {
//   console.log(args);
// };

// exampleArrFn(100, 300, 400);
// exampleArrFn(100);

// EX: 04 We have to build a calculator for Finding the winner in a Volleyball Tournament
//  by giving their series of matches score as a input to a function named `winnerOfTournament`.
// There 3 different teams have played a series of matches in the tournament with one vs another.
//  Scores are given below
// TEAM 1 : 24 40 10
// TEAM 2 : 30 10 44 12
// TEAM 3 : 50 40 20 09

/*function average(team1, team2, team3) {
  let avg1 = (24 + 40 + 10) / 3;
  let avg2 = (30 + 10 + 44) / 3;
  let avg3 = (50 + 40 + 20) / 3;

  console.log(avg1);
  console.log(avg2);
  console.log(avg3);

  if (avg1 > avg2 && avg1 > avg3) {
    console.log("Team 1 is Winner");
  } else if (avg2 > avg1 && avg2 > avg3) {
    console.log("Team 2 is Winner");
  } else {
    console.log("Team 3 is Winner");
  }
}

average(); */

//LOOPING STATEMENTS

//WHILE LOOP
//let
