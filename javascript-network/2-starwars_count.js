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

  // Initialize a counter for the number of movies with Wedge Antilles
  let count = 0;

  // Loop through the films and check if Wedge Antilles is in the character list
  for (const film of filmData.results) {
    const characters = film.characters.map((character) =>
      character.replace('https://swapi-api.alx-tools.com/api/people/', '').replace('/', '')
    );
    if (characters.includes(characterId.toString())) {
      count++;
    }
  }

  console.log(`Number of movies with Wedge Antilles: ${count}`);
});
