const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItems = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');

let currentTotal = 0; // Fix: Initialize as 0 (number), not "" (string)

addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const productDiv = e.target.parentElement;
        const id = productDiv.getAttribute('data-id');
        const name = productDiv.getAttribute('data-name');
        
        // Fix 1: The Price Concatenation Bug
        // Use Number() or parseInt() to convert string to a number
        const price = Number(productDiv.getAttribute('data-price'));

        currentTotal += price;
        totalPriceElement.innerText = currentTotal.toFixed(2); // formatting it nicely

        // Fix 2: The "Ghost Item" Increment Bug
        // Check if an item with this data-cart-id already exists
        let existingItem = cartItems.querySelector(`li[data-cart-id="${id}"]`);

        if (existingItem) {
            // If it exists, retrieve the current quantity and increment it
            let currentQty = Number(existingItem.getAttribute('data-qty'));
            currentQty++;
            existingItem.setAttribute('data-qty', currentQty);
            existingItem.innerText = `${name} - $${price} (Qty: ${currentQty})`;
        } else {
            // If it doesn't exist, create a new list item
            const li = document.createElement('li');
            li.setAttribute('data-cart-id', id);
            li.setAttribute('data-qty', 1);
            li.innerText = `${name} - $${price} (Qty: 1)`;
            cartItems.appendChild(li);
        }
    });
});


// 🚀 FEATURE BUILT: The "SAVE10" Promo Code Voucher
const applyPromoBtn = document.getElementById('apply-promo');
const promoInput = document.getElementById('promo-code');
const promoMessage = document.getElementById('promo-message');

let promoApplied = false; // to prevent multiple applications

applyPromoBtn.addEventListener('click', () => {
    const code = promoInput.value.trim();

    if (code === "SAVE10" && !promoApplied) {
        // Calculate 10% discount
        currentTotal = currentTotal - (currentTotal * 0.10);
        totalPriceElement.innerText = currentTotal.toFixed(2);
        
        // Show success message
        promoMessage.textContent = "Promo applied successfully!";
        promoMessage.className = "success-msg"; // Uses CSS class
        promoApplied = true; // Mark as applied
        promoInput.disabled = true; // Prevent multiple clicks on same promo
        applyPromoBtn.disabled = true;
    } else if (promoApplied) {
        promoMessage.textContent = "Promo already applied!";
        promoMessage.className = "error-msg";
    } else {
        // Show error message
        promoMessage.textContent = "Invalid promo code!";
        promoMessage.className = "error-msg";
    }
});
