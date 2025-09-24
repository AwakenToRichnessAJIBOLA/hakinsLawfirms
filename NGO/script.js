let cart = [];
let total = 0;

// Function to add a product to the cart
function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    updateCart();
}

// Function to update the cart UI
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');

    // Clear the cart list
    cartItems.innerHTML = '';

    // Add each item to the cart list
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });

    // Update the cart count and total
    cartCount.textContent = cart.length;
    cartTotal.textContent = total.toFixed(2);
}

// Function to handle checkout
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert(`Thank you for your purchase! Total: $${total.toFixed(2)}`);
        cart = [];
        total = 0;
        updateCart();
    }
}