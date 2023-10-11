var elem = document.querySelector(".main-carousel");
var flkty = new Flickity(elem, {
  // options
  cellAlign: "center",
  contain: true,
  prevNextButtons: false,
  contain: true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity(".main-carousel", {
  // options
});

// BURGERMENU

var burgerMenu = document.getElementById("burger-menu");
var overlay = document.getElementById("header-nav");
burgerMenu.addEventListener("click", function () {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});
