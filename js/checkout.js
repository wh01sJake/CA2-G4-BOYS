// Student: x23388749 Likun Fang
// Retrieve cart from localStorage (or initialize an empty array if cart is empty)
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to render the order summary on the checkout page
function renderOrderSummary() {
    const orderItemsContainer = document.getElementById('orderItems'); // Container where the order items will be displayed
    const orderTotal = document.getElementById('orderTotal'); // Element that displays the total price of the cart
    let total = 0; // Element that displays the total price of the cart

    // Check if the cart is empty
    if (cart.length === 0) {
        orderItemsContainer.innerHTML = '<p>Your cart is empty!</p>'; // Display message if cart is empty
        orderTotal.innerText = "0.00"; // Set total to 0 if the cart is empty
        return; // Exit the function early if the cart is empty
    }

    // Loop through cart items and display them in the order summary
    cart.forEach((item) => {
        total += item.price; // Add item price to the total
        orderItemsContainer.innerHTML += `
            <div class="order-item d-flex justify-content-between mb-3 p-3 bg-light border">
                <span>${item.product}</span>
                <span>$${item.price.toFixed(2)}</span>
            </div>
        `;
    });

    // Update the total price displayed on the page
    orderTotal.innerText = `$${total.toFixed(2)}`; // Format total price to 2 decimal places
}

// Handle form submission for payment
document.getElementById('paymentForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission from reloading the page

    // Get form values (shipping and payment details)
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;

    // Basic validation to ensure all required fields are filled out
    if (!name || !address || !cardNumber || !expiryDate || !cvv) { 
        alert("Please fill in all payment details."); // Alert user if any field is empty
        return; // Exit the function if validation fails
    }

    // Simulate order confirmation and show the total amount
    alert(`Order placed successfully!\nTotal: $${document.getElementById('orderTotal').innerText}`);

    // Maybe we can process trasacntion here in real sceanario

    // Clear the cart after the order is placed (remove from localStorage)
    localStorage.removeItem('cart');
    window.location.href = 'index.html'; // Redirect to home page
});

// Initial rendering of the order summary on page load
renderOrderSummary(); // Call function to render the order summary
