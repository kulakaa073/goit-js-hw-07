function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesContainer = document.querySelector("#boxes");
const controls = document.querySelector("#controls");
console.log(controls);
console.log(boxesContainer);

const controlsInput = controls.querySelector("input");
const controlsCreateButton = controls.querySelector('[data-create]');
console.log(controlsInput);
console.log(controlsCreateButton);
