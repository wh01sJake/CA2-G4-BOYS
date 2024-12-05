// Retrieve cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to render the order summary on the checkout page
function renderOrderSummary() {
    const orderItemsContainer = document.getElementById('orderItems');
    const orderTotal = document.getElementById('orderTotal');
    let total = 0;

    // Check if the cart is empty
    if (cart.length === 0) {
        orderItemsContainer.innerHTML = '<p>Your cart is empty!</p>';
        orderTotal.innerText = "0.00";
        return;
    }

    // Loop through cart items and display them
    cart.forEach((item) => {
        total += item.price;
        orderItemsContainer.innerHTML += `
            <div class="order-item d-flex justify-content-between mb-3 p-3 bg-light border">
                <span>${item.product}</span>
                <span>$${item.price.toFixed(2)}</span>
            </div>
        `;
    });

    // Update the total price
    orderTotal.innerText = `$${total.toFixed(2)}`;
}

// Handle form submission for payment
document.getElementById('paymentForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission from reloading the page

    // Get form values
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;

    // Basic validation of input fields
    if (!name || !address || !cardNumber || !expiryDate || !cvv) {
        alert("Please fill in all payment details.");
        return;
    }

    // Simulate order confirmation
    alert(`Order placed successfully!\nTotal: $${document.getElementById('orderTotal').innerText}`);

    // You can process payment here (e.g., send data to server)

    // Clear the cart after order
    localStorage.removeItem('cart');
    window.location.href = 'index.html'; // Redirect to home page
});

// Initial rendering of the order summary on page load
renderOrderSummary();
