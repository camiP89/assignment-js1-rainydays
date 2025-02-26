import { RAINY_DAYS_END_POINT } from './constants.mjs';
import { fetchData } from './fetchData.mjs';
import { createJacketsHtml } from './createJacketsHtml.mjs';

let headingText = "Jackets";
let heading = document.querySelector("h1");
heading.innerHTML = headingText;

export async function main() {
    const jackets = await fetchData(RAINY_DAYS_END_POINT);
    createJacketsHtml(jackets);
  }

main();



