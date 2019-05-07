class SnakeGame {
  constructor(canvas) {
    this.ctx = canvas.getContext('2d');
    this.width = canvas.width;
    this.height = canvas.height;
  };
  init(snake, food) {
    this.ctx.fillStyle = "#FF0000";
    this.ctx.strokeStyle = "#000000";
    snake.init(this.ctx);
    food.init(this.ctx);
  };
  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  };
  draw(snake, food) {
    snake.draw(this.ctx);
    food.draw(this.ctx);
  }
  update(snake, food) {
    let new_head = new SnakeBodyParts(snake.body[snake.body.length - 1].x, snake.body[snake.body.length - 1].y, snake.body[snake.body.length - 1].width, snake.body[snake.body.length - 1].height);
    let eat = false;
    if (snake.getDirection() === 'right' || snake.getDirection() === 'left') {
      new_head.x += snake.getSpeed();
    } else {
      new_head.y += snake.getSpeed();
    }
    eat = checkIfEat(new_head, food, this);
    snake.updateSnake(new_head, eat);
  };

}

const checkIfEat = function (new_head, food, snakeGame) {
  console.log(JSON.stringify(new_head));
  console.log(JSON.stringify(food));
  if (JSON.stringify(new_head) === JSON.stringify(food)) {
    food.renew(snakeGame);
    return true;
  }

  return false
}