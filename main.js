const toggleButton = document.querySelector(".toggle-button");
const toggleButtonOpen = document.querySelector(".toggle-button-open");
const mobileNav = document.querySelector(".mobile-nav");

toggleButton.addEventListener("click", openMobileNav);
toggleButtonOpen.addEventListener("click", closeMobileNav);

function openMobileNav() {
    mobileNav.classList.add("open");
}

function closeMobileNav() {
    mobileNav.classList.remove("open");
}