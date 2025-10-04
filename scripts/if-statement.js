console.log("conditional statements");

// if-statement (condition y/n)
// if(condition){
// code to be executed if the condition is true
//}

let result = 50;

if(result>40){
    console.log("You Passed The Exam");
}

let result1 = 50;
let result2 = 50;

if(result1 == result2){
    console.log("The Values Are The Same!")
}

// case 1: 5 == 5 True 
// case 2: 5 == "5" True because the value is still the same
//case 3: 5 === "5" False because === compares the value and data type.

//if-else statement
// if-(condition){
// code to be executed if the condition is true
//)else{
// code to be executed if the condition is false
//}

if(result>40){
    console.log("You Passed The Exam!");
}else{
    console.log("You Did Not Pass The Exam!");
}

let waterTemp = 105;

if(waterTemp >= 100){
    console.log("The Water Is Boiling!");
}else{
    console.log("The Water Is Not Boiling");
}

//else-if statement
//if(condition1){
// code to be executed is true
//}else if(condition2){
// code to be executed if condition2 is true
//}else{
// Code to be executed if the conditions are false
//}

function ageCalculator(){
    let age = prompt('Enter Your Age:');

    if(age<13){
        console.log("You Are A Child.");
    }else if(age < 21){
        console.log("You Are A Teenager.");
    }else if(age < 64){
        console.log("You Are An Adult");
    }else if(age > 64){
        console.log("You Are A Senior");
    }
}

// Challenge #1

function moviePrice(){
    let age = prompt('Enter Your Age For Your Ticket Price:');

    if(age<12){
        console.log("Your Ticket Price Is $5.");
    }else if(age >= 12, age <= 18){
        console.log("Your Ticket Price Is $8.");
    }else if(age > 18){
        console.log("Your Ticket Price is $10");
    }
}

//Challenge #2:

function weatherSuggestion(){
     let temp = prompt('Enter The Temperature To See What You Should Wear.')

     if(temp<15){
        console.log("You Should Wear A Jacket.")
     }else if(temp >= 15, temp <= 25){
        console.log("You Should Wear A Sweater.")
     }else if(temp > 25){
        console.log("You Should Wear A T Shirt.")
     }
}

//Challenge #1 Example
function ticketCalculator(){

    let age = prompt("Enter Your Age.");
    let price = 0;

    if(age<12){
        price=5;
    }else if(age<18){
        price=8;
    }else if(age>18){
        price=10;
    }

    document.getElementById("results").innerHTML="Your Ticket Price Is " + age;
    
    
}

//Challenge #2 Example

function weatherOutfit(){
    let tmp = prompt("Enter The Temperature");
    let outfit="";
    const p =document.getElementById("results");
    
    if(tmp<15){
        outfit=Jacket;
    }else if(tmp>15){
        outfit=Sweater;
    }else if(tmp>25){
        outfit=TShirt;
    }
    p.innerHTML="You should Wear: " + outfit ;
}

// Switch: for use with many options. 

let action = prompt("choose an action: Jump or Run");

switch(action){
    case "J":
        console.log("Jump");
        break;
    case "R":
        console.log("Run");
        break;
    case "D":
        console.log("Defense");
        break;
    default:
        console.log("Unkown action");

}