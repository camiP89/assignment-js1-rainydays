import { RAINY_DAYS_END_POINT } from './constants.mjs';
import { fetchData } from "./fetchData.mjs";
import { main } from "./jackets.mjs";
//import { createSingleJacketHtml } from './createSingleJacketHtml.mjs';
//import { createJacketDetailsHtml } from './jacketDetailsHtml.mjs';

export function getIdFromURL() {
  const url = new URL(window.location);
  const params = new URLSearchParams(url.search);
  const jacketId = params.get("id");
  return jacketId;
}

const jacketDetailsContainer = querySelector('#jacket-details-container');

function main() {
  const jacketId = getIdFromURL();
  const jacketData = await fetchData(`${API_SINGLE_JACKET_URL}/jacket/${jacketId}`);
  console.log(jacketData);
  const singleJacketHtml = createSingleJacketHtml(jacketData);
  jacketDetailsContainer.append(singleJacketHtml);
}

main();



