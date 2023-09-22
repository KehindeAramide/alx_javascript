const request = require('request');
const fs = require('fs');

const url = process.argv[2]; // Get the URL from the command line argument
const filePath = process.argv[3]; // Get the file path from the command line argument

// Check if both URL and file path are provided as arguments
if (!url || !filePath) {
  console.error('Usage: node fetch_and_store.js <URL> <file-path>');
  process.exit(1);
}

// Make a GET request to the specified URL
request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }

  // Check if the request was successful (status code 200)
  if (response.statusCode === 200) {
    // Write the response body to the specified file
    fs.writeFile(filePath, body, 'utf-8', (err) => {
      if (err) {
        console.error('Error writing to file:', err);
        process.exit(1);
      }
      console.log({filePath});
    });
  } else {
    console.error(`Failed to fetch the webpage. Status code: ${response.statusCode}`);
    process.exit(1);
  }
});
