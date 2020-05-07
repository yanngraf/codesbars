let nbLines = 10;
let speed = 1; 
let barcode = [];

function setup() {

  createCanvas(800, 800);

  noFill();
  strokeWeight(2);
  
  // create all the lines
  for (let i = 0; i < nbLines; i++) {
    barcode[i] = new Jitter();
  }

  // --------------- for exporting video/GIF
  capturerSetup ();
  // --------------- for exporting video/GIF

}



function draw() {

  speed = map(mouseX,0,width,0,5);

  background(250, 250, 250 , 20);

  for (let i = 0; i < nbLines; i++) {
    barcode[i].move();
    barcode[i].display();
    if ( barcode[i].x > width) {
      barcode[i].reset();
    }
  }


  // --------------- for exporting video/GIF
  capturerDraw ();
  // --------------- for exporting video/GIF
}



// Jitter Class
class Jitter {

  constructor() {
    this.x = random(width);
    this.speed = 3 
  }

  move() {
    this.x += speed;
  }

  display() {

    // update the color depending on the mouse positions
    if ((this.x > mouseX - 50) && (this.x < mouseX + 50)) { 
      stroke(255,20, 0);
    } else {
      stroke (0);
    }

    line(this.x, 0, this.x, height);
  }

  reset() {
    this.x = 0;
  }
}