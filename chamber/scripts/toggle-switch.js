const buttonMode = document.querySelector("#mode");
const main = document.querySelector("main");
const header = document.querySelector(".header");
const menu = document.querySelector("#menu");
const nav = document.querySelector("nav");
const a = document.querySelectorAll(".inactive");
const active = document.querySelector(".active");
const h1NonHome = document.querySelector(".head-nohome");
const caption = document.querySelectorAll("figcaption");
const width= 640;



buttonMode.addEventListener("click", () => {
    if (document.querySelector("#checkbox").checked) {
     main.style.background = "#000000";
     main.style.color = "#FFFFFF";

      if (h1NonHome !== null) 
      {     h1NonHome.style.color = "#FFFFFF";}

      if (caption !== null) {
         for (let j=0; j < caption.length; j++) {
            caption[j].style.color = "#FFFFFF";
            caption[j].style.background = "#14213D" 
         }
      }
         

     header.style.background = "#14213D";
     menu.style.color = "#FFFFFF";
     for (let i=0; i< a.length; i++) 
     {
      a[i].style.color = "#FFFFFF";
     }
     active.style.color = "#FFFFFF";
     active.style.border = "1px solid #FFFFFF";
     
             
         
  } else {

     main.style.background = "#FFFFFF";
     main.style.color = "#000000";

     if (h1NonHome !== null) {
     h1NonHome.style.color = "#000000";}



     if (caption !== null) {
         for (let j=0; j < caption.length; j++) {
            caption[j].style.color = "#000000";
            caption[j].style.background = "#FCA311" 
         }
      }

     if (screen.width >= width) 
     {
      for (let i = 0; i< a.length; i++) {
         a[i].style.color = "unset";
         active.style.color = "unset";
         active.style.border = "1px solid #000000"

     } } else if (screen.width < width ) {
      
         for (let i = 0; i< a.length; i++) {
            a[i].style.color = "#unset"
            active.style.border = "1px solid #FFFFFF"
         }
      }
     ;
     
     
     
}});