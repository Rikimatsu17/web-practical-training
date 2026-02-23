const thumbs = document.querySelectorAll('.thumb-pair img, .music-thumb-wrapper.single img');
const modal = document.querySelector('.music-modal');
const modalImg = modal.querySelector('.music-modal-content');
const modalCaption = modal.querySelector('.music-modal-caption');
const closeBtn = modal.querySelector('.music-modal-close');

thumbs.forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = img.src;
    modalCaption.textContent = img.alt;
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

/* ======= JS: ハンバーガーメニュー ======= */
const menuBtn = document.querySelector('.music-menu-btn');
const menu = document.querySelector('.music-menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});