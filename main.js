// Hamburger menu

// Selecting the required elements from the HTML document
const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menuBtn");
const closeMenu = document.getElementById("closeBtn");

// showing menu
function showMenu() {
  navLinks.style.right = "0";
}

// hiding menu
function hideMenu() {
  navLinks.style.right = "-200px";
}

// Event listeners for the menu button and close button
menuBtn.addEventListener("click", showMenu);

closeMenu.addEventListener("click", hideMenu);
