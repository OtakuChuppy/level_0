// JavaScript: Functionality for the slider
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// s 

const cursorSmall = document.querySelector('.small');
const cursorBig = document.querySelector('.big');


const positionElement = (e)=> {
  const mouseY = e.clientY;
  const mouseX = e.clientX;

  cursorSmall.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

  cursorBig.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

}

window.addEventListener('mousemove', positionElement)