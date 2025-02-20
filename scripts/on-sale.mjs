import { RAINY_DAYS_END_POINT } from './constants.mjs';
import { fetchData } from './fetchData.mjs';

export function generateSaleJacketsHtml(jacket) {
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

export function displayJackets(jackets, jacketContainer) {
  jacketContainer.textContent = '';

  jackets.forEach((jacket) => {
    const saleJacketsHtml = generateSaleJacketsHtml(jacket);
    jacketContainer.append(saleJacketsHtml);
  });
}

export async function main(jacketContainer) {
  try { 
   const response = await fetchData(RAINY_DAYS_END_POINT);
   const allJackets = await Response.json();
   
   const saleJackets = allJackets.filter(jacket => jacket.onSale === true); 
   displayJackets(saleJackets, jacketContainer);
  } catch (error) {
    console.error('Fetch error:', error.message);
  }
}


