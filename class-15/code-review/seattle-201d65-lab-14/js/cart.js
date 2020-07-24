/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  // DONE: Find the table body
  var tbodyElement = table.tBodies[0];

  // TODO: Iterate over the items in the cart
  for(var i = 0; i < cart.items.length; i++){
    var trElement = document.createElement('tr');

    var tdElement = document.createElement('td');
    tdElement.textContent = cart.items[i].product;
    trElement.appendChild(tdElement);

    tdElement = document.createElement('td');
    tdElement.textContent = cart.items[i].quantity;
    trElement.appendChild(tdElement);

    tdElement = document.createElement('td');
    trElement.appendChild(tdElement);
    tdElement.textContent = 'X';

    tbodyElement.appendChild(trElement);
  }
  // DONE: Create a TR
  // DONE: Create a TD for the delete link, quantity,  and the item
  // DONE: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  console.log();
  // NonDocumentTypeChildNode.previousElementSibling
  // Element.slot
  // parentNode
  // console.log(event.target.previousElementSibling);
  console.log(event.target.parentNode.children);

  var parent = event.target.parentNode;
  var quant = parent.children[1].textContent;
  var prodName = parent.children[0].textContent;

  var item = {quant, prodName};
  // var item = {quant: quant, prodName : prodName};

  cart.removeItem();
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
