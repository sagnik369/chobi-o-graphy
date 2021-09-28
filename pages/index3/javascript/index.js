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