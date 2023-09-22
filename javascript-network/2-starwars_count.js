//This writes a script that prints the number of movies where the character “Wedge Antilles” is present.
const request = require('request');

const apiUrl = process.argv[2]; // Get the API URL from the command line argument

// Check if the API URL is provided as an argument
if (!apiUrl) {
  console.error('Usage: node count_wedge_movies.js <API URL>');
  process.exit(1);
}

const characterId = 18; // ID of Wedge Antilles character

// Make a GET request to the API endpoint
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }

  // Parse the JSON response
  const filmData = JSON.parse(body);

  // Get the movie count for Wedge Antilles
  const movies = filmData.find((film) =>
    film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)
  );

  // Check if movies were found
  if (movies) {
    console.log(`Number of movies with Wedge Antilles: ${movies.characters.length}`);
  } else {
    console.log('Wedge Antilles not found in any movies.');
  }
});
