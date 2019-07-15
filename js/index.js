// data resources
let dataResource = [
    {
        heading: "Eco Friendly",
        bodyText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis harum officia a, fugiat asperiores eaque vero nesciunt deserunt voluptas saepe!Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis harum officia a, fugiat asperiores eaque vero nesciunt deserunt voluptas saepe!Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis harum officia a, fugiat asperiores eaque vero nesciunt deserunt voluptas saepe!",
        imgUrl: "./img/environment.png"
    },

    {
        heading: "Renewable Energy",
        bodyText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis harum officia a, fugiat asperiores eaque vero nesciunt deserunt voluptas saepe!Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis harum officia a, fugiat asperiores eaque vero nesciunt deserunt voluptas saepe!Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis harum officia a, fugiat asperiores eaque vero nesciunt deserunt voluptas saepe!",
        imgUrl: "./img/recycle.png"
    },

    {
        heading: "Solar Energy",
        bodyText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis harum officia a, fugiat asperiores eaque vero nesciunt deserunt voluptas saepe!Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis harum officia a, fugiat asperiores eaque vero nesciunt deserunt voluptas saepe!Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis harum officia a, fugiat asperiores eaque vero nesciunt deserunt voluptas saepe!",
        imgUrl: "./img/solar-power.jpg"
    },
];

let btns = document.querySelectorAll("button");
let content = document.querySelector(".content");

function clickEvent(x2) {
    let buttonText = x2.target.innerText;

    if (buttonText === "Solution 1") {
        content.innerHTML = `<div class="col-left"><img src="${dataResource[0].imgUrl}" alt="Eco friendly"></div>
                             <div class="col-right"><h1>${dataResource[0].heading}</h1><p>${dataResource[0].bodyText}</p></div>`;
    } else if (buttonText === "Solution 2") {
        content.innerHTML = `<div class="col-left">
                            <img src="${dataResource[1].imgUrl}" alt="Renewable Energy"></div>
                            <div class="col-right"><h1>${dataResource[1].heading}</h1><p>${dataResource[1].bodyText}</p></div>`;
    } else {
        content.innerHTML = `<div class="col-left">
                            <img src="${dataResource[2].imgUrl}" alt="Solar Energy"></div>
                            <div class="col-right"><h1>${dataResource[2].heading}</h1><p>${dataResource[2].bodyText}</p></div>`;
    }
}

for (let index = 0; index < btns.length; index++) {
    btns[index].addEventListener("click", clickEvent);
}

const links = document.querySelectorAll(".action-trigger button");

function handleEventClick(eventObject) {
    for (let x = 0; x < links.length; x++) {
        if (links[x].hasAttribute("id")) {
            links[x].removeAttribute("id");
        }
    }
    let selectedNav = eventObject.target;
    selectedNav.setAttribute("id", "active");
}

for (let passTo of links) {
    passTo.addEventListener("click", handleEventClick);
}