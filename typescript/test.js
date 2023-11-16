"use strict";
// Example 1 - Spelling error
const object3 = { width: 10, height: 15 };
const area3 = object3.width * object3.heigth;
console.log(area3);
console.log(4 / []);
//Example 2 - Type error
let testnumber2 = 5;
if (testnumber2 == "5") {
    console.log("It's worked");
}
else {
    console.log("it hasn't worked");
}
// Example 3 - Generical Union types
function printId(id) {
    if (typeof id == "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
let number = 5;
let username = "Paulo";
let condition = true;
username = 5;
