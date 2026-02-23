window.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".fishing-card");
  cards.forEach((card, i) => {
    setTimeout(() => card.classList.add("visible"), i * 150);
    card.addEventListener("click", () => card.classList.toggle("expanded"));
  });

  const menuBtn = document.querySelector(".fishing-menu-btn");
  const menu = document.querySelector(".fishing-menu");
  menuBtn.addEventListener("click", () => menu.classList.toggle("active"));
});