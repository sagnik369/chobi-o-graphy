const heroContainer = document.getElementById("hero-container");
const heroHeading = document.getElementById("hero-heading");
const heroDescription = document.getElementById("hero-description");
const customCursor = document.getElementById("custom-cursor");


const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});



window.addEventListener('mousemove', (e) => {
    customCursor.style.top = `${ e.pageY }px`;
    customCursor.style.left = `${ e.pageX }px`;
    customCursor.style.opacity = 1;
});

window.addEventListener('mouseout', () => {
    customCursor.style.opacity = 0;
});

heroContainer.addEventListener("mousemove", (e) => {
    var pointerCoorX = e.clientX;
    var pointerCoorY = e.clientY;

    heroHeading.style.transform = `translate(${ pointerCoorX * -.02 }px, ${ pointerCoorY * -.02 }px)`;
    heroDescription.style.transform = `translate(${ pointerCoorX * .02 }px, ${ pointerCoorY * .02 }px)`;
});

heroContainer.addEventListener("mouseout", () => {
    heroHeading.style.transform = `translate(0%, 0%)`;
    heroDescription.style.transform = `translate(0%, 0%)`;
});
