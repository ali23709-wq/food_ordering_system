document.addEventListener('DOMContentLoaded', () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    const updateCartCount = () => {
        document.getElementById('cart-count').textContent = cart.length;
    };

    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', () => {
            const name = btn.getAttribute('data-name');
            const price = btn.getAttribute('data-price');
            
            cart.push({name, price: parseInt(price)});
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            
            alert(`${name} added to cart!`);
        });
    });

    updateCartCount();
});