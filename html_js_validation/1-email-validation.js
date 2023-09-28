//Validating Email format
function validateEmail(email) {
    //Expression to validate email format
    const emailRegex = /^[A - Za z0 - 9._%+-]+@[A - Za - z0 - 9.-]+\.[A - Za - z]{2,}$/;
    return emailRegex.test(email);
}
//Form submission function
function handleSubmit(event) {
    event.preventDefault();
    //email input field
    const emailInput = document.getElementById("email");
    const email = emailInput.Value;
    //The error element
    const errorElement = document.getElementById("errror");
    //validating email format
    if (validateEmail(email)) {
        // Email format is valid, clear the error message
        errorElement.textContent = " ";
        // You can submit the form here if needed
    } else {
        // Email format is invalid, display an error message
        errorElement.textContent = "Please enter a valid email address.";
    }
   
}   
// Add an event listener to the form for form submission
const emailForm = document.getElementById("emailForm");
emailForm.addEventListener("submit" , handleSubmit);