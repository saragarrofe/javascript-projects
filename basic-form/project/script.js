// form and input elements
const form = document.querySelector("form");
const inputs = {
    fullname: document.getElementById("fullname"),
    email: document.getElementById("email"),
    password: document.getElementById("password"),
    date: document.getElementById("date"),
    gender: document.getElementById("gender"),
    mobile: document.getElementById("mobile"), 
    message: document.getElementById("message"), 
};
const passToggleBtn = document.getElementById("pass-toggle-btn");

// Regular expression patterns
const patterns = {
    email: /^[^ ]+@[^ ]+\.[a-z]{2,3}$/,
    mobile: /^\+?\d{9,11}$/
};

// Function to display error messages
function showError(input, message) {
    const formGroup = input.closest(".form-group");
    input.classList.add("error");
    let error = formGroup.querySelector(".error-text");
    if (!error) {
        error = document.createElement("small");
        error.className = "error-text";
        formGroup.appendChild(error);
    }
    error.textContent = message;
}

// Validation functions
function validateInput(input, pattern) {
    const value = input.value.trim();
    if (value === "") {
        showError(input, `Enter your ${input.name}`);
        return false;
    } else if (pattern && !pattern.test(value)) {
        showError(input, `Enter a valid ${input.name}`);
        return false;
    }
    input.classList.remove("error");
    return true;
}

// Handle form submission
function handleFormData(event) {
    event.preventDefault();
    let isValid = true;

    // Validation checks
    isValid &= validateInput(inputs.fullname);
    isValid &= validateInput(inputs.email, patterns.email);
    isValid &= validateInput(inputs.password);
    isValid &= validateInput(inputs.date);
    isValid &= validateInput(inputs.gender);
    isValid &= validateInput(inputs.mobile, patterns.mobile);
    isValid &= validateInput(inputs.message);

    const text = document.getElementById("text");

    if (!isValid) {
        text.textContent = "It seems something went wrong. Check all the fields in the form and try again";
    } else {
        text.textContent = "Thank you for filling out the form correctly";
        // Aquí puedes añadir cualquier lógica adicional necesaria cuando el formulario se haya llenado correctamente.
    }
}

// Toggling password visibility
function togglePasswordVisibility() {
    const isPassword = inputs.password.type === "password";
    passToggleBtn.className = isPassword ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
    inputs.password.type = isPassword ? "text" : "password";
}

// Attaching event listeners
form.addEventListener("submit", handleFormData);
passToggleBtn.addEventListener('click', togglePasswordVisibility);
