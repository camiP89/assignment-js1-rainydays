import { RAINY_DAYS_END_POINT, API_SINGLE_JACKET_URL } from './constants.mjs';
import { fetchData } from './fetchData.mjs';

export function createJacketDetailsHtml(jacket) {
  console.log(jacket); 
  const jacketDetailsContainer = document.createElement('div');

  const jacketTitle = document.createElement("h2");
  jacketTitle.textContent = jacket.title;

  const jacketImage = document.createElement("img");
  jacketImage.src = jacket.image;
  jacketImage.alt = jacket.title;

  const jacketDescription = document.createElement('p');
  jacketDescription.textContent = jacket.description;
  
  const jacketPrice = document.createElement("p");
  jacketPrice.textContent = `${jacket.price}`;

  const jacketColor = document.createElement("p");
  jacketColor.textContent = `Color: ${jacket.baseColor}`;

  const jacketAddToCartButton = document.createElement('button');
  jacketAddToCartButton.addEventListener('click', function(){
    console.log(add to cart);
  })
  jacketAddToCartButton.textContent = "Add to cart";

  jacketDetailsContainer.append(jacketTitle, jacketImage, jacketDescription, jacketPrice, jacketColor, jacketAddToCartButton);

  return jacketDetailsContainer();
}