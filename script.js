const changeColorBtn = document.getElementById("change-color");
const changeShapeBtn = document.getElementById("change-shape");
const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink"];

const getRandomNumnber = (max) => {
  return Math.floor(Math.random() * max);
};
changeColorBtn.addEventListener("click", function () {
  const index = getRandomNumnber(colors.length);
  const color = colors[index];
  console.log(color);
  document.getElementById("circle").style.backgroundColor = color;
});

let flag = true;
const changeShape = () => {
  const circle = document.getElementById("circle");
  const newDiv = document.createElement("div");
  if (flag) {
    newDiv.classList.add("red-triangle");
  } else {
    newDiv.classList.add("red-square");
  }
  flag = !flag;
  circle.innerHTML = "";
  circle.appendChild(newDiv);
};

changeShapeBtn.addEventListener("click", changeShape);
changeShape();
