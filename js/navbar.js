// Student: x23388749 Likun Fang

// Get all navigation links
const navLinks = document.querySelectorAll('.navbar-nav .nav-item a');

// Get the current page's URL
// The 'split' method splits the URL based on the '/' and grab the last part (the page name)
const currentPage = window.location.pathname.split("/").pop(); // Get the current page name

// Loop through each nav link and add the 'active' class to the correct one
navLinks.forEach(link => {
    // Check if the link's href matches the current page URL
    // Compare the 'href' attribute of each link with the current page name
    if (link.getAttribute('href') === currentPage) {
    // If they match, add the 'active' class to the parent <li> element
        link.parentElement.classList.add('active'); // Add 'active' class to the parent <li> element
    }
});
