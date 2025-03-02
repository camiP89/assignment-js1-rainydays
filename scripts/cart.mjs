import { createJacketDetailsHtml } from "./jacketDetailsHtml.mjs";

document.addEventListener('DOMContentLoaded', function() {
  const headingText = "Cart";
  const heading = document.querySelector("h1");
  if (heading) {
    heading.innerHTML = headingText;
  }

  displayCartItems();
  updateCartTotal();
  updateCartCount();

  let checkoutButton = document.createElement('button');
  checkoutButton.id = 'checkout-button';
  checkoutButton.classList.add('checkout-button');
  checkoutButton.textContent = "Proceed to Checkout";

  document.getElementById('cart-total').appendChild(checkoutButton);

  checkoutButton.addEventListener('click', function () {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
      alert('Your cart is empty. You must add items before proceeding to checkout.');
    } else {
      window.location.href = '../checkout/index.html';
    }
  });
});

export function addToCart(jacket) {
  if (!jacket.selectedSize) {
    alert('Please select a size.')
    return;
  }  

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingJacketIndex = cart.findIndex(item => item.title === jacket.title && item.selectedSize === jacket.selectedSize);

  if (existingJacketIndex !== -1) {
    cart[existingJacketIndex].quantity++;
  } else {
    jacket.quantity = 1;
    cart.push(jacket);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  updateCartTotal();
}

export function removeJacketFromCart(index) { 
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  updateCartTotal();
}

export function displayCartItems() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartContainer = document.getElementById("cart-container");
  cartContainer.innerHTML = '';

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cart.forEach((jacket, index) => {
    const jacketContainer = document.createElement('div');
    jacketContainer.classList.add('cart-jacket');
    jacketContainer.id = `jacket-${index}`; 
  
    const jacketTitle = document.createElement("h4");
    jacketTitle.textContent = `${jacket.title}`;
    
    const jacketPrice = document.createElement("p");
    jacketPrice.textContent = `$${(jacket.price * jacket.quantity).toFixed(2)}`; 
    jacketPrice.classList.add('jacket-price'); 

    const jacketSize = document.createElement("p");
    jacketSize.textContent = `Size: ${jacket.selectedSize}`;
  
    const jacketImage = document.createElement("img");
    if (jacket.image && jacket.image.url) {
      jacketImage.src = jacket.image.url;
      jacketImage.alt = jacket.image.alt || "Jacket Image";
    } else {
      console.error("Invalid or missing image URL:", jacket.image);
    }

    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.addEventListener('click', function () {
      removeJacketFromCart(index);
      jacketContainer.remove();
    });

    jacketContainer.appendChild(jacketTitle);
    jacketContainer.appendChild(jacketPrice);
    jacketContainer.appendChild(jacketSize);
    jacketContainer.appendChild(jacketImage);
    jacketContainer.appendChild(removeButton);

    cartContainer.appendChild(jacketContainer);
  });
}

export function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartCountContainer = document.getElementById("cart-count");
  if (cartCountContainer) {
    cartCountContainer.textContent = cart.length;
 }
}

export function updateCartTotal() {
  const totalCost = getCartTotal();
  const totalPriceSpan = document.getElementById('total-price');
  if (totalPriceSpan) {
    totalPriceSpan.textContent = totalCost.toFixed(2);
  } else {
    console.error('Total price not found');
  }
}

export function getCartTotal() {
  const cart =JSON.parse(localStorage.getItem('cart')) || [];
  return cart.reduce((total, jacket) => total + (jacket.price * jacket.quantity), 0);
}













