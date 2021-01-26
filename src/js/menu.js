// Animated hamburger menu
let navbarToggle = document.getElementById("navbarToggle");
let fullNav = document.getElementById("fullNav");
navbarToggle.onclick = function() {
    navbarToggle.classList.toggle("is-active");
    fullNav.classList.toggle("active");
}