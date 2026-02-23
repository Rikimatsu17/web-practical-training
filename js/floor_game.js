window.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".game-card");
  cards.forEach((card, i) => {
    setTimeout(() => card.classList.add("visible"), i * 150);
    card.addEventListener("click", () => card.classList.toggle("expanded"));
  });

  const menuBtn = document.querySelector(".game-menu-btn");
  const menu = document.querySelector(".game-menu");
  menuBtn.addEventListener("click", () => menu.classList.toggle("active"));
});