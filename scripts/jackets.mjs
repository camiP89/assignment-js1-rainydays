import { RAINY_DAYS_END_POINT } from './constants.mjs';
import { fetchData } from './fetchData.mjs';
import { createJacketsDisplay } from './displayAllJackets.mjs';

let headingText = "Jackets";
let heading = document.querySelector("h1");
heading.innerHTML = headingText;

const jacketContainer = document.getElementById('jacket-container');

createJacketsDisplay();

