let cart = [];

// Function to show the selected section
function showSection(sectionId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Function to add products to the cart
function addToCart(productId) {
    cart.push(productId);
    updateCartCount();
    updateCartDisplay();
}

// Function to update the cart count
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

// Function to display cart items
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = `Product ${item}`;
        cartItemsContainer.appendChild(itemDiv);
    });
}

// Function to clear the cart
function clearCart() {
    cart = [];
    updateCartCount();
    updateCartDisplay();
}

// Show the homepage by default
showSection('home');
