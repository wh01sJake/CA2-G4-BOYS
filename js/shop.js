// x23287951 Olalekan Ade-Ojo 
// Shop Java Script Section
// Retrieve cart from localStorage (or initialize an empty array)
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to update the cart count in the navbar
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    cartCount.innerText = `(${cart.length})`;
}

// Product availability data (this can be extended or fetched from an API)
const products = {
    5: {
        name: "Nike Air Max TL 2.5",
        price: 89.99,
        soldOut: true, // Set to true for Sold Out
    },
    // Other products
};

// Function to update product button visibility based on sold-out status
function updateProductButtons(productId, soldOut) {
    const addToCartButton = document.querySelector(`#addToCartBtn-${productId}`);
    const soldOutButton = document.querySelector(`#soldOutBtn-${productId}`);

    // If the product is sold out, hide "Add to Cart" and show "Sold Out"
    if (soldOut) {
        if (addToCartButton) addToCartButton.style.display = 'none'; // Hide "Add to Cart"
        if (soldOutButton) soldOutButton.style.display = 'block'; // Show "Sold Out"
    } else {
        if (addToCartButton) addToCartButton.style.display = 'block'; // Show "Add to Cart"
        if (soldOutButton) soldOutButton.style.display = 'none'; // Hide "Sold Out"
    }
}

// Handle "Add to Cart" functionality
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function () {
        const product = this.getAttribute('data-product');
        const price = parseFloat(this.getAttribute('data-price'));
        cart.push({ product, price });
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        alert(`${product} added to cart!`);
    });
});

// For each product, dynamically set button visibility (based on sold-out status)
document.querySelectorAll('.product').forEach(productElement => {
    const productId = productElement.getAttribute('data-product-id');
    const product = products[productId];
    if (product) {
        updateProductButtons(productId, product.soldOut);
    }
});

// Ensure all product buttons are updated on page load
document.querySelectorAll('.product').forEach(productElement => {
    const productId = productElement.getAttribute('data-product-id');
    const product = products[productId];
    if (product) {
        updateProductButtons(productId, product.soldOut); // Call function to update button visibility
    }
});
