const player = document.querySelector(".player");

window.addEventListener("keydown", (e) => {

  if (e.shiftKey) {
    player.className = "player running";
  } else {
    player.className = "player walking";
  }

});

window.addEventListener("keyup", () => {
  player.className = "player stop-running";
});