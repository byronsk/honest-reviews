
function getProducts() {
  return fetch('http://localhost:3000/products/')
  .then(response => response.json())
}

function createProduct(product) {
  return fetch('http://localhost:3000/products/', {
  method: "POST",
  headers: {
  "Content-Type": "application/json"
  },
  body: JSON.stringify(product)
 }).then(response => response.json())
}

function updateProduct(product) {
return fetch('http://localhost:3000/products' + `/${product.id}`, {
method: "PATCH",
headers: {
  "Content-Type": "application/json"
},
body: JSON.stringify(product)
  }).then(response => response.json())
}

// function deleteProduct(product) {
//   return fetch('http://localhost:3000/products/', {
//     method: "DELETE",
//   }).then(response => response.json())
// }


function createReview(review) {
return fetch('http://localhost:3000/reviews', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(review)
}).then(resp => resp.json())
}
