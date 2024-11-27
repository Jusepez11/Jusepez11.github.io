document.addEventListener("DOMContentLoaded", function() {
    // Fetch JSON data
    fetch("menu.json")
        .then((response) => response.json())
        .then((data) => {
            // Process JSON data
            const menuContainer = document.getElementById("menu-container");

            const header = document.createElement('div');
            header.className = 'topnav';
            
            
            menuContainer.appendChild(header);
            data.forEach((item) => {
                if (item.name === 'divider'){
                    header.appendChild(document.createElement("br"));
                }else{
                    // Create menu item link element
                    const menuItem = document.createElement("a");
                    menuItem.classList.add("menu-item");
                    menuItem.textContent = item.name;
                    menuItem.href = item.url; // Assuming each menu item has a 'url' property in JSON
    
                    // Append menu item to the container
                    header.appendChild(menuItem);
                }
            });
        })
        .catch(error => console.error("Error fetching menu:", error));

        fetch("footer.json")
        .then((response) => response.json())
        .then((data) => {
            // Process JSON data
            const footerMenu = document.getElementById("footer");

            const footer = document.createElement('div');
            footer.className = 'footer-content';
            
            const fieldset = document.createElement('fieldset');
            const span = document.createElement('span');

            fieldset.appendChild(span);
            footer.appendChild(fieldset);            
            footerMenu.appendChild(footer);
            data.forEach((item) => {
                // Create menu item link element
                const menuItem = document.createElement("a");
                menuItem.classList.add("menu-item");
                menuItem.textContent = `${item.name} | `;
                menuItem.href = item.url; // Assuming each menu item has a 'url' property in JSON

                // Append menu item to the container
                span.appendChild(menuItem);
            });
        })
        .catch(error => console.error("Error fetching menu:", error));

});

// Function to validate HTML
function validateHTML() {
    const currentURL = encodeURIComponent(window.location.href);
    window.open(`https://validator.w3.org/nu/?doc=${currentURL}`, "_blank");
}

// Function to validate CSS
function validateCSS() {
    const currentURL = encodeURIComponent(window.location.href);
    window.open(`https://jigsaw.w3.org/css-validator/validator?uri=${currentURL}&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en`, "_blank");
}

// Function to validate AIM (Accessibility, SEO, and Mobile-friendliness)
function validateAIM() {
    // Replace the URL with the tool you prefer for accessibility, SEO, and mobile-friendliness validation
    window.open("https://www.google.com/webmasters/tools/mobile-friendly/", "_blank");
}