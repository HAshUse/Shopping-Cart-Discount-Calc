const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItems = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');

let currentTotal = ""; 

addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const productDiv = e.target.parentElement;
        const id = productDiv.getAttribute('data-id');
        const name = productDiv.getAttribute('data-name');
        const price = productDiv.getAttribute('data-price');

        // 🐛 BUG 1: The Price Concatenation Bug
        // When you click Add to Cart, it concatenates the prices instead of adding them up mathematically.
        // E.g. adding 10 and 10 results in "1010" instead of 20.
        currentTotal += price;
        totalPriceElement.innerText = currentTotal;

        // 🐛 BUG 2: The "Ghost Item" Increment Bug
        // It always creates a new row instead of checking if it's already in the cart and just updating the quantity.
        const li = document.createElement('li');
        li.setAttribute('data-cart-id', id);
        li.innerText = `${name} - $${price} (Qty: 1)`;
        cartItems.appendChild(li);
    });
});


// 🚀 FEATURE TO BUILD: The "SAVE10" Promo Code Voucher
const applyPromoBtn = document.getElementById('apply-promo');
const promoInput = document.getElementById('promo-code');
const promoMessage = document.getElementById('promo-message');

applyPromoBtn.addEventListener('click', () => {
    // TODO: Write your code here
    // 1. Read the input value from promoInput.
    // 2. Check if the value is exactly "SAVE10".
    // 3. If true, reduce the total price by 10% and update #total-price.
    //    Also, display a green message "Promo applied successfully!" in promoMessage.
    // 4. If false, display a red error message "Invalid promo code" in promoMessage.
    
    
});
