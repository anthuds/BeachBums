async function getItem() {
  const name = document.getElementById("name");
  const desc = document.getElementById("desc");
  const image = document.getElementById("image");
  const price = document.getElementById("price");

    const listProductsDiv = document.getElementById("list-items"); //locate where to display element
    // const card = document.createElement("div"); 

  try {
    const response = await fetch("http://localhost:8080/item/all");
    const responseJSON = await response.json();

console.log(responseJSON)

for (let i = 0; i < responseJSON.length; i++) {
  let myObj = responseJSON[i];
      let cardHTML = ` 
   
   <div class="col-sm-4 mt-3">
        <div class="card">
          <div class="card-body">
            <a href="#"><img src="${myObj.image}" class="img-fluid" id="img-url" width="200px" alt="..."/></a>
            <h5 class="card-title">${myObj.name}</h5>
            <p class="card-text">${myObj.description}</p>
        </div>
        </div>
        
`;
listProductsDiv.innerHTML += cardHTML; //upload data into innerHTML
  
}
} catch (e) {
    console.log("oops " + e.message);
  }
}

getItem();





  