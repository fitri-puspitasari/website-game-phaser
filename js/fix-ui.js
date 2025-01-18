const featuresButton = document.querySelector('.navbar__features-button');
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const content = document.querySelector("#content");

function fixFooterPosition() {
    content.style.minHeight = `calc(100vh - ${header.offsetHeight}px - ${footer.offsetHeight}px)`
}

fixFooterPosition()

function fixfeatureContainerPosition() {
    const featureContainer = document.querySelector('.navbar__feature-container');
    const distanceY = 0;    // px
    featureContainer.style.top = (featuresButton.offsetTop + featuresButton.offsetHeight + distanceY) + "px";
    featureContainer.style.left = (featuresButton.offsetLeft + (featuresButton.offsetWidth/2) - (featureContainer.offsetWidth/2)) + "px";
}

fixfeatureContainerPosition()

function fixNavButtons() {
    const mainLinks = document.querySelectorAll('.nav-main-link');
    mainLinks.forEach((button) => {
        button.style.width = (button.offsetWidth + 10) + 'px';
        button.style.textAlign = "center";
    })
    fixFeatureText();
}

function fixFeatureText() {
    const featureText = document.querySelector(".feature-text");
    featureText.style.display = "inline-block";
    featureText.style.width = (featureText.offsetWidth + 10) + 'px';
    featureText.style.textAlign = "center";
}

fixNavButtons();

export function fixMaintenancePage() {
    const mainContainer = document.querySelector('.maintenance-page__container');
    console.log(mainContainer)
    if (mainContainer) {
        mainContainer.style.minHeight = `calc(100vh - ${header.offsetHeight}px - ${footer.offsetHeight}px)`

    }
}

fixMaintenancePage();

export function fixButtonUI() {
    fixfeatureContainerPosition();
    fixFeatureText();
}