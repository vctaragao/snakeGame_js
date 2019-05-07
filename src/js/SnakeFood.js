class SnakeFood {
  constructor(canvasWidth, canvasHeight, width, height) {
    this.x = 1 + Math.floor((Math.random() * (canvasWidth)) / 8);
    this.y = 1 + Math.floor((Math.random() * (canvasHeight)) / 8);
    this.width = width;
    this.height = height;
  }
  init(ctx) {
    ctx.strokeRect(this.x, this.y, this.width + 1, this.height + 1);
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  draw(ctx) {
    ctx.strokeRect(this.x, this.y, this.width, this.height);
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  renew(snakeGame) {
    this.x = Math.floor(Math.random() * snakeGame.canvasWidth);
    this.y = Math.floor(Math.random() * snakeGame.canvasHeight);
  }
}