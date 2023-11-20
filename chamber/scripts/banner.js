const bannerDate = new Date();
const weekday = bannerDate.getDay();
const banner = document.querySelector("#banner");
const closeSpan = document.querySelector("#close");


closeSpan.addEventListener("click", () => {

    banner.style.display = "none";
} )


if (weekday == 0 || weekday == 4 || weekday == 5 || weekday == 6){

    banner.style.display = "none";
}
