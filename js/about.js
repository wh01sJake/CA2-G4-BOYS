// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting 

    // Get the form field values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic form validation
    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    // Simulate form submission success 
    alert(`Thank you, ${name}! Your message has been submitted.`);

    // Clear the form fields after submission
    document.getElementById('contactForm').reset();
}

// Attach event listener to the form submit button
const form = document.getElementById('contactForm');
form.addEventListener('submit', handleFormSubmit);
