function fixFooterPosition () {
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");

    const content = document.querySelector("#content");
    content.style.minHeight = `calc(100vh - ${header.offsetHeight}px - ${footer.offsetHeight}px)`
    
}

fixFooterPosition()