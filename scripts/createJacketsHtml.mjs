import { RAINY_DAYS_END_POINT } from './constants.mjs';
import { fetchData } from './fetchData.mjs';
import { createSingleJacketHtml } from './createSingleJacketHtml.mjs';

const jacketContainer = document.getElementById('jacket-container');

export function createJacketsHtml(jacket) {
  const jacketDataContainer = document.createElement('div');
  jacketDataContainer.classList.add('jacket-data-container');

  const jacketLink = document.createElement('a');
  jacketLink.href = `/jacket-detail/${jacket.id}`;

  const jacketTitle = document.createElement('h2');
  jacketTitle.textContent = jacket.title;

  const jacketPrice = document.createElement('p');
  jacketPrice.classList.add('jacket-price');
  jacketPrice.textContent = `$${jacket.price}`;

  const jacketImage = document.createElement('img');

  if (jacket.image && typeof jacket.image.url === 'string') {
    jacketImage.src = jacket.image.url;
    jacketImage.alt = jacket.image.alt;
  } else {
    console.error('invalid image URL:', jacket.image);
  }
  
  jacketLink.appendChild(jacketImage);
  jacketLink.appendChild(jacketTitle);
  jacketLink.appendChild(jacketPrice);

  jacketDataContainer.appendChild(jacketLink);

  return jacketDataContainer;

}

export function displayJackets(jackets) {
  jacketContainer.textContent = '';

  jackets.forEach((jacket) => {
    const jacketHtml = createJacketsHtml(jacket);
    jacketContainer.append(jacketHtml);
  });
}

export async function main() {
  try {
    const allJackets = await fetchData(RAINY_DAYS_END_POINT);
    displayJackets(allJackets);
  } catch (error) {
    console.error('Error fetching jackets:', error);
  }
}

main();