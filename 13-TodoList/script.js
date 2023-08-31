const main = document.getElementById("main-container");
const error = document.getElementById("error");
const todoValue = document.getElementById("todoname");
let todoList = [];
const submit = document.getElementById("sub-btn");
const todoBody = document.getElementById("todo-body");

//function to printTodo

if (todoBody.innerHTML === "") {
  const html =
    ' <p class="bg-red-200 text-center p-2 rounded-md font-bold">No data</p>';

  todoBody.innerHTML = html;
}
function printTodo() {
  let ele = "";
  let renderEle = todoList.map((todo) => {
    return (
      ele +
      `
        <div id="${todo.id}" class="relative flex gap-2 mb-4">
        <input
          type="text"
          id=""
          name="name"
          value="${todo.text}"
          class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-0 px-2 leading-8 transition-colors duration-200 ease-in-out"
        />
        <button id="edit-btn" class="bg-blue-400 px-3 py-1 rounded-md">
          EDIT
        </button>
        <button id="del-btn" onclick="deleteTodoItem(${todo.id})" class="bg-red-400 px-3 py-1 rounded-md del-btn">
          DEL
        </button>
      </div>
        `
    );
  });
  todoBody.innerHTML = renderEle.join("");
  console.log(todoBody.innerHTML);
  if (todoBody.innerHTML === "") {
    const html =
      ' <p class="bg-red-200 text-center p-2 rounded-md font-bold">No data</p>';

    todoBody.innerHTML = html;
  }
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

// //delete the particular todo
function deleteTodoItem(id) {
  todoList = todoList.filter((todo) => {
    return todo.id != id;
  });
  printTodo();
}
