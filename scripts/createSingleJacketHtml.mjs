export function createSingleJacketHtml(jacket) {
  const jacketListItem = document.createElement("div");
  jacketListItem.classList.add("jacket-data-container");

  const jacketLink = document.createElement('a');
  jacketLink.href = `../jacket-details/?id=${jacket.id}`;
  console.log(jacket.id);

  const jacketTitle = document.createElement("h2");
  jacketTitle.textContent = `${jacket.title}`;
  
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

  jacketLink.appendChild(jacketTitle);
  jacketLink.appendChild(jacketPrice);
  jacketLink.appendChild(jacketImage);

  jacketListItem.appendChild(jacketLink);

  return jacketListItem;
}


 
