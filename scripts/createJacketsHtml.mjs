import { createSingleJacketHtml } from './createSingleJacketHtml.mjs';

export function createJacketsHtml(jackets) {
  if (!Array.isArray(jackets)) { 
    console.error("Expected an array of jackets, but got:", jackets);
    return;
  }

  const jacketContainer = document.getElementById('jacket-container');
  jacketContainer.innerHTML = '';
  
  jackets.forEach((jacket) => {
    const jacketHtml = createSingleJacketHtml(jacket);
    jacketContainer.appendChild(jacketHtml);
  });
}

