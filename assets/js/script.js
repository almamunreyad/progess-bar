// conflict bug solution
// var $ = jQuery.noConflict();

// $(function () {

// *********** expand using jquey ************

// });

const progressbar = document.getElementById("progress");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const circle = document.querySelectorAll(".progress-wrapper__circle");

var currentActive = 1;
nextBtn.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circle.length) {
    currentActive = circle.length;
  }
  update();
  //   console.log(currentActive);
});

prevBtn.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
  //   console.log(currentActive);
});


function update() {
    // active class add in circle
    circle.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    });


    // progress bar update
    var activeCircle = document.querySelectorAll(".active");
    progressbar.style.width =
    ((activeCircle.length - 1) / (circle.length - 1)) * 100 + "%";
    // console.log(activeCircle.length);


    // next prev  button update
    if (currentActive === 1) {
        prevBtn.disabled = true;
    } else if (currentActive === circle.length) {
        nextBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
}