// Basic functionality for Header sticky scroll effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        header.style.padding = '10px 40px';
    } else {
        header.style.boxShadow = 'none';
        header.style.padding = '15px 40px';
    }
});

// For demonstration: Add to cart interaction
document.querySelectorAll('.quick-add-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const cartCount = document.querySelector('.cart-count');
        let count = parseInt(cartCount.innerText);
        cartCount.innerText = count + 1;
        
        // Simple animation on button
        const originalText = btn.innerText;
        btn.innerText = "ADDED!";
        btn.style.background = "var(--whatsapp-green)";
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.background = "var(--bg-dark)";
        }, 1500);
    });
});
