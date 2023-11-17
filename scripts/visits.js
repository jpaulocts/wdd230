const vistsDisplay = document.querySelector(".visits");


let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) 
{
    vistsDisplay.textContent = numVisits;
} else {
    vistsDisplay.textContent = "This is your first visit. 😊 Welcome!"
}

numVisits++;

localStorage.setItem('numVisits-ls',numVisits);


const url =  "https://api.openweathermap.org/data/2.5/weather?lat=-8.06&lon=-34.88&appid=4a9225f2b0079d091f17256c97f18123&units=imperial";
const card = document.querySelector(".information");


async function getWeather () {

    const response = await fetch(url);

    if (response.ok) {

        const data = await response.json();

        console.log(data);

        displayResult(data);




    }
}

getWeather();


function displayResult(data) {

    let weather  = document.createElement("p");
    let weatherImage = document.createElement("img");
    let icon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;

    desc = desc[0].toUpperCase() + desc.slice(1);
    console.log(desc);
   

    weather.innerHTML = `${data.main.temp.toFixed()}&deg;F - <span>${desc}</span>`;
    weatherImage.setAttribute("src", icon);
    weather.classList.add("label");

    console.log(weather);

    card.appendChild(weatherImage);
    card.appendChild(weather);
    


}