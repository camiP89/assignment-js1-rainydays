let headingText = "Checkout-Success";
let heading = document.querySelector("h1");
heading.innerHTML = headingText;

const messageContainer = document.getElementById('message-container');
  messageContainer.textContent = "Thank you for you order. You will receive an update on the status of your order soon. We hope you enjoy your purchase and thank you for shopping with us. ORDER NUMBER: 153486";
  messageContainer.classList.add('message');