import Sound from './sound';

export default class Anna {
  constructor(canvasWidth, canvasHeight) {
    const canvas = document.getElementById("canvas-background");
    this.ctx = canvas.getContext("2d");
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;

    this.annaWidth = 55;
    this.annaHeight = 67;
    this.sound = new Sound("src/sounds/kiss.mp3");

    this.annaX = Math.floor(Math.random() * Math.floor(720));
    this.annaY = -12;
    this.now = 0;

    this.drawAnna = this.drawAnna.bind(this);
  }

  drawAnna(ctx) {
    const img = new Image();
    img.src = "src/images/anna.png";
    ctx.drawImage(img, this.annaX, this.annaY, this.annaWidth, this.annaHeight)
    this.fall();
  }

  fall() {
    this.annaY += 3;
  }
}