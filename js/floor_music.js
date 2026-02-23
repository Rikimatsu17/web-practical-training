window.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".music-card");
  cards.forEach((card, i) => {
    setTimeout(() => card.classList.add("visible"), i * 150);
    card.addEventListener("click", () => card.classList.toggle("expanded"));
  });

  const menuBtn = document.querySelector(".music-menu-btn");
  const menu = document.querySelector(".music-menu");
  menuBtn.addEventListener("click", () => menu.classList.toggle("active"));
});