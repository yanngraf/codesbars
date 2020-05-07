let nbLines = 60;
let speed = 1; // good speed: 0.00005
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

  background(250, 250, 250 , 10);

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
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.xBottom += random(-this.speed, this.speed);
  }

  display() {

    // update the color depending on the mouse positions
    if ((this.x > mouseX - 50) && (this.x < mouseX + 50)) { 
      stroke(255,20, 0);
    } else {
      stroke (0);
    }

    line(this.x, 0, this.xBottom, height);
  }
}