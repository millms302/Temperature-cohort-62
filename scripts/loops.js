console.log("Loops");

// FOR
// for(start_point; condition ; interval)

for(let i=0; i<20; i++){
    document.write("My for is working?")
}

// from 1-20

//for(let i=1; i<=20; i++){
 //   document.write(`<p>${i}<p>`)
// }

// multiplication challenge

const num = 2;
document.write(`<h2>Table of ${num} </h2>`)
for(let i=0;i<=10;i++){
    document.write(`<p> ${num} x ${i} = ${num*i}</p>`);
}

// WHILE LOOP;
let i = 2018; //Start Point

while(i<2022){ // Stop Condition
    console.log(i);
    i++; // Interval
}


// DO-WHILE LOOP
let j=0;// Start Point
do{
    console.log(j);
    j++; // Interval
}while(j<5) // Stop Condition

// Exercise #1

for(let i=1;i<=10;i++){
    if(i==1){
        console.log("Gold Medal");
    }else if(i==2){
        console.log("Silver Medal");
    }else if(i==3){
        console.log("Bronze Medal");
    }else{
        console.log(i);
    }
}
// exercise NEED FOR FINAL

function fillThermo(){
    let thermo = document.getElementById("thermo");
    for(let i=0;i<10;i++){
        let level = document.createElement("div")
        level.classList.add("level");
        if(i<3){
            level.style.backgroundColor = "blue";
        }else if(i<7){
            level.style.backgroundColor = "orange";
        }else{
            level.style.backgroundColor="red";
        }
        thermo.appendChild(level);
    }
}

// NEED FOR FINAL
function generateTable(){
    let tbody = document.getElementById("temps");
        for(let c=01;c<=10;c++){
        let f = (c*(9/5)) + 32;
        tbody.innerHTML+=`
        <tr>
            <td>${c}</td>
            <td>${f}</td>
        <tr>`;
    }
}

generateTable()