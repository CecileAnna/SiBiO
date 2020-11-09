let menuButton = document.getElementById("menu-button");

let topHeader = document.getElementById("nav-show");

menuButton.addEventListener("click", ShowMenu);
menuButton.addEventListener("ontouchstart", ShowMenu);

function ShowMenu() {
    topHeader.classList.toggle("header__dropdown--inactive");
    topHeader.classList.toggle("header__dropdown-active");

    menuButton.classList.toggle("fa-chevron-circle-up");
    menuButton.classList.toggle("fa-chevron-circle-down");    
};