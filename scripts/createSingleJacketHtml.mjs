export function createSingleJacketHtml(jacket) {
  const jacketListItem = document.createElement("div");
  jacketListItem.classList.add("jacket-data-container");

  const jacketTitle = document.createElement("h2");
  jacketTitle.textContent = `${jacket.title}`;
  
  const jacketPrice = document.createElement("p");
  jacketPrice.textContent = `$${jacket.price}`; 
  jacketPrice.classList.add('jacket-price'); 

  const imageWrapper = document.createElement("div");
  imageWrapper.classList.add("image-wrapper");

  const jacketImage = document.createElement("img");
  if (jacket.image && jacket.image.url) {
    jacketImage.src = jacket.image.url;
    jacketImage.alt = jacket.image.alt || "Jacket Image";
  } else {
    console.error("Invalid or missing image URL:", jacket.image);
  }

  imageWrapper.appendChild(jacketImage)

  const viewMoreButton =document.createElement('button');
  viewMoreButton.classList.add('view-more-button');
  viewMoreButton.textContent = "View More"
  viewMoreButton.addEventListener('click', function(){
    window.location.href = `../jacket-details/?id=${jacket.id}`;
  });

  const jacketLink = document.createElement('a');
  jacketLink.href = `../jacket-details/?id=${jacket.id}`;
  console.log(jacket.id);

  jacketListItem.appendChild(jacketTitle);
  jacketListItem.appendChild(jacketPrice);
  jacketListItem.appendChild(jacketImage);
  jacketListItem.appendChild(viewMoreButton);

  return jacketListItem;
}


 
