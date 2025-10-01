/*her is going to be js code*/
console.log("functions")

// step 1. function declaration (creating a function)
function sayHello(){
    // body of the function
    console.log("Hello Cohort 62");
}

// step 2. call/trigger/run/execute the function (code, console, user action)
sayHello();

// Example #2 - with 1 parameter (input)
function greet(name){
    console.log("Hello" + name); // concatenation: join strings
}

greet(" Kirt");
greet(" Justin");
greet(" Mike");

// Example #3 - with 2 parameters ()
function greet2( fname, lname){
    console.log("Welcome to the System" + fname + " " + lname);
}

greet2(" Michael","Miller")

// Challenge #1: Double the Number
// Task:
// - Create a function called 'doubleNumber' that takes one number as a parameter.
// - The function should display the number multiplied by 2.
// - Print the result when you call the function with 3 different numbers.


function doubleNumber(num1){
    let total = num1*2;
    console.log(total);
}
doubleNumber(3);
doubleNumber(4);
doubleNumber(5);

//Example #4 - with the prompt
function Welcome(){
    let name = prompt(" Enter Your Name:");
    console.log("Welcome " + name);
}
//trigger from the console

//Example #5 - with default parameters

function addNumbers(num1=0, num2=0){
    let total = num1 + num2;
    console.log(`The total is: ${total}`)
}
addNumbers(2,5);
addNumbers(5);
addNumbers();

// Challenge 2: Combine Names
// Task:
// - Create a function called 'combineNames' that takes two parameters: `firstName` and `lastName'.
// - The function should return the full names in the format: `"firstName lastName"

function combineNames(firstName="unknown", lastName="unknown"){
    console.log(`${firstName} ${lastName}`)
}

combineNames("Mike", "Miller"); // Mike Miller
combineNames("Bill", "Buttlicker") // Bill Buttlicker

// Challenge 3: convert minutes to seconds
// - Create a funtion called 'convertToSeconds' that takes one parameter, 'minutes'.
// - The function should retturn the number of seconds by multiplying the minutes by 60.
// - call the fuinction with different values of minutes and print the results.


// My example
function convertToSeconds(minutes){
    let total2 = minutes * (60)
    console.log(`The total number of seconds is: ${total2}`)
}
convertToSeconds(55) // 55 Minutes
convertToSeconds(6874346) // 6,874,346 Minutes


// Doc Jiminez example
function convertToSeconds(mins){
    let sec = mins*60;
    console.log(`${mins} min are ${sec}s`);
}
convertToSeconds(2)

//convert to seconds way 3:

function convertToSeconds(){
    let mins = Number(prompt("Enter the Min"));
    let sec = mins*60;

    document.getElementById("results").innerHTML=`<p>${sec}<p>`;
}