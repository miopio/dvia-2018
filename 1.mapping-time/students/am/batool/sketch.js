var x = 300
var y = 300
var maxR = 375;
var spacing = 30;
var r = 45;
var discrete = false;


function setup() {
  createCanvas(600, 600)
  background (35);
}

function draw() {
  ellipseMode(CENTER);
  var now = clock();

  noFill();
  strokeWeight(0.185);
  stroke(220);

  while( r <= maxR){
    ellipse(x,y,r,r);
    r = r + spacing;

  }
// fill (235, 110, 32);
// noStroke();
// ellipse (x,y,maxR,maxR);

}
