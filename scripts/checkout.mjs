let headingText = "Checkout";
let heading = document.querySelector("h1");
heading.innerHTML = headingText;

document.addEventListener('DOMContentLoaded', function() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  if (cart.length === 0) {
    alert('Your cart is empty.');
  } else {
    cart.forEach(jacket => {
    });
  }
});
