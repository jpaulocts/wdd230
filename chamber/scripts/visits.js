const visits = document.querySelector('.visits');
const popup = document.querySelector('#messagepop');
const buttonClose = document.querySelector("#closepop");
const visitCounter = document.querySelector("#visit-counter");


let visitsNumber = parseInt(window.localStorage.getItem("lastvisit")) || 0;


if (visitsNumber == 0) 
{
    localStorage.setItem('lastVisit', new Date().getTime());

    visitCounter.textContent = "Welcome! Let us know if you have any questions."
    showPopup();
    
} else {

    const msToDays = 84600000;

    let dayDifference = (visitsNumber - Date.now()) / msToDays

        if (dayDifference < 1) 
        {
            visitCounter.textContent = "Back so soon! Awesome!";
        } else {

            const dayText = dayDifference === 1 ? "day" : "days";

            visitCounter.textContent = `You last visited ${dayDifference} ${dayText} ago.`;

        }


        
}

function showPopup() 
{
    visits.style.display = 'grid';


}

buttonClose.addEventListener('click', ()=> {
    visits.style.display = "none";
})


showPopup();




