const player = document.querySelector(".player");

let runningTimeout = null;

state = "idle"
state = "walk"
state = "run"
state = "stop"

function setAnimation(animation) {

  player.classList.remove(
    "walking",
    "running",
    "stop-running"
  );

  player.classList.add(animation);
}

window.addEventListener("keydown", (e) => {

  if (!e.key.includes("Arrow")) return;

  // começa andando
  setAnimation("walking");

  // depois de 200ms vira corrida
  clearTimeout(runningTimeout);

  runningTimeout = setTimeout(() => {
    setAnimation("running");
  }, 200);

});

window.addEventListener("keyup", (e) => {

  if (!e.key.includes("Arrow")) return;

  clearTimeout(runningTimeout);

  setAnimation("stop-running");

});