const thumbs = document.querySelectorAll(".manga-thumb-wrapper");
const modal = document.querySelector(".manga-modal");
const modalImg = modal.querySelector(".manga-modal-content");
const modalCaption = modal.querySelector(".manga-modal-caption");
const modalClose = modal.querySelector(".manga-modal-close");

thumbs.forEach(wrapper => {
  wrapper.addEventListener("click", () => {
    const img = wrapper.querySelector(".manga-thumb");
    const caption = wrapper.querySelector(".manga-caption").textContent;

    modal.style.display = "flex";
    modalImg.src = img.src;
    modalCaption.textContent = caption;
  });
});

// 閉じるボタン
modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});

// モーダル背景クリックで閉じる
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

const menuBtn = document.querySelector(".manga-menu-btn");
const menu = document.querySelector(".manga-menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});