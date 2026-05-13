const player = document.querySelector(".player");

const keys = {};

const animations = {

  idle: {
    file: "Idle",
    frames: 8,
    speed: 1,
    loop: true
  },

  walking: {
    file: "walking",
    frames: 12,
    speed: 0.8,
    loop: true
  },

  running: {
    file: "running",
    frames: 12,
    speed: 0.5,
    loop: true
  },

  stoprunning: {
    file: "stoprunning",
    frames: 6,
    speed: 0.6,
    loop: false
  },

  attack: {
    file: "Punch_1",
    frames: 8,
    speed: 0.4,
    loop: false
  },

  dodge: {
    file: "Dodge",
    frames: 8,
    speed: 0.5,
    loop: false
  },

  jump: {
    file: "jumping",
    frames: 10,
    speed: 0.5,
    loop: false
  }

};

let currentAnimation = "";

function setAnimation(name) {

  if (currentAnimation === name) return;

  currentAnimation = name;

  const anim = animations[name];

  if (!anim) return;

  player.style.backgroundImage =
    `url('./assets/${anim.file}.png')`;

  player.style.setProperty(
    "--frames",
    anim.frames
  );

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

  // RUN
  if (moving && keys["Shift"]) {

    setAnimation("running");

  }

  // WALK
  else if (moving) {

    setAnimation("walking");

  }

  // ATTACK
  else if (keys["j"]) {

    setAnimation("attack");

  }

  // DODGE
  else if (keys["k"]) {

    setAnimation("dodge");

  }

  // JUMP
  else if (keys[" "]) {

    setAnimation("jump");

  }

  // STOP
  else {

    setAnimation("idle");

  }

  requestAnimationFrame(update);
}

setAnimation("idle");

update();