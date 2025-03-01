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
});

function displayCartItems() {
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

  cart.forEach(jacket => {
    const jacketContainer = document.createElement('div');
    jacketContainer.classList.add('cart-jacket');
  
    const jacketTitle = document.createElement("h4");
    jacketTitle.textContent = `${jacket.title}`;
    
    const jacketPrice = document.createElement("p");
    jacketPrice.textContent = `$${jacket.price.toFixed(2)}`; 
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

    jacketContainer.appendChild(jacketImage);
    jacketContainer.appendChild(jacketTitle);
    jacketContainer.appendChild(jacketPrice);
    jacketContainer.appendChild(jacketSize);

    cartContainer.appendChild(jacketContainer);
  });
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
  cart.forEach(jacket => totalCost += jacket.price);
  return totalCost;
}

export function addToCart(jacket) {
  if (!jacket.selectedSize) {
    alert('Please select a size.')
    return;
  }  
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(jacket);
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