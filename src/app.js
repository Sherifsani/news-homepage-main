const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".overlay");

mobileMenu.style.transform = "translateX(100%)";
overlay.style.transform = "translateX(-100%)";
console.log(mobileMenu.style.transform);
function mobileMenuToggler() {
  if (
    mobileMenu.style.transform == "translateX(100%)" &&
    overlay.style.transform == "translateX(-100%)"
  ) {
    openMenu.addEventListener("click", () => {
      mobileMenu.style.transform = "translateX(0%)";
      overlay.style.transform = "translateX(0%)";
    });
    closeMenu.addEventListener("click", () => {
      mobileMenu.style.transform = "translateX(100%)";
      overlay.style.transform = "translateX(-100%)";
    });
    overlay.addEventListener("click", () => {
      mobileMenu.style.transform = "translateX(100%)";
      overlay.style.transform = "translateX(-100%)";
    });
  }
}
mobileMenuToggler();
