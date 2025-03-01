export function addToCart(jacket) {
  const cart = localStorage.getItem("cart");
  if (cart === null) {
    const newCart = [];
    newCart.push(jacket);
    localStorage.setItem("cart", JSON.stringify(newCart));
  } else {
    const newCart = JSON.parse(cart);
    newCart.push(jacket);
    localStorage.setItem("cart", JSON.stringify(newCart));
  }
}

const cartContainer = document.getElementById("cart-container");
const cartCountContainer = document.getElementById("cart-count");
const getCartTotalButton = document.getElementById("cart-total-button");


export function getCartTotal() {
  let totalCost = 0;
  const cart = localStorage.getItem("cart");
  if (cart !== null) {
    const newCart = JSON.parse(cart);
    for (let i = 0; i < newCart.length; i++) {
      totalCost = totalCost + newCart[i].price;
    }
  }
  return totalCost;
}