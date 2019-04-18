
const addBtn = document.querySelector('#new-product-btn')
const productForm = document.querySelector('.container')
const productsEl = document.getElementById('product-collection')
const oForm = document.querySelector('.add-product-form');
const submitbttn = document.getElementById('submitit')
const deletebtn = document.getElementById('dlt')

let addProduct = false

//Fetch Products, Iterate and Calling Add Product for Each Product
getProducts()
.then(products => products.forEach(addProducts))

//Create Product on Index Page, Render Single Product on ''View More'' click.
  function addProducts(product) {
  // const endPoint = 'http://localhost:3000/products';
  // fetch(endPoint)
  //   .then(res => res.json())
  //   .then(json =>
  //     json.forEach(product => {
        // const markup =
        // `
        // <div class='card'>
        // <h2>${product.name}</h2>
        // <img src="${product.url}" height=240 width=240>
        // <p>${product.likes} Likes</p>
        // <button class="view" id="view">View More</button>
        // `
        // document.querySelector('#product-collection').innerHTML += markup;
        const newCard = document.createElement('div')
        newCard.className = "card"
        newCard.innerHTML =
                    `
                      <h2>${product.name}</h2>
                      <img src="${product.url}" height=240 width=240>
                      <!-- <p>{product.likes} Likes</p> -->
                      <button class="view" id="view">View More</button>
                      <button class="delete" id="delete">Delete</button>
                    `
        newCard.querySelector('button').addEventListener('click', () => renderSingleProduct(product))
        document.querySelector('#product-collection').append(newCard)
      // })

    // )

    const d = newCard.querySelector('.delete')
    d.addEventListener('click', (event) => {
      event.target.className == 'delete'
      deleteProduct(product)
      event.target.parentElement.remove()
    })


  }



    //Event Listener for Adding a New Product
    submitbttn.addEventListener('click', (event) => {
      event.preventDefault();

      const product = {
      url: oForm.url.value,
      name: oForm.name.value,
      description: oForm.description.value,
      likes: 0
    }
      createProduct(product)
      .then(addProducts(product))
      oForm.reset()
    })


// Rendering Single Product Page
function renderSingleProduct(product) {
   productsEl.innerHTML = ' '
   productsEl.innerHTML =
                       `
     <a href="/Users/flatiron/honest-reviews/frontend/index.html"><span>&#8592; Back</span></a>
     <h2 id="h2tag">${product.name}</h2>
     <img id="imgtag" src="${product.url}" height=240 width=240>
     <p id="destag">Product Description:
     <br>
     ${product.description}</p>
     <button class = "edit" id=${product.id}>Edit Product</button>
     <p class="likes">${product.likes} Likes</p>
     <button class="like" id="like">Like</button>
     <form class="com" id="frm1">
      Enter a review: <input type="text" name="review"><br>
      <input class="submit-button" type="button" value="Submit">
     </form>

     <div id="review-collection">
       <ul id="co-list">
        ${product.reviews.map(review => {
          return (`<li id="data-review-${review.id}">
            ${review.content}
            <button id="${review.id}" class="delete">Delete</button>
            </li>`)
        }).join('')}
       </ul>

     </div>
     `

     const button = productsEl.querySelector('.delete')
     button.addEventListener('click', (event) => {
       const id = event.target.id
         deleteReview(id)
         event.target.parentElement.remove()
      })

    //Edit Form
    const edit = document.querySelector('.edit')
    edit.addEventListener('click', () => {
      productsEl.innerHTML = ' '
      const updateForm = document.createElement('form')
      updateForm.id = "update-form"
      updateForm.innerHTML =
      `
      <input type="text" name="url" required value="${product.url}"/>
      <input type="text" name="name" required value="${product.name}"/>
      <input type="text" name="description" required value="${product.description}"/>
      <input type="hidden" name="likes" required value="${product.likes}"/>
      <input type="submit" id="update" value="Update"/>
      `
      productsEl.appendChild(updateForm)

      const update = productsEl.querySelector('#update-form')
      update.addEventListener('submit', (event) => {
        event.preventDefault()
        newProduct = {
          id: product.id,
          name: update.name.value,
          description: update.description.value,
          likes: product.likes
        }
        updateProduct(newProduct)
        .then(productsEl.innerHTML = `<h1>Product updated!</h1>`)
      })
    })


     // coll = productsEl.querySelectorAll('.delete').addEventListener('click', () =>
     // coll.forEach(() => deleteEvent())

       //Like Button
       const likeBtn = productsEl.querySelector('.like')
       const likeEl = productsEl.querySelector('.likes')
       likeBtn.addEventListener('click', (event) => {
       product.likes++
       updateProduct(product)
       .then(() => { likeEl.innerHTML = ` ${product.likes} Likes`} )
       })



       //Appending Reviews
       const form1El = document.querySelector('#frm1')
       const submit = document.querySelector('.submit-button')
       const comEl = document.querySelector('#co-list')

       function addReviewToPage(review) {
       let comLi = document.createElement('li')
       comLi.className = 'comment-card'
       comLi.innerText = review.content

       comEl.appendChild(comLi)

     }

     //Creating New Review
     form1El.addEventListener('submit', (event) => {
       event.preventDefault()
       let newReview = {
         content: form1El.review.value,
         product_id: product.id
       }
       createReview(newReview)
       .then(addReviewToPage)
       form1El.reset()

     })

  }

//   function deleteEvent() {
  // const delBtn = document.getElementById('delete')

// }

//Hide Add Product Form
addBtn.addEventListener('click', () => {
  addProduct = !addProduct
  if (addProduct) {
    productForm.style.display = 'block'
  } else {
    productForm.style.display = 'none'
  }
})
