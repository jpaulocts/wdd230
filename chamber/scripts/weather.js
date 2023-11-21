const url = "https://api.openweathermap.org/data/2.5/forecast?lat=-8.06&lon=-34.88&appid=4a9225f2b0079d091f17256c97f18123&units=imperial";
const currentTemperature = document.querySelector("#temperature");
const description = document.querySelector("#weather-description");
const forecast = document.querySelector("#forecast");
const firstDay = document.querySelector("#one-day");
const secondDay  = document.querySelector("#second-day");
const forecastDate = document.querySelector("#forecast-date");
const speed = document.querySelector("#speed");
const imgWeather = document.querySelector("#weather-img");


async function getWeather() {

    try {

        response = await fetch(url);

        if (response.ok) {

            const data = await response.json();

            console.log(data);

            let temp = parseFloat(data.list[0].main.temp);

            currentTemperature.textContent = data.list[0].main.temp;

            let desc =  data.list[0].weather[0].description;

            desc = desc[0].toUpperCase() + desc.slice(1);
            
            description.textContent = desc;

            let windSpeed = data.list[0].wind.speed

            speed.textContent = data.list[0].wind.speed;

            firstDay.textContent = data.list[7].main.temp;

            secondDay.textContent = data.list[14].main.temp;

            forecast.textContent = data.list[21].main.temp;
            
            forecastDate.textContent = data.list[21].dt_txt.slice(0,10);

            let weatherImage = document.createElement("img");

            let imageURL = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`

            weatherImage.setAttribute("src", imageURL);

            weatherImage.setAttribute("alt", "weather icon" );

            imgWeather.append(weatherImage);


            if (temp <= 50 || windSpeed > 3) 
                {
                    let t = 35.74 + (0.6215 * temp) - (35.75 * (windSpeed)**0.16) + (0.4275 * temp * (windSpeed**0.16));

                     document.querySelector("#wind-chill").innerHTML = t.toFixed(2);
                } else {

                    document.querySelector("#wind-chill").innerHTML= "N/A";
                }




        } else {
            throw error(await response.ok);
        }
 
    } catch (error) {
        
        console.log(error);
    } 
}

getWeather();