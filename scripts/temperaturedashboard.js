function convertTempCelsius(Fahrenheit){
    let tempCelsius = Number(prompt("Enter the Temperature in Celsius"));
    let fahrenheit = ((temp * 9/5) + 32)
    console.log(`The Temperature in Fahrenheit is: ${fahrenheit}`)
    document.getElementById("convert").innerHTML=`<p>${fahrenheit}`
}