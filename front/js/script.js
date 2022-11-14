let url = "http://localhost:3000/api/products"

// Page d' accueil -- On affiche les produits en les recuperant  en format json //
let getLinke = document.querySelector("#items")



fetch(url)
.then(function(response){
  return response.json()
})
.then(function(data){
  data.forEach(product => {
    getLinke.innerHTML+=

    `
    <a href= './product.html?id=${product._id}' >
            <article>
              <img src=' ${product.imageUrl}' alt='${product.altTxt}'>
              <h3 class="productName">${product.name}</h3>
              <p class="productDescription">${product.description}</p>
            </article>
          </a>
          `
  });
})

