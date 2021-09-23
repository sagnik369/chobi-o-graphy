const heroContainer = document.getElementById("hero-container")
const heroImg = document.getElementById("hero-img")
const heroTextCont = document.getElementById("hero-text-container")
const heroHeading = document.getElementById("hero-heading")
const heroDescription = document.getElementById("hero-description")
const hr = document.getElementsByTagName("hr")

const aboutContainer = document.getElementById("about-container")
const aboutImage1Cont = document.getElementById("about-img-1-cont")
const aboutImage2Cont = document.getElementById("about-img-2-cont")
const aboutTextContainer = document.getElementById("about-text-container")


window.addEventListener('scroll', () => {

  var scrolledFromTop = document.documentElement.scrollTop;

  heroImg.style.transform = `translateY(${ scrolledFromTop * .1 }px)`

  heroTextCont.style.transform = `translateY(${ scrolledFromTop * .8 }px)`

  heroHeading.style.transform = `translateX(${ scrolledFromTop * -.5 }px)`
  heroHeading.style.opacity =  1 - (scrolledFromTop * .002)

  heroDescription.style.transform = `translateX(${ scrolledFromTop * .5 }px)`
  heroDescription.style.opacity =  1 - (scrolledFromTop * .002)

  hr[0].style.transform = `translateX(${ scrolledFromTop * -2 }px)`;
  hr[1].style.transform = `translateY(${ scrolledFromTop * -1 }px) rotate(90deg)`


  if(scrolledFromTop + window.innerHeight > aboutContainer.offsetTop) {
    aboutImage1Cont.style.transform = `translate(${ scrolledFromTop * .55 }px, ${ scrolledFromTop * .55 }px)`
    aboutImage1Cont.style.opacity = scrolledFromTop * .0015

    aboutImage2Cont.style.transform = `translate(${ scrolledFromTop * -.55 }px, ${ scrolledFromTop * -.55 }px)`
    aboutImage2Cont.style.opacity = scrolledFromTop * .0015

    aboutTextContainer.style.transform = `translateY(${ scrolledFromTop * .15 }px)`
    aboutTextContainer.style.opacity = scrolledFromTop * .0015;
  }
  

})


heroContainer.addEventListener("mousemove", (e) => {
  var pointerCoorX = e.clientX;
  var pointerCoorY = e.clientY;

  heroHeading.style.transform = `translate(${ pointerCoorX * -.02 }px, ${ pointerCoorY * -.02 }px)`
  heroDescription.style.transform = `translate(${ pointerCoorX * .02 }px, ${ pointerCoorY * .02 }px)`
})


heroContainer.addEventListener("mouseleave", () => {
  heroHeading.style.transform = `translate(0, 0)`
  heroDescription.style.transform = `translate(0, 0)`
})