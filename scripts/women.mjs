import { RAINY_DAYS_END_POINT } from './constants.mjs';
import { fetchData } from './fetchData.mjs';
import { showSpinner, hideSpinner } from "./loadingSpinner.mjs";

let headingText = "Women";
let heading = document.querySelector("h1");
heading.innerHTML = headingText;

const jacketContainer = document.getElementById('jacket-container');

function createWomensJacketsHtml(jacket) {
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
    const womensJacketsHtml = createWomensJacketsHtml(jacket);
    jacketContainer.append(womensJacketsHtml);
  });
}

async function women() {
  showSpinner();
  try {
    const allJackets = await fetchData(RAINY_DAYS_END_POINT);
    const femaleJackets = allJackets.filter(jacket => jacket.gender === 'Female');

    if (femaleJackets.length === 0) {
      jacketContainer.textContent = 'No jackets found for women.';
    } else {
      displayJackets(femaleJackets);
    }
  } catch (error) {
    console.error("Failed to fetch jackets:", error);
    jacketContainer.textContent = "Failed to load jackets. Please try again later.";
  } finally {
  hideSpinner();
  }
}

women();

