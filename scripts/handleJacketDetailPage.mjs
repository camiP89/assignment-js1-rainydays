import { RAINY_DAYS_END_POINT } from './constants.mjs';
import { fetchData } from "./fetchData.mjs";
import { createSingleJacketHtml } from './createSingleJacketHtml.mjs';

function getIdFromURL() {
  const url = new URL(window.location);
  const params = new URLSearchParams(url.search);
  const jacketId = params.get("id");
  return jacketId;
}

const jacketDetailsContainer = document.querySelector("#jacket-details-container");

export async function displayJacketDetails() {
  const jacketId = getIdFromURL(RAINY_DAYS_END_POINT);
  if (!jacketId) {
    console.error("Jacket ID is missing in the URL");
    return;
  }

  try {
    const jacketData = await fetchData(`${URL}${jacketId}`);

    const jacketHtml = createSingleJacketHtml(jacketData);
    jacketDetailsContainer.innerHTML = '';
    jacketDetailsContainer.append(jacketHtml);
  } catch (error) {
    console.error('error fetching jacket details:', error);
  }
} 
