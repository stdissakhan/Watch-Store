// =========================
// CART COUNTER
// =========================

let cart = 0;

const cartCount = document.getElementById("cart-count");
const addButtons = document.querySelectorAll(".add-cart");

addButtons.forEach(button => {

    button.addEventListener("click", () => {

        cart++;

        cartCount.innerText = cart;

        button.innerText = "Added ✓";

        button.style.background = "#28a745";
        button.style.color = "#fff";

        setTimeout(() => {

            button.innerText = "Add to Cart";
            button.style.background = "#d4af37";
            button.style.color = "#111";

        }, 1000);

    });

});

// =========================
// MOBILE MENU
// =========================

const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav-links");

menu.addEventListener("click", () => {

    nav.classList.toggle("active");

});