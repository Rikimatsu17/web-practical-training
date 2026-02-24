
// すべてのサムネイル
const allThumbs = document.querySelectorAll('.fishing-thumb, .fishing-location-thumb');
const modal = document.querySelector('.fishing-modal');
const modalImg = modal.querySelector('.fishing-modal-content');
const modalCaption = modal.querySelector('.fishing-modal-caption');
const modalClose = modal.querySelector('.fishing-modal-close');

allThumbs.forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = img.src;
    modalCaption.textContent = img.alt;
  });
});

modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});

// モーダル外クリックで閉じる
modal.addEventListener('click', e => {
  if (e.target === modal) modal.style.display = 'none';
});

allThumbs.forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = img.src;

    // data-description を取得して表示
    const desc = img.dataset.description;
    modalCaption.textContent = desc || img.alt; // なければaltを表示
  });
});