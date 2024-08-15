document.addEventListener("DOMContentLoaded", function() {
    loadComponent("header.html", "#header");
    loadComponent("header-mobile.html", "#header-mobile");
    loadComponent("footer.html", "#footer");

    // Add event listeners for the mobile menu after the components are loaded
    document.querySelector("#header-mobile").addEventListener("load", function() {
        initializeMobileMenu();
    });
});

function loadComponent(url, selector) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${url}`);
            }
            return response.text();
        })
        .then(data => {
            document.querySelector(selector).innerHTML = data;

            // Initialize the mobile menu if header-mobile is loaded
            if (selector === "#header-mobile") {
                initializeMobileMenu();
            }
        })
        .catch(error => console.error("Error loading component:", error));
}

function initializeMobileMenu() {
    const hamburger = document.getElementById("hamburger");
    const mobileNav = document.getElementById("mobileNav");
    const closeMenu = document.getElementById("closeMenu");

    if (hamburger) {
        hamburger.addEventListener("click", function() {
            this.classList.toggle("active");
            mobileNav.classList.toggle("show-nav");
        });
    }

    if (closeMenu) {
        closeMenu.addEventListener("click", function() {
            mobileNav.classList.remove("show-nav");
            hamburger.classList.remove("active");
        });
    }
}
