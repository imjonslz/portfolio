"use strict";
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("main-menu");
const iconMenu = document.getElementById("iconMenu");
const iconClose = document.getElementById("iconClose");
if (toggle && menu && iconMenu && iconClose) {
    toggle.addEventListener("click", () => {
        // Toggle the 'open' class on the menu and update the aria-expanded attribute
        const isOpen = menu.classList.toggle("open");
        toggle.setAttribute("aria-expanded", isOpen.toString());
        // Toggle the display of the menu and icons
        iconMenu.style.display = isOpen ? "none" : "flex";
        iconClose.style.display = isOpen ? "flex" : "none";
    });
}
