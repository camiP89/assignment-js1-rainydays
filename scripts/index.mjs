import { RAINY_DAYS_END_POINT } from './constants.mjs';
import { fetchData } from './fetchData.mjs';
import { createSaleJacketsHtml, displayJackets, sale } from './on-sale.mjs';
import { showSpinner, hideSpinner } from "./loadingSpinner.mjs";

let headingText = "RAINYDAYS SALE JACKETS";
let heading = document.querySelector("h1");
heading.innerHTML = headingText;

const jacketContainer = document.querySelector('#jacket-container');

function showError(message) {
 if (jacketContainer) {
  jacketDetailsContainer.innerHTML = '';
  const errorElement = document.createElement('p');
  errorElement.classList.add('error-message');
  errorElement.textContent = message;
  jacketContainer.appendChild(errorElement);
 }
}

document.addEventListener('DOMContentLoaded', async () => {
 showSpinner();
 try {
  await sale();
 } catch (error) {
  console.error('Error loading sale jackets:', error);
  showError("Hmm! We could not load sale jackets at the moment. Please try again later.");
 } finally {
  hideSpinner();
 }
});


