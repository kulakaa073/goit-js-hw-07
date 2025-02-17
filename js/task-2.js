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

//All styles were moved to css

const gallery = document.querySelector(".gallery"); //Find "gallery" item

const temp = document.createElement("ul");
images.forEach(image => { //Go through all elements in image list
  const li = document.createElement("li");  //Create "li" element
  li.classList.add("image");  //Add "image" CSS class

  const img = document.createElement("img");  //Create "img" element
  img.src = image.url;  //Set attributes
  img.alt = image.alt;
  
  li.append(img);  //Add "img" in to "li"
  
  temp.append(li); //Add "li" to temp ul
});

gallery.innerHTML = temp.innerHTML; //replace gallery contents with temp html