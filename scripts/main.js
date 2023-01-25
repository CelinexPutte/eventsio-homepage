// Hamburger menu

let menu = document.querySelector("nav");
let hamburger = document.querySelector(".hamburger-menu");

hamburger.addEventListener("click", menuToggle);

function menuToggle() {
	menu.classList.toggle("nav-show");
}

// Carousel
document.querySelector(".carousel-div").addEventListener('click', scrollLeftOrRight);

function scrollLeftOrRight(uiEvent) {
 // Niet heel relevant, maar hiermee zorg je dat de afmetingen van de carrousel in CSS blijven
 // En pas in JavaScript worden opgevraagd
 var scrollWidth = this.scrollWidth;
 var offsetWidth = this.offsetWidth;
 var scrollLeft = this.scrollLeft;
 // Scroll naar links, of naar rechts, afhankelijk van waar we klikten
 var scrollXBy = (uiEvent.offsetX < offsetWidth / 2 ? -1 : 1) * offsetWidth;
 if (scrollXBy < 0 && scrollLeft == 0) {
  // Als we bij de eerste afbeelding zijn, ga dan naar de laatste
  scrollXBy = scrollWidth - offsetWidth;
 } else if (scrollXBy > 0 && Math.abs(scrollWidth - (scrollLeft + offsetWidth)) <= 1) {
  // Als we bij de laatste afbeelding zijn, ga dan naar de eerste
  scrollXBy = (-1 * scrollWidth) + scrollXBy;
 }
 this.scrollBy({
  left: scrollXBy
 });
}
