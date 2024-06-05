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
      })
      .catch(error => {
        console.error(`Error loading ${file}:`, error);
        // Optional: Display an error message to the user
        document.querySelector(selector).innerHTML = `<p>Error loading content. Please try again later.</p>`; 
      });
  };

  // Include header and footer
  includeHTML('header', 'header.html');
  includeHTML('footer', 'footer.html');

  // Contact form submission handling (placeholder)
  const contactForm = document.getElementById('contact-form');
  const messageSent = document.getElementById('message-sent');

  if (contactForm) { // Make sure the contact form exists on the page
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault(); 
      
      // TODO: Send form data (e.g., using AJAX, Formspree, etc.)

      // After successful submission:
      contactForm.style.display = 'none';
      messageSent.style.display = 'block'; 
    });
  }
});
