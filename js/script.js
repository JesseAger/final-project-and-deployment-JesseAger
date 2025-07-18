
document.addEventListener("DOMContentLoaded", () => {
  const shopBtn = document.querySelector(".btn");
  if (shopBtn) {
    shopBtn.addEventListener("click", () => {
      console.log("Navigating to shop...");
    });
  }
});
