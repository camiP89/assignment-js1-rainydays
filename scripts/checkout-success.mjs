let headingText = "Checkout-Success";
let heading = document.querySelector("h1");
heading.innerHTML = headingText;

const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.textContent = "Submit Order";
shippingForm.appendChild(submitButton);