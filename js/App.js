// Attach event listeners
document.addEventListener("DOMContentLoaded", () => {
  const productListElement = document.getElementById("product-list");
  productListElement.innerHTML = "";

  products.forEach((product) => {
    const { id, name, price } = product;

    const row = document.createElement("tr");
    row.innerHTML = `
          <td>${name}</td>
          <td>${price}</td>
          <td>
            <button class="btn btn-primary add-to-cart" data-product-id="${id}">Add to Cart</button>
          </td>
        `;

    productListElement.appendChild(row);
  });

  const addToCartButtons = document.getElementsByClassName("add-to-cart");
  Array.from(addToCartButtons).forEach((button) => {
    button.addEventListener("click", () => {
      const productId = parseInt(button.dataset.productId);
      addToCart(productId, 1);
    });
  });

  const clearCartButton = document.getElementById("clear-cart");
  clearCartButton.addEventListener("click", clearCart);
});
