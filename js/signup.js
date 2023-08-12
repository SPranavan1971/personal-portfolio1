document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.getElementById("signup-form");
    const errorMessages = {
        username: "Please enter a valid username.",
        password: "Please enter a valid password.",
        nic: "Please enter a valid NIC number.",
        id: "Please enter a valid ID."
    };

    signupForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = signupForm.username.value;
        const password = signupForm.password.value;
        const nic = signupForm.nic.value;
        const id = signupForm.id.value;

        clearErrorMessages();

        if (!isValidInput(username)) {
            displayErrorMessage("username", errorMessages.username);
        }

        if (!isValidInput(password)) {
            displayErrorMessage("password", errorMessages.password);
        }

        if (!isValidInput(nic)) {
            displayErrorMessage("nic", errorMessages.nic);
        }

        if (!isValidInput(id)) {
            displayErrorMessage("id", errorMessages.id);
        }

        // Here you can perform additional validation and send the data to the server
    });

    function isValidInput(input) {
        return input.trim() !== "";
    }

    function displayErrorMessage(field, message) {
        const errorMessage = document.createElement("div");
        errorMessage.className = "error-message";
        errorMessage.textContent = message;
        const fieldElement = document.getElementById(field);
        fieldElement.parentNode.appendChild(errorMessage);
        fieldElement.style.borderColor = "red";
    }

    function clearErrorMessages() {
        const errorElems = document.querySelectorAll(".error-message");
        errorElems.forEach(elem => elem.remove());

        const inputElems = signupForm.querySelectorAll("input");
        inputElems.forEach(elem => {
            elem.style.borderColor = "#ccc";
        });
    }
});
