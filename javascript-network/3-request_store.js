//Writes a script that gets the contents of a webpage and stores it in a file.
const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

request(url, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  fs.writeFile(filePath, body, 'utf-8', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Webpage content saved to', filePath);
    console.log(body); // This line will print the webpage content to the console
  });
});
