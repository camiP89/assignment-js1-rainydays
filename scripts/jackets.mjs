import { RAINY_DAYS_END_POINT } from './constants.mjs';
import { fetchData } from './fetchData.mjs';
import { createJacketsHtml } from './createJacketsHtml.mjs';
import { handleGenderFilter } from './filter.mjs';
import { showSpinner, hideSpinner } from "./loadingSpinner.mjs";

let headingText = "Jackets";
let heading = document.querySelector("h1");
heading.innerHTML = headingText;

const jacketContainer = document.getElementById('jacket-container');

function showError(message) {
 if (jacketContainer) {
  jacketDetailsContainer.innerHTML = '';
  const errorElement = document.createElement('p');
  errorElement.classList.add('error-message');
  errorElement.textContent = message;
  jacketContainer.appendChild(errorElement);
 }
}

export async function main() {
  showSpinner();
  try {
    const jackets = await fetchData(RAINY_DAYS_END_POINT);

    if (!Array.isArray(jackets) || jackets.length === 0) {
      throw new Error("No jackets available.");
    }
    createJacketsHtml(jackets);

    let genderFilter = 'Female';

    const filterButtons = document.querySelectorAll('.filter-gender-buttons button');

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const gender = button.id.includes('men')
          ? 'Male'
          : button.id.includes('women')
          ? 'Female'
          : 'All';

        genderFilter = gender;
        handleGenderFilter(jackets, genderFilter);
      });
    });

    const defaultButton = document.getElementById('filter-gender-women');
    if (defaultButton) { 
      defaultButton.classList.add('active');
    }

    handleGenderFilter(jackets, genderFilter);
  } catch (error) {
    console.error("Failed to load jackets:", error);
    showError("Hmm! We could not load the jackets. Please try again later.");
  } finally {
    hideSpinner();
  }
}

main();




