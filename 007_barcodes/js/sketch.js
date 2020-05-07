let nbLines = 160;
let speed = 10; // good speed: 0.00005
let noiseVal;
let  barcode = [];


function setup() {

  createCanvas(800, 800);

  noFill();
  strokeWeight(1);
  
  // create all the lines
  for (let i = 0; i < nbLines; i++) {
    barcode[i] = new Jitter();
  }

  // --------------- for exporting video/GIF
  capturerSetup ();
  // --------------- for exporting video/GIF

}



function draw() {

  background(0, 0, 0 , 10);

  for (let i = 0; i < nbLines; i++) {
    barcode[i].move();
    barcode[i].display();
  }


  // --------------- for exporting video/GIF
  capturerDraw ();
  // --------------- for exporting video/GIF
}



// Jitter Class
class Jitter {

  constructor() {
    this.x = random(width);
    this.xBottom = random(width);
    this.speed = speed; 
    this.direction = 1;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    if (this.xBottom >= width && this.direction == 1) {
      this.direction = 0;
    }

    if (this.xBottom < 0 ) {
      this.direction = 1;
    }

    if (this.direction == 1) {
      this.xBottom += random(0, this.speed);
    } else {
      this.xBottom -= random(0, this.speed);
    }
  }

  display() {

    // update the color depending on the mouse positions
    if ((this.x > mouseX - 50) && (this.x < mouseX + 50)) { 
      stroke(255,20, 30);
    } else {
      stroke (255);
    }

    line(this.x, 0, this.xBottom, height);
  }
}