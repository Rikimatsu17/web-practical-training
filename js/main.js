// // スライドメニュー
// // HTML要素の取得
// const openBtn = document.querySelector('.menu-open'); //開くボタン
// const closeBtn = document.querySelector('#menu-close'); //閉じるボタン
// const menuPanel = document.querySelector('#menu-panel'); //パネル全体
// const menuLists = document.querySelectorAll('.menu-list li'); //リスト配列
// //メニュー全体で使いまわすtimingOptions
// const menuOptions = {
//     duration: 1400,
//     easing: 'ease',
//     fill: 'forwards',
// }

// // メニューを開く処理
// openBtn.addEventListener('click', ()=>{
//     //メニューパネルの表示処理
//     menuPanel.animate(
//         {
//             translate: ["100vw", 0], //移動　x軸+100% ⇒ 0%
//         },
//         menuOptions,
//     );
//     // リストの内容を一つずつ表示
//     menuLists.forEach((menuLists, index) =>{
//         menuLists.animate(
//             {
//                 opacity:[0, 1],
//                 translate:['2rem', 0], /*移動　y軸フォントサイズ２倍の位置から原点*/
//             },
//             {
//                 duration: 2400,
//                 delay: 300 * index,
//                 easing: 'ease',
//                 fill: 'forwards',
//             },
//         );
//     });
// });

// //メニューを閉じる処理
// closeBtn.addEventListener('click', ()=>{
//     menuPanel.animate(
//         {
//             translate: [0, "100vw"], //移動　x軸+100% ⇒ 0%
//         },
//         menuOptions,
//     );
// });

// // スクロールで要素を表示
// // 3.交差したときのアニメーション処理
// const fadeAnimation = (entries, obs) =>{
//     //entriesは配列なのでforEachで展開
//     entries.forEach((entry) =>{
//         // アニメーション処理
//         if(entry.isIntersecting){
//             entry.target.animate(
//             {
//                 opacity:[0,1],
//                 translate: ['0 5rem', 0],
//                 filter: [
//                     'blur(.5rem)',
//                     'blur(0)',
//                 ]   ,
//             },
//             {
//                 duration: 2000,
//                 easing: 'ease',
//                 fill: 'forwards',
//             },
//         );
//             obs.unobserve(entry.target);
//         }
//     });
// };

$(function () {
  $('.hamburger').on('click', function () {
    $(this).toggleClass('active');
    $('.global-menu').fadeToggle(400);
  });
});

let idx = 0;
const slides = document.querySelectorAll('.slide');
function showSlide(n){
  slides.forEach(s => s.classList.remove('active'));
  slides[n].classList.add('active');
}
document.querySelector('.next').onclick = () => {
  idx = (idx + 1) % slides.length;
  showSlide(idx);
};


const track = document.getElementById('marqueeTrack');

function fillMarquee() {
  const marqueeWidth = track.parentElement.offsetWidth;
  const trackWidth = track.scrollWidth;

  // すでに十分なら何もしない
  if (trackWidth >= marqueeWidth * 2) return;

  const items = Array.from(track.children);

  while (track.scrollWidth < marqueeWidth * 2) {
    items.forEach(item => {
      track.appendChild(item.cloneNode(true));
    });
  }
}

window.addEventListener('load', fillMarquee);
window.addEventListener('resize', () => {
  // 一旦止めて再計算
  track.style.animation = 'none';
  requestAnimationFrame(() => {
    track.style.animation = '';
    fillMarquee();
  });
});


window.addEventListener('load', () => {
  const elevator = document.getElementById('elevator');

  // 少し間を置いてから扉を開く（演出用）
  setTimeout(() => {
    elevator.classList.add('open');

    // アニメーション終了後に完全削除
    setTimeout(() => {
      elevator.style.display = 'none';
    }, 1200);
  }, 800);
});


// about
const thumbSwiper = new Swiper('.thumb-carousel', {
  slidesPerView: 3
});

const mainSwiper = new Swiper('.main-carousel', {
  thumb: { swiper: thumbSwiper }
});
