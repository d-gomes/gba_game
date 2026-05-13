const player = document.querySelector(".player");

const keys = {};

function setAnimation(animation) {

  player.classList.remove(
    "walking",
    "running",
    "stop-running"
  );

  player.classList.add(animation);
}

window.addEventListener("keydown", (e) => {
  keys[e.key] = true;
});

window.addEventListener("keyup", (e) => {
  keys[e.key] = false;
});

function update() {

  const moving =
    keys["ArrowUp"] ||
    keys["ArrowDown"] ||
    keys["ArrowLeft"] ||
    keys["ArrowRight"];

  const running = keys["Shift"];

  if (moving) {

    if (running) {
      setAnimation("running");
    } else {
      setAnimation("walking");
    }

  } else {

    setAnimation("stop-running");

  }

  requestAnimationFrame(update);
}

update();