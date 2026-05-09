const player = document.getElementById("player");

let x = 80;
let y = 80;
let frame = 0;

const keys = {};

window.addEventListener("keydown", e => keys[e.key] = true);
window.addEventListener("keyup", e => keys[e.key] = false);

function update() {
  let moving = false;

  if (keys["ArrowUp"]) {
    y -= 2;
    player.className = "player up";
    moving = true;
  }
  if (keys["ArrowDown"]) {
    y += 2;
    player.className = "player down";
    moving = true;
  }
  if (keys["ArrowLeft"]) {
    x -= 2;
    player.className = "player left";
    moving = true;
  }
  if (keys["ArrowRight"]) {
    x += 2;
    player.className = "player right";
    moving = true;
  }

  // animation
  if (moving) {
    frame = (frame + 1) % 20;
    if (frame < 10) {
      player.classList.add("frame1");
      player.classList.remove("frame2");
    } else {
      player.classList.add("frame2");
      player.classList.remove("frame1");
    }
  } else {
    player.classList.add("frame1");
    player.classList.remove("frame2");
  }

  player.style.left = x + "px";
  player.style.top = y + "px";

  requestAnimationFrame(update);
}

// init frame
player.classList.add("frame1");
update();