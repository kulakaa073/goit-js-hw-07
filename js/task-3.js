const inputField = document.querySelector("#name-input");   //Find input field
const outputSpan = document.querySelector("#name-output");  //Find span to change the name

inputField.addEventListener("input", inputChange);  //Add event listener

function inputChange(event) {   //Event listener callback
    let inputContent = event.target.value.trim();   //Remove spaces from input content
    inputContent = inputContent.length > 0 ? inputContent : "Anonymous";    //Check if input not empty
    outputSpan.textContent = inputContent;  //Change span to input content
}