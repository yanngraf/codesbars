let nbLines = 10;
let speed = 0.005; // good speed: 0.00005
let noiseVal;
let counter = 0;
let history = [];
let scl;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#FAFAFA");
  stroke("#0F0362");
  noiseDetail(2, 1);
  noFill();

  scl = Math.round(width/5.29); 
}


function draw() {

  drawHistory();

  var bubble = {};
  history.push();
  
  for(var y = 20; y < height-scl; y=y+scl){
  
    for (var x = 20; x < width-scl; x = x+scl) {
      
      beginShape()
      noiseValX = noise(x+counter,y);
      noiseValY = noise(y,x+counter);      
      noiseValX = map(noiseValX,0,1,0,scl);
      noiseValY = map(noiseValY,0,1,0,scl);

      center_x = x+noiseValX;
      center_y = y+noiseValY;
      counter = counter + speed;

      fill('#FF003E');

      var bubble = {xPos: center_x, yPos: center_y};
      history.push(bubble);

      if (history.length > 100) {
        history.shift(bubble);
      }
    }    
  }
}



// Draws the trail painted from the history
function drawHistory() {
  for (var i = 0; i < history.length; i++) {
    var pos = history[i];
    fill('orange');
    fill(i*10,i*20,i);
    stroke("black");
    line(pos.xPos, pos.yPos, pos.xPos+40, pos.yPos );
    //ellipse(pos.xPos+scl, pos.yPos,3,3);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}