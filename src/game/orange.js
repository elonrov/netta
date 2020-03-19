import Sound from './sound';

export default class Orange {
  constructor(canvasWidth, canvasHeight) {
    const canvas = document.getElementById("canvas-background");
    this.ctx = canvas.getContext("2d");
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight; 
    
    this.orangeWidth = 47;
    this.orangeHeight = 43;
    this.sound = new Sound("src/sounds/kiss.mp3");

    this.orangeX = Math.floor(Math.random() * Math.floor(640)); 
    this.orangeY = -12;
    this.now = 0;

    this.drawOrange = this.drawOrange.bind(this);
  }

  drawOrange(ctx) {
    const img = new Image();  
    img.src = "src/images/laney.png";
    ctx.drawImage(img, this.orangeX, this.orangeY, this.orangeWidth, this.orangeHeight)
    this.fall();
  }

  fall() {
    this.orangeY += 5;
  }
}