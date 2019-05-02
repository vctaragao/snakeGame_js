console.log('lida');

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

let snake = new Snake(snakeGame.canvas.width, snakeGame.canvas.height);

function startGame() {
  snakeGame.init(snake);
}

var run = setInterval(function () {
  snakeGame.clear();
  snake.updateSnake();
  console.log("Runned");
}, 100);
