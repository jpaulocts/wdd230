const url = "https://jpaulocts.github.io/wdd230/project/data/rentals.json";
const cards = document.querySelector('.rental');

async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.members);

    displayData(data.cars);
}

getData();

const displayData = (cars) => {

    cars.forEach((car) => {

       let card = document.createElement("section");
       let portrait = document.createElement("img");
       let paragraph1 = document.createElement("p");
       let paragraph2 = document.createElement("p");
       let paragraph3 = document.createElement("p");
       let paragraph4 = document.createElement("p");
       let paragraph5 = document.createElement("p");
       let paragraph6 = document.createElement("p");
       

       portrait.setAttribute("src", car.img);
       portrait.setAttribute("alt", `Portrait of ${car.rental}`);
       portrait.setAttribute("loading", "lazy");
       portrait.setAttribute("width", "350");
       portrait.setAttribute("height", "263");
       

       paragraph1.textContent = car.rental;
       paragraph2.textContent = `Persons Capacity ${car.persons}`;
       paragraph3.textContent = `Reservation Half Day (3h): ${car.reservation_3_5}`;
       paragraph4.textContent = `Reservation Full Day: ${car.reservation_full_day}`
       paragraph5.textContent = `Walk-in Half Day (3h): ${car.walkin_3_5}`
       paragraph6.textContent = `Walk-in Full Day: ${car.walkin_full}`
                 
       
       
       card.appendChild(portrait)
       card.appendChild(paragraph1);
       card.appendChild(paragraph2);
       card.appendChild(paragraph3);
       card.appendChild(paragraph4);
       card.appendChild(paragraph5);
       card.appendChild(paragraph6);
      
       
       cards.appendChild(card);


    });
}