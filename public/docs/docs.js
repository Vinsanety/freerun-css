// Navigation Menu Toggles (Mobile)
function toggleDocsNav() {
  var docsNav = document.querySelector(".docs_nav");
  docsNav.classList.toggle("docs_nav--open");
  docsNav.classList.toggle("open");
}
// Toggle on menu hamburger click
var menuToggle = document.querySelector(".menu-toggle");
menuToggle.addEventListener("click", () => {
  if (window.matchMedia("(max-width: 600px)").matches) {
    toggleDocsNav();
    console.log("menuToggle");
  }
});
// Toggle on menu item click
var menuItemsToggle = document.querySelector(".docs_menu-items-toggle");
menuItemsToggle.addEventListener("click", () => {
  if (window.matchMedia("(max-width: 600px)").matches) {
    toggleDocsNav();
    console.log("menuItemsToggle");
  }
});
// Close menu when clicking outside of it
document.addEventListener("click", (event) => {
  var docsNav = document.querySelector(".docs_nav");
  var menuToggle = document.querySelector(".menu-toggle");
  var menuItemsToggle = document.querySelector(".docs_menu-items-toggle");

  if (
    !docsNav.contains(event.target) &&
    !menuToggle.contains(event.target) &&
    !menuItemsToggle.contains(event.target) &&
    docsNav.classList.contains("docs_nav--open")
  ) {
    toggleDocsNav();
  }
});

// Footer Copyright Year
document.getElementById("copyright-year").innerHTML = new Date().getFullYear();
