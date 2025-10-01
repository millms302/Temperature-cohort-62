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

Welcome()