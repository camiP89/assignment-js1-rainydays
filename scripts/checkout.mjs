import { displayCartItems, updateCartTotal } from "./cart.mjs";

document.addEventListener('DOMContentLoaded', function() {
  const headingText = "Checkout";
  const heading = document.querySelector("h1");
  if (heading) {
    heading.innerHTML = headingText;
  }

  displayCartItems();
  updateCartTotal();

  const cartTotalElement = document.getElementById('cart-total');

  const existingCheckoutButton = document.getElementById('checkout-button');
  if (existingCheckoutButton) {
    existingCheckoutButton.remove();
  }

  if (cartTotalElement) {
    let buyNowButton = document.createElement('button');
    buyNowButton.id = 'buy-now-button';
    buyNowButton.classList.add('buy-now-button');
    buyNowButton.textContent = "Buy Now";
    cartTotalElement.appendChild(buyNowButton);

    const formContainer = document.getElementById('form-container');

    const container = document.createElement("section");
    container.classList.add("container");
  
    const shippingForm = document.createElement("form");
    shippingForm.method = "POST";
    shippingForm.classList.add("form");
  
    const shippingFields = [
      { label: "Name" , id: "name", type: "text", placeholder: "Enter name", required: true},
      { label: "Email" , id: "email", type: "text", placeholder: "Enter email", required: true},
      { label: "Address" , id: "address", type: "text", placeholder: "Enter address", required: true},
      { label: "Card Details" , id: "card-details", type: "text", placeholder: "Enter card details", required: true},
    ];

    shippingFields.forEach(field => {
      const fieldLabel = document.createElement("label");
      fieldLabel.textContent = field.label;
      fieldLabel.setAttribute("for", field.id);

      const fieldInput = document.createElement("input");
      fieldInput.id = field.id;
      fieldInput.type = field.type;
      fieldInput.placeholder = field.placeholder;
      fieldInput.required = field.required;

      shippingForm.appendChild(fieldLabel);
      shippingForm.appendChild(fieldInput);
    });

    formContainer.appendChild(container);
    container.appendChild(shippingForm);

    buyNowButton.addEventListener('click', function (event) {
      event.preventDefault();  

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const address = document.getElementById("address").value;
      const cardDetails = document.getElementById("card-details").value;

      if (!name || !email || !address || !cardDetails) {
        alert("Please fill in all the fields.");
        return;
      }

      alert("Payment successful!");

      localStorage.removeItem('cart');
      window.location.href = '../checkout-success/index.html';
    }); 
  } else {
    console.error("Cart total element not found");
  }
});

