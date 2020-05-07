let nbLines = 10;
let speed = 0; 
let barcode = [];

function setup() {

  createCanvas(800, 800);

  noFill();
  //strokeWeight(2);
  noStroke();
  fill("white");

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

  // background(250, 250, 250 , 20);
  background("white");

  for (let i = 0; i < nbLines; i++) {
    barcode[i].move();
    barcode[i].display();
  
    if ( barcode[i].x > width && barcode[i].direction == 1) {
      barcode[i].reset();
    }

    if ( barcode[i].x+barcode[i].xWidth < 0 && barcode[i].direction != 1) {
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
    this.speed = random(0,2);


    this.xWidth = random(10,100); 

    if ( Math.round(this.xWidth) % 2 != 0) { 
      this.direction = 1; 
      this.color = color(50,50,50); 
    } else { 
      this.direction = -1;
      this.color = color(150,150,150); 
    }
    
  }

  move() {
    this.x += (speed+this.speed)*this.direction;
  }

  display() {

    // // update the color depending on the mouse positions
    // if ((this.x > mouseX - 50) && (this.x < mouseX + 50)) { 
    //   stroke(255,20, 0);
    // } else {
    //   stroke (0);
    // }

    // fill("blue");
    //line(this.x, 0, this.x, height);
    fill(this.color);
    rect(this.x, 0, this.xWidth, height);
  }

  reset() {
  
    if (this.direction == 1) {
      this.x = 0-this.xWidth;
    } else {
      this.x = width+this.xWidth;
    }
  }
}