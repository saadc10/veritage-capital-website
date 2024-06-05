document.addEventListener('DOMContentLoaded', function () {
    fetch('header.html')
      .then(response => response.text())
      .then(html => {
        document.querySelector('header').innerHTML = html;
      });
  
    fetch('footer.html')
      .then(response => response.text())
      .then(html => {
        document.querySelector('footer').innerHTML = html;
      });
  });
  