let nbLines = 10;
let scl = 71;
let speed = 0.0009; // good speed: 0.00005
let noiseVal;
let counter = 0;

let history = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(251,251,245);
  noiseDetail(2, 1);
  noFill();
  strokeWeight(2);
}



function draw() {

  background(251,251,245 , 20);
  drawHistory();

  var bubble = {};
  history.push();
  
  y = 20;

  for (var x = 20; x < width-scl; x = x+scl) {
    
    beginShape()
    noiseValX = noise(x+counter,y);
    noiseValY = noise(y,x+counter);      
    noiseValX = map(noiseValX,0,1,0,scl);
    noiseValY = map(noiseValY,0,1,0,scl);

    center_x = x+noiseValX;
    center_y = y+noiseValY;
    counter = counter + speed;

    var bubble = {xPos: center_x, yPos: center_y};
    history.push(bubble);


    if (history.length > 400) {
      history.shift(bubble);
    }
  }
}



// Draws the trail painted from the history
function drawHistory() {
  for (var i = 0; i < history.length; i++) {
    var pos = history[i];
    stroke(0+(i/1.5));
    line(pos.xPos, 0, pos.xPos, height  );
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}