//Variables
const products = document.querySelector('#all-products'),
    shoppingCartContent = document.querySelector('#cart-content tbody'),
    clearCartBtn = document.querySelector('#clear-cart');






//Listeners
loadEventListeners();

function loadEventListeners() {
    //when a new product is added
    products.addEventListener('click', buyProduct);

    //when the remove button is clicked
    shoppingCartContent.addEventListener('click', removeProduct);

    //Clear Cart Button
    clearCartBtn.addEventListener('click', clearCart);
}



//Functions
function buyProduct(e) {
    e.preventDefault();

    //Use delegation(e) to find the product that was added into the shopping cart
    if(e.target.classList.contains('add-to-cart')){
        //Read the product Value
        const product = e.target.parentElement.parentElement;

        //read the values
        getProductInfo(product);
    }
}

//Reads the HTML information of the Selected Product
function getProductInfo(product){
    //Create an object with product Data
    const productInfo = {
        image: product.querySelector('img').src,
        title: product.querySelector('h4').textContent,
        price: product.querySelector('.price span').textContent,
        id: product.querySelector('a').getAttribute('data-id')
    }

    //Insert into the Shopping Cart
    addIntoCart(productInfo);
}

//Display the selected product into the shopping cart
function addIntoCart(product){
    //create a <tr>
    const row = document.createElement('tr');

    //Build the template
    row.innerHTML = `
        <tr>
            <td>
                <img src="${product.image}" width=80>
            </td>
            <td>${product.title}</td>
            <td>${product.price}</td>
            <td>
                <a href="#" class="remove" data-id="${product.id}">X</a>
            </td>
        </tr>

    `;

    //Add into the shopping cart
    shoppingCartContent.appendChild(row);
}

//Remove product from the dom
function removeProduct(e) {
    if(e.target.classList.contains('remove')){
        e.target.parentElement.parentElement.remove();
    }
}

//Clears the Shopping Cart
function clearCart(){
    shoppingCartContent.innerHTML = "";
}