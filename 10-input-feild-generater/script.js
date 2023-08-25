const root = document.querySelector("#root");
const main = document.querySelector("#output");
const option = document.getElementById("option");
// console.log(option.value);

// console.log(select[0].value);
window.addEventListener("load", () => {
  const html = `
 <select name="option" id="select">
 <option value="text" id="option" >Text</option>
 <option value="email" selected>Email</option>
 <option value="password">password</option>
 <option value="range">range</option>
 <option value="number">number</option>
</select>
<button id="btn">GENERATE</button>
<input type="text" name="" id="place" />
 `;
  root.insertAdjacentHTML("afterbegin", html);
  const btn = document.getElementById("btn");
  const place = document.getElementById("place");
  let placeHolder = "";
  place.addEventListener("input", (e) => {
    // console.log(e.value);
    placeHolder += place.value;
  });
  console.log(placeHolder);
  //   console.log(btn);
  const select = document.getElementById("select");

  btn.addEventListener("click", () => {
    const maindiv = document.createElement("div");
    // console.log(place.value);
    const html = `
    <div id="output">
    <input type="${select.value}" placeholder="${place.value}" />
  </div>`;
    // console.log(select[0]);
    // console.log(select[0]);
    // console.log(select.value);
    if (select.value === "text") {
      //   main.removeChild(0);
      main.innerText = "";
      main.insertAdjacentHTML("afterbegin", html);
      console.log("trigger");
    } else if (select.value === "password") {
      main.innerText = "";
      main.insertAdjacentHTML("afterbegin", html);
      console.log("trigger");
    } else if (select.value === "email") {
      //   main.removeChild(0);
      main.innerText = "";

      main.insertAdjacentHTML("afterbegin", html);
      console.log("trigger");
    } else if (select.value === "range") {
      //   main.removeChild(0);
      main.innerText = "";

      main.insertAdjacentHTML("afterbegin", html);
      console.log("trigger");
    } else if (select.value === "number") {
      //   main.removeChild(0);
      main.innerText = "";

      main.insertAdjacentHTML("afterbegin", html);
      console.log("trigger");
    } else if (select.value === "file") {
      //   main.removeChild(0);
      main.innerText = "";

      main.insertAdjacentHTML("afterbegin", html);
      console.log("trigger");
    } else {
      alert("please provide value");
    }
  });
});
