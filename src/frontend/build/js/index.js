async function getItem() {
//Grabs Where the objects from database will go 
    const listProductsDiv = document.getElementById("list-items"); 

  try {
    //GET
    const response = await fetch("http://localhost:8080/items/all");
    const responseJSON = await response.json();

console.log(responseJSON)
//Loops through database to display all objects
for (let i = 0; i < responseJSON.length; i++) {
  //Products represents the key of each object
  let product = responseJSON[i];
  //Creates card for each object
      let cardHTML = ` 
   
   <div class="col-sm-4 mt-3">
        <div class="card">
          <div class="card-body">
            <a href="${product.image}"><img src="${product.image}" class="img-fluid" id="img-url" width="200px" alt="..."/></a>
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.description}<br><strong>$${product.price}</strong></p>
        </div>
        </div>
        
`;
//Grabs where info will be stored and insert the card structure into the html 
listProductsDiv.innerHTML += cardHTML; //upload data into innerHTML
  
}
//Just in case it does not work
} catch (e) {
    console.log("oops " + e.message);
  }
}

//calls function
getItem();





  