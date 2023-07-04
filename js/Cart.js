/***
 * b) Adding Products to Cart:

Attach event listeners to the "Add to Cart" buttons to capture user clicks.

Implement a function to add the selected product to the shopping cart, along with the quantity. Use rest parameters to handle variable quantities.
 */

// Function to add product to the cart
const addToCart = (productId, quantity) => {
  const product = products.find((p) => p.id === productId);

  if (!product) return;

  const cartItem = cartItems.find((item) => item.product.id === productId);
  if (cartItem) {
    cartItem.quantity += quantity;
  } else {
    cartItems.push({ product, quantity });
  }

  displayCartItems();
};

/***
 * c) Displaying Cart Items:
 * 
Create a function to display the added items in the shopping cart section.
Display the product name, quantity, individual price, and the total amount for each item.
Calculate and display the overall total amount for all items in the cart.
 */
// Function to display cart items
// Shopping Cart
let cartItems = [];
const displayCartItems = () => {
  const cartItemsElement = document.getElementById("cart-items");
  cartItemsElement.innerHTML = "";

  let totalAmount = 0;

  cartItems.forEach((item) => {
    const { product, quantity } = item;
    const { id, name, price } = product;
    const itemTotal = price * quantity;
    totalAmount += itemTotal;

    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${name}</td>
    <td>${quantity}</td>
    <td>${price}</td>
    <td>${itemTotal}</td>
    <td>
      <button class="btn btn-success btn-sm" onclick="increaseQuantity(${id})">+</button>
      <button class="btn btn-warning btn-sm" onclick="decreaseQuantity(${id})">-</button>
      <button class="btn btn-danger btn-sm" onclick="removeFromCart(${id})">Remove</button>
    </td>
  `;

    cartItemsElement.appendChild(row);
  });

  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `
  <td colspan="3" align="right"><strong>Total</strong></td>
  <td>${totalAmount}</td>
  <td></td>
`;

  cartItemsElement.appendChild(totalRow);
};

/**
 * d) Clearing the Cart:
Implement a function to clear the shopping cart when the "Clear Cart" button is clicked.
Remove all the items from the cart and update the display accordingly.
 */
// Function to clear the cart
const clearCart = () => {
  cartItems = [];
  displayCartItems();
};

/***
 * e) Additional Features :
Implement additional features such as increasing or decreasing the quantity of items in the cart, removing individual items, or applying discounts.
 */

// Function to remove product from the cart
const removeFromCart = (productId) => {
  const index = cartItems.findIndex((item) => item.product.id === productId);
  if (index === -1) return;

  cartItems.splice(index, 1);
  displayCartItems();
};

// Function to increase quantity in the cart
const increaseQuantity = (productId) => {
  const cartItem = cartItems.find((item) => item.product.id === productId);
  if (!cartItem) return;

  cartItem.quantity++;
  displayCartItems();
};

// Function to decrease quantity in the cart
const decreaseQuantity = (productId) => {
  const cartItem = cartItems.find((item) => item.product.id === productId);
  if (!cartItem) return;

  if (cartItem.quantity > 1) {
    cartItem.quantity--;
  } else {
    removeFromCart(productId);
  }

  displayCartItems();
};
