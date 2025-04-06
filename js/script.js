// Disable transitions on page resize
let resizeTimer;
window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
    }, 150);
});

const mobileNavToggle = document.querySelector("#mobile-nav-toggle");
const nav = document.querySelector(".nav-links");

mobileNavToggle.addEventListener("click", () => {
    mobileNavToggle.classList.toggle("open");
    nav.classList.toggle("open");
});

// Current year
document.querySelector(".year").textContent = new Date().getFullYear();