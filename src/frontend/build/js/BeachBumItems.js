export default class BeachBumItems {
  constructor(currentId = 0) {
    //Creates Empty array where item will be pushed into 
    this.newItems = [];
    this.currentId = currentId;
  }

  addItem(name, description, image, price) {
    const item = {
      id: this.currentId++,
      name: name,
      description: description,
      image: image,
      price: price
    };
    this.newItems.push(item);
  }
}


//Posts the new Item received from form 
export function postNewItem(name, description, image, price) {
  const data = { name, description, image, price };

  fetch("http://localhost:8080/item/all", {
    method: "POST", 
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Your Data:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
