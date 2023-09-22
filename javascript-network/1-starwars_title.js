// This writes a script that prints the title of a Star Wars movie where the episode number matches a given integer.
const request = require('request');

const movieId = process.argv[2]; // Get the movie ID from the command line argument

// Check if a movie ID is provided as an argument
if (!movieId) {
  console.error('Usage: node get_movie_title.js <Movie ID>');
  process.exit(1);
}

// Define the API endpoint URL
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Make a GET request to the API endpoint
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }

  // Parse the JSON response
  const movieData = JSON.parse(body);

  // Check if the response contains a title
  if (movieData.title) {
    console.log(movieData.title);
  } else {
    console.error('Movie not found.');
  }
});
