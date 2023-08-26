const root = document.getElementById("root");
const main = document.getElementById("tableContainer");

window.addEventListener("load", () => {
  const html = `
 <input type="text" id="row" placeholder="give row no" />
 <input type="text" id="col" placeholder="give col no" />
 <button id="btn">Generate</button>`;
  root.insertAdjacentHTML("afterbegin", html);

  let btn = document.getElementById("btn");

  btn.addEventListener("click", () => {
    main.innerHTML = "";
    let row = Number(document.getElementById("row").value);
    let col = Number(document.getElementById("col").value);

    console.log(col, row);
    console.log("000");
    let htmTable = `<table border="1">`;
    for (let i = 0; i < row; i++) {
      htmTable += `<tr>`;
      {
        for (let j = 0; j < col; j++) {
          htmTable += `<td> Row ${i + 1} col ${j + 1} </td>`;
        }
        htmTable += `</tr>`;
      }
    }
    htmTable += `</table>`;
    main.insertAdjacentHTML("afterbegin", htmTable);
  });
});
