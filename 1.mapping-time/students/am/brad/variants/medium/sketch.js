//variables for clock components
var sec
var min
var hr
var dys
var week
var mon 
var yr 

function setup() {
  // set the width & height of the sketch
  createCanvas(800, 600)
  background(51);

  //seconds
  fill(102);
  noStroke();
  rect(0, 0, 400, 600);

  //minutes
  fill(35);
  noStroke();
  rect(300, 0, 350, 600);

  //hours
  fill(87);
  noStroke();
  rect(550, 0, 200, 600);

  //days
  fill(162);
  noStroke();
  rect(700, 0, 100, 600);

  //week
  fill(0,0,0,0);
  stroke(255);
  strokeWeight(4);
  arc(400, 300, 250, 250, 0, PI + QUARTER_PI);

  //month
  fill(0,0,0,0);
  stroke(255);
  strokeWeight(4);
  arc(400, 300, 300, 300, 0, PI + QUARTER_PI);

  // year or seasons
  fill(0,0,0,0);
  stroke(255);
  strokeWeight(4);
  arc(400, 300, 550, 550, 0, PI + QUARTER_PI);



}