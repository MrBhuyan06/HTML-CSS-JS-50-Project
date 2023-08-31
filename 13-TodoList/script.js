const main = document.getElementById("main-container");
const error = document.getElementById("error");
const todoValue = document.getElementById("todoname");
const todoList = [];
const submit = document.getElementById("sub-btn");
submit.addEventListener("click", () => {
  console.log(todoValue.value);
  if (!todoValue.value) {
    error.style.display = "block";
  } else {
    error.style.display = "none";
  }
});
