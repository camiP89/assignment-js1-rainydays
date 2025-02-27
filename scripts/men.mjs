import { RAINY_DAYS_END_POINT } from './constants.mjs';
import { fetchData } from './fetchData.mjs';

let headingText = "Men";
let heading = document.querySelector("h1");
heading.innerHTML = headingText;

const jacketContainer = document.getElementById('jacket-container');

function generateMensJacketsHtml(jacket) {
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

  const viewMoreButton = document.createElement('button');
  viewMoreButton.classList.add('view-more-button');
  viewMoreButton.textContent = "View More"
  viewMoreButton.addEventListener('click', function(){
    window.location.href = `../jacket-details/?id=${jacket.id}`;
  });
  
  jacketDataContainer.append(jacketTitle, jacketPrice, jacketImage, viewMoreButton);

  return jacketDataContainer;
}

function displayJackets(jackets) {
  jacketContainer.textContent = '';

  jackets.forEach((jacket) => {
    const mensJacketsHtml = generateMensJacketsHtml(jacket);
    jacketContainer.append(mensJacketsHtml);
  });
}

async function men() {
  const allJackets = await fetchData(RAINY_DAYS_END_POINT);

  const maleJackets = allJackets.filter(jacket => jacket.gender === 'Male');
 
  displayJackets(maleJackets);
}

men();