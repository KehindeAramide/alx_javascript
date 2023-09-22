// This script displays the status code of a GET request.
const request = require('request');

const url = process.argv[2]; // Get the URL from the command line argument

// Check if a URL is provided as an argument
if (!url) {
  console.error('Usage: node get_status_code.js <URL>');
  process.exit(1);
}

// Make a GET request to the specified URL
request.get(url, (error, response) => {
  if (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }

  // Display the status code
  console.log('code:', response.statusCode);
});
