var typed = new Typed("#element", {
  strings: ["Web Developer", "Python Developer"],
  typeSpeed: 50,
});

let currentSlide = 0;
const slides = document.querySelectorAll(".image");
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");

function showSlide(n) {
  slides[currentSlide].classList.remove("first"); // Remove "first" class from the current fixed image
  slides[currentSlide].style.display = "none";
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add("first"); // Add "first" class to the new fixed image
  slides[currentSlide].style.display = "block";
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

slides[currentSlide].classList.add("first");
slides[currentSlide].style.display = "block";
// Automatic slide change interval (adjust as needed)
setInterval(nextSlide, 3000); // Change slide every 3 seconds
// Change slide every 3 seconds

ScrollReveal({
  reset: true,
  distance: "100px",
  duration: 2000,
  delay: 100,
});
ScrollReveal().reveal(".btn,.secondsection .right,.contact-form ", { origin: "right" });
ScrollReveal().reveal(".leftsection h6 ,.thirdsection h1, .fourthsection h1 ", {
  origin: "top",
});

ScrollReveal().reveal(".leftsection h2,.secondsection .left, .email .contact", {
  origin: "left",
});
ScrollReveal().reveal(".rightsection img,.fourthsection .block", { origin: "bottom" });

// Get references to the menu icon and menu
const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("menu");
