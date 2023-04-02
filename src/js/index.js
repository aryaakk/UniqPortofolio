const board = document.querySelector(".board");

const randomPosition = () => {
  return ~~(Math.random() * 30) + 1;
};

let config = {
  speed: 100,
  player: {
    x: randomPosition(),
    y: randomPosition(),
  },
  food: {
    x: randomPosition(),
    y: randomPosition(),
  },
  velocity: {
    x: 0,
    y: 0,
  },
};

const games = {
  createFood: function () {
    board.innerHTML = `<div class="food" style="grid-area : ${config.food.y} / ${config.food.x}"></div>`;
  },
  createPlayer: function () {
    board.innerHTML += `<div class="player" style="grid-area : ${config.player.y} / ${config.player.x}"></div>`;
  },
  movePLayer: function () {
    config.player.x += config.velocity.x;
    config.player.y += config.velocity.y;
  },
  isWin: function () {
    if (config.food.x == config.player.x && config.food.y == config.player.y) {
      return true;
    } else {
      return false;
    }
  },
  randomFood: function () {
    config.food.x = randomPosition();
    config.food.y = randomPosition();
  },
};

function movement(listen) {
  switch (listen.key) {
    case "ArrowUp":
      config.velocity.y = -1;
      config.velocity.x = 0;
      break;
    case "ArrowDown":
      config.velocity.y = 1;
      config.velocity.x = 0;
      break;
    case "ArrowLeft":
      config.velocity.y = 0;
      config.velocity.x = -1;
      break;
    case "ArrowRight":
      config.velocity.y = 0;
      config.velocity.x = 1;
      break;
  }
}

function start() {
  games.createFood();
  games.createPlayer();
  games.movePLayer();
  const wins = games.isWin();
  if (wins) {
    games.randomFood();
  }
  // games.isWin();
}

setInterval(start, config.speed);

document.addEventListener("keydown", movement);
