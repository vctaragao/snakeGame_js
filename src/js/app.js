let snakeGame = new SnakeGame(document.getElementById("canvas"));
let snake = new Snake(snakeGame.width, snakeGame.height);
let food = new SnakeFood(snakeGame.width, snakeGame.height, snake.width, snake.height);

var startGame = function () {
  snakeGame.init(snake, food);
}

var run = setInterval(function () {
  snakeGame.clear();
  snakeGame.update(snake, food);
  snakeGame.draw(snake, food);
  console.log("Runned");
}, 100);
