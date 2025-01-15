function fixFooterPosition () {
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");

    const main = document.querySelector("main");
    main.style.minHeight = `calc(100vh - ${header.offsetHeight}px - ${footer.offsetHeight}px)`
    
}

fixFooterPosition()