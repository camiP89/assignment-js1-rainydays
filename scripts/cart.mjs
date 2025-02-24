let headingText = "Cart";
let heading = document.querySelector("h1");
heading.innerHTML = headingText;

function addToCart(jacket) {
  let cart = JSON.parse(localStorage.getitem('cart')) || [];
  cart.push(jacket);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Jacket added to cart');
}

