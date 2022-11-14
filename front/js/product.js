

let params =  new URLSearchParams(window.location.search)
let getUrlId =  params.get("id")
console.log('getUrlId =>', getUrlId)

// const getURl = new URL(window.location.href)
// const getUrlId =  this.currentUrl.searchParams.get("id")
// console.log(getUrlId);




let itemImg = document.querySelector(".item__img")
let itemTitle = document.querySelector("#title")
let itemPrice = document.querySelector("#price")
let itemDescription = document.querySelector("#description")
let colorOptions = document.querySelector("#colors")



  fetch(` http://localhost:3000/api/products/${getUrlId}`)
 
  .then((res)=>res.json())
  .then((kanapdata) => {
    
    
    itemImg.innerHTML +=`<img src=${kanapdata.imageUrl} alt="Photographie d'un canapé">`  ;
    itemTitle.innerHTML += `
      <h1 id="title">${kanapdata.name}</h1>
      `;
    itemPrice.innerHTML += `${kanapdata.price}` ;
    itemDescription.innerHTML +=` ${kanapdata.description}`;
    colorOptions.innerHTML += `<option value="vert">vert</option>
    <option value="silver">silver</option>`;

    // for(let color of kanapdata.colors){
    //   const kanapColor = document.querySelector("#colors")
    //   kanapColor.value = color
    //   kanapColor.innerHTML = color
    //   console.log(color);
    // }
    
   

    
  })
  .catch((error)=> Error)
