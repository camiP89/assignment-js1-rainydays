import { createJacketsHtml } from "./createJacketsHtml.mjs";

export function handleGenderFilter (jackets, genderFilter) {
  const jacketContainer = document.getElementById('jacket-container');
  jacketContainer.innerHTML = '';

  const filteredJackets = jackets.filter((currentJacket) => {
    if (genderFilter === 'All') {
      return true;
    }
    if (genderFilter === 'Male' && currentJacket.gender === 'Male') {
      return true;
    }
    if (genderFilter === 'Female' && currentJacket.gender === 'Female') {
      return true;
    }
    return false;    
  });
console.log("Filtered Jackets:", filteredJackets);

createJacketsHtml(filteredJackets);
}

