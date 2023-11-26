const urlSpot = "https://jpaulocts.github.io/wdd230/chamber/data/members.json";
const spotlight = document.querySelectorAll(".spotlight div");

async function getData() {
    const response = await fetch(urlSpot);
    const dataSpot = await response.json();
    //console.table(data.members);

    displayData(dataSpot.members, spotlight);
}

getData();

const displayData = (members, div) => {

    let i = 0
    div.forEach((section) => {
    
        if (members[i].level == "Gold Member" || members[i].level == "Silver Member"){
       
            let portrait = document.createElement("img");
            let paragraph1 = document.createElement("p");
            let paragraph2 = document.createElement("p");
            let paragraph3 = document.createElement("p");
            let paragraph4 = document.createElement("p");
            let link = document.createElement("a");

            portrait.setAttribute("src", members[i].image);
            portrait.setAttribute("alt", `Portrait of ${members[i].company}`);
            portrait.setAttribute("loading", "lazy");
            portrait.setAttribute("width", "200");
            portrait.setAttribute("height", "200");
            

            paragraph1.textContent = members[i].slogan;
            paragraph2.textContent = `Phone Number : ${members[i].phone}`;
            paragraph3.textContent = members[i].level;
            paragraph4.textContent = members[i].company
            link.textContent = "Web Site"

            link.setAttribute("href", members[i].website);
            link.setAttribute("target", "blank_");
            
            
            
            section.appendChild(portrait)
            section.appendChild(paragraph4);
            section.appendChild(paragraph1);
            section.appendChild(paragraph3);
            section.appendChild(paragraph2);
            section.appendChild(link);

            i = i + 1;
       
        } else {
            i = i + 1
        }

       


    });
}