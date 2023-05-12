const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
console.log(progress, prev, next, circles);

let currentActive = 1;

//Adding the event to increase the currentactive
next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});

// Added the event to decrease the current active
prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

//lets made a update methods

function update() {
  circles.forEach((circle, indx) => {
    if (indx < currentActive) {
      circle.classList.add("active");
      if (circle.id === "step-1") {
        document.querySelector(".box").style.display = "block";
      } else {
        document.querySelector(".box").style.display = "none";
      }
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  //   console.log(actives.length);
  //   console.log(circles);
  progress.style.width =
    ((actives.length - 2) / (circles.length - 1)) * 100 + "%";

  // Disable
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    next.disabled = false;
    prev.disabled = false;
  }
}
