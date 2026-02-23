window.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".manga-card");
  cards.forEach((card, i) => {
    setTimeout(() => card.classList.add("visible"), i * 150);
    card.addEventListener("click", () => card.classList.toggle("expanded"));
  });

  const menuBtn = document.querySelector(".manga-menu-btn");
  const menu = document.querySelector(".manga-menu");
  menuBtn.addEventListener("click", () => menu.classList.toggle("active"));
});