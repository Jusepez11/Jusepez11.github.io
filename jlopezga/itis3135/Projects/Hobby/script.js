document.addEventListener("DOMContentLoaded", function() {
  const title = document.getElementById("title");
  const h1Title = document.createElement("h1");
  h1Title.textContent = title.innerHTML;

  const elements = [
    document.getElementById('what'),
    document.getElementById('who'),
    document.getElementById('when'),
    document.getElementById('where'),
    document.getElementById('how'),
    document.getElementById('why'),
    document.getElementById('ai')
  ];

  // Fetch JSON data
  fetch("Components/menu.json")
      .then((response) => response.json())
      .then((data) => {
          // Process JSON data
          const menuContainer = document.getElementById("header");

          const header = document.createElement('div');
          header.className = 'topnav';
          
          header.appendChild(h1Title);
          menuContainer.appendChild(header);
          data.forEach((item) => {
              // Create menu item link element
              const menuItem = document.createElement("a");
              menuItem.classList.add("menu-item");
              menuItem.textContent = item.name;
              menuItem.href = item.url; // Assuming each menu item has a 'url' property in JSON
              menuItem.id = item.id;

              menuItem.addEventListener("click", function(){
                  elements.forEach((element) => {
                      
                      element.classList.add('hidden');
                      if (menuItem.id.startsWith(element.id)){
                          element.classList.remove('hidden');
                      }
                  });
              });

              // Append menu item to the container
              header.appendChild(menuItem);
              
          });
      }).catch((error) => console.error("Error fetching menu:", error));

      fetch("Components/footer.json")
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
              menuItem.textContent = `${item.name}`;
              menuItem.href = item.url; // Assuming each menu item has a 'url' property in JSON
  
  
  
              // Append menu item to the container
              span.appendChild(menuItem);
              if (data[data.length-1] !== item){
                  span.innerHTML += ' | ';
              }
          });
          const footerText = document.createElement("div");
          footer.innerHTML += `
          <p id="built">Page built by &nbsp; <a href="/jlopezga/itis3135/Projects/Dinainca-SA/index.html">Dinainca S.A.</a> &nbsp; © 2024 &nbsp; 
              <a href="https://www.freecodecamp.org/certification/jusepez11/responsive-web-design">&nbsp;Certified in responsive Web Design</a>
              <a href="https://www.freecodecamp.org/certification/jusepez11/javascript-algorithms-and-data-structures-v8">Certified in JS</a>
      
          </p>
      
          <div class="validation-container">
              <a href="https://validator.w3.org/check?uri=https://jvidal2.github.io/itis3135/" id="validation-link-html">
                  <img src="/jlopezga/itis3135/images/button_validation_html5.png" class="validation" width="88" height="31" alt="Validate webpage HTML.">
              </a>
      
              <a href="https://jigsaw.w3.org/css-validator/check/https://jvidal2.github.io/itis3135/" id="validation-link-css">
                  <img src="/jlopezga/itis3135/images/button_validation_css.png" class="validation" width="88" height="31" alt="Validate webpage CSS.">
              </a>
          </div>`;
      }).catch((error) => console.error("Error fetching menu:", error));

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