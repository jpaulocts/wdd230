const buttonMode = document.querySelector("#mode");
const main = document.querySelector("main");
const header = document.querySelector(".header");
const menu = document.querySelector("#menu");
const nav = document.querySelector("nav");
const a = document.querySelectorAll(".inactive");
const width= 640;



buttonMode.addEventListener("click", () => {
    if (document.querySelector("#checkbox").checked) {
     main.style.background = "#000000";
     main.style.color = "#FFFFFF";
     header.style.background = "#14213D";
     menu.style.color = "#FFFFFF";
     for (let i=0; i< a.length; i++) 
     {
      a[i].style.color = "#FFFFFF";
     }
     
             
         
  } else {

     main.style.background = "#FFFFFF";
     main.style.color = "#000000";
     header.style.background = "#FFFFFF";
     menu.style.color = "#000000";

     if (screen.width >= width) 
     {
      for (let i = 0; i< a.length; i++) {
         a[i].style.color = "unset";

     } } else if (screen.width < width ) {
      
         for (let i = 0; i< a.length; i++) {
            a[i].style.color = "#unset"
         }
      }
     
     
     
}});