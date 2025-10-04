function convertTemperature(celsius){
    let f = ((celsius * 9/5) + 32);
    let c = Number(prompt("Enter the temperature in Celsius"))
    
    document.getElementById("results").innerHTML=`<p>${f}<p>`;
}   
   