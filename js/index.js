// import { updateNav } from "./ui.js";

import { fixButtonUI, fixNonScrollPage, isHamMenuShow } from "./fix-ui.js";


// let activePage = "home";    // home simple-games edu-games tools blog contact

// updateNav(activePage);



let isNavbarShow = false;



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
    if (isHamMenuShow) {
        isNavbarShow = false;
        updateNavbarPopup();
    }
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
    // featuresButton.innerHTML = `<p class="feature-text">Feature</p><p>&#1120${isOpenContainer ? '5' : '6'}</p>`;
    const featureIcon = document.querySelector(".feature-icon");
    if (!isHamMenuShow) {
        featureIcon.innerHTML = `<p>&#1120${isOpenContainer ? '5' : '6'}</p>`
    } else {
        featureIcon.innerHTML = `<p>&#1120${isOpenContainer ? '7' : '8'}</p>`
    }
    
    featureText.style.fontWeight = isOpenContainer ? "bold !important" : "normal";
    featuresButton.className = `navbar__features-button button-like-a ${isOpenContainer ? 'features-button__active' : ''}`;
}


const menuButton = document.querySelector(".header__menu-button")
menuButton.addEventListener("click", function() {
    isNavbarShow = !isNavbarShow;
    updateNavbarPopup();
})

const exitMenuButton = document.querySelector(".navbar__exit-button")
exitMenuButton.addEventListener("click", function() {
    isNavbarShow = !isNavbarShow;
    updateNavbarPopup();
})

function updateNavbarPopup() {
    const navbar = document.querySelector(".header__navbar");
    console.log(isNavbarShow)
    const widthNavbar = navbar.offsetWidth + "px"
    console.log(navbar)
    if (isNavbarShow) {
        // navbar.style.display = "flex";
        // navbar.style.opacity = "1";
        // navbar.style.left = "0";
        // navbar.style.left = "-" + widthNavbar;
        // navbar.style.transform = `translateX(${widthNavbar})`;
        // navbar.style.left = 0
        navbar.style.transition = "all 0.2s ease-in";
        navbar.style.transform = `translateX(0)`;

    } else {
        // navbar.style.display = "none";
        // navbar.style.opacity = "0";
        // navbar.style.left = "-" + widthNavbar;
        navbar.style.transition = "";
        navbar.style.transform = `translateX(${'-'+widthNavbar})`;

    }
    fixButtonUI();

}

