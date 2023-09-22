const request = require('request');

const movieId = 3; // Replace with the desired movie ID
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  if (response.statusCode !== 200) {
    console.error('Error:', response.statusCode);
    return;
  }

  const movieData = JSON.parse(body);

  // Extract character URLs from the movie data
  const characterUrls = movieData.characters;

  // Function to fetch and print character names
  function fetchAndPrintCharacterNames(urls) {
    if (urls.length === 0) {
      return;
    }

    const characterUrl = urls.pop();
    request(characterUrl, (error, response, characterBody) => {
      if (error) {
        console.error(error);
      } else if (response.statusCode === 200) {
        const characterData = JSON.parse(characterBody);
        console.log(characterData.name);
      }

      // Continue with the next character URL
      fetchAndPrintCharacterNames(urls);
    });
  }

  fetchAndPrintCharacterNames(characterUrls);
});
