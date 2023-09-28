// Function to validate the password
function validatePassword() {
    // Retrieve the password input element
    const passwordInput = document.getElementById("password");
    
    // Retrieve the error message element
    const errorMessage = document.getElementById("error");
    
    // Regular expressions for password criteria
    const lengthRegex = /.{8,}/;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /\d/;
    const specialCharRegex = /[!@#$%^&*]/;
    
    // Retrieve the password value from the input field
    const password = passwordInput.value;
    
    // Check if the password meets all criteria
    if (
        lengthRegex.test(password) &&
        uppercaseRegex.test(password) &&
        lowercaseRegex.test(password) &&
        digitRegex.test(password) &&
        specialCharRegex.test(password)
    ) {
        // Clear any previous error message
        errorMessage.textContent = "";
        return true; // Allow form submission
    } else {
        // Display an error message
        errorMessage.textContent = "Password must meet all criteria.";
        return false; // Prevent form submission
    }
}

// Event listener for form submission
document.getElementById("passwordForm").addEventListener("submit", function (event) {
    // Prevent the form from submitting if validation fails
    if (!validatePassword()) {
        event.preventDefault();
    }
});

