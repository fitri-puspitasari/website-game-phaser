// import { updateNav } from "./ui.js";

import { fixButtonUI, fixNonScrollPage } from "./fix-ui.js";


// let activePage = "home";    // home simple-games edu-games tools blog contact

// updateNav(activePage);






export function updatePage(activePage) {
    // console.log(activePage);
    updateNav(activePage);
}

function updateNav(activePage) {
    const mainLinks = document.querySelectorAll('.nav-main-link');
    mainLinks.forEach(btn => {
        if(btn.classList.value.includes("nav-main__active")) {
            btn.classList.remove("nav-main__active");
        }
    });
    activePage = (activePage == "/") ? "home" : activePage.slice(1);
    const activeLink = document.querySelector(`.nav-link__${activePage}`)
    if(activeLink.classList.value.includes("nav-main-link")) {
        activeLink.classList.add("nav-main__active");
    }
    updateFeatureContainer(false);
    fixNonScrollPage();
}

// navbar - button feature
const featuresButton = document.querySelector(".navbar__features-button");
const featureContainer = document.querySelector('.navbar__feature-container');
const featureText = document.querySelector(".feature-text");

featuresButton.addEventListener("click", () => { 
    updateFeatureContainer(featureContainer.style.display == "none");
    fixButtonUI();
})

function updateFeatureContainer(isOpenContainer) {
    featureContainer.style.display = isOpenContainer ? "flex" : "none";
    featuresButton.innerHTML = `<span class="feature-text">Feature</span>&#1120${isOpenContainer ? '5' : '6'}`;
    featureText.style.fontWeight = isOpenContainer ? "bold !important" : "normal";
    featuresButton.className = `navbar__features-button button-like-a ${isOpenContainer ? 'features-button__active' : ''}`;
}
