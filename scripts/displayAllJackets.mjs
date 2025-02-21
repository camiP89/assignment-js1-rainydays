import { RAINY_DAYS_END_POINT } from './constants.mjs';
import { fetchData } from './fetchData.mjs';

const jacketContainer = document.getElementById('jacket-container');

export function generateJacketsHtml(jacket) {
  const jacketDataContainer = document.createElement('div');
  jacketDataContainer.classList.add('jacket-data-container');

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

  jacketDataContainer.append(jacketTitle, jacketPrice, jacketImage);
  return jacketDataContainer;
}

export function displayJackets(jackets) {
  jacketContainer.textContent = '';

  jackets.forEach((jacket) => {
    const jacketHtml = generateJacketsHtml(jacket);
    jacketContainer.append(jacketHtml);
  });
}

export async function createJacketsDisplay() {
  const data = await fetchData(RAINY_DAYS_END_POINT);
  displayJackets(data);
}

