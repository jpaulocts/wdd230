const url = "https://api.openweathermap.org/data/2.5/forecast?lat=20.51&lon=-86.95&appid=4a9225f2b0079d091f17256c97f18123&units=imperial";
const currentTemperature = document.querySelector("#temperature");
const description = document.querySelector("#weather-description");
const firstDay = document.querySelector("#one-day");
const speed = document.querySelector("#speed");
const imgWeather = document.querySelector("#weather-img");
const humidity = document.querySelector("#humidity");
const maxTemperature = document.querySelector("#max-temp")

async function getWeather() {

    try {

        response = await fetch(url);

        if (response.ok) {

            const data = await response.json();


            let temp = parseFloat(data.list[0].main.temp);

            let hum = parseFloat(data.list[0].humidity)

            currentTemperature.textContent = data.list[0].main.temp.toFixed();

            humidity.textContent = data.list[0].main.humidity.toFixed()

            let desc =  data.list[0].weather[0].description;

            desc = desc[0].toUpperCase() + desc.slice(1);
            
            description.textContent = desc;

            let windSpeed = data.list[0].wind.speed

            speed.textContent = data.list[0].wind.speed;

            firstDay.textContent = data.list[6].main.temp.toFixed();

            maxTemperature.textContent = data.list[0].main.temp_max.toFixed()

            let weatherImage = document.createElement("img");

            let imageURL = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`

            weatherImage.setAttribute("src", imageURL);

            weatherImage.setAttribute("alt", "weather icon" );

            weatherImage.setAttribute("width", "50");

            weatherImage.setAttribute("height", "50");

            imgWeather.append(weatherImage);


        } else {
            throw error(await response.ok);
        }
 
    } catch (error) {
        
        console.log(error);
    } 
}

getWeather();