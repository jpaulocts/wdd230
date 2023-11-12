const url = "https://jpaulocts.github.io/wdd230/chamber/data/members.json";
const cards = document.querySelector('.cards');

async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.members);

    displayData(data.members);
}

getData();

const displayData = (members) => {

    members.forEach((member) => {

       let card = document.createElement("section");
       let portrait = document.createElement("img");
       let paragraph1 = document.createElement("p");
       let paragraph2 = document.createElement("p");
       let paragraph3 = document.createElement("p");
       let paragraph4 = document.createElement("p");
       let link = document.createElement("a");

       portrait.setAttribute("src", member.image);
       portrait.setAttribute("alt", `Portrait of ${member.company}`);
       portrait.setAttribute("loading", "lazy");
       portrait.setAttribute("width", "200");
       portrait.setAttribute("height", "200");
       

       paragraph1.textContent = member.address;
       paragraph2.textContent = member.phone;
       paragraph3.textContent = member.level;
       paragraph4.textContent = member.company
       link.textContent = member.website

       link.setAttribute("href", member.website);
       link.setAttribute("target", "blank_");
       
       
       
       card.appendChild(portrait)
       card.appendChild(paragraph4);
       card.appendChild(paragraph1);
       card.appendChild(paragraph3);
       card.appendChild(paragraph2);
       card.appendChild(link)
       

       cards.appendChild(card);


    });


const gridbutton = document.querySelector("#grid-button");
const listbutton = document.querySelector("#list-button");
const display = document.querySelector(".cards");


gridbutton.addEventListener("click", () => {

	display.classList.add("cards");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); 

function showList() {
	display.classList.add("list");
	display.classList.remove("cards");
}
}