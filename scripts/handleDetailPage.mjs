import { RAINY_DAYS_END_POINT } from './constants.mjs';
import { fetchData } from "./fetchData.mjs";
import { createJacketDetailsHtml } from "./jacketDetailsHtml.mjs";
import { showSpinner, hideSpinner } from "./loadingSpinner.mjs";

let headingText = "Jacket Details";
let heading = document.querySelector("h1.heading-jacket-details");
heading.innerHTML = headingText;

export function getIdFromURL() {
  const url = new URL(window.location);
  const params = new URLSearchParams(url.search);
  const jacketId = params.get("id");
  return jacketId;
}

const jacketDetailsContainer = document.querySelector('#jacket-details-container');

function showError(message) {
  jacketDetailsContainer.innerHTML = '';
  const errorElement = document.createElement('p');
  errorElement.classList.add('errorElement');
  errorElement.textContent = message;
  jacketDetailsContainer.appendChild(errorElement);
}

export async function mainId() {
  const jacketId = getIdFromURL();

  if (!jacketId) {
    console.error("No jacket was found in the URL!");
    showError("Sorry, we could not find the jacket you were looking for.");
    return;
  }

  showSpinner();
  try {
    const jacketData = await fetchData(`${RAINY_DAYS_END_POINT}/${jacketId}`);

    if (!jacketData || !jacketData.title) {
      throw new Error("Jacket data is missing or invalid.");
    }

    const singleJacketHtml = createJacketDetailsHtml(jacketData);
    jacketDetailsContainer.innerHTML = '';
    jacketDetailsContainer.append(singleJacketHtml);

  } catch (error) {
    console.error("Error fetching jacket details:", error);
    showError("Hmm! Something went wrong while loading the jacket details. Please try again later.");
  } finally {
    hideSpinner();
  }
}

mainId();
