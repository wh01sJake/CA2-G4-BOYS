// Retrieve cart from localStorage (or initialize it if empty)
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to render the cart
function renderCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    cartItemsContainer.innerHTML = ''; // Clear current items
    let total = 0;

    // Check if cart is empty
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty!</p>';
        return;
    }

    // Loop through cart items and display them
    cart.forEach((item, index) => {
        total += item.price;
        cartItemsContainer.innerHTML += `
            <div class="cart-item d-flex justify-content-between mb-3 p-3 bg-light border">
                <span class="product-name">${item.product}</span>
                <span class="product-price">$${item.price.toFixed(2)}</span>
                <button class="btn btn-danger btn-sm" onclick="removeItem(${index})">Remove</button>
            </div>
        `;
    });

    // Update the total price
    cartTotal.innerText = total.toFixed(2);
}

// Function to remove an item from the cart
function removeItem(index) {
    // Remove the item from the cart array
    cart.splice(index, 1);

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Re-render the cart page
    renderCart();

    // Update the cart count in the navbar
    updateCartCount();
}

// Function to update the cart count in the navbar
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    cartCount.innerText = `(${cart.length})`;
}

// Initial rendering of the cart
renderCart();
updateCartCount();
