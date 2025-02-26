import { displayJackets } from "./createJacketsHtml.mjs";
import { fetchData } from "./fetchData.mjs";

const filterButton = document.getElementById("filterButton");
const genderFilter = document.getElementById("gender");
const RAINY_DAYS_END_POINT = "https://v2.api.noroff.dev/rainy-days";

let allJackets = [];

async function fetchJackets() {
  try {
    allJackets = await fetchData(RAINY_DAYS_END_POINT);
    displayJackets(allJackets);
  } catch (error) {
    console.error("Failed to load jackets:", error);
  }
}

export async function filterByGender() {
  try {
    const selectedGender = genderFilter.value;

    let jacketsToDisplay =  [];   

  if (SelectedGender !== "all") {
    jacketsToDisplay = allJackets.filter(jacket => jacket.gender === selectedGender);
  } else {
    jacketsToDisplay = allJackets;
  }

   displayJackets(jacketsToDisplay);
  } catch (error) {
   console.error("Error filtering jackets:", error);
  }
}

window.onload = async () => {
  await fetchJackets();
  filterButton.addEventListener("click", filterGender);
};


