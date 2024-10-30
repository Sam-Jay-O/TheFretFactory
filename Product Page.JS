let cart = JSON.parse(localStorage.getItem('cart')) || [];


function updateCartCount() {
    const cartCountElement = $('#cart-count');
    const totalCount = cart.reduce((total, item) => total + item.quantity, 0);
    cartCountElement.text(totalCount);
    cartCountElement.toggle(totalCount > 0); 
}


function addToCart(productId, productName, productImage) {
    const productExists = cart.find(item => item.id === productId);
    
    if (productExists) {
        productExists.quantity += 1; 
    } else {
       
        cart.push({ 
            id: productId, 
            name: productName, 
            image: productImage, 
            quantity: 1 
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount(); 
}

$(document).ready(function() {
    $('.add-to-cart').click(function() {
        const productId = $(this).data('product-id');
        let productName = '';
        let productImage = '';

        
        switch (productId) {
            case 1:
                productName = "Blue Guitar";
                productImage = "IMAGES/bluey.jpg";
                break;
            case 2:
                productName = "Red Black Guitar";
                productImage = "IMAGES/RedBlackGuitar.jpg";
                break;
            case 3:
                productName = "Red Strat Guitar";
                productImage = "IMAGES/redstrat.jpg";
                break;
            case 4:
                productName = "Hollow Body Guitar";
                productImage = "IMAGES/hallowbody.png";
                break;
            case 5:
                productName = "Yamaha Guitar";
                productImage = "IMAGES/yamaha.jpg";
                break;
            case 6:
                productName = "Acoustic Guitar";
                productImage = "IMAGES/acoustic2.jpg";
                break;
            default:
                productName = "Unknown Product";
                productImage = "IMAGES/default.jpg";
                break;
        }

        
        addToCart(productId, productName, productImage);
        alert(`Product ${productName} added to cart!`); 
    });

    // Load the cart count on page load
    updateCartCount();
});
