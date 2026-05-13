const player = document.querySelector(".player");

const keys = {};

const animations = {

  q: "Ability_Use",
  w: "Aerial_Charge",
  e: "Aerial_Strike",
  r: "Aggression",
  t: "Aiming",

  y: "Astonishment",
  u: "Attack_From_Cover",
  i: "Awkwardness",
  o: "Bullet_Dodge",
  p: "Calm",

  a: "Carrying_Object",
  s: "Casting Spell",
  d: "Charge",
  f: "Climbing_Ladder",
  g: "Counterattack",

  h: "Crawl",
  j: "Crouch",
  k: "Cry",
  l: "Death",

  z: "Defense attack",
  x: "Defensive_Stance",
  c: "Descending_Ladder",
  v: "Desiccation",
  b: "Disgust",

  n: "Dodge",
  m: "Double_Jump",

  "1": "Double_Srtike",
  "2": "Doubt",
  "3": "Drinking_Potion",
  "4": "Dscomfort",
  "5": "Embarrassment",

  "6": "Enchanced_Impact_1",
  "7": "Enchanced_impact_2",
  "8": "Energy_Abcorb",
  "9": "Energy_Charge",
  "0": "Energy_Wave",

};

function setAnimation(animation) {

  player.style.backgroundImage =
    `url('./assets/${animation}.png')`;

  player.classList.remove(
    "walking",
    "running",
    "stop-running"
  );

  player.classList.add("animate");
}

window.addEventListener("keydown", (e) => {

  keys[e.key] = true;

  // setas
  const moving =
    keys["ArrowUp"] ||
    keys["ArrowDown"] ||
    keys["ArrowLeft"] ||
    keys["ArrowRight"];

  // corrida
  if (moving && keys["Shift"]) {
    setAnimation("running");
    return;
  }

  // caminhada
  if (moving) {
    setAnimation("walking");
    return;
  }

  // animações especiais
  const anim = animations[e.key];

  if (anim) {
    setAnimation(anim);
  }

});

window.addEventListener("keyup", (e) => {

  keys[e.key] = false;

  const moving =
    keys["ArrowUp"] ||
    keys["ArrowDown"] ||
    keys["ArrowLeft"] ||
    keys["ArrowRight"];

  if (!moving) {
    setAnimation("stoprunning");
  }

});