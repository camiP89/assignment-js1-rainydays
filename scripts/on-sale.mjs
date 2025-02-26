import { RAINY_DAYS_END_POINT } from './constants.mjs';
import { fetchData } from './fetchData.mjs';

const jacketContainer = document.getElementById('jacket-container');

export function createSaleJacketsHtml(jacket) {
  const jacketDataContainer = document.createElement('div');
  jacketDataContainer.classList.add('jacket-data-container');

  const jacketTitle = document.createElement('h2');
  jacketTitle.textContent = jacket.title;

  const jacketPrice = document.createElement('p');
  jacketPrice.classList.add('jacket-price');
  jacketPrice.textContent = `$${jacket.price}`;

  if (jacket.discountedPrice) {
    const discountedPrice = document.createElement('span');
    discountedPrice.textContent = `$${jacket.discountedPrice}`;
    discountedPrice.classList.add('discounted-price');
    jacketDataContainer.append(jacketTitle, jacketPrice, discountedPrice);

  } else {
    jacketDataContainer.append(jacketTitle, jacketPrice);
  }
 
  const jacketImage = document.createElement('img');
  if (jacket.image && typeof jacket.image.url === 'string') {
    jacketImage.src = jacket.image.url;
    jacketImage.alt = jacket.image.alt;
  } else {
    console.error('invalid image URL:', jacket.image);
  }

  jacketDataContainer.append(jacketImage);
  return jacketDataContainer;
}

export function displayJackets(jackets) {
  jacketContainer.textContent = '';

  if (jackets.length === 0) { 
    const noJacketMessage = document.createElement('p');
    noJacketMessage.textContent = 'No Jackets are currently on sale.';
    jacketContainer.appendChild(noJacketMessage);
    return;
  }

  jackets.forEach((jacket) => {
    const saleJacketsHtml = createSaleJacketsHtml(jacket);
    jacketContainer.append(saleJacketsHtml);
  });
}

export async function sale() {
  try { 
   const allJackets = await fetchData(RAINY_DAYS_END_POINT);

   const saleJackets = allJackets.filter(jacket => jacket.onSale === true);
 
   displayJackets(saleJackets);
  } catch (error) {
    console.error('Error fetching jacket data', error);

    jacketContainer.innerHTML = '<p>Failed to load sale jackets. Please try again later.';
  }
}

