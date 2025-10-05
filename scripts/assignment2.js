function convertTemperature(){
    let celsius = Number(prompt("Enter the temperature in Celsius"));
    let fahrenheit = (celsius * 9/5) + 32;
    
    document.getElementById("results").innerHTML=`<p>${fahrenheit}<p>`;
}   
   