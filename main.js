// Hamburger menu

let menu = document.querySelector("nav");
let hamburger = document.querySelector(".hamburger-menu");

hamburger.addEventListener("click", menuToggle);

function menuToggle() {
	menu.classList.toggle("nav-show");
}

// Carousel
document.querySelector(".carousel-a").addEventListener('click', scrollLeftOrRight);

function scrollLeftOrRight(uiEvent) {

 if (uiEvent.target.nodeName == 'A' && uiEvent.offsetX == 0 && uiEvent.offsetY == 0) {
  // Keyboard enter; de muis x en y positie zijn dan altijd 0.
  // In dat geval, gewoon de link volgen
  return;
 } else if (uiEvent.target.nodeName == 'IMG') {
  // Een click op een deel van de <img>, niet op de ::before en ::after pijltjes
  // (want die zijn onderdeel van de <a>)
  // In dat geval, ook gewoon de link volgen
  return;
 }
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
 // Volg de <a href=""> niet als we hier zijn gekomen..
 uiEvent.preventDefault();
}

// Indicator carousel

document.querySelector('.carousel-a').addEventListener('click', scrollLeftOrRight);

var carrousel = document.querySelector('.carousel-a');
var indicator = document.querySelector('.carousel-indicator-span');

var carrouselScrollWidth = carrousel.scrollWidth;
var totalItems = Math.round(carrouselScrollWidth / carrousel.offsetWidth);
var active = 0;
var activeEl = indicator.querySelector('.is-active');

carrousel.addEventListener('scroll', function(uiEvent) {
 var newActive = Math.round(this.scrollLeft / carrouselScrollWidth * totalItems);
 if (active != newActive) {
  activeEl.classList.remove('is-active');
  activeEl = indicator.children[newActive];
  activeEl.classList.add('is-active');
  active = newActive;
 }
 if (totalItems > 6) {
  // TODO ;)
 }
});