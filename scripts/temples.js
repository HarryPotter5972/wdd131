const currentyear = document.querySelector("#currentyear");
let lastModified = document.querySelector("#lastModified");
const hamButton = document.querySelector("#hamburgerMenu");
const navbar = document.querySelector(".navbar")



currentyear.innerHTML = new Date().getFullYear();
lastModified.innerHTML = new Date(document.lastModified);
hamButton.addEventListener("click", () => {
    navbar.classList.toggle("show");
    hamButton.classList.toggle("show");
})


