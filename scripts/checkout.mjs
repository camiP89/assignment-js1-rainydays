import { displayCartItems, updateCartTotal } from "./cart.mjs";
import { showSpinner, hideSpinner } from "./loadingSpinner.mjs";

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

    const errorMessage = document.createElement("div");
    errorMessage.id = "form-error-message";
    errorMessage.style.color = "red";
    errorMessage.style.marginBottom = "1em";
    shippingForm.appendChild(errorMessage);
  
    const shippingFields = [
      { label: "Name" , id: "name", type: "text", placeholder: "Enter name", required: true},
      { label: "Email" , id: "email", type: "email", placeholder: "Enter email", required: true},
      { label: "Address" , id: "address", type: "text", placeholder: "Enter address", required: true},
      { label: "Card Details" , id: "card-details", type: "password", placeholder: "Enter card details", required: true},
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
      fieldInput.classList.add("checkout-input");

      shippingForm.appendChild(fieldLabel);
      shippingForm.appendChild(fieldInput);
    });

    formContainer.appendChild(container);
    container.appendChild(shippingForm);

    shippingForm.addEventListener("input", () => {
      errorMessage.textContent = "";
      document.querySelectorAll('.checkout-input').forEach(input => {
        input.classList.remove('input-error');
      });
    });

    buyNowButton.addEventListener('click', function (event) {
      event.preventDefault();  

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const address = document.getElementById("address").value.trim();
      const cardDetails = document.getElementById("card-details").value.trim();

      const fields = [
        { id: "name", value: name }, 
        { id: "email", value: email },
        { id: "address", value: address },
        { id: "card-details", value: cardDetails },
      ];

      let hasError = false;

      fields.forEach(field => {
        const input = document.getElementById(field.id);
        if (!field.value) {
          input.classList.add("input-error");
          hasError = true;
        } else {
          input.classList.remove("input-error");
        }
      });

      if (hasError) {
        errorMessage.textContent = "Please fill in all the fields.";
        return;
      }

      showSpinner();

      setTimeout(() => {

        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const summary = cart.map(item => {
          return `${item.title} (Size: ${item.selected}) - $${item.price} x ${item.quantity}`;
        }).join('; ');

        const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

        const orderSummary = {
          summary,
          total,
          orderNumber: Math.floor(100000 + Math.random() * 900000)
        };

        localStorage.setItem('orderSummary', JSON.stringify(orderSummary));

        localStorage.removeItem('cart');
        hideSpinner();
        window.location.href = '../checkout-success/index.html';
      }, 1500);
    }); 
  } else {
    console.error("Cart total element not found");
  }
});

