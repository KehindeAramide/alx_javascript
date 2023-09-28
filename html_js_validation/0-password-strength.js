// Function to validate the password
function validatePassword() {
    // Retrieve the password input element
    var passwordInput = document.getElementById("password");
    
    // Retrieve the error message element
    var errorMessage = document.getElementById("error");
    
    // Regular expressions for password criteria
    var lengthRegex = /.{8,}/;
    var uppercaseRegex = /[A-Z]/;
    var lowercaseRegex = /[a-z]/;
    var digitRegex = /\d/;
    var specialCharRegex = /[!@#$%^&*]/;
    
    // Retrieve the password value from the input field
    var password = passwordInput.value;
    
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

