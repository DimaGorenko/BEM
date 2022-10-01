const menuBtn = document.querySelector(".burger-menu");
const menu = document.querySelector(".sidepart");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("burger-menu_active");
  menu.classList.toggle("sidepart_active");
});
