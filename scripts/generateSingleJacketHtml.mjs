export function generateJacketDetailsHtml(jacket) {
  const jacketContainer = document.querySelector('#jacket-container');
  const jacketListItem = document.createElement("li");
  jacketListItem.classList.add("jacketProduct");

  const jacketLink = document.createElement ('a');
  jacketLink.href = `/jacket?.id=${jacket.id}`;

  console.log(jacketListItem.length);

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

  jacketLink.appendChild(jacketImage);
  jacketLink.appendChild(jacketTitle);
  jacketLink.appendChild(jacketPrice);
  jacketLink.appendChild(jacketColor);
  jacketLink.appendChild(jacketSize);

  jacketListItem.appendChild(jacketLink);

  return jacketListItem;
}
