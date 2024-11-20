document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links and sections
    const navLinks = document.querySelectorAll('.hub nav a');
    const sections = document.querySelectorAll('main section');

    // Function to show selected section and hide others
    function switchSection(sectionId) {
        // Hide all sections
        sections.forEach(section => {
            section.classList.add('hidden');
        });

        // Show the selected section
        const targetSection = document.querySelector(sectionId);
        if (targetSection) {
            targetSection.classList.remove('hidden');
        }
    }

    // Add click event listeners to all navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor behavior
            
            // Get the target section ID from the href attribute
            const targetId = this.getAttribute('href');
            
            // Switch to the target section
            switchSection(targetId);
        });
    });

    // Show home section by default (optional)
    switchSection('#home');
});