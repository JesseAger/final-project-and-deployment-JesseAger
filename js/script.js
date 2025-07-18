
document.addEventListener("DOMContentLoaded", () => {
  const shopBtn = document.querySelector(".btn");
  if (shopBtn) {
    shopBtn.addEventListener("click", () => {
      console.log("Navigating to shop...");
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;


  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark");
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      body.classList.toggle("dark");
      localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
    });
  }


  const cartButtons = document.querySelectorAll(".add-to-cart");
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cartButtons.forEach(button => {
    button.addEventListener("click", () => {
      const product = button.dataset.product;
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${product} added to cart!`);
    });
  });


  const cartList = document.getElementById("cartItems");
  if (cartList) {
    if (cart.length === 0) {
      cartList.innerHTML = "<li>Your cart is empty.</li>";
    } else {
      cartList.innerHTML = cart.map(item => `<li>${item}</li>`).join("");
    }
  }

  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Message sent! (Not really, just a demo 😉)");
      contactForm.reset();
    });
  }
});

const toggleBtn = document.getElementById('themeToggle');
const icon = document.getElementById('themeIcon');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
});
