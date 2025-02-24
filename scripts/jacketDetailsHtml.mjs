import { RAINY_DAYS_END_POINT } from './constants.mjs';
import { fetchData } from './fetchData.mjs';

export async function createJacketDetailsHtml(jacket) {
  const jacketDetailsContainer = document.getElementById('jacket-details-container');
  jacketDetailsContainer.innerHtml = '';

  const detailsDiv = document.createElement('div');
  detailsDiv.classList.add('jacket-info')

  const jacketImage = document.createElement("img");
  jacketImage.src = jacket.image;
  jacketImage.alt = jacket.title;

  const jacketTitle = document.createElement("h2");
  jacketTitle.textContent = jacket.title;

  const jacketPrice = document.createElement("p");
  jacketPrice.textContent = `${jacket.price}`;

  const jacketColor = document.createElement("p");
  jacketColor.textContent = `Color: ${jacket.baseColor}`;

  const sizeSelect = document.createElement("select");
  sizeSelect.id = 'size-select';
  jacket.sizes.forEach(size => {
    const option = document.createElement("option");
    option.value = size;
    option.textContent = size;
    sizeSelect.appendChild(option);
  });

  const jacketAddToCartButton = document.createElement("button");
  jacketAddToCartButton.textContent = "Add to cart";
  jacketAddToCartButton.className = "add-to-cart-button";
  jacketAddToCartButton.onclick = function () {
    const selectedSize = document.getElementById('size-select').value;
    const jacketToAdd = {
      id: jacket.id,
      title: jacket.title,
      size: selectedSize,
      price: jacket.price,
      color: jacket.baseColor,
      image: jacket.image
    };
    jacketAddToCartButton(jacketToAdd);
 };

  detailsDiv.append(jacketImage, jacketTitle, jacketPrice, jacketColor, jacketSize, jacketAddToCartButton);
  jacketDetailsContainer.appendChild(detailsDiv);
}
  
