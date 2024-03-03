// Q1: Write a program that take two numbers & add them in a new variable and how the result in
// browser (Sum Of 3 And 5 is 8);

let num1 = 5;
let num2 = 3;
let sum = num1 + num2;
document.write(`Sum of 5 & 3 is <b>${sum}</b> <hr>`);

// Q2: Reapeat Task 1 For Subtraction Multiplication Division And Modulus.
let difference = num1 - num2;
document.write(`Difference of 5 & 3 is <b>${difference}</b> <br>`);
let product = num1 * num2;
document.write(`Product of 5 & 3 is <b>${product}</b> <br>`);
let division = num1 / num2;
document.write(`Division of 5 & 3 is <b>${division.toFixed(3)}</b> <br>`);
let modulus = num1 % num2;
document.write(`Modulus of 5 & 3 is <b>${modulus}</b> <hr>`);

// Q3: Do The Following using JS Mathematic Expressions;
// a) Declare a Variable ;
// b) Show the value of variable in your browser;
// c) Initialize The Variable with some number ;
// d) Show the value of variable in your browser like Initial Value 5;
// e) Increment The Variable ;
// f) Show the value of increment variable in your browser like value after increment is 6;
// g) add 7 to the variable ;
// h) Show the value of variable in your browser like value after addition is 13;
// i) decrement The Variable ;
// J) Show the value of variable in your browser like value after decrement is 12;
// k) Now modulus answer by 3;
// l) Show the reminder in your browser like Reminder is 0;

let number;
document.write(`The value of number is <b>${number}</b> <br>`);
number = 5;
document.write(`Initial Value of number is <b>${number}</b> <br>`);
number++;
document.write(`Value of number after increment is <b>${number}</b> <br>`);
number += 7;
document.write(`Value of number after addition is <b>${number}</b> <br>`);
number--;
document.write(`Value of number after decrement is <b>${number}</b> <br>`);
number %= 3;
document.write(`Reminder of number after modulus of it by 3 is <b>${number}</b> <hr>`);

// Q4: cost one 1 movie ticket is 600 find the cost of 5 tickets store in variable

let ticketPrice = 600;
let fiveTicketPrice = ticketPrice * 5;
document.write(`The cost of one movie ticket is <b>${ticketPrice}</b> and cost of 5 movie ticket is <b>${fiveTicketPrice}</b> <hr>`);

// Q5: write a script to display a table of any number in a browser

let userInput = +prompt("Enter a Number");
for (let i = 1; i <= 10; i++) {
    document.write(`${userInput} X ${i} = <b>${userInput * i}</b> <br>`);
}

// Q6: Make A Temperature Converter Based on the following step
// a)Store a Celsius temperature into a variable
// b)Convert it to Fahrenheit & output "NNOC is NNOF"
// c)Now store a Fahrenheit temperature into a variable
// d)Convert it to Celsius & output “NNF is NN.C"

let tempInCelsius = 25;
let tempInFahrenheit = (tempInCelsius * 9 / 5) + 32;
document.write(`<hr> <b>${tempInCelsius}</b>°C is <b>${tempInFahrenheit}</b>°F <br>`);
tempInFahrenheit = 70;
tempInCelsius = (tempInFahrenheit - 32) * 5 / 9;
document.write(`<b>${tempInFahrenheit}</b>°F is  <b>${tempInCelsius.toFixed(2)}</b>°C <hr>`);

// Q7: Write a Program To Impliment Check Out Process
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charge

let priceOfItem1 = 650;
let priceOfItem2 = 100;
let orderedQuantityOfItem1 = 3;
let orderedQuantityOfItem2 = 7;
let shippingCharges = 100;
const totalCost = priceOfItem1 * orderedQuantityOfItem1 + priceOfItem2 * orderedQuantityOfItem2 + shippingCharges;
document.write(`<h1> Shopping Cart </h1> <br>`);
document.write(`Price of item 1: ${priceOfItem1} <br>`);
document.write(`Quantity of item 1: ${orderedQuantityOfItem1} <br>`);
document.write(`Price of item 2: ${priceOfItem2} <br>`);
document.write(`Quantity of item 2: ${orderedQuantityOfItem2} <br>`);
document.write(`Shipping Charges: ${shippingCharges} <br>`);
document.write(`Total cost of your order: ${totalCost} <hr>`);

// Q8: Store a total marks and obtained marks in 2 variable and compute the percentage

let totalMarks = 980;
let obtainedMarks = 805;
const percentage = obtainedMarks / totalMarks * 100;
document.write(`<h1> Marksheet</h1> <br> Total Marks : <b>${totalMarks}</b> <br> Obtained Marks : <b>${obtainedMarks}</b> <br> Percentage : <b>${percentage.toFixed(2)}</b> <hr>`);

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 278.33 Pakistani Rupee
// and 1 Saudi Riyal = 74.22 Pakistani Rupee)

let totalCurrencyInPKR = 10 * 278.33 + 25 * 74.22;
document.write(`<h1> Currency in PKR </h1> <br> Total Currency in PKR : <b>${totalCurrencyInPKR.toFixed(2)}</b> <hr>`);

// Q:10 Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

const initialNumber = 10;
const result = (initialNumber + 5) * 10 / 2;
document.write(`Initial Number is <b>${initialNumber}</b> <br>`);
document.write(`The Result Of Calculation is <b>${result}</b> <hr>`);

// Q:11 The Age Calculator: Forgot How Old Someone is? Calculate it
// a. Store the current year in a variable
// b. Store their birth year in a variable
// c. Calculate their 2 possible ages based on the stored values
// assuming the person has already had their birthday this year
// Output them to the screen like so: years old

let currentYear = 2024;
const birthYear = 2007;
const age1 = currentYear - birthYear;
const age2 = age1 - 1;
document.write(`<h1> Age Calculator </h1> <br> Current Year : <b>${currentYear}</b> <br> Birth Year : <b>${birthYear}</b> <br> Your Age is: <b>${age1} or ${age2}</b> <hr>`);

// Q:12 The Geomatrizer : Calculate The Properties Of circle
// a. Store a radius of circle in a variable 
// b. Calculate the circumference based on the radius and output The Circumference is ??
// c. also calculate the area of circle and output the area the area of circle is ??

let radiusOfCircle = 20;
const circumference = 2 * 3.14 * radiusOfCircle;
const areaOfCircle = 3.14 * (radiusOfCircle*radiusOfCircle);
document.write(`<h1> The Geomatrizer</h1> <br> The Circumference Of Circle is <b>${circumference.toFixed(2)}</b> <br>`);
document.write(`The Area Of Circle is <b>${areaOfCircle}</b> <hr>`);

// Q13: The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is? 
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need 
// NNNN to last you until the ripe old age of NN”.

const snack = "Chocolates";
const currentAge = 16;
const maxAge = 100;
const amountPerDay = 2;
const totalNeeded = (maxAge - currentAge) * 365 * amountPerDay;
document.write(`<h1> The Lifetime Supply Calculator </h1> <br>`);
document.write(`Favorite Snack : <b> ${snack} </b> <br>`);
document.write(`Current Age : <b>${currentAge}</b> <br>`);
document.write(`Estimated Maximum Age : <b> ${maxAge} </b> <br>`);
document.write(`Amount Of Snack Per Day : <b> ${amountPerDay} </b> <br>`);
document.write(`You will need <b>${totalNeeded} ${snack}</b> to last you until the reach old age of <b>${maxAge}</b> <hr>`);

/////////////////////////////////////////// The End ////////////////////////////////////////////////