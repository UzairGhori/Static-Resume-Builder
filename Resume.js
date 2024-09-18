var form = document.getElementById('personal-info-form');
function HandleSubmit(event) {
    event.preventDefault();
    // Clear previous error messages
    clearErrors();
    // ... rest of the code
}
var skillsSection = document.getElementById('skills-section');
skillsSection.style.display = (skillsSection.style.display === 'none') ? 'block' : 'none';
var skillsList = document.getElementById('skills-list');
if (skillsList) {
    var newSkillDiv = document.createElement('div');
    newSkillDiv.classList.add('skill-row');
    newSkillDiv.innerHTML = "\n            <input type=\"text\" placeholder=\"Enter your skill\" name=\"skills[]\">\n            <button type=\"button\" class=\"remove-skill-btn\" onclick=\"removeSkill(this)\">Remove</button>\n        ";
    skillsList.appendChild(newSkillDiv);
}
function RemoveSkill(button) {
    var _a;
    (_a = button.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
}
if (form) {
    form.addEventListener('submit', handleSubmit);
}
// Function to show error messages
function ShowError(inputId, message) {
    var _a;
    var inputElement = document.getElementById(inputId);
    if (inputElement) {
        var errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.style.color = 'red';
        errorElement.textContent = message;
        (_a = inputElement.parentElement) === null || _a === void 0 ? void 0 : _a.appendChild(errorElement);
    }
}
// Helper function to clear error messages
function ClearErrors() {
    var errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function (msg) { return msg.remove(); });
}
// Email validation function
function ValidateEmail(email) {
    var emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return emailPattern.test(email);
}
