const currentyear = document.querySelector("#currentyear");
let lastModified = document.querySelector("#lastModified");
currentyear.innerHTML = new Date().getFullYear();
lastModified.innerHTML = new Date(document.lastModified);
const temp = document.querySelector("#temperature");
const conditions = document.querySelector("#conditions");
const windSpeed = document.querySelector("#windSpeed");
const windChill = document.querySelector("#windChill");
temp.innerHTML = "68 degrees fahrenheit."
conditions.innerHTML = "Sunny";
windSpeed.innerHTML = "4 mph"
windChill.innerHTML = "Can't be calculated due to temperature being higher than 50 degrees";

const image = document.addEventListener("resize", function() {
    let currentwidth = window.innerWidth;
    let smallImage = document.querySelector("#smallImage");
    let largeImage = document.querySelector("#largeImage");
    if (currentwidth < 481) {
        smallImage.className += " show";
        largeImage.className = "largeImage";
    } else {
        smallImage.className = "smallImage";
        largeImage.className += " show";
    }
})