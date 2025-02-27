export function createJacketDetailsHtml(jacket) {
  console.log(jacket); 
  const jacketDetailsContainer = document.createElement('div');
  jacketDetailsContainer.classList.add('jacket-details-container');

  const jacketTitle = document.createElement("h2");
  jacketTitle.textContent = jacket.title;

  const jacketImage = document.createElement("img");
  if (jacket.image && jacket.image.url) {
    jacketImage.src = jacket.image.url;
    jacketImage.alt = jacket.image.alt || "Jacket Image";
  } else {
    console.error("Invalid or missing image URL:", jacket.image);
  }

  const jacketDescription = document.createElement('p');
  jacketDescription.textContent = jacket.description;
  
  const jacketPrice = document.createElement("p");
  jacketPrice.textContent = `$${jacket.price}`;
  jacketPrice.classList.add('jacket-price');

  const jacketColor = document.createElement("p");
  jacketColor.textContent = `Color: ${jacket.baseColor}`;
  jacketColor.classList.add('jacket-color');

  const jacketAddToCartButton = document.createElement('button');
  jacketAddToCartButton.classList.add('jacket-add-to-cart');
  jacketAddToCartButton.addEventListener('click', function(){
  });
  jacketAddToCartButton.textContent = "Add to cart";

  jacketDetailsContainer.append(jacketTitle, jacketImage, jacketDescription, jacketPrice, jacketColor, jacketAddToCartButton);

  return jacketDetailsContainer;
}