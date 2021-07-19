let controlButtons = document.getElementsByClassName("product__quantity-controls");
let addButtons = document.getElementsByClassName("product__add");
let cartProducts = document.getElementsByClassName("cart__products").item(0);


for (let btn of controlButtons) {
    let increase = btn.getElementsByClassName("product__quantity-control_inc").item(0);
    increase.addEventListener("click", function (event) {
        event.preventDefault();
        let quantity = btn.getElementsByClassName("product__quantity-value").item(0);
        quantity.textContent = parseInt(quantity.textContent, 10) + 1;
    });

    let decrease = btn.getElementsByClassName("product__quantity-control_dec").item(0);
    decrease.addEventListener("click", function (event) {
        event.preventDefault();
        let quantity = btn.getElementsByClassName("product__quantity-value").item(0);
        if (quantity.textContent > 1) quantity.textContent = parseInt(quantity.textContent, 10) - 1;
    })
}

for (let btn of addButtons) {
    btn.addEventListener("click", function (event) {
        event.preventDefault();
        addToCart(btn);
    })
}
function addToCart(btn) {
    let product = btn.parentElement.parentElement.parentElement;

    let cartProduct = document.createElement("div");
    let id = product.getAttribute("data-id");
    cartProduct.className = "cart__product";
    cartProduct.setAttribute("data-id", id);

    let img = document.createElement("img");
    img.className = "cart__product-image";
    img.src = product.children[1].getAttribute("src");

    let quantity = document.createElement("div");
    quantity.className = "cart__product-count";
    quantity.textContent = product.getElementsByClassName("product__quantity-value").item(0).textContent;

    cartProduct.appendChild(img);
    cartProduct.appendChild(quantity);

    let itemFound = Array.from(cartProducts.children).find(item => item.getAttribute("data-id") == id);
    
    if (itemFound != undefined) {
        let itemFromCart = itemFound.getElementsByClassName("cart__product-count").item(0);
        itemFromCart.textContent = parseInt(itemFromCart.textContent.trim(), 10) + parseInt(quantity.textContent, 10);
    } else {
        cartProducts.insertAdjacentElement("afterbegin", cartProduct);
    }
}