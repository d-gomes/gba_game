const player = document.getElementById("player");

let x = 240;
let y = 200;
const speed = 3;

const keys = {};

window.addEventListener("keydown", (e) => keys[e.key] = true);
window.addEventListener("keyup", (e) => keys[e.key] = false);

function update() {
  let moving = false;

  if (keys["ArrowUp"]) {
    y -= speed;
    player.className = "player up walk";
    moving = true;
  }
  else if (keys["ArrowDown"]) {
    y += speed;
    player.className = "player down walk";
    moving = true;
  }
  else if (keys["ArrowLeft"]) {
    x -= speed;
    player.className = "player left walk";
    moving = true;
  }
  else if (keys["ArrowRight"]) {
    x += speed;
    player.className = "player right walk";
    moving = true;
  }

  if (!moving) {
    // mantém direção mas para animação
    player.classList.remove("walk");
  }

  x = Math.max(0, Math.min(480, x));
  y = Math.max(0, Math.min(352, y));

  player.style.left = x + "px";
  player.style.top = y + "px";

  requestAnimationFrame(update);
}

update();