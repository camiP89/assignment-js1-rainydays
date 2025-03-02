import { addToCart } from "./cart.mjs";

export function createJacketDetailsHtml(jacket) {

  const jacketDetailsContainer = document.createElement('div');
  jacketDetailsContainer.classList.add('jacket-details-container');

  const jacketTitle = document.createElement("h2");
  jacketTitle.textContent = jacket.title;

  const jacketPrice = document.createElement("p");
  jacketPrice.textContent = `$${jacket.price}`;
  jacketPrice.classList.add('jacket-price');

  const jacketImage = document.createElement("img");
  if (jacket.image && jacket.image.url) {
    jacketImage.src = jacket.image.url;
    jacketImage.alt = jacket.image.alt || "Jacket Image";
  } else {
    console.error("Invalid or missing image URL:", jacket.image);
  }

  const jacketDescription = document.createElement('p');
  jacketDescription.textContent = jacket.description;

  const sizeLabel = document.createElement("label");
  sizeLabel.textContent = "Select Size:";

  const sizeButtonsContainer = document.createElement('div');
  sizeButtonsContainer.classList.add("size-buttons-container");

  let selectedSize = null;

  jacket.sizes.forEach(size => {
    const sizeButton = document.createElement("button");
    sizeButton.classList.add("size-button");
    sizeButton.textContent = size;

    sizeButton.addEventListener('click', () => {
      const allButtons = sizeButtonsContainer.querySelectorAll("button");
      allButtons.forEach(button => button.classList.remove("active"));

      sizeButton.classList.add("active");

      selectedSize = size
    });

    sizeButtonsContainer.appendChild(sizeButton);
  });
  
  const jacketColor = document.createElement("p");
  jacketColor.textContent = `Color: ${jacket.baseColor}`;
  jacketColor.classList.add('jacket-color');

  const addToCartButton = document.createElement('button');
  addToCartButton.classList.add('jacket-add-to-cart');
  addToCartButton.textContent = "Add to cart";
  addToCartButton.addEventListener('click', function () {
    if (selectedSize) {
      jacket.selectedSize = selectedSize;
      alert('Jacket has been added to cart.');

      addToCart(jacket);
    } else {
      alert('Please select a size before adding to the cart.');
    }
  });

  jacketDetailsContainer.append(jacketTitle, jacketPrice, jacketImage, jacketDescription, sizeButtonsContainer, jacketColor, addToCartButton);

  return jacketDetailsContainer;
}