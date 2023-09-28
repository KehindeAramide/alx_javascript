// Function to generate the specified number of text input fields dynamically
function generateInputFields(numFields) {
    const inputContainer = document.getElementById("inputContainer");
    inputContainer.innerHTML = ""; // Clear any existing fields

    for (let i = 1; i <= numFields; i++) {
        const inputField = document.createElement("input");
        inputField.type = "text";
        inputField.name = "field" + i; // Assign unique names to fields
        inputContainer.appendChild(inputField);
    }
}

// Function to validate the form before submission
function validateForm(event) {
    event.preventDefault(); // Prevent form submission by default

    const numFieldsSelect = document.getElementById("numFields");
    const numFields = parseInt(numFieldsSelect.value, 10); // Get selected value as an integer

    // Loop through the generated input fields and check if any are empty
    for (let i = 1; i <= numFields; i++) {
        const inputField = document.getElementsByName("field" + i)[0]; // Get field by name
        if (!inputField.value.trim()) {
            alert("Please fill in all fields");
            return; // Exit the function if any field is empty
        }
    }

    // If all fields are filled, you can submit the form here
    document.getElementById("dynamicForm").submit();
}

// Add event listeners to handle form generation and submission
document.getElementById("numFields").addEventListener("change", function () {
    generateInputFields(parseInt(this.value, 10));
});

document.getElementById("dynamicForm").addEventListener("submit", validateForm);
