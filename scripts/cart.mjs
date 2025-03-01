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

  const checkoutButton = document.createElement('button');
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

export function displayCartItems() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartContainer = document.getElementById('cart-container');
  if (!cartContainer) {
    console.error('Cart container not found');
    return;
  }
    cartContainer.innerHTML = '';

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cart.forEach((jacket, index) => {
    const jacketContainer = document.createElement('div');
    jacketContainer.classList.add('cart-jacket');
    jacketContainer.id = `jacket-${index.title};` 
  
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

    const quantityContainer = document.createElement('div');
    const decreaseButton = document.createElement('button');
    decreaseButton.textContent = "-";
    decreaseButton.addEventListener('click', function () {
      if (jacket.quantity > 1) {
        jacket.quantity--;
        updateCart(jacket, index);
        updateQuantityDisplay(index, jacket.quantity);
        updateCartTotal();
      }
    });
    
    const quantityText = document.createElement('span');
    quantityText.textContent = `Quantity: ${jacket.quantity}`;

    const increaseButton = document.createElement('button');
    increaseButton.textContent = "+";
    increaseButton.addEventListener('click', function () {
      jacket.quantity++;
      updateCart(jacket, index);
      updateQuantityDisplay(index, jacket.quantity);
      updateCartTotal();
    });

    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.addEventListener('click', function () {
      jacket.quantity++;
      removeJacketFromCart(index);
      removeJacketDisplay(index);
      updateCartTotal();
    });

    quantityContainer.appendChild(decreaseButton);
    quantityContainer.appendChild(quantityText);
    quantityContainer.appendChild(increaseButton);

    jacketContainer.appendChild(jacketImage);
    jacketContainer.appendChild(jacketTitle);
    jacketContainer.appendChild(jacketPrice);
    jacketContainer.appendChild(jacketSize);
    jacketContainer.appendChild(quantityContainer);
    jacketContainer.appendChild(removeButton);

    cartContainer.appendChild(jacketContainer);
  });
}

function updateCart(jacket, index) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart[index] = jacket;
  localStorage.setItem('cart', JSON.stringify(cart));
}

function updateQuantityDisplay(index, quantity) {
  const quantityText = document.querySelector(`#jacket-${index} .cart-jacket span`);
  if (quantityText) {
    quantityText.textContent = `Quantity: ${quantity}`;
  }
}

function removeJacketFromCart(index) { 
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
}

function removeJacketDisplay(index) {
  const jacketContainer = document.getElementById(`jacket-${index}`);
  if (jacketContainer) {
    jacketContainer.remove();
  }
}

function updateCartTotal() {
  const totalCost = getCartTotal();
  const totalPriceSpan = document.getElementById('total-price');
  if (totalPriceSpan) {
    totalPriceSpan.textContent = totalCost.toFixed(2);
  } else {
    console.error('Total price not found');
  }
}

function getCartTotal() {
  let totalCost = 0;
  const cart =JSON.parse(localStorage.getItem('cart')) || [];
  cart.forEach(jacket => totalCost += jacket.price * jacket.quantity);
  return totalCost;
}

export function addToCart(jacket) {
  if (!jacket.selectedSize) {
    alert('Please select a size.')
    return;
  }  

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingJacketIndex = cart.findIndex(item => item.title && item.selectedSize === jacket.selectedSize);

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

export function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartCountContainer = document.getElementById("cart-count");
  if (cartCountContainer) {
    cartCountContainer.textContent = cart.length;
 }
}
