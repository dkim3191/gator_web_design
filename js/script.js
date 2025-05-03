const mobileNavToggle = document.querySelector("#mobile-nav-toggle");
const nav = document.querySelector(".nav-links");

mobileNavToggle.addEventListener("click", () => {
    mobileNavToggle.classList.toggle("open");
    nav.classList.toggle("open");
});

// Current year
document.querySelector(".year").textContent = new Date().getFullYear();