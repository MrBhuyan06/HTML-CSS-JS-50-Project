const number = document.getElementById("number");
const password = document.getElementById("password");
const name = document.getElementById("name");
const btn = document.getElementById("btn");
const form = document.getElementById("form");
// const demo = document.getElementById("demo");
// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log(number.value, password.value, name.value);
// });
// demo.addEventListener("click", () => {
//   console.log("click for demo 1");
// });
// demo.addEventListener("click", () => {
//   // console.log('click for demo 1');
//   console.log("demo is click 2 function");
// });
// function demo() {
//   console.log("demo is trigger");
// }
// function demo2() {
//   console.log("demo is trigger");
// }
// function formHandler(e) {
//   e.preventDefault();
//   console.log(e);
//   //   console.log(e.target.name);
//   //   console.log("hello");
// }
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target);
});
