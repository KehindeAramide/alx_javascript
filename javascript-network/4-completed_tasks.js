//Writes a script that computes the number of tasks completed by user id.
const request = require('request');

const apiUrl = 'http://localhost:5050/route_0';

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  if (response.statusCode !== 200) {
    console.error('Error:', response.statusCode);
    return;
  }

  const data = JSON.parse(body);

  // Create an object to store the counts of completed tasks for each user
  const userCompletedTasks = {};

  // Loop through the data and count completed tasks for each user
  data.forEach((item) => {
    const userId = item.userId;
    if (item.completed) {
      if (userCompletedTasks[userId]) {
        userCompletedTasks[userId]++;
      } else {
        userCompletedTasks[userId] = 1;
      }
    }
  });

  console.log(userCompletedTasks);
});
