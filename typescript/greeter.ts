function greeter(person:string)  {
    return "Hello, " + person;
  }
   
let userName = "Paulo Cauás"

let body = document.querySelector("body");

let title = document.createElement("h1");
let subtitle = document.createElement("h2");

body?.append(title);
body?.append(subtitle);


title.textContent = "TypeScript Presentation";
subtitle.textContent = userName;

