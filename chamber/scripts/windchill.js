const temp = (document.querySelector("#temperature").textContent);
const windSpeed = (document.querySelector("#speed").textContent);



if (temp <= 50 || windSpeed > 3) 
{
    let t = 35.74 + (0.6215 * temp) - (35.75 * (windSpeed)**0.16) + (0.4275 * temp * (windSpeed**0.16));

    document.querySelector("#wind-chill").innerHTML = t.toFixed(2);
} else {

    document.querySelector("#wind-chill").innerHTML= "N/A";
}



