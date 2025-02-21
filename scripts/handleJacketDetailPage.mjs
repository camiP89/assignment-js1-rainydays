import { RAINY_DAYS_END_POINT } from './constants.mjs';
import { fetchData } from "./fetchData.mjs";
import { generateJacketDetailsHtml } from './generateSingleJacketHtml.mjs';

function getIdFromURL() {
  const url = new URL(window.location);
  const params = new URLSearchParams(url.search);
  const jacketId = params.get("id");
  return jacketId;
}

async function main() {
  const jacketId = getIdFromURL();
  const Data = fetchData(`${RAINY_DAYS_END_POINT}/${jacketId}`);
  const createJacketDetailsHtml = jacketDetailsHtml(jacket);
  jacketContainer.append(jacketDetailsHtml);
}

main();
