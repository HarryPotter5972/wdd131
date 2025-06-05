const currentyear = document.querySelector("#currentyear");
let lastModified = document.querySelector("#lastModified");
const hamButton = document.querySelector("#hamburgerMenu");
const navbar = document.querySelector(".navbar");
const oldTemplesLink = document.querySelector("#oldTemples");
const newTemples = document.querySelector("#newTemples");
const largeTemples = document.querySelector("#largeTemples");
const smallTemples = document.querySelector("#smallTemples");
const all = document.querySelector("#all");


currentyear.innerHTML = new Date().getFullYear();
lastModified.innerHTML = new Date(document.lastModified);
hamButton.addEventListener("click", () => {
  navbar.classList.toggle("show");
  hamButton.classList.toggle("show");
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    dateDedicated: new Date("2005-08-07"),
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    dateDedicated: new Date("1888-05-21"),
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    dateDedicated: new Date("2015-06-07"),
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    dateDedicated: new Date("2020-05-02"),
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    dateDedicated: new Date("1974-11-19"),
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    dateDedicated: new Date("1986-01-10"),
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    dateDedicated: new Date("1983-12-02"),
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah",
    dedicated: "1893, April, 6-24",
    dateDedicated: new Date("1893-04-06"),
    area: 382207,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-10785.jpg"
  },
  {
    templeName: "Jordan River Utah",
    location: "South Jordan, Utah",
    dedicated: "1981, November, 16-20",
    dateDedicated: new Date("1981-11-16"),
    area: 148236,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/jordan-river-utah-temple/jordan-river-utah-temple-21905.jpg"
  },
  {
    templeName: "Mount Timpanogos Utah",
    location: "American Fork, Utah",
    dedicated: "1996, October, 13-19",
    dateDedicated: new Date("1996-10-13"),
    area: 107240,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/mount-timpanogos-utah-temple/mount-timpanogos-utah-temple-60338.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah",
    dedicated: "1888, May, 21-23",
    dateDedicated: new Date("1888-05-21"),
    area: 100373,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-55303-thumb.jpg"
  },
  {
    templeName: "Draper Utah",
    location: "Draper, Utah",
    dedicated: "2009, March, 20-22",
    dateDedicated: new Date("2009-03-20"),
    area: 58300,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/draper-utah-temple/draper-utah-temple-52037-thumb.jpg"
  }
  // Add more temple objects here...
];


createTempleGridArea(temples);



oldTemplesLink.addEventListener("click", (event) => {
  event.preventDefault();
  let templesOld = temples.filter(temple => temple.dateDedicated.getFullYear() <= 1899);
  console.log(templesOld);
  createTempleGridArea(templesOld);
});

function createTempleGridArea(filteredTemples) {
  document.querySelector(".res-grid").innerHTML = "";
  filteredTemples.forEach(temple => {
    let gridSection = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="category">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="category">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="category">Area:</span> ${temple.area} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");
        
    gridSection.appendChild(name);
    gridSection.appendChild(location);
    gridSection.appendChild(dedication);
    gridSection.appendChild(area);
    gridSection.appendChild(img);

    document.querySelector(".res-grid").appendChild(gridSection);
    });
};




newTemples.addEventListener("click", (event) => {
  event.preventDefault();
  createTempleGridArea(temples.filter(temple => temple.dateDedicated.getFullYear() >= 2001));
});

largeTemples.addEventListener("click", (event) => {
  event.preventDefault();
  createTempleGridArea(temples.filter(temple => temple.area > 90000));
});

smallTemples.addEventListener("click", (event) => {
  event.preventDefault();
  createTempleGridArea(temples.filter(temple => temple.area < 10000));
});

all.addEventListener("click", (event) => {
  event.preventDefault();
  createTempleGridArea(temples);
});