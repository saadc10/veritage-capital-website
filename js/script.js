document.addEventListener("DOMContentLoaded", function() {
  loadComponent("header.html", "#header");
  loadComponent("footer.html", "#footer");
  loadComponent("footer-mobile.html", "#footer-mobile");

  function loadComponent(url, selector) {
      fetch(url)
          .then(response => response.text())
          .then(data => {
              document.querySelector(selector).innerHTML = data;
              if (selector === "#footer" || selector === "#footer-mobile") {
                  setupNewsletterForm();
              }
          })
          .catch(error => console.error('Error loading component:', error));
  }

  function setupNewsletterForm() {
      const form = document.getElementById('newsletter-form');
      const submissionMessage = document.getElementById('submission-message');

      form.addEventListener('submit', function(event) {
          event.preventDefault();
          form.style.display = 'none';
          submissionMessage.style.display = 'block';
      });
  }

  function setupNewsletterForm() {
    const form = document.getElementById('contact-form');
    const submissionMessage = document.getElementById('message-sent');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        form.style.display = 'none';
        submissionMessage.style.display = 'block';
    });
}
});