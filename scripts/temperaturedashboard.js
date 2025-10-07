function convertCelsius(){
    let c1 = Number(prompt("Enter the Temperature in Celsius"));
    let f1 = (c1 *9/5) + 32;

    document.getElementById("r1").innerHTML=`<p>${f1}`
}

function convertFahrenheit(){
    let f2 = Number(prompt("Enter the Temperature"));
    let c2 = (f2 - 32)*5/9;

    document.getElementById("r2").innerHTML=`<p>${c2}`
}

// TABLE and BUTTON//
function generateTable(){
    let tbody = document.getElementById("temptable");
        for(let c3=00; c3<=10;c3++){
        let c3 = (f3 - 32) * (5/9);
        }
        for(letf3=00;f3<=10;f3++){
        let f3 = (c3 *9/5) + 32;
        
        tbody.innerHTML+=`
        <tr>
            <td>${c}</td>
            <td>${f}</td>
        <tr>`;
    }

    document.getElementById("generateTable")
}

generateTable()

