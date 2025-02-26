import { createSingleJacketHtml } from './createSingleJacketHtml.mjs';

export function createJacketsHtml(jackets) {
  const jacketContainer = document.getElementById('jacket-container');
  for (let i = 0; i < jackets.length; i++) {
    console.log(jackets[i]);
    const jacketHtml = createSingleJacketHtml(jackets[i]);
    jacketContainer.appendChild(jacketHtml);
  }
}

