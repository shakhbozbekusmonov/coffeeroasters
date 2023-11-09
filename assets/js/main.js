var elHiddenHeader = document.querySelector(".hidden-header");
var elMenuBtn = document.querySelector(".site-header__menu-btn");
var elMenuIcon = document.querySelector(".site-header__menu-icon");

var icon = false;

elMenuBtn.addEventListener("click", function () {
  elHiddenHeader.classList.toggle("show-header");

  if (!icon) {
    elMenuIcon.src = "./assets/icons/menu-close.svg";
    icon = true;
  } else {
    elMenuIcon.src = "./assets/icons/menu-open.svg";
    icon = false;
  }
});
