const toggle = document.getElementById("menu-toggle") as HTMLButtonElement | null;
const menu = document.getElementById("main-menu") as HTMLUListElement | null;
const iconMenu = document.getElementById("iconMenu") as HTMLElement | null;
const iconClose = document.getElementById("iconClose") as HTMLElement | null;

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