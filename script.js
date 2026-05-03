const player = document.getElementById("player");

let x = 240;
let y = 200;
const speed = 4;

const keys = {};

window.addEventListener("keydown", (e) => {
  keys[e.key] = true;
});

window.addEventListener("keyup", (e) => {
  keys[e.key] = false;
});

function update() {
  if (keys["ArrowUp"]) y -= speed;
  if (keys["ArrowDown"]) y += speed;
  if (keys["ArrowLeft"]) x -= speed;
  if (keys["ArrowRight"]) x += speed;

  // limites do mapa
  x = Math.max(0, Math.min(480, x));
  y = Math.max(0, Math.min(352, y));

  player.style.left = x + "px";
  player.style.top = y + "px";

  requestAnimationFrame(update);
}

update();