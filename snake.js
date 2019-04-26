let snakeGame = {
  canvas: document.getElementById("canvas"),
  init: function (snake) {
    this.context = this.canvas.getContext("2d");
    snake.init();
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  draw: function (snake) {
    snake.draw();
  }
};

class Snake {
  constructor(canvasWidth, canvasHeight) {
    this.width = 8;
    this.height = 8;
    this.positionX = canvasWidth / 2;
    this.positionY = canvasHeight / 2;
    this.body = [4];
    this.speed = this.width;
    this.way = 'h';
    this.ctx = canvas.getContext("2d");

  }
  init() {
    for (let i = 0; i < 4; i++) {
      this.body[i] = this.positionX + (i + 8);
    }
    this.ctx.fillStyle = "#FF0000";
    this.ctx.strokeStyle = "#000000";
    this.draw();
  };
  updateSnake() {
    if (this.way === 'h') {
      this.positionX += this.speed;
      for (let i = 3; i >= 0; i--) {
        this.body[i] = this.positionX + (i + 8);
      }
    } else {

    }
    this.draw();
  };
  draw() {
    this.body.forEach(function (e, i) {
      this.ctx.strokeRect(this.positionX + (i * this.width), this.positionY, this.width, this.height);
      this.ctx.fillRect(this.positionX + (i * this.width), this.positionY, this.width, this.height);
    }, this);
  }
}

function updateGame(snake, snakeGame) {
  setInterval(function () {
    snakeGame.clear();
    snake.updateSnake();
    snake.body.forEach(e => console.log(e));
    console.log("Runned");
  }, 500);
}

function startGame() {
  let snake = new Snake(snakeGame.canvas.width, snakeGame.canvas.height);
  snakeGame.init(snake);
  updateGame(snake, snakeGame);
}



