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
    this.direction = "right";
    this.ctx = canvas.getContext("2d");
    document.addEventListener("keydown", (e) => {
      this.changeDirection(e.key);
    });
  }
  init() {
    for (let i = 0; i < 4; i++) {
      this.body[i] = { "x": this.positionX + (i * this.width), "y": this.positionY + this.height, "height": this.height, "width": this.width };
    }
    this.ctx.fillStyle = "#FF0000";
    this.ctx.strokeStyle = "#000000";
    this.draw();
  };
  changeDirection(key) {
    switch (key) {
      case "ArrowRight":
        if (this.direction !== 'left')
          this.direction = 'right';
        break;
      case "ArrowLeft":
        if (this.direction !== 'right')
          this.direction = 'left';
        break;
      case "ArrowUp":
        if (this.direction !== 'down')
          this.direction = 'up';
        break;
      case "ArrowDown":
        if (this.direction !== 'up')
          this.direction = 'down';
        break;
    }

  };
  updateSnake() {
    if (this.direction === 'right') {
      this.speed = this.width;
      this.positionX += this.speed;
      this.body = this.body.map((e, i) => {
        e.x = this.positionX + (i * this.width);
        return e
      });
    } else if (this.direction === 'left') {
      this.speed = this.width * -1;
      this.positionX += this.speed;
      for (let i = 3; i >= 0; i--) {
        this.body[i] = this.positionX + (i + 8);
      }
      // To do: Handle the arrwo pressed
    } else if (this.direction === 'up') {
      this.speed = this.height * -1;
      this.positionY += this.speed;
      for (let i = 3; i >= 0; i--) {
        this.body[i] = this.positionY + (i + 8);
      }
    } else if (this.direction === 'down') {
      this.speed = this.height;
      this.positionY += this.speed;

      let head = this.body[this.body.lenght - 1];
      head.y = this.positiony + ((this.body.lenght - 1) * this.height);


      this.body = this.body.map((e, i) => {
        e.y = this.positiony + (i * this.height);
        return e;
      });
    }
    this.draw();
  };
  draw() {
    this.body.forEach(function (e, i) {
      this.ctx.strokeRect(e.x, e.y, e.width, e.height);
      this.ctx.fillRect(e.x, e.y, e.width, e.height);
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



