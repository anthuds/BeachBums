
import { postNewItem } from "./BeachBumItems.js";

//Grabs Form
const form = document.getElementById("form");

//Grabs Input Fields
const name = document.getElementById("name");
const description = document.getElementById("description");
const image = document.getElementById("image");
const price = document.getElementById("price");


//When Form Button is clicked input is sent to POST
form.addEventListener("submit", (event) => {
  event.preventDefault();


  postNewItem(
    name.value,
    description.value,
    image.value,
    price.value
  );

  // Clears Form
  name.value = "";
  description.value = "";
  image.value = "";
  price.value = "";
  
});


