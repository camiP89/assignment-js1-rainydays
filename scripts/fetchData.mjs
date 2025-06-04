import { RAINY_DAYS_END_POINT } from "./constants.mjs";
import { showSpinner, hideSpinner } from "./loadingSpinner.mjs";

const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiY2FtaWxsYV9wdWdoIiwiZW1haWwiOiJjYW1wdWcwNDA0MUBzdHVkLm5vcm9mZi5ubyIsImlhdCI6MTczOTY4Njg0N30.4rAULkxF4J6SsBPRx9ai25yU9mx6BgW5H6PhiBn23_8',
    'X-Noroff-API-Key': '9e9b9527-88f8-4dc2-9737-fa259574b6e8',
  },
};
  
export async function fetchData(url) {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error('Could not fetch data');
    }

    const jsonData = await response.json();
    return jsonData.data;
  } catch (error) {
    console.error('Fetch error:', error.message);
    throw error;
  }
}
