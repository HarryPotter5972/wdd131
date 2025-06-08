const currentyear = document.querySelector("#currentyear");
let lastModified = document.querySelector("#lastModified");
const reviewTally = document.querySelector(".result");
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];
const reviewsDisplayNumber = document.querySelector(".numDisplayed")
let numReviews = Number(window.localStorage.getItem("reviews-ls"));

reviewsDisplayNumber.textContent = numReviews;
currentyear.innerHTML = new Date().getFullYear();
lastModified.innerHTML = new Date(document.lastModified);

createPoductSelection();

function createPoductSelection(){
    products.forEach(product => {
        let productSelection = document.createElement("option");
        let productSelectionValue = product.id;
        let productName = product.name;

        productSelection.value = productSelectionValue;
        productSelection.innerHTML = productName;
        document.querySelector(".deLorean").appendChild(productSelection);
    });
}
reviewTally.addEventListener("click", function(){
    numReviews++;
    localStorage.setItem("reviews-ls", numReviews);
});
