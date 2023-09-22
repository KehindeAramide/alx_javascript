//Creates a function named welcome:
function welcome(firstName, lastName) {
    const fullName = firstName + ' ' + lastName;
  
    function displayFullName() {
      alert('Welcome ' + fullName + '!');
    }
  
    displayFullName();
  }
  
  // Example usage:
  welcome('Holberton', 'School');
  