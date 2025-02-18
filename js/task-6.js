function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const controlsInput = controls.querySelector("input");
const controlsCreateButton = controls.querySelector('[data-create]');
const controlsDestroyButton = controls.querySelector('[data-destroy]');

const boxesContainer = document.querySelector("#boxes"); //Styles moved to CSS

// Try different solution style from Task 2
function createBoxes(amount) {
  const startingSize = 30;  //Working values
  const sizeStep = 10;

  const tempBoxesContainer = []; //Collection of new elements

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${startingSize + sizeStep * i}px`;
    box.style.height = `${startingSize + sizeStep * i}px`;
    box.style.backgroundColor = getRandomHexColor();
    tempBoxesContainer.push(box);
  }
  return tempBoxesContainer;
}

controlsCreateButton.addEventListener("click", () => {
  if (controlsInput.value < 1 || controlsInput.value > 100) { //Input value check
    alert("Number of boxes should be between 1 and 100");
    return;
  }
  boxesContainer.innerHTML = "";
  boxesContainer.append(...createBoxes(controlsInput.value));
  controlsInput.value = undefined;
});

controlsDestroyButton.addEventListener("click", () => {
  boxesContainer.innerHTML = "";
  controlsInput.value = undefined;
});