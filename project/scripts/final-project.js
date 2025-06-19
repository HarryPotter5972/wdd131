const currentyear = document.querySelector("#currentYear");
let lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = new Date(document.lastModified);
const hamButton = document.querySelector("#hamburgerMenu");
const navbar = document.querySelector(".navbar");
const allTimelines = document.querySelector("#all");
const downfall = document.querySelector("#downfallTimeline");
const child = document.querySelector("#childTimeline");
const adult = document.querySelector("#adultTimeline");
const allClicksNumber = document.querySelector(".numDisplayAll");
const downfallClicksNumber = document.querySelector(".numDisplayDownfall");
const childClicksNumber = document.querySelector(".numDisplayChild");
const adultClicksNumber = document.querySelector(".numDisplayAdult");
let numClickAll = Number(window.localStorage.getItem("clicking-all"));
let numClickDownfall = Number(window.localStorage.getItem("clicking-downfall"));
let numClickChild = Number(window.localStorage.getItem("clicking-child"));
let numClickAdult = Number(window.localStorage.getItem("clicking-adult"));
allClicksNumber.innerHTML = `Number all was clicked: ${numClickAll}`;
downfallClicksNumber.innerHTML = `Number Downfall Timeline was clicked: ${numClickDownfall}`;
childClicksNumber.innerHTML = `Number Child Timeline was clicked: ${numClickChild}`;
adultClicksNumber.innerHTML = `Number Adult Timeline was clicked: ${numClickAdult}`;

const historicalEvents = [
    {
        eventorGame: "Creation of the world and the Triforce",
        body: "The golden goddesses named Din, Farore, and Nayru created the world to entomb the primordial entity name Null and leave the Triforce in the hands of the goddess Hylia until Demise appears in attempt to claim the Triforce for himself.",
        sourcesWhereReferenced: "The manual for The Legend of Zelda: A Link to the Past, The Legend of Zelda: Ocarina of Time, <i>The Legend of Zelda: Echoes of Wisdom</i>",
        timeline: "Unified Timeline",
        imgUrl: "images/hyrule-creation.jpg",
        imgClass: "creation"
    },
    {
        eventorGame: "The war to Seal Demise: the first Demon King",
        body: "The Demon King Demise rises and tries to get his hands on the Triforce. He wages battle against Hylia to do so, but is sealed away by the goddess. Hylia creates Fi and has the Goddess Sword forged by ancient sages for her chosen knight to one day wield. She sets her plan to destroy Demise fully in motion by giving up her divinity to be reborn as a mortal millenia in the future.",
        sourcesWhereReferenced: "<i>The Legend of Zelda: Skyward Sword</i>",
        timeline: "Unified Timeline",
        imgUrl: "images/demise.jpg",
        imgClass: "demise"
    },
    {
        eventorGame: "<i>The Legend of Zelda: Skyward Sword</i>",
        body: "Hylia reincarnates as a girl named Zelda and Hylia's chosen knight, Link, is born. Link with the help of Fi tempers the Goddess Sword into the Master Sword, the Blade of Evil's Bane. He uses his wish on the Triforce to destroy Demise, but Demise's servant named Ghirahim kidnaps Zelda and goes to the past to resurrect Demise. Link follows and defeats Demise in single combat, sealing his residual consciousness into the Master Sword to be eradicated completely.",
        sourcesWhereReferenced: "<i>The Legend of Zelda: Skyward Sword</i>",
        timeline: "Unified Timeline",
        imgUrl: "images/skyward-link.jpg"
    },
    {
        eventorGame: "The Era of Chaos",
        body: "Wars are waged over the Triforce, the Dark Interlopers create the Fused Shadows and get banished to the Twilight Realm. The Kingdom of Hyrule is founded and the Triforce is hidden away in the Sacred Realm. Monsters are sealed away in the bound chest by the Hero of Men.",
        sourcesWhereReferenced: "<i>The Legend of Zelda: Ocarina of Time</i>, <i>The Legend of Zelda: Twilight Princess",
        timeline: "Unified Timeline",
        imgUrl: "images/dark-interlopers.jpg"
    },
    {
        eventorGame: "<i>The Legend of Zelda: Minish Cap</i>",
        body: "The Wind Mage, Vaati, breaks the seal on the bound chest by breaking the Picori Blade in effort to find the Light Force. He turns the current princess of Hyrule to stone. The princess' friend, a boy named Link, has the blade repaired and tempered into the Legendary Four Sword. Link storms the Vaati corrupted Hyrule Castle to save his friend and defeats Vaati.",
        sourcesWhereReferenced: "<i>The Legend of Zelda: Minish Cap</i>",
        timeline: "Unified Timeline",
        imgUrl: "images/minish-cap.jpg"
    },
    {
        eventorGame: "<i>The Legend of Zelda: Four Swords</i>",
        body: "Vaati breaks free of his seal in the Four Sword and kidnaps the Zelda of that time period and tries to force her to marry him. A boy named Link draws the Four Sword from its pedestal and goes on a quest with his doubles created by the blade to defeat Vaati and save Zelda.",
        sourcesWhereReferenced: "<i>The Legend of Zelda: Minish Cap</i>",
        timeline: "Unified Timeline",
        imgUrl: "images/four-sword.jpg"
    },
    {
        eventorGame: "<i>The Legend of Zelda: Ocarina of Time</i>",
        body: "A man named Ganondorf curses the Great Deku Tree, the guardian of the Kokiri. A hylian boy named Link is called by the Deku Tree to purge the curse from him. However, even though Link succeeds in purging the curse from his mentor, the Great Deku Tree dies right after telling him to seek out the princess of Hyrule of the era. He meets with the princess and conspires to get to the Triforce before Ganondorf does. However, Link gets sealed away for seven years by the Master Sword because Fi deemed him to young to wield the blade. Ganondorf enters the Sacred Realm and tries to claim the Triforce for himself. It splits into the Triforces of Courage, Wisdom, and Power. Link awakens seven years later and purges the darkness from numerous temples to recruit six sages to oppose Ganondorf, who possesses the Triforce of Power. If he loses in battle against Ganondorf, this will lead to the Imprisoning War mentioned in the manual for <i>A Link to the Past</i>. If he wins, the history of Hyrule splits between two other timelines due to the princess sending him back in time to relive his childhood, creating both the Adult and Child timelines respectively.",
        sourcesWhereReferenced: "<i>The Legend of Zelda: Ocarina of Time</i>",
        timeline: "Unified Timeline",
        imgUrl: "images/ocarina-of-time.jpg"
    },
    {
        eventorGame: "<i>The Legend of Zelda: A Link to the Past",
        body: "After the Imprisoning War, Ganon bides his time in the corrupted Sacred Realm, plotting to take over Hyrule. He kidnaps seven maidens who are spiritual descendants of the seven sages who opposed him beside the Hero of Time. A boy named Link claims the Master Sword and defeats him and claims the Triforce, wishing upon it to reverse Ganon's evil deeds.",
        sourcesWhereReferenced: "The Legend of Zelda: A Link to the Past",
        timeline: "Downfall Timeline",
        imgUrl: "images/master-sword-alttp.jpg"
    },
    {
        eventorGame: "The Legend of Zelda: Majora's Mask",
        body: "After being sent to the past to relive the childhood that he lost and warning the royal family of Ganondorf's evil plans, the Hero of Time (Link from Ocarina of Time) goes looking for his friend and companion, Navi. He encounters an evil mask called Majora's Mask and saves the land of Termina from Majora's evil.",
        sourcesWhereReferenced: "The Legend of Zelda: Majora's Mask",
        timeline: "Child Timeline",
        imgUrl: "images/majora.jpg"
    },
    {
        eventorGame: "The Great Flood",
        body: "After the princess sent the Hero of Time into the past, Hyrule is very prosperous until Ganondorf returns, thrusting Hyrule into darkness. The people begged the goddesses for salvation, leading to Hyrule being flooded.",
        sourcesWhereReferenced: "The prologue to The Legend of Zelda: The Wind Waker.",
        timeline: "Adult Timeline",
        imgUrl: "images/outset-island.jpg"
    },
    {
        eventorGame: "<i>The Legend of Zelda: Oracle of Seasons</i> and The Legend of Zelda: Oracle of Ages",
        body: "After Ganon's defeat in <i>A Link to the Past</i>, his adopive parents, the Twinrova sisters, send their generals, Onox and Veran, to Labryna and Holodrum to cause mayhem to ready a ritual to resurrect Ganon. They botch the ritual and resurrect a mindless form of Ganon. The Link from <i>A Link to the Past</i> slays him once more.",
        sourcesWhereReferenced: "The Legend of Zelda: Oracle of Seasons and The Legend of Zelda: Oracle of Ages",
        timeline: "Downfall Timeline",
        imgUrl: "images/oosooa.jpg"
    },
    {
        eventorGame: "Ganondorf's Execution",
        body: "After a clash with the Gerudo, Ganondorf is captured and is sentenced to death for treason. However, due to the Hero of Time traveling to the past, Ganondorf gained possession of the Triforce of Power and survives his execution. He gets banished to the Twilight Realm.",
        sourcesWhereReferenced: "The Legend of Zelda: Twilight Princess",
        timeline: "Child Timeline",
        imgUrl: "images/ganondorf-execution.jpg"
    },
    {
        eventorGame: "<i>The Legend of Zelda: The Wind Waker</i>",
        body: "A few centuries after The Great Flood, a boy named Link lives a happy life on Outset Island until his sister was kidnapped by Ganondorf's pet bird, the Helmaroc King, inspiring him on a quest to retrieve the Master Sword from the depths of the Great Sea and defeat Ganondorf like the Hero of Time did before him.",
        sourcesWhereReferenced: "The Legend of Zelda: The Wind Waker",
        timeline: "Adult Timeline",
        imgUrl: "images/wind-waker.jpg"
    },
    {
        eventorGame: "<i>The Legend of Zelda: Link's Awakening</i>",
        body: "After defeating Twinrova and a mindless Ganon, Link travels back across the ocean to train. On his way back, he gets stranded on Koholint Island. In order to get back to Hyrule, he has to awaken the Wind Fish. Along the way, he discovers that Koholint Island is a dream world created by the imagination of the Wind Fish. He succeeds to defeat the nightmares plaguing the Wind Fish and wake the Wind Fish, causing Koholint Island to fade away.",
        sourcesWhereReferenced: "The Legend of Zelda: Link's Awakening",
        timeline: "Downfall Timeline",
        imgUrl: "images/koholint.jpg"
    },
    {
        eventorGame: "<i>The Legend of Zelda: Twilight Princess</i>",
        body: "Little over a century after the events of <i>Majora's Mask</i>, Ganondorf finds a way to leave the Twilight Realm through recruiting a descendant of the Dark Interlopers named Zant. Zant usurps the ruler of the people of the Twilight Realm, Midna, by cursing her into the form of an imp. Midna seeks out a hero and finds a ranchhand named Link who is the descendant of the Hero of Time. Link and Midna delve into dangerous dungeons to reclaim the Fused Shadows. Link also takes up the Master Sword like his ancestor did before him. He and Midna delve into the Twilight Realm and defeat Zant, only to storm Hyrule Castle to defeat Ganondorf. Link succeeds to defeat Ganondorf.",
        sourcesWhereReferenced: "The Legend of Zelda: Twilight Princess",
        timeline: "Child Timeline",
        imgUrl: "images/twilight-princess.jpg"
    },
    {
        eventorGame: "<i>The Legend of Zelda: Phantom Hourglass</i>",
        body: "After the defeat of Ganondorf, Link and his pirate companion, Tetra go looking for a new landmass to found a new Hyrule. Enroute, they encounter the demon Bellum and defeat him.",
        sourcesWhereReferenced: "The Legend of Zelda: Phantom Hourglass",
        timeline: "Adult Timeline",
        imgUrl: "images/phantom-hourglass.jpg"
    },
    {
        eventorGame: "<i>The Legend of Zelda: A Link Between Worlds</i>",
        body: "A few generations after <i>A Link to the Past</i>, a mage named Yuga seeks to resurrect Ganon. A boy named Link has to take up the Master Sword and the Triforce of Courage to save Hyrule from Yuga.",
        sourcesWhereReferenced: "The Legend of Zelda: A Link Between Worlds",
        timeline: "Downfall Timeline",
        imgUrl: "images/link-between-worlds.jpg"

    },
    {
        eventorGame: "<i>The Legend of Zelda: Four Swords Adventures</i>",
        body: "Ganondorf has reincarnated and tricks a boy named Link to draw the Four Sword to free Vaati from the seal that entombed the Wind Mage in the Four Sword. Link journeys through Hyrule to save the land from Ganondorf's and Vaati's evil.",
        sourcesWhereReferenced: "The Legend of Zelda: Four Swords Adventures",
        timeline: "Child Timeline",
        imgUrl: "images/four-swords-adventures.jpg"
    },
    {
        eventorGame: "<i>The Legend of Zelda: Spirit Tracks</i>",
        body: "A century after <i>The Wind Waker</i>, the Hero of Winds and Tetra have found a new continent and founded New Hyrule around the Tower of Spirits and the Spirit Tracks. But due to the machinations of the Demon King Malidous, New Hyrule is under threat. A new Link and Tetra's descendant, Zelda, must save their home from the forces of evil.",
        sourcesWhereReferenced: "The Legend of Zelda: Spirit Tracks",
        timeline: "Adult Timeline",
        imgUrl: "images/spirit-tracks.jpg"
    },
    {
        eventorGame: "<i>The Legend of Zelda: Tri Force Heroes</i>",
        body: "The Link from <i>A Link Between Worlds</i> travels to the land of Hytopia to save a princess from being cursed to be trapped in a hideous bodisuit.",
        sourcesWhereReferenced: "The Legend of Zelda: Tri Force Heroes",
        timeline: "Downfall Timeline",
        imgUrl: "images/tri-force-heroes.jpg"
    },
    {
        eventorGame: "<i>The Legend of Zelda: Breath of the Wild</i>",
        body: "Over ten thousand years after all the rest of the games, Hyrule is in ruins. Calamity Ganon has ravaged the kingdom, reducing it to ruins. Ancient technology of the Shiekah has been taken over by the Calamity. An amnisiac Link awakens from a century long slumber in the Shrine of Resurrection and goes on a quest to defeat the Calamity.",
        sourcesWhereReferenced: "The Legend of Zelda: Breath of the Wild",
        timeline: "Era of the Wild",
        imgUrl: "images/botw.jpg"
    },
    {
        eventorGame: "<i>The Legend of Zelda: Echoes of Wisdom</i>",
        body: "Null is trying to escape from his prison and destroy the world. Zelda has to stop Null and save the world.",
        sourcesWhereReferenced: "The Legend of Zelda: Echoes of Wisdom",
        timeline: "Downfall Timeline",
        imgUrl: "images/echoes.jpg"
    },
    {
        eventorGame: "<i>The Legend of Zelda<i>",
        body: "Ganon has been revived and a nine-year-old boy named Link has to assemble the Triforce of Wisdom and defeat him.",
        sourcesWhereReferenced: "Zelda 1",
        timeline: "Downfall Timeline",
        imgUrl: "images/zelda.jpg"
    },
    {
        eventorGame: "<i>The Legend of Zelda: Tears of the Kingdom</i>",
        body: "Five years after <i>Breath of the Wild</i>, Link and Zelda journey under Hyrule Castle and discover the source of the darkness that is Calamity Ganon, a man named Ganondorf. Link must awaken new sages to oppose him like The Hero of Time did millenia ago.",
        sourcesWhereReferenced: "The Legend of Zelda: Tears of the Kingdom",
        timeline: "Era of the Wild",
        imgUrl: "images/totk.jpg"
    },
    {
        eventorGame: "<i>Zelda II: The Adventure of Link</i>",
        body: "Link has to find the Triforce of Courage in order to awaken a sleeping princess. However, Ganon's minions are hunting him to resurrect their master.",
        sourcesWhereReferenced: "Zelda II",
        timeline: "Downfall Timeline",
        imgUrl: "images/zelda-two.jpg"
    }
];

unifiedTimeline();
allSplits();
wildEra();

function unifiedTimeline() {
    const unified = historicalEvents.filter(historicalEvent => historicalEvent.timeline.includes("Unified Timeline"));
    unified.forEach(historicalEvent => {
        let section = filter(historicalEvent);
        document.querySelector(".unifiedTimeline").appendChild(section);
    });
}
function wildEra() {
    const wild = historicalEvents.filter(historicalEvent => historicalEvent.timeline.includes("Era of the Wild"));
    wild.forEach(historicalEvent => {
        let section = filter(historicalEvent);
        document.querySelector(".botwTotk").appendChild(section);
    })
}
function filter(historicalEvent) {
    let eventSection = document.createElement("section");
    let eventdiv = document.createElement("div");
    let heading = document.createElement("h2");
    let body = document.createElement("p");
    let img = document.createElement("img");

    heading.innerHTML = `${historicalEvent.eventorGame}`;
    body.innerHTML = `${historicalEvent.body}`;
    img.setAttribute("src", historicalEvent.imgUrl);
    img.setAttribute("alt", `Image concerning ${historicalEvent.sourcesWhereReferenced}.`)
    img.setAttribute("loading", "lazy");
        
    eventdiv.appendChild(heading);
    eventdiv.appendChild(body);
    eventSection.appendChild(eventdiv)
    eventSection.appendChild(img);
    return eventSection; 
}
function allSplits() {
    document.querySelector("#postOcarina").innerHTML = "";
    document.querySelector("#postOcarina").className = "allSplits";
    let width = window.innerWidth;
    const fallenTime = document.createElement("section");
    const timelinefall = document.createElement("h2");
    const childTime = document.createElement("section");
    const timelineChild = document.createElement("h2");  
    timelinefall.innerHTML = "Downfall Timeline";
    fallenTime.appendChild(timelinefall);
    timelineChild.innerHTML = "Child Timeline";
    childTime.appendChild(timelineChild);
    const adultTime = document.createElement("section");
    const timelineAdult = document.createElement("h2");
    timelineAdult.innerHTML = "Adult Timeline";
    adultTime.appendChild(timelineAdult);

    if (width < 480) {
        fallenTime.appendChild(timelinefall);
        document.querySelector("#postOcarina").appendChild(fallenTime);
        const fallenHero = historicalEvents.filter(historicalEvent => historicalEvent.timeline.includes("Downfall Timeline"));
        fallenHero.forEach(historicalEvent => {
            filter(historicalEvent, "#postOcarina");
        });
        
        childTime.appendChild(timelineChild);
        document.querySelector("#postOcarina").appendChild(childTime);
        const childHero = historicalEvents.filter(historicalEvent => historicalEvent.timeline.includes("Child Timeline"));
        childHero.forEach(historicalEvent => {
            let eventSection = document.createElement("section");
            let heading = document.createElement("h2");
            let body = document.createElement("p");

            heading.innerHTML = `${historicalEvent.eventorGame}`;
            body.innerHTML = `${historicalEvent.eventorGame}`;

            eventSection.appendChild(heading);
            eventSection.appendChild(body);

        })
    } else {
        
        document.querySelector("#postOcarina").appendChild(fallenTime);
        document.querySelector("#postOcarina").appendChild(childTime);
        document.querySelector("#postOcarina").appendChild(adultTime);

        const splits = [
            historicalEvents.filter(historicalEvent => historicalEvent.timeline.includes("Downfall Timeline")),
            historicalEvents.filter(historicalEvent => historicalEvent.timeline.includes("Child Timeline")),
            historicalEvents.filter(historicalEvent => historicalEvent.timeline.includes("Adult Timeline"))
        ];
        splits.forEach(split => {
            const timeline = document.createElement("section");
            split.forEach(historicalEvent => {
                let section = filter(historicalEvent);
                timeline.appendChild(section);
            });
            document.querySelector("#postOcarina").appendChild(timeline);
        });

    }

}
allTimelines.addEventListener("click", (event) => {
    event.preventDefault();
    numClickAll++;
    localStorage.setItem("clicking-all", numClickAll);
    allSplits();
});
downfall.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector("#postOcarina").innerHTML = "";
    document.querySelector("#postOcarina").className = "singleTimeline";
    const downfall = historicalEvents.filter(historicalEvent => historicalEvent.timeline.includes("Downfall Timeline"));
    downfall.forEach(historicalEvent => {
        let section = filter(historicalEvent);
        document.querySelector("#postOcarina").appendChild(section);
    });
});
child.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector("#postOcarina").innerHTML = "";
    document.querySelector("#postOcarina").className = "singleTimeline";
    const child = historicalEvents.filter(historicalEvent => historicalEvent.timeline.includes("Child Timeline"));
    child.forEach(historicalEvent => {
        let section = filter(historicalEvent);
        document.querySelector("#postOcarina").appendChild(section);
    });
});
adult.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector("#postOcarina").innerHTML = "";
    document.querySelector("#postOcarina").className = "singleTimeline";
    const adult = historicalEvents.filter(historicalEvent => historicalEvent.timeline.includes("Adult Timeline"));
    adult.forEach(historicalEvent => {
        let section = filter(historicalEvent);
        document.querySelector("#postOcarina").appendChild(section);
    });
});