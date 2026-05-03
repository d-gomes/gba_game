const mapElement = document.getElementById("map");
const player = document.getElementById("player");

const TILE_SIZE = 16;

// 0 = grass, 1 = path, 2 = wall
const map = [
  "00000000000000000000000000000000",
  "01111111111111111111111111111110",
  "01000000000000000000000000000010",
  "01000000000000000000000000000010",
  "01000002222222000000000000000010",
  "01000002000002000000000000000010",
  "01000002000002000000000000000010",
  "01000002222222000000000000000010",
  "01000000000000000000000000000010",
  "01000000000000000000000000000010",
  "01111111111111111111111111111110",
  "00000000000000000000000000000000",
];

// render map
map.forEach(row => {
  row.split("").forEach(tile => {
    const div = document.createElement("div");
    div.classList.add("tile");

    if (tile === "0") div.classList.add("grass");
    if (tile === "1") div.classList.add("path");
    if (tile === "2") div.classList.add("block");

    mapElement.appendChild(div);
  });
});

let playerX = 2;
let playerY = 2;

const keys = {};
window.addEventListener("keydown", e => keys[e.key] = true);
window.addEventListener("keyup", e => keys[e.key] = false);

function canMove(x, y) {
  if (!map[y] || !map[y][x]) return false;
  return map[y][x] !== "2";
}

function update() {
  let newX = playerX;
  let newY = playerY;

  if (keys["ArrowUp"]) newY--;
  if (keys["ArrowDown"]) newY++;
  if (keys["ArrowLeft"]) newX--;
  if (keys["ArrowRight"]) newX++;

  if (canMove(newX, newY)) {
    playerX = newX;
    playerY = newY;
  }

  player.style.transform = `translate(${playerX * TILE_SIZE}px, ${playerY * TILE_SIZE}px)`;

  requestAnimationFrame(update);
}

update();
