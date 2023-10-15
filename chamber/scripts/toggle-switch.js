const buttonMode = document.querySelector("#mode");
const main = document.querySelector("main");

buttonMode.addEventListener("click", () => {
    if (document.querySelector("#checkbox").checked) {
     main.style.background = "#000000";
     main.style.color = "#FFFFFF";
     document.querySelector("#textmode").innerText ="Dark";
     
     
         
  } else {

     main.style.background = "#FFFFFF";
     main.style.color = "#000000";
     document.querySelector("#textmode").innerText ="Light";
       
     
     
  }
});