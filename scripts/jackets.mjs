import { RAINY_DAYS_END_POINT } from './constants.mjs';
import { fetchData } from './fetchData.mjs';
import { createJacketsHtml } from './createJacketsHtml.mjs';
import { handleGenderFilter } from './filter.mjs';

let headingText = "Jackets";
let heading = document.querySelector("h1");
heading.innerHTML = headingText;

export async function main() {
  const jackets = await fetchData(RAINY_DAYS_END_POINT);
  createJacketsHtml(jackets);


let genderFilter = 'Female';

const filterAllGenderButton = document.getElementById('filter-gender-all');
const filterMaleGenderButton = document.getElementById('filter-gender-men');
const filterFemaleGenderButton = document.getElementById('filter-gender-women');

if (filterAllGenderButton) { 
  filterAllGenderButton.addEventListener('click', () => {
    genderFilter = 'All';
    handleGenderFilter(jackets, genderFilter);
  });
}
if (filterMaleGenderButton) { 
  filterMaleGenderButton.addEventListener('click', () => {
    genderFilter = 'Male';
    handleGenderFilter(jackets, genderFilter);
  });
}
if (filterFemaleGenderButton) { 
  filterFemaleGenderButton.addEventListener('click', () => {
    genderFilter = 'Female';
    handleGenderFilter(jackets, genderFilter);
  });
 }
}

main();




