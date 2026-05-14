const player = document.querySelector(".player");

const keys = {};

const animations = {

  idle: {
    file: "Idle",
    frames: 8,
    width: 512,
    speed: 1,
    loop: true
  },

  walking: {
    file: "walking",
    frames: 12,
    width: 768,
    speed: 0.8,
    loop: true
  },

  running: {
    file: "running",
    frames: 12,
    width: 768,
    speed: 0.5,
    loop: true
  },

  stoprunning: {
    file: "stoprunning",
    frames: 6,
    width: 384,
    speed: 0.6,
    loop: false
  },

  attack: {
    file: "Punch_1",
    frames: 8,
    width: 512,
    speed: 0.4,
    loop: false
  }

};

let currentAnimation = "";

function setAnimation(name) {

  if (currentAnimation === name) return;

  currentAnimation = name;

  const anim = animations[name];

  if (!anim) return;

  // troca imagem
  player.style.backgroundImage =
    `url('./assets/${anim.file}.png')`;

  // reseta
  player.style.animation = "none";

  player.offsetHeight;

  // cria keyframe dinamico
  const style = document.getElementById("dynamic-animation");

  style.innerHTML = `
  
    @keyframes play {
      from {
        background-position-x: 0px;
      }

      to {
        background-position-x: -${anim.width}px;
      }
    }
  
  `;

  // aplica
  player.style.animation =
    `play ${anim.speed}s steps(${anim.frames}) ${anim.loop ? "infinite" : "forwards"}`;
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

  if (moving && keys["Shift"]) {

    setAnimation("running");

  }

  else if (moving) {

    setAnimation("walking");

  }

  else if (keys["j"]) {

    setAnimation("attack");

  }

  else {

    setAnimation("idle");

  }

  requestAnimationFrame(update);
}

setAnimation("idle");

update();