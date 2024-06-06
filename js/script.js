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

  // Previous code

// Set up the hamburger menu after the header is loaded
const setupHamburgerMenu = () => {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.getElementById('nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      hamburger.classList.toggle('open'); // Toggle the hamburger menu's appearance

      // Adjust the max-height of the menu when it is toggled
      if (navMenu.classList.contains('active')) {
        navMenu.style.maxHeight = navMenu.scrollHeight + 'px';
      } else {
        navMenu.style.maxHeight = '0';
      }
    });
  }
};

// Include header and footer
includeHTML('header', 'header.html');
includeHTML('footer', 'footer.html').then(() => setupHamburgerMenu()); 

});
