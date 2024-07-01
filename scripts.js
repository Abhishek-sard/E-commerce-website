const products = [
    { id: 1, name: 'Product 1', price: 10.00 },
    { id: 2, name: 'Product 2', price: 20.00 },
    { id: 3, name: 'Product 3', price: 30.00 }
];

let cart = [];

function loadProducts() {
    const productContainer = document.getElementById('product-list');
    if (productContainer) {
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'product';
            productElement.innerHTML = `
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productContainer.appendChild(productElement);
        });
    }
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        alert(`${product.name} has been added to your cart.`);
        updateCart();
    }
}

function updateCart() {
    const cartContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    if (cartContainer && cartTotal) {
        cartContainer.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'product';
            cartItem.innerHTML = `
                <h3>${item.name}</h3>
                <p>$${item.price.toFixed(2)}</p>
            `;
            cartContainer.appendChild(cartItem);
            total += item.price;
        });
        cartTotal.innerText = total.toFixed(2);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    updateCart();
});
