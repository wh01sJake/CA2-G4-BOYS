// Get all navigation links
const navLinks = document.querySelectorAll('.navbar-nav .nav-item a');

// Get the current page's URL
const currentPage = window.location.pathname.split("/").pop(); // Get the current page name

// Loop through each nav link and add the 'active' class to the correct one
navLinks.forEach(link => {
    // Check if the link's href matches the current page URL
    if (link.getAttribute('href') === currentPage) {
        link.parentElement.classList.add('active'); // Add 'active' class to the parent <li> element
    }
});
