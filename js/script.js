document.addEventListener("DOMContentLoaded", function () {
  // Include header
  fetch('header.html')
      .then(response => response.text())
      .then(html => {
          document.querySelector('header').innerHTML = html;
      });

  // Include footer
  fetch('footer.html')
      .then(response => response.text())
      .then(html => {
          document.querySelector('footer').innerHTML = html;
      });

  // Contact form submission handling
  const contactForm = document.getElementById('contact-form');
  const messageSent = document.getElementById('message-sent');

  contactForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission

      // You would typically send the form data here using AJAX or another method

      contactForm.style.display = 'none'; // Hide the form
      messageSent.style.display = 'block'; // Show the "Message Sent" message
  });
});