export function createSingleJacketHtml(jacket) {
  const jacketListItem = document.createElement("div");
  jacketListItem.classList.add("jacket-data-container");

  const jacketLink = document.createElement('a');
  jacketLink.href = `/jacket-details/?id=${jacket.id}`;
  console.log(jacket.id);

  const jacketTitle = document.createElement("h2");
  jacketTitle.textContent = `${jacket.title}`;

  const jacketImage = document.createElement("img");
  if (jacket.image && jacket.image.url) {
    jacketImage.src = jacket.image.url;
    jacketImage.alt = jacket.image.alt || "Jacket Image";
  } else {
    console.error("Invalid or missing image URL:", jacket.image);
  }

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


 
