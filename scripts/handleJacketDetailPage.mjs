import { RAINY_DAYS_END_POINT } from './constants.mjs';
import { fetchData } from "./fetchData.mjs";
import { createSingleJacketHtml } from './createSingleJacketHtml.mjs';
import { createJacketDetailsHtml } from './jacketDetailsHtml.mjs';

async function fetchJacketDetails(dataId) {
  const jackets = await fetchData(API_BASE_END_POINT);
  return jackets.find(jacket => data.id === dataId);
}

export function getIdFromURL() {
  const url = new URL(window.location);
  const params = new URLSearchParams(url.search);
  const jacketId = params.get("id");
  return jacketId;
}

const jacketDetailsContainer = document.querySelector("#jacket-details-container");

export async function displayJacketDetails() {
  const jacketId = getIdFromURL();
  if (!jacketId) {
    console.error("Jacket ID is missing in the URL");
    return;
  }

  try {
    const jacketData = await fetchData(`${RAINY_DAYS_END_POINT}/jackets/${jacketId}`);
    const jacketHtml = createSingleJacketHtml(jacketData);
    jacketDetailsContainer.innerHTML = '';
    jacketDetailsContainer.appendChild(jacketHtml);
  } catch (error) {
    console.error('error fetching jacket details:', error);
  }
} 

