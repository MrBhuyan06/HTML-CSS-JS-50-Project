const bg = document.querySelector(".bg");
const text = document.querySelector(".loading-txt");
console.log(text);

var load = 0;
let init = setInterval(blurr, 30);

function blurr() {
  load++;
  console.log(load);
  if (load > 99) {
    clearInterval(init);
  }
  text.innerHTML = `${load}%`;
  text.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 20, 0)})`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
