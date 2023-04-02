const board = document.querySelector(".board");

const randomPosition = () => {
  return ~~(Math.random() * 15) + 1;
};

let config = {
  speed: 100,
  level: 1,
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
  showTitle: function () {
    const title = document.getElementById("title_1");
    title.style.opacity = 1;
    title.style.visibility = "visible";
    title.style.zIndex = 1;
    setTimeout(() => {
      title.style.opacity = 0;
      title.style.visibility = "hidden";
      title.style.zIndex = -1;
    }, 2000);
  },
};

const games = {
  createFood: function () {
    board.innerHTML = `<div class="food" style="grid-area : ${config.food.y} / ${config.food.x}"></div>`;
  },
  createPlayer: function () {
    board.innerHTML += `<div class="player" id="player" style="grid-area : ${config.player.y} / ${config.player.x}"></div>`;
  },
  movePLayer: function () {
    config.player.x += config.velocity.x;
    config.player.y += config.velocity.y;
  },
  resetPlayerPosition: function () {
    if (
      config.player.x <= 0 ||
      config.player.x >= 16 ||
      config.player.y <= 0 ||
      config.player.y >= 16
    ) {
      console.log("Mentok Bruh");
      config.player.x = 7;
      config.player.y = 7;
    }
  },
  levelUp: function () {
    config.level += 1;
  },
  isWin: function () {
    if (config.food.x == config.player.x && config.food.y == config.player.y) {
      this.levelUp();
      config.showTitle();
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

function movementPlayerHead() {
  const player = document.getElementById("player");

  if (config.velocity.x == 1) {
    player.style.transform = "scaleX(-1)";
  }
  if (config.velocity.y == 1) {
    player.style.transform = "rotate(-90deg)";
  }
  if (config.velocity.y == -1) {
    player.style.transform = "rotate(90deg)";
  }
}

function start() {
  games.createFood();
  games.createPlayer();
  games.movePLayer();
  movementPlayerHead();
  games.resetPlayerPosition();

  const wins = games.isWin();
  if (wins) {
    games.randomFood();
  }
  // games.isWin();
}

setInterval(start, config.speed);

document.addEventListener("keydown", movement);
