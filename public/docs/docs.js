// Navigation Mobile Menu
var menuToggle = document.querySelector(".menu-toggle");
menuToggle.addEventListener("click", () => {
  var docsNav = document.querySelector(".docs_nav");
  docsNav.classList.toggle("docs_nav--open");
  docsNav.classList.toggle("open");
  console.log("menuToggle");
});

// Footer Copyright Year
document.getElementById("copyright-year").innerHTML = new Date().getFullYear();
