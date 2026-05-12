const player = document.querySelector(".player");

window.addEventListener("keydown", (e) => {

  player.classList.remove(
    "walking",
    "running",
    "stop-running"
  );

  if (e.shiftKey) {
    player.classList.add("running");
  } else {
    player.classList.add("walking");
  }

});

window.addEventListener("keyup", () => {

  player.classList.remove(
    "walking",
    "running"
  );

  player.classList.add("stop-running");
});