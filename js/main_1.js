const container = document.querySelector(".container");
const floors = document.querySelectorAll(".floor");
const needle = document.querySelector(".needle");
const elevator = document.querySelector(".elevator");
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu li");

let currentFloor = floors.length - 1;
let isAnimating = false;

container.style.transform = `translateY(-${currentFloor * 100}vh)`;

// 最初は扉閉じ、しばらくして開く＆文字を浮かび上がらせる
setTimeout(() => {
  elevator.classList.add("open"); // 扉を開く
  floors[currentFloor].querySelector(".floor-content").classList.add("visible"); // 文字を浮かび上がらせる
}, 800); // 0.8秒後に演出開始
function updateNeedle() {
  const max = floors.length - 1;
  const startAngle = -90;
  const endAngle = 90;
  const ratio = currentFloor / max;
  const angle = endAngle - (endAngle - startAngle) * ratio;
  needle.style.transform = `translateX(-50%) rotate(${angle}deg)`;
}
updateNeedle();

// 初期文字は扉が開いたタイミングで浮かび上がる
setTimeout(() => {
  elevator.classList.add("open");
  floors[currentFloor].querySelector(".floor-content").classList.add("visible");
}, 300);

function moveElevator(nextFloor) {
  if (isAnimating) return;
  if (nextFloor < 0 || nextFloor >= floors.length) return;

  isAnimating = true;
  elevator.classList.remove("open"); // 扉閉める

  setTimeout(() => {
    currentFloor = nextFloor;
    container.style.transform = `translateY(-${currentFloor * 100}vh)`;
    updateNeedle();

    setTimeout(() => {
      elevator.classList.add("open"); // 扉開ける

      // 文字を浮かび上がらせる
      floors.forEach(floor => floor.querySelector(".floor-content").classList.remove("visible"));
      floors[currentFloor].querySelector(".floor-content").classList.add("visible");

      isAnimating = false;
    }, 800);
  }, 800);
}

// スクロール操作
window.addEventListener("wheel", e => {
  if (isAnimating) return;
  if (e.deltaY < 0) moveElevator(currentFloor - 1);
  if (e.deltaY > 0) moveElevator(currentFloor + 1);
});

// メニュー操作
menuBtn.addEventListener("click", () => menu.classList.toggle("active"));

menuItems.forEach(item => {
  item.addEventListener("click", () => {
    const floorIndex = parseInt(item.dataset.floor);
    moveElevator(floorIndex);
  });
});