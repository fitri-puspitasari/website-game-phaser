const featuresButton = document.querySelector('.navbar__features-button');
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const content = document.querySelector("#content");

export let isHamMenuShow = false;
// media query
function changeNavbarUI(x) {
    isHamMenuShow = x.matches
}
let mqMaxWidth768 = window.matchMedia("(max-width: 768px)")
changeNavbarUI(mqMaxWidth768);
mqMaxWidth768.addEventListener("change", function() {
    changeNavbarUI(mqMaxWidth768);
});

function fixFooterPosition() {
    content.style.minHeight = `calc(100vh - ${header.offsetHeight}px - ${footer.offsetHeight}px)`
}

fixFooterPosition()

function fixfeatureContainerPosition() {
    const featureContainer = document.querySelector('.navbar__feature-container');
    // console.log(isHamMenuShow)
    if (isHamMenuShow) {
        const navbar = document.querySelector(".header__navbar")
        featureContainer.style.top = (featuresButton.offsetTop) + "px";
        featureContainer.style.left = navbar.offsetWidth + "px";

    } else {
        featureContainer.style.top = (featuresButton.offsetTop + featuresButton.offsetHeight) + "px";
        featureContainer.style.left = (featuresButton.offsetLeft + (featuresButton.offsetWidth/2) - (featureContainer.offsetWidth/2)) + "px";

    }
    
}

fixfeatureContainerPosition()

function fixNavButtons() {
    const mainLinks = document.querySelectorAll('.nav-main-link__container');
    mainLinks.forEach((button) => {
        button.style.width = (button.offsetWidth + 10) + 'px';
        button.style.height = (button.offsetHeight + 10) + 'px';
        button.style.textAlign = "center";
    })
    fixFeatureText();
}

fixNavButtons();

function fixFeatureText() {
    const featureText = document.querySelector(".feature-text");
    featureText.style.width = "";
    featureText.style.height = "";
    featureText.style.width = (featureText.offsetWidth + 12) + 'px';
}




export function fixNonScrollPage() {
    const container = document.querySelectorAll('.nonScrollPage');
    // console.log(container)
    if (container) {
        container.forEach(e => {
            e.style.minHeight = `calc(100vh - ${header.offsetHeight}px - ${footer.offsetHeight}px)`
        })
    }
    // console.log(document.querySelectorAll(".nonScrollPage"))
}

fixNonScrollPage();

export function fixButtonUI() {
    fixfeatureContainerPosition();
    fixFeatureText();
}