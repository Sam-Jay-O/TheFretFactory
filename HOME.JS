<script>

    function updateCartCount() {
        const cartCountElement = $('#cart-count');
        const totalCount = cart.reduce((total, item) => total + item.quantity, 0);
        cartCountElement.text(totalCount);
        cartCountElement.toggle(totalCount > 0); // Show/hide based on count
    }

    function addToCart(productId) {
        const productExists = cart.find(item => item.id === productId);
        if (productExists) {
            productExists.quantity += 1; // Increase quantity if already in cart
        } else {
            cart.push({ id: productId, quantity: 1 }); // Add new product
        }
        updateCartCount(); // Update the cart count display
    }

    $(document).ready(function() {
        // Event listener for "Add to Cart" buttons
        $('.add-to-cart').click(function() {
            const productId = $(this).data('product-id');
            addToCart(productId);
            alert(`Product ${productId} added to cart!`); 
        });

        
    });
</script>

