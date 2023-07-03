// Declare variable that will 
var emailValidation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
var sbmit_button = document.getElementById("submit");
var name = document.getElementById("name");
var email = document.getElementById("email");
var message = document.getElementById("message");
function formValidation() {

    var data = {};
    // Declare array that will store the errors

    var errors = [];

    // +-----------+    
    // | FULL NAME |
    // +-----------+
    // Check if name is not empty.
    // If so:
    // Pass the collected value
    // to your object "data".
    // Otherwise:
    // Create a corresponding error-message
    // and add it to your array "errors".
    // End your conditional here.
    if (name.value !== "") {
        data.name = name.value;
    } else {
        errors.push("Full Name is missing");
    }


    // +-------+    
    // | EMAIL | 
    // +-------+
    // Check if email is not empty.
    // Check if email is valid.
    // If so:
    // Pass the collected value
    // to your object "data".
    // Otherwise:
    // Create a corresponding error-message
    // and add it to your array "errors".
    // End your nested conditional here.
    // Otherwise:
    // Create a corresponding error-message
    // and add it to your array "errors"
    // End your outer conditional here.
    if (email.value !== "") {
        if (emailValidation.test(email.value)) {
            data.email = email.value;
        } else {
            errors.push("Email is invalid");
        }
    } else {
        errors.push("Email is missing");
    }


    // +---------+    
    // | MESSAGE | 
    // +---------+
    // Check if message is not empty.
    // If so:
    // Pass the collected value
    // to your object "data".
    // Otherwise:
    // Create a corresponding error-message
    // and add it to your array "errors"
    // End your conditional here.
    if (message.value !== "") {
        data.message = message.value;
    } else {
        errors.push("Message is missing");
    }


    // +-----------------+
    // | FEEDBACK/ERRORS |
    // +-----------------+
    // Check if there is anything in array errors
    // If so: 
    // Print it in JavaScript console.
    // Otherwise:
    // Print the data in JavaScript console.
    // Clear text-fields
    // End your conditional here.
    if (errors.length !== 0) {
        console.log(errors);
    } else {
        console.log(data);
        name.value = "";
        email.value = "";
        message.value = "";
    }

    // Close your function here
}

// Register your form to "click" event.
sbmit_button.addEventListener("click", formValidation);