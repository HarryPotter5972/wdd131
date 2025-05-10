const currentyear = document.querySelector("#currentyear");
let lastModified = document.querySelector("#lastModified");

currentyear.innerHTML = new Date().getFullYear();
lastModified.innerHTML = new Date(document.lastModified);