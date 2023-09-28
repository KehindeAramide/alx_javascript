// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Retrieve form field values
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");

    // Retrieve the message div for displaying validation results
    const messageDiv = document.getElementById("message");

    // Validate form fields
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    // Check if required fields are filled
    if (!name || !email) {
        messageDiv.textContent = "Please fill in all required fields.";
        messageDiv.style.color = "red";
    } else {
        // Clear any previous validation messages
        messageDiv.textContent = "";

        // Perform additional validations here if needed

        // Display success message
        messageDiv.textContent = "Form submitted successfully!";
        messageDiv.style.color = "green";
    }
}

// Add an event listener to the form element for the "submit" event
document.getElementById("submitForm").addEventListener("submit", handleFormSubmit);
