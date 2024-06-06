document.addEventListener('DOMContentLoaded', () => {
  const includeHTML = (selector, file) => {
    fetch(file)
      .then(response => {
        if (!response.ok) {
          return Promise.reject(new Error(`Network response was not ok for ${file}: ${response.status}`));
        }
        return response.text();
      })
      .then(html => {
        document.querySelector(selector).innerHTML = html;
        if (selector === 'header') {
          setupHamburgerMenu(); // Ensure the menu is set up after the header is included
        }
      })
      .catch(error => {
        console.error(`Error loading ${file}:`, error);
        document.querySelector(selector).innerHTML = `<p>Error loading content. Please try again later.</p>`;
      });
  };

  const setupHamburgerMenu = () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    console.log('Hamburger:', hamburger);
    console.log('Nav Menu:', navMenu);

    if (hamburger && navMenu) {
      // Remove any existing event listeners to prevent duplication
      hamburger.removeEventListener('click', toggleNavMenu);

      // Add a single event listener
      hamburger.addEventListener('click', toggleNavMenu);
    }
  };

  const toggleNavMenu = () => {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) {
      console.log('Hamburger clicked');
      navMenu.classList.toggle('active');
    }
  };

  // Include header and footer
  includeHTML('header', 'header.html');
  includeHTML('footer', 'footer.html');
});
