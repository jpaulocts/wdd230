const url = "https://api.openweathermap.org/data/2.5/onecall?lat=-8.06&lon=-34.88&exclude=hourly,minutely&appid=4a9225f2b0079d091f17256c97f18123&units=imperial";
const currentTemperature = document.querySelector("#temperature");
const description = document.querySelector("#weather-description");
const forecast = document.querySelector("#forecast");


async function getWeather() {

    response = await fetch(url);

    if (response.ok) {

        const data = await response.json();


    }
}