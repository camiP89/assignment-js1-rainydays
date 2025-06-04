let headingText = "Checkout-Success";
let heading = document.querySelector("h1");
heading.innerHTML = headingText;

const messageContainer = document.getElementById('message-container');

const orderSummary = JSON.parse(localStorage.getItem('orderSummary'));

if (orderSummary) {
  messageContainer.innerHTML = `
  <div class="message">
    <div>
      <p>Thank you for your order. You will receive an update soon.</p>
      <p><strong>Order Number:</strong>  ${orderSummary.orderNumber}</p>
      <p><strong>Order Summary:</strong></p>
      <ul>
        ${orderSummary.summary
        .split('; ')
        .map(item => `<li>${item}</li>`)
        .join('')}
      </ul>
      <p><strong>Total:</strong>  $${orderSummary.total.toFixed(2)}</p>
      <p>We hope you enjoy your purchase and thank you for shopping with us.</p>
    </div>
  </div>
`;

  localStorage.removeItem('orderSummary');
} else {
  messageContainer.innerHTML = `
  <p>Thank you for your order.</p>
  </p>Unfortunately, we could not retrieve the summary details, but your transaction was successful.</p>
  `;
}
