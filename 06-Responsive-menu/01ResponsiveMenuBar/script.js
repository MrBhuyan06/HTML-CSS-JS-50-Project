const bar = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

// nav.addEventListener("click", () => {
//   nav.classList.toggle("open");
// });

bar.addEventListener("click", () => {
  bar.classList.toggle("open");
  nav.classList.toggle("open");
});
