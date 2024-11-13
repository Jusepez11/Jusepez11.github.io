document.addEventListener('DOMContentLoaded', function() {
    // Get the add course button and courses container
    const form = document.getElementById('form');
    const newPage = document.getElementById('result');
    const addCourseButton = document.getElementById('add-course-button');
    const coursesContainer = document.getElementById('courses');
    const submit = document.getElementById('submit');
    const isValid = true;
    let courseCount = 0;
    const elements = [
        document.getElementById('name'),
        document.getElementById('mascot'),
        document.getElementById('image'),
        document.getElementById('imag-caption'),
        document.getElementById('personal-background'),
        document.getElementById('professional-background'),
        document.getElementById('academic-background'),
        document.getElementById('web-dev-background'),
        document.getElementById('platform'),
        document.getElementById('course'),
        document.getElementById('agreement')
    ];

    document.querySelector('form').submit.addEventListener('click', function(){
        elements.forEach((element) => {
            if (!element.value) {
                isValid = false;
                alert('Please fill in all required fields correctly.');
            }
        });
    });
    
    submit.addEventListener('click', function(event){
        
            event.preventDefault();
            form.classList.add('hidden');
            newPage.classList.remove('hidden');

    
            //const reader = new FileReader();
            //name
            newPage.innerHTML = `<h2>${elements[0].value} || ${elements[1].value}</h2><br>
                
                <p class="me"><strong>Personal background:</strong>${elements[4].value}</p><br>
                <p class="me"><strong>Professional Background:</strong>${elements[5].value}</p><br>
                <p class="me"><strong>Academic Background:</strong>${elements[6].value}</p><br>
                <p class="me"><strong>Background in this Subject:</strong>${elements[7].value}</p><br>
                <p class="me"><strong>Primary Computer Platform:</strong>${elements[8].value}</p><br>
                <p class="me"><strong>Courses I'm in &amp; Why:</strong>${elements[1].value}</p>`;
                        
    });

    // Add click event listener to the button
    addCourseButton.addEventListener('click', function() {
        // Create a container div for the new course input and its remove button
        const courseDiv = document.createElement('div');
        
        // Create the text input
        const courseInput = document.createElement('input');
        courseInput.type = 'text';
        courseInput.classList = 'course';
        courseInput.name = 'course-' + courseCount;
        courseInput.id = 'course-' + courseCount;
        courseInput.placeholder = 'Enter course name';
        courseInput.required = true;
        
        // Create the remove button
        const removeButton = document.createElement('input');
        removeButton.type = 'button';
        removeButton.value = 'Remove';
        removeButton.className = 'remove-course';
        
        // Add click event listener to remove button
        removeButton.addEventListener('click', function() {
            courseDiv.remove();
        });
        
        // Add the elements to the container
        courseDiv.appendChild(courseInput);
        courseDiv.appendChild(removeButton);
        
        // Add the container to the courses section
        coursesContainer.appendChild(courseDiv);
        
        courseCount++;
    });
});