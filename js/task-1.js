//const categories = document.querySelector("#categories");
//const items = categories.querySelectorAll(".item");
const items = document.querySelectorAll(".item");   //Find all elements with an "item" CSS selector
console.log(`Number of categories: ${items.length}`);
items.forEach(item => { //Since its an array, use forEach 
    const itemHeader = item.querySelector("h2");    //Find the header of an item
    console.log(`Category: ${itemHeader.textContent}`);
    const itemList = item.querySelectorAll("li");   //Find all "li" in the item element
    console.log(`Elements: ${itemList.length}`);
});

