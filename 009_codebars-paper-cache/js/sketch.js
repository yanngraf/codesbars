let mousePos;

 let xpos_layer2;
 let xsize_layer2;

let layer2_nbBars = 5;

// let nbLines = 10;
// let scl = 151;
// let speed = 0.005; // good speed: 0.00005
// let noiseVal;
// let counter = 0;

// let history = [];



//let layer1 = [100,200,200,100];

let layer1_position = [101,201,401,801];
let layer1_size = [50,100,50,10];

let layer2_position = [151,251,351,651];
let layer2_size = [150,50,50,100];

let layer3_position = [51,251,451,601];
let layer3_size = [75,50,170,10,23];

let layer4_position = [51,251,451,601];
let layer4_size = [75,50,170,10,23];


let layer1 = {
  position: layer1_position,
  size: layer1_size
}

let layer2 = {
  position: layer2_position,
  size: layer2_size
}

let layer3 = {
  position: layer3_position,
  size: layer3_size
}

let layer4 = {
  position: layer4_position,
  size: layer4_size
}

let layers = [
  layer1, layer2, layer3,layer4  
]


function setup() {

  createCanvas(960, 500);
  background(0);
  noStroke();

  // --------------- for exporting video/GIF
  capturerSetup ();
  // --------------- for exporting video/GIF
}



function draw() {

  background('#2d2d29');

  fill(color(220,220,220));
  generateLayer (3, 5, 'y', 0, 400);


  fill('pink');
  fill(color(230,230,230));
  generateLayer (2, 5, 'x', 0, 600);


  //fill('green');
  fill(color(240,240,240));
  generateLayer (1, 5, 'y', 0, 200);

  // First layer (behind)
  fill('white');

  generateLayer (0, 5, 'x', 0, 200);



  // --------------- for exporting video/GIF
  capturerDraw ();
  // --------------- for exporting video/GIF
}





function generateLayer (layerID, nbBars, direction, size, amplitude) {

  // define which direction to move the layer
  if (direction == 'x') {
    mousePos = mouseX;
    } else {
    mousePos = mouseY;
  }

  //console.log (mousePos);
  mousePos = map(mousePos,0,800,0, amplitude);

  // Draw the start cache
  rect(mousePos-2000,0,2000, 1000);
  pos = layers[layerID].position[0];
  
  if (nbBars > 2) {

    for (i = 1; i < nbBars; i++) {
      
      position = layers[layerID].position[i];
      size = layers[layerID].size[i];
      rect(mousePos+position,0,size, 1000);
  
    }
  }

  // Draw the closing cache
  rect(mousePos+700,0,2000, 1000);

}

