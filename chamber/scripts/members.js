const url = "https://github.com/jpaulocts.io/wdd230/chamber/data/members.json";
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
       let link = document.createElement("a");

       portrait.setAttribute("src", member.image);
       portrait.setAttribute("alt", `Portrait of ${member.company}`);
       portrait.setAttribute("loading", "lazy");
       

       paragraph1.textContent = member.address;
       paragraph2.textContent = member.phone;
       link.textContent = member.website

       link.setAttribute("src", member.website);
       link.setAttribute("target", "blank_");

       
       
       card.appendChild(portrait)
       card.appendChild(paragraph1);
       card.appendChild(paragraph2);
       card.appendChild(link)
       

       cards.appendChild(card);


    });
}