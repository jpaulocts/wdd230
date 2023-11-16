const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.63&appid=4a9225f2b0079d091f17256c97f18123&units=imperial";


async function apiFetch() {

    try {

        const response = await fetch(url);

        if(response.ok) {
            const data = await response.json();
            console.log(data);
            
            displayResults(data); 

        } else {
            throw error(await response.text());

        }
        
    } catch (error) {
            console.log(error);

       }

}



function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp.toFixed()}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    
    desc = desc[0].toUpperCase() + desc.slice(1);
    
    
    
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", "weather icon");
    captionDesc.textContent = `${desc}`;
}

apiFetch();

