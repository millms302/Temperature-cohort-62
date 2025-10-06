
    function convertTemperature() {
            let temp = parseFloat(document.getElementById("temperature").value);
            let scale = document.getElementById("scale").value;
            let converted;

            if (scale === "C") {
              converted = (temp * 9 / 5) + 32;
              document.getElementById("result").textContent = `${temp}°C is ${converted}°F`;
            } else if (scale === "F") {
              converted = (temp - 32) * 5 / 9;
              document.getElementById("result").textContent = `${temp}°F is ${converted}°C`;
            } else {
              document.getElementById("result"),textContent = "invalid scale.";
            }
        }