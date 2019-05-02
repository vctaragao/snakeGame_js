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
    this.body = [10];
    this.speed = this.width;
    this.direction = "right";
    this.ctx = canvas.getContext("2d");
    document.addEventListener("keydown", (e) => {
      this.changeDirection(e.key);
    });
  }
  init() {
    for (let i = 0; i < 10; i++) {
      this.body[i] = new SnakeBodyParts(this.positionX + (i * this.width), this.positionY + this.height, this.height, this.width);
    }

    this.positionX = this.body[this.body.length - 1].x;
    this.positionY = this.body[this.body.length - 1].y;

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
      default:
        clearInterval(run);
        break;
    }

  };
  updateSnake() {
    let new_head = new SnakeBodyParts(this.body[this.body.length - 1].x, this.body[this.body.length - 1].y, this.body[this.body.length - 1].width, this.body[this.body.length - 1].height);
    this.body.shift();
    if (this.direction === 'right') {
      this.speed = this.width;
      this.positionX += this.speed;
      new_head.x = this.positionX;
      this.body.push(new_head);
    } else if (this.direction === 'left') {
      this.speed = this.width * -1;
      this.positionX += this.speed;
      new_head.x = this.positionX;
      this.body.push(new_head);
    } else if (this.direction === 'up') {
      this.speed = this.height * -1;
      this.positionY += this.speed;
      new_head.y = this.positionY;
      this.body.push(new_head);
    } else if (this.direction === 'down') {
      this.speed = this.height;
      this.positionY += this.speed;
      new_head.y = this.positionY;
      this.body.push(new_head);
    }
    this.draw();
  };
  draw() {

    if (this.checkSelfColision())
      clearInterval(run);

    this.body.forEach(function (e, i) {
      this.ctx.strokeRect(e.x, e.y, e.width, e.height);
      this.ctx.fillRect(e.x, e.y, e.width, e.height);
    }, this);
  };
  checkSelfColision() {
    let head = this.body[this.body.length - 1];
    let tail = this.body.slice(0, this.body.length - 1);
    let colided = false;
    for (let i = 0; i < tail.length; i++) {
      if (JSON.stringify(head) === JSON.stringify(tail[i])) {
        colided = true;
        break;
      }
    }
    return colided;
  }
  debug() {
    this.body.forEach(e => console.log(e));
  }
}

class SnakeBodyParts {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}

let snake = new Snake(snakeGame.canvas.width, snakeGame.canvas.height);

function startGame() {
  snakeGame.init(snake);
}


var run = setInterval(function () {
  snakeGame.clear();
  snake.updateSnake();
  console.log("Runned");
}, 100);


