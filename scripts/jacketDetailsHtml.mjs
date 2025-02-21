export function createJacketDetailsHtml(jacket) {
  const jacketContainer = document.createElement('div');

  const jacketImage = document.createElement("img");
  jacketImage.src = `${jacket.image}`;

  const jacketTitle = document.createElement("h2");
  jacketTitle.textContent = `${jacket.title}`;

  const jacketPrice = document.createElement("p");
  jacketPrice.textContent = `${jacket.price}`;

  const jacketColor = document.createElement("p");
  jacketColor.textContent = `${jacket.baseColor}`;

  const jacketSize = document.createElement("p");
  jacketSize.textContent = `${jacket.sizes}`;

  const jacketAddToCartButton = document.createElement("button");
  jacketAddToCartButton.addEventListener('click', function() {
    
  console.log('Add to cart');

})

jacketAddToCartButton.textContent = "Add to cart";

jacketContainer.append(jacketImage, jacketTitle, jacketPrice, jacketColor, jacketSize, jacketAddToCartButton);

return jacketContainer;
}
  
