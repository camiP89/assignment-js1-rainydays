export function createSingleJacketHtml(jacket) {
  const jacketContainer = document.createElement("div");
  jacketContainer.classList.add("jacket-details-container");

  const jacketTitle = document.createElement("h2");
  jacketTitle.textContent = jacket.title;

  const jacketPrice = document.createElement("p");
  jacketPrice.textContent = jacket.price;

  const jacketImage = document.createElement("img");
  jacketImage.src = ("img");
  
  const jacketColor = document.createElement("p");
  jacketColor.textContent = jacket.baseColor;

  const jacketAddToCartButton = document.createElement("p");
  jacketAddToCartButton.addEventListener('click', function(){

  });
  jacketAddToCartButton.textContent = "Add to cart";

  jacketLink.appendChild(jacketImage);
  jacketLink.appendChild(jacketTitle);
  jacketLink.appendChild(jacketPrice);
  jacketLink.appendChild(jacketColor);

  jacketListItem.appendChild(jacketLink);


  return jacketContainer;
}
