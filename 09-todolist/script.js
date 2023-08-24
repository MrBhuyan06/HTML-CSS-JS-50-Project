window.addEventListener("load", () => {
  let form = document.querySelector("#input-from");
  let inputfrom = document.querySelector("#input-text");
  let list_ele = document.querySelector("#list-task");
  //   console.log(form);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let taskvalue = inputfrom.value;

    const html = `
    <div id="task">
    <div id="contain">
     
      <input type="text' value="${taskvalue}"  />
    </div>
    <div>
      <button>Edit ${taskvalue}</button>
      <button>Delete</button>
    </div>
  </div>

    `;
    console.log(html);
    let ele = list_ele.insertAdjacentHTML("afterbegin", html);
    console.log(ele);
  });
});
// let btn = document.querySelector("#btn");
