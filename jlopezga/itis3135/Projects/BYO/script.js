document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const newPage = document.getElementById('result');
    const addCourseButton = document.getElementById('add-course-button');
    const coursesContainer = document.getElementById('courses');
    const submit = document.getElementById('submit');
    const imageInput = document.getElementById('image');
    let imageData = '';
    let isValid = true;
    let courseCount = 1;

    let courses = [
        document.getElementById('course-0')
    ];
    
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
        document.getElementById('agreement')
    ];

    /**
     * ${imageData ? `<img src="${imageData}" alt="${elements[3].value}">
            <p><em>${elements[3].value}</em></p>` : ''}
     */
    

    imageInput.addEventListener('input', function(e) {
        const file = e.target.files[0];
        const reader = new FileReader();
        
        reader.onload = function(event) {
            imageData = event.target.result;
        };
        
        if (file) {
            reader.readAsDataURL(file);
        }
    });

    document.querySelector('form').submit.addEventListener('click', function(){
        elements.forEach((element) => {
            if (!element.value) {
                isValid = false;
                alert('Please fill in all required fields correctly.');
            }
        });
    });
    
    submit.addEventListener('click', function(event) {
        event.preventDefault();

        newPage.innerHTML = `
            <h2>${elements[0].value} || ${elements[1].value}</h2>
            
            <p class="me"><strong>Personal background:</strong>${elements[4].value}</p><br>
            <p class="me"><strong>Professional Background:</strong>${elements[5].value}</p><br>
            <p class="me"><strong>Academic Background:</strong>${elements[6].value}</p><br>
            <p class="me"><strong>Background in this Subject:</strong>${elements[7].value}</p><br>
            <p class="me"><strong>Primary Computer Platform:</strong>${elements[8].value}</p><br>
            <p class="me"><strong>Courses I'm in &amp; Why:</strong></p>
            <ul>
            <li>${courses[0].value}</li>
            <li>${courses[1].value}</li>
            `;

        courses.forEach((course) => {
            newPage.innerHTML += `<li>${course.value}</li>`;
        });

        newPage.innerHTML += `</ul>`;
    });

    addCourseButton.addEventListener('click', function() {
        const courseDiv = document.createElement('div');
        
        const courseInput = document.createElement('input');
        courseInput.type = 'text';
        courseInput.classList = 'course';
        courseInput.name = 'course-' + courseCount;
        courseInput.id = 'course-' + courseCount;
        courseInput.placeholder = 'Enter course name';
        courseInput.required = true;
        
        const removeButton = document.createElement('input');
        removeButton.type = 'button';
        removeButton.value = 'Remove';
        removeButton.className = 'remove-course';
        
        removeButton.addEventListener('click', function() {
            courseDiv.remove();
        });
        
        courseDiv.appendChild(courseInput);
        courseDiv.appendChild(removeButton);
        coursesContainer.appendChild(courseDiv);
        
        courseCount++;

        courses.push(document.getElementById(`course-${courseCount}`));
    });
});