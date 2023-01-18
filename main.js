// Hamburger menu

let menu = document.querySelector("nav");
let hamburger = document.querySelector(".hamburger-menu");

hamburger.addEventListener("click", menuToggle);

function menuToggle() {
	menu.classList.toggle("nav-show");
}

// Carousel
