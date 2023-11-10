const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);

    displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {

    prophets.forEach((prophet) => {

       let card = document.createElement("section");
       let fullName = document.createElement("h2");
       let portrait = document.createElement("img");
       let paragraph1 = document.createElement("p");
       let paragraph2 = document.createElement("p");

       fullName.textContent = `${prophet.name} ${prophet.lastname}`;

       paragraph1.textContent = `Date of birth: ${prophet.birthdate}`;
       paragraph2.textContent = `Place of birth: ${prophet.birthplace}`;

       portrait.setAttribute("src", prophet.imageurl);
       portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname}`);
       portrait.setAttribute("loading", "lazy");
       portrait.setAttribute("width", "300");
       portrait.setAttribute("height", "400");

       card.appendChild(fullName);
       card.appendChild(paragraph1);
       card.appendChild(paragraph2);
       card.appendChild(portrait);

       cards.appendChild(card);


    });
}