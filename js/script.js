// Header Nav un tanto Dummy
// --------------------------------------------------

var menu = document.querySelector(".menu")
var ham = document.querySelector(".ham")
var closed = document.querySelector(".closed")
var bars = document.querySelector(".bars")

ham.addEventListener("click", toggleMenu)

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closed.style.display = "none";
    bars.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closed.style.display = "block";
    bars.style.display = "none";
  }
}

var menuLinks = document.querySelectorAll(".menuLink")

menuLinks.forEach(
  function (menuLink) {
    menuLink.addEventListener("click", toggleMenu)
  }
)

// Slider
// --------------------------------------------------
$('.imtheone').split({
    theme: 'fade-in-out,right-to-left,bottom-to-top-fade-out,fade-in-out,fade-in-out',
    delay: '80',
    infinite: 'true'
  });