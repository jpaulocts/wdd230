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