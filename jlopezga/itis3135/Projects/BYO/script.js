// Function to validate form fields
function validateForm(event) {
    // Get all required inputs
    const requiredInputs = document.querySelectorAll('[required]');
    let isValid = true;
    let firstInvalidField = null;

    // Check each required field
    requiredInputs.forEach(input => {
        // Remove any existing error styling
        input.classList.remove('invalid');
        
        // Check if empty or (for file input) no file selected
        if ((input.type === 'file' && !input.files.length) || 
            (!input.value.trim() && input.type !== 'file')) {
            input.classList.add('invalid');
            isValid = false;
            // Store first invalid field for focus
            if (!firstInvalidField) firstInvalidField = input;
        }
        
        // Special check for file type
        if (input.type === 'file' && input.files.length) {
            const file = input.files[0];
            const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
            if (!validTypes.includes(file.type)) {
                input.classList.add('invalid');
                isValid = false;
                if (!firstInvalidField) firstInvalidField = input;
            }
        }
    });

    // Check courses (assuming at least one course is required)
    const courses = document.querySelectorAll('#courses input[type="text"]');
    if (courses.length === 0 || !Array.from(courses).some(course => course.value.trim())) {
        document.getElementById('courses').classList.add('invalid');
        isValid = false;
    }

    // Check agreement checkbox
    if (!document.getElementById('agreement').checked) {
        document.getElementById('agreement').classList.add('invalid');
        isValid = false;
    }

    // Focus on first invalid field if any
    if (firstInvalidField) {
        firstInvalidField.focus();
    }

    return isValid;
}

// Add some helpful CSS
const style = document.createElement('style');
style.textContent = `
    .invalid {
        border-color: red !important;
        background-color: #fff0f0;
    }
    .invalid:focus {
        outline-color: red;
    }
`;
document.head.appendChild(style);

// Add form submit event listener
document.querySelector('form').addEventListener('submit', function(event) {
    if (!validateForm()) {
        event.preventDefault();
        alert('Please fill in all required fields correctly.');
    }
});

// Optional: Real-time validation
document.querySelectorAll('input, textarea, select').forEach(input => {
    input.addEventListener('input', function() {
        if (this.classList.contains('invalid')) {
            validateForm();
        }
    });
});