const box = document.querySelectorAll(".box");

window.addEventListener("scroll", scrolling);

scrolling();
function scrolling() {
  //get the trigger point basically the point where the animation start
  //   console.log(window.innerHeight);
  const triggerPoint = (window.innerHeight * 4) / 5;
  //   console.log(triggerPoint);
  box.forEach((box) => {
    const boxPostionTop = box.getBoundingClientRect().top;
    // console.log(boxPostionTop);
    if (triggerPoint > boxPostionTop) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
