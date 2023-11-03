const password1 = document.querySelector("#password");
const password2 = document.querySelector("#confirmation");
const message = document.querySelector(".message");
const rating = document.querySelector(".rating");
const range = document.querySelector("#range");

password2.addEventListener("focusout", checkFunction);

function checkFunction () {
    if (password1.value !== password2.value) {
        message.textContent = "❗Passwords DO NOT MATCH!";
        message.style.display = "block"
        password2.style.backgroundColor = "#fff0f3";
		password2.value = "";
        password1.value = "";
		password1.focus();
	} else {
		message.style.display = "none";
		password2.style.backgroundColor = "#fff";
		password2.style.color = "#000";
	}
}

range.addEventListener("change", displayRatingValue);

range.addEventListener("input", displayRatingValue);


function displayRatingValue() {
    rating.innerHTML = range.value;
}
