export function createSingleJacketHtml(jacket) {
  console.log(jacket);
  const jacketListItem = document.createElement("div");
  jacketListItem.classList.add("jacket-data-container");

  const jacketLink = document.createElement('a');
  jacketLink.href = `/jackets/?id=${jacket.id}`;
  console.log(jacket.id);

  const jacketTitle = document.createElement("h2");
  jacketTitle.textContent = `${jacket.title}`;

  const jacketImage = document.createElement("img");
  jacketImage.src = `${jacket.image.url}`;

  const jacketPrice = document.createElement("p");
  jacketPrice.textContent = `$${jacket.price}`;
  
  const jacketColor = document.createElement("p");
  jacketColor.textContent = `${jacket.baseColor}`;

  const jacketSize = document.createElement("p");
  jacketSize.textContent = `${jacket.sizes.join(", ")}`;

  jacketLink.appendChild(jacketTitle);
  jacketLink.appendChild(jacketImage);
  jacketLink.appendChild(jacketPrice);
  jacketLink.appendChild(jacketColor);
  jacketLink.appendChild(jacketSize);

  jacketListItem.appendChild(jacketLink);

  return jacketListItem;
}
