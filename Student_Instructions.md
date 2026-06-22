# 🛒 Interactive Digital Shopping Cart & Discount Calc

Welcome to the Shopping Cart project! In this activity, you will practice your debugging and feature-building skills by fixing a broken shopping cart and adding a brand-new promotional discount feature.

## 🚀 Getting Started
1. Open the `index.html` file in your browser to see the current state of the application.
2. Open `script.js` in your code editor. This is the **only** file you need to modify!

---

## 🐛 Part 1: Debugging

The shopping cart currently has two bugs. Your job is to find the bugs in the code and fix them.

### Bug 1: The Price Concatenation Bug
**What's happening:** 
When you click "Add to Cart" on a product, instead of mathematically adding the price (e.g., $10 + $10 = $20), the cart concatenates the values like a string, making the total jump from `10` to `1010`!

**What it tests:** 
Type Coercion. 

**Your Goal:** 
Ensure the total adds mathematically. 
*Hint:* When you read values from HTML datasets (like `data-price`), JavaScript treats them as strings by default. How can you convert a string into a number before doing math? Look into `Number()` or `parseInt()`.

### Bug 2: The "Ghost Item" Increment Bug
**What's happening:** 
If you click "Add to Cart" on the *same* product multiple times, it creates a brand-new row in the cart every single time instead of grouping them together. 

**What it tests:** 
DOM querying and conditional logic.

**Your Goal:** 
Make sure each product only gets one row. If added again, just update the quantity. 
*Hint:* Before using `document.createElement()`, write an `if/else` statement. Use `document.querySelector()` to check if an element with that specific `data-cart-id` already exists in the cart. If it does, update its quantity text. If it doesn't, *then* create a new row.

---

## 🛠️ Part 2: Feature Building

Now that the bugs are fixed, it's time to build a new feature for the store! 

### The "SAVE10" Promo Code Voucher
Scroll down to the bottom of `script.js`. You will see a `TODO` section prepared for the Promo Code feature.

**Requirements:**
1. When the user clicks the "Apply" button, read the value they typed into the promo code input box (`#promo-code`).
2. If they typed the exact string `"SAVE10"`:
   - Reduce the current total price displayed by **10%**.
   - Display a success message saying *"Promo applied successfully!"* in the `#promo-message` container.
   - **Styling Hint:** Add the CSS class `success-msg` to the message element to make the text green.
3. If they typed anything else:
   - Display an error message saying *"Invalid promo code!"* in the `#promo-message` container.
   - **Styling Hint:** Add the CSS class `error-msg` to the message element to make the text red.
4. *(Bonus)*: Prevent the user from applying the promo code multiple times!

---

**Good luck, and happy coding!** 🚀
