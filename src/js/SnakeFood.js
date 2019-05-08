class SnakeFood {
  constructor(canvasWidth, canvasHeight, width, height) {
    this.x = Math.floor(Math.floor(Math.random() * (canvasWidth - (width * 10))) / 8) * 8;
    this.y = Math.floor(Math.floor(Math.random() * (canvasHeight - (height * 10))) / 8) * 8;
    this.width = width;
    this.height = height;
  }
  init(ctx) {
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  draw(ctx) {
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  renew(snakeGame) {
    this.x = Math.floor(Math.floor(Math.random() * (snakeGame.width - (this.width * 10))) / 8) * 8;
    this.y = Math.floor(Math.floor(Math.random() * (snakeGame.height - (this.height * 10))) / 8) * 8;
    this.draw(snakeGame.ctx);
  }
}