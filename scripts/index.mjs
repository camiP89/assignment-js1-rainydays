import { RAINY_DAYS_END_POINT } from './constants.mjs';
import { fetchData } from './fetchData.mjs';
import { sale } from './on-sale.mjs'

let headingText = "SALE ITEMS";
let heading = document.querySelector("h1");
heading.innerHTML = headingText;

sale();
