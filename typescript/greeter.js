function greeter(person) {
    return "Hello, " + person;
}
var userName = "Paulo Cauás";
var body = document.querySelector("body");
var title = document.createElement("h1");
var subtitle = document.createElement("h2");
body === null || body === void 0 ? void 0 : body.append(title);
body === null || body === void 0 ? void 0 : body.append(subtitle);
title.textContent = "TypeScript Presentation";
subtitle.textContent = userName;
