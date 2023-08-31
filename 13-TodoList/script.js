const main = document.getElementById("main-container");
const error = document.getElementById("error");
const todoValue = document.getElementById("todoname");
const todoList = [];
const submit = document.getElementById("sub-btn");
const todoBody = document.getElementById("todo-body");

//function to printTodo
function printTodo() {
  let ele = "";
  let renderEle = todoList.map((todo) => {
    return (
      ele +
      `
        <div id="todo" class="relative flex gap-2 mb-4">
        <input
          type="text"
          id="todoname"
          name="name"
          value="${todoValue.value}"
          class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-0 px-2 leading-8 transition-colors duration-200 ease-in-out"
        />
        <button id="edit-btn" class="bg-blue-400 px-3 py-1 rounded-md">
          EDIT
        </button>
        <button id="del-btn" class="bg-red-400 px-3 py-1 rounded-md">
          DEL
        </button>
      </div>
        `
    );
  });
  todoBody.innerHTML = renderEle;
  //   console.log(renderELe);
}

submit.addEventListener("click", () => {
  console.log(todoValue.value);
  if (!todoValue.value) {
    error.style.display = "block";
  } else {
    error.style.display = "none";
    let uuid = Math.trunc(Math.random() * 100 + 1);
    console.log(uuid);
    todoList.push({ id: uuid, text: todoValue.value });
    console.log(todoList);
    //printTodo
    printTodo();
  }
});
