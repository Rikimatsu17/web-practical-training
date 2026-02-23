const gameThumbs = document.querySelectorAll('.game-thumb-wrapper');
const gameModal = document.querySelector('.game-modal');
const gameModalImg = document.querySelector('.game-modal-content');
const gameModalCaption = document.querySelector('.game-modal-caption');
const gameModalClose = document.querySelector('.game-modal-close');

gameThumbs.forEach(wrapper => {
  wrapper.addEventListener('click', () => {
    const img = wrapper.querySelector('.game-thumb');
    const caption = wrapper.querySelector('.game-caption').textContent;

    gameModal.style.display = 'flex';
    gameModalImg.src = img.src;
    gameModalCaption.textContent = caption;
  });
});

gameModalClose.addEventListener('click', () => {
  gameModal.style.display = 'none';
});

gameModal.addEventListener('click', e => {
  if (e.target === gameModal) {
    gameModal.style.display = 'none';
  }
});