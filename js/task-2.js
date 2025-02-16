const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];

//Element prototype
/* <li class="image">
  <img src="img/image-1.jpg" alt="Image 1"/>
</li> */

const gallery = document.querySelector(".gallery"); //Find "gallery" item
gallery.style.display = "flex"; //Add some styles
gallery.style.flexWrap = "wrap";
gallery.style.gap = "48px 24px";
gallery.style.maxWidth = "1128px";
gallery.style.margin = "0 auto";

const test = [];
//Is this counts as one adding operation? Dunno, need clarification
images.forEach(image => { //Go through all elements in image list
  const li = document.createElement("li");  //Create "li" element
  li.classList.add("image");  //Add "image" CSS class
  li.style.display = "flex";  //Add some styles
  li.style.alignItems = "center";
  li.style.justifyContent = "center";
  li.style.maxWidth = "300px";
  li.style.maxHeight = "360px";

  const img = document.createElement("img");  //Create "img" element
  img.src = image.url;  //Set attributes
  img.alt = image.alt;
  img.style.width = "100%";  //Add some styles
  img.style.height = "100%";
  img.style.display = "box";
  
  li.append(img);  //Add "img" in to "li"

  gallery.append(li);  //Add "li" to "gallery"
});