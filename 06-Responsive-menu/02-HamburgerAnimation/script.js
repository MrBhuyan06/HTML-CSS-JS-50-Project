const menu = document.querySelector(".menu-div");
const menu2 = document.querySelector(".menu-div2");
menu.addEventListener("click", () => {
  menu.classList.toggle("open");
});
menu2.addEventListener("click", () => {
  menu2.classList.toggle("open");
});
