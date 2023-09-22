//Writes a script that computes the number of tasks completed by user id.
const request = require('request');

const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  if (response.statusCode !== 200) {
    console.error('Error:', response.statusCode);
    return;
  }

  const todos = JSON.parse(body);

  // Create an object to store the counts of completed tasks for each user
  const userCompletedTasks = {};

  // Loop through the todos and count completed tasks for each user
  todos.forEach((todo) => {
    if (todo.completed) {
      const userId = todo.userId;
      if (userCompletedTasks[userId]) {
        userCompletedTasks[userId]++;
      } else {
        userCompletedTasks[userId] = 1;
      }
    }
  });

  // Filter users with exactly 3 completed tasks
  const usersWithThreeTasks = Object.keys(userCompletedTasks).filter(
    (userId) => userCompletedTasks[userId] === 3
  );

  console.log(`${usersWithThreeTasks.length} users - 3 tasks completed for each`);
});
