function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBackgroundColorButton = document.querySelector(".change-color");  //Find the color change button
const currentColorNotification = document.querySelector(".color");  //Find the color notif span

changeBackgroundColorButton.addEventListener("click", () => { //Add event listener 
  const backgroundColor = getRandomHexColor();  //Get a new background color
  document.body.style.backgroundColor = backgroundColor; //Set the background color
  currentColorNotification.textContent = `${backgroundColor}`;  //Change notif text
});