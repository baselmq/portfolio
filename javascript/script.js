const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const darkMode = document.getElementById("dark-mode");
const darkModeMobile = document.getElementById("dark-mode-mobile");
const copyrightYear = document.getElementById("copyright-year");
const body = document.body;

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// ----------------------*** Dark Mode ***----------------------
darkMode.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
  setThemeInLocalStorage();
});
darkModeMobile.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
  setThemeInLocalStorage();
});

function setThemeInLocalStorage() {
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("dark-mode", "dark");
  } else {
    localStorage.setItem("dark-mode", "light");
  }
}

window.addEventListener("load", function () {
  if (localStorage.length == 0) {
    localStorage.setItem("dark-mode", "light");
  } else {
    const value = localStorage.getItem("dark-mode");
    value == "dark"
      ? body.classList.add("dark-mode")
      : body.classList.remove("dark-mode");
  }
});
// ----------------------*** copyright ***----------------------
const date = new Date();
const year = date.getFullYear();
copyrightYear.innerText = `${year}`;
