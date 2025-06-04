import { RAINY_DAYS_END_POINT } from './constants.mjs';
import { fetchData } from "./fetchData.mjs";
import { createJacketDetailsHtml } from "./jacketDetailsHtml.mjs";

let headingText = "Jacket Details";
let heading = document.querySelector("h1.heading-jacket-details");
heading.innerHTML = headingText;

export function getIdFromURL() {
  const url = new URL(window.location);
  const params = new URLSearchParams(url.search);
  const jacketId = params.get("id");
  console.log(jacketId);
  return jacketId;
}

const jacketDetailsContainer = document.querySelector('#jacket-details-container');

export async function mainId() {
  const jacketId = getIdFromURL();
  if (!jacketId) {
    console.error("No jacket was found in the URL!");
    return;
  }
  try {
    const jacketData = await fetchData(`${RAINY_DAYS_END_POINT}/${jacketId}`);
    const singleJacketHtml = createJacketDetailsHtml(jacketData);
    jacketDetailsContainer.append(singleJacketHtml);
  } catch (error) {
    console.error("Error fetching jacket details:", error);
  }
}

mainId();
