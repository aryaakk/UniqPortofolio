const board = document.querySelector(".board");

const randomPositionX = () => {
  return ~~(Math.random() * 26) + 1;
};
const randomPositionY = () => {
  return ~~(Math.random() * 20) + 1;
};

let config = {
  speed: 100,
  level: 0,
  countEats: 0,
  player: {
    x: randomPositionX(),
    y: randomPositionY(),
  },
  food: {
    position: {
      x: randomPositionX(),
      y: randomPositionY(),
    },
  },
  velocity: {
    x: 0,
    y: 0,
  },
  showTitle: function () {
    const title = document.getElementById("titleShow");
    const instagram = document.getElementById("instagram");
    const github = document.getElementById("github");
    const ketIg = document.getElementById("ket-ig");
    const ketGithub = document.getElementById("ket-github");

    if (this.level === 1) {
      title.innerHTML = "Welcome to...";
      title.style.display = "inline";
      title.classList.add("show");
      setTimeout(() => {
        title.classList.remove("show");
        title.classList.add("hide");
      }, 4500);
      setTimeout(() => {
        title.classList.remove("hide");
        title.style.display = "none";
      }, 5000);
    } else if (this.level === 2) {
      title.innerHTML = "Unique Portofolio...";
      title.style.display = "inline";
      title.classList.add("show");
      setTimeout(() => {
        title.classList.remove("show");
        title.classList.add("hide");
      }, 4500);
      setTimeout(() => {
        title.classList.remove("hide");
        title.style.display = "none";
      }, 5000);
    } else if (this.level === 3) {
      title.innerHTML = "By...";
      title.style.display = "inline";
      title.classList.add("show");
      setTimeout(() => {
        title.classList.remove("show");
        title.classList.add("hide");
      }, 4500);
      setTimeout(() => {
        title.classList.remove("hide");
        title.style.display = "none";
      }, 5000);
    } else if (this.level === 4) {
      title.innerHTML = "Course Online Dea Aprizal!!";
      title.style.display = "inline";
      title.classList.add("show");
      setTimeout(() => {
        title.classList.remove("show");
        title.classList.add("hide");
      }, 4500);
      setTimeout(() => {
        title.classList.remove("hide");
        title.style.display = "none";
      }, 5000);
    } else if (this.level === 5) {
      title.innerHTML = "Let see my Social Media!!";
      title.style.display = "inline";
      title.classList.add("show");
      setTimeout(() => {
        title.classList.remove("show");
        title.classList.add("hide");
      }, 4500);
      setTimeout(() => {
        title.classList.remove("hide");
        title.style.display = "none";
      }, 5000);
    } else if (this.level === 6) {
      title.innerHTML = "I Just Have One Social Media Account that is..";
      title.style.display = "inline";
      title.classList.add("show");
      setTimeout(() => {
        title.classList.remove("show");
        title.classList.add("hide");
      }, 4500);
      setTimeout(() => {
        title.classList.remove("hide");
        title.style.display = "none";
      }, 5000);
    } else if (this.level === 7) {
      instagram.style.display = "flex";
      ketIg.style.display = "block";
      setTimeout(() => {
        ketIg.classList.add("hide-ket");
      }, 4500);
      setTimeout(() => {
        ketIg.classList.remove("hide-ket");
        ketIg.style.display = "none";
      }, 5000);
    } else if (this.level === 8) {
      github.style.display = "flex";
      ketGithub.style.display = "block";
      setTimeout(() => {
        ketGithub.classList.add("hide-ket");
      }, 4500);
      setTimeout(() => {
        ketGithub.classList.remove("hide-ket");
        ketGithub.style.display = "none";
      }, 5000);
    }
  },
};

const games = {
  createFood: function () {
    board.innerHTML = `<div class="food" style="grid-area : ${config.food.position.y} / ${config.food.position.x}"></div>`;
  },
  createPlayer: function () {
    board.innerHTML += `<div class="player" id="player" style="grid-area : ${config.player.y} / ${config.player.x}"></div>`;
  },
  movePLayer: function () {
    config.player.x += config.velocity.x;
    config.player.y += config.velocity.y;
  },
  resetPlayerPosition: function () {
    if (config.player.x <= 0) {
      config.player.x = 27;
      config.player.y = config.player.y;
    } else if (config.player.x >= 27) {
      config.player.x = 1;
      config.player.y = config.player.y;
    }
    if (config.player.y <= 0) {
      config.player.x = config.player.x;
      config.player.y = 21;
    } else if (config.player.y >= 21) {
      config.player.x = config.player.x;
      config.player.y = 1;
    }
  },
  levelUp: function () {
    config.level += 1;
  },
  isWin: function () {
    const eats = document.getElementById("eats");
    const level = document.getElementById("level");

    if (
      config.food.position.x == config.player.x &&
      config.food.position.y == config.player.y
    ) {
      config.countEats += 1;
      eats.innerHTML = config.countEats;
      if (config.countEats % 5 == 0) {
        this.levelUp();
        level.innerHTML = config.level;
        config.showTitle();
        console.log("level kamu saat ini ", config.level);
      }
      console.log(config.countEats);
      return true;
    } else {
      return false;
    }
  },
  randomFood: function () {
    config.food.position.x = randomPositionX();
    config.food.position.y = randomPositionY();
  },
};

function movement(listen) {
  // console.log(listen.key);
  switch (listen.key) {
    case "ArrowUp" || "w":
      config.velocity.y = -1;
      config.velocity.x = 0;
      break;
    case "ArrowDown" || "s":
      config.velocity.y = 1;
      config.velocity.x = 0;
      break;
    case "ArrowLeft" || "a":
      config.velocity.y = 0;
      config.velocity.x = -1;
      break;
    case "ArrowRight" || "d":
      config.velocity.y = 0;
      config.velocity.x = 1;
      break;
    default:
      break;
  }
}

function movementConsole(arrow) {
  switch (arrow) {
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
