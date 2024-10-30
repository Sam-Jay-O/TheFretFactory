//add to cart function 
function addToCart(productId) {
    let productName, productImage;


    switch (productId) {
        case 1:
            productName = 'Blue Guitar';
            productImage = 'IMAGES/bluey.jpg';
            break;
        case 2:
            productName = 'Red Black Guitar';
            productImage = 'IMAGES/RedBlackGuitar.jpg';
            break;
        case 3:
            productName = 'Red Strat Guitar';
            productImage = 'IMAGES/redstrat.jpg';
            break;
        case 4:
            productName = 'Hollow Body Guitar';
            productImage = 'IMAGES/hallowbody.png';
            break;
        case 5:
            productName = 'Yamaha Guitar';
            productImage = 'IMAGES/yamaha.jpg';
            break;
        case 6:
            productName = 'Acoustic Guitar';
            productImage = 'IMAGES/acoustic2.jpg';
            break;
        default:
            productName = 'Unknown Product';
            productImage = 'IMAGES/default.jpg';
            break;
    }

    // Add to cart
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

    localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage
    updateCartCount(); // Update cart count display
}
