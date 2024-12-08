// Student: x23388749 Likun Fang
// Retrieve cart from localStorage (or initialize it if empty)
// This line retrieves the cart from localStorage. If no cart exists, it initializes an empty array.
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to render the cart contents to the page
function renderCart() {
    const cartItemsContainer = document.getElementById('cartItems'); // Container where cart items will be displayed
    const cartTotal = document.getElementById('cartTotal'); // The element that displays the total price
    cartItemsContainer.innerHTML = ''; // Clear any existing cart items before rendering
    let total = 0; // Initialize total price variable

    // Check if cart is empty, and if so, display a message
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty!</p>';
        return; // Exit the function early if the cart is empty
    }

    // Loop through each item in the cart and generate HTML for each one
    cart.forEach((item, index) => {
        total += item.price; // Add the price of the item to the total
        cartItemsContainer.innerHTML += `
            <div class="cart-item d-flex justify-content-between mb-3 p-3 bg-light border">
                <span class="product-name">${item.product}</span>
                <span class="product-price">$${item.price.toFixed(2)}</span>
                <button class="btn btn-danger btn-sm" onclick="removeItem(${index})">Remove</button>
            </div>
        `;
    });

    // Update the total price displayed on the page
    cartTotal.innerText = total.toFixed(2); // Format total price to 2 decimal places
}

// Function to remove an item from the cart
function removeItem(index) {
    // Remove the item from the cart array by its index
    cart.splice(index, 1);

    // Save the updated cart back to localStorage so that it persists after page reload
    localStorage.setItem('cart', JSON.stringify(cart));

    // Re-render the cart with the updated items
    renderCart();

    // Update the cart count displayed in the navbar (this updates the cart count in the top navigation)
    updateCartCount();
}

// Function to update the cart count in the navbar
function updateCartCount() {
    const cartCount = document.getElementById('cartCount'); // Get the cart count element
    cartCount.innerText = `(${cart.length})`; // Update the text inside the element with the current number of items in the cart
}

// Initial rendering of the cart and updating the cart count
renderCart(); // Call the renderCart function to display the cart initially
updateCartCount(); // Update the cart count in the navbar when the page loads
