function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const controlsInput = controls.querySelector("input");
const controlsCreateButton = controls.querySelector('[data-create]');
const controlsDestroyButton = controls.querySelector('[data-destroy]');

controlsCreateButton.addEventListener("click", () => { 
  const numberOfBoxes = controlsInput.value;
  if (numberOfBoxes < 1 || numberOfBoxes > 100) {
    alert("Number of boxes should be between 1 and 100");
    return;
  }
  const boxesContainer = document.querySelector("#boxes");
  const startingSize = 30;
  const sizeStep = 10;
  const tempBoxesContainer = document.createElement("div");
  tempBoxesContainer.setAttribute("id", "boxes");
  tempBoxesContainer.style.display = "flex";
  tempBoxesContainer.style.flexDirection = "row";
  tempBoxesContainer.style.flexWrap = "wrap";
  tempBoxesContainer.style.gap = "44px 44px";
  tempBoxesContainer.style.alignContent = "baseline";
  for (let i = 0; i < numberOfBoxes; i++) {
    const box = document.createElement("div");
    box.style.width = `${startingSize + sizeStep * i}px`;
    box.style.height = `${startingSize + sizeStep * i}px`;
    box.style.backgroundColor = getRandomHexColor();
    tempBoxesContainer.append(box);
  }
  boxesContainer.replaceWith(tempBoxesContainer);
});

controlsDestroyButton.addEventListener("click", () => {
  document.querySelector("#boxes").innerHTML = "";
});