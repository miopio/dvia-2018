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

  if (discrete){
    var hourWidth = map(now.hour, 1,12, 0,maxR) // from hours (1-12) to pixels (0–maxWidth)
    var minsWidth = map(now.min,  0,60, 0,maxR)  // from mins (0–60) to pixels (0–maxWidth)
    var secsWidth = map(now.sec,  0,60, 0,maxR)  // from secs (0–60) to pixels (0–maxWidth)
  }else{
    // alternatively, we can use the clock's 'progress' percentages
    hourWidth = maxR * now.progress.day
    minsWidth = maxR * now.progress.hour
    secsWidth = maxR * now.progress.min
  }




// circles
  noFill();
  strokeWeight(0.185);
  stroke(220);

  while( r <= maxR){
    ellipse(x,y,r,r);
    r = r + spacing;

  }
fill (235, 110, 32);
noStroke();
ellipse (x,y,maxR,maxR);

}
