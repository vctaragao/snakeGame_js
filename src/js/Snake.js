class Snake {
  constructor(canvasWidth, canvasHeight) {
    this.width = 7;
    this.height = 7;
    this.positionX = 1 + Math.floor((Math.random() * canvasWidth) / 8);
    this.positionY = 1 + Math.floor((Math.random() * canvasHeight) / 8);
    this.body = [10];
    this.speed = this.width;
    this.direction = "right";
    document.addEventListener("keydown", (e) => {
      this.changeDirection(e.key);
    });
  }
  init(ctx) {
    for (let i = 0; i < 10; i++) {
      this.body[i] = new SnakeBodyParts(this.positionX + (i * this.width), this.positionY, this.height, this.width);
    }

    this.positionX = this.body[this.body.length - 1].x;
    this.positionY = this.body[this.body.length - 1].y;

    this.draw(ctx);
  };
  changeDirection(key) {
    switch (key) {
      case "ArrowRight":
        if (this.direction !== 'left') {
          this.direction = 'right';
          this.speed = this.width;
        }
        break;
      case "ArrowLeft":
        if (this.direction !== 'right') {
          this.direction = 'left';
          this.speed = this.width * -1;
        }
        break;
      case "ArrowUp":
        if (this.direction !== 'down') {
          this.direction = 'up';
          this.speed = this.height * -1;
        }
        break;
      case "ArrowDown":
        if (this.direction !== 'up') {
          this.direction = 'down';
          this.speed = this.height;
        }
        break;
      default:
        clearInterval(run);
        break;
    }

  };
  updateSnake(new_head, eat = false) {
    if (!eat) {
      this.body.shift();
    }
    this.body.push(new_head);
  };
  draw(ctx) {

    if (this.checkSelfColision() || this.checkBorderColision())
      clearInterval(run);

    this.body.forEach(function (e) {
      ctx.strokeRect(e.x, e.y, e.width, e.height);
      ctx.fillRect(e.x, e.y, e.width, e.height);
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
  };
  checkBorderColision() {
    let head = this.body[this.body.length - 1];
    return (head.x >= canvas.width || head.x <= 0 || head.y >= canvas.height || head.y <= 0) ? true : false;
  };
  getDirection() {
    return this.direction;
  };
  getSpeed() {
    return this.speed;
  };
  debug() {
    this.body.forEach(e => console.log(e));
  }
}

