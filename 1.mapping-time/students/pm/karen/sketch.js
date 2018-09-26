
var cx, cy; // center position of canvas

var showCircles = false;

// Radius for hands of the clock
var secondsRadius
var minutesRadius
var hoursRadius
var clockDiameter

var bg = 255; 

var discrete = true

function setup() {
  createCanvas(500, 500)
  stroke(255)

  var radius = min(width, height) / 2.3; // this is the maximum possible radius
  secondsRadius = radius * 0.5
  minutesRadius = radius * 0.3
  hoursRadius = radius * 0.2

  cx = width / 2
  cy = height / 2
}

function draw() {
  background(200, 50)

  // // Draw the clock background
  // fill(80)
  // noStroke()
  // ellipse(cx, cy, clockDiameter, clockDiameter)

  // // draw 60 dots around the edge corresponding to min/sec angles
  // strokeWeight(2)
  // stroke('white')
  // beginShape(POINTS)
  // for (var a = 0; a < 360; a+=6) {
  //   var angle = radians(a)
  //   var x = cx + cos(angle) * dotRadius
  //   var y = cy + sin(angle) * dotRadius
  //   vertex(x, y)
  // }
  // endShape()

  // draw 12 lines at the edge to mark the hours
  // stroke(200)
  // for (var a = 0; a < 360; a+=30) {
  //   let angle = radians(a),
  //       x0 = cx + cos(angle) * tickRadius,
  //       x1 = cx + cos(angle) * dotRadius,
  //       y0 = cy + sin(angle) * tickRadius,
  //       y1 = cy + sin(angle) * dotRadius
  //   line(x0, y0, x1, y1)


  // Angles for sin() and cos() start at 3 o'clock
  // subtract HALF_PI to make them start at the top
  var now = clock()
  var s = (now.progress.min * TWO_PI) - HALF_PI
  var m = (now.progress.hour * TWO_PI) - HALF_PI
  var h = (now.progress.halfday * TWO_PI) - HALF_PI

  
  var sx = cx + cos(s)*secondsRadius
  var sy = cy + sin(s)*secondsRadius

  var mx = sx + cos(m)*minutesRadius
  var my = sy + sin(m)*minutesRadius


  //draw circle seconds 
  fill(bg, 0)
  stroke('black')
  strokeWeight(1)
  ellipse(cx, cy, secondsRadius*2, secondsRadius*2)

  //draw circle minutes
  fill(bg, 0)
  stroke('black')
  strokeWeight(5)
  ellipse(sx, sy, minutesRadius*2, minutesRadius*2)

  //draw circle hour
  fill(bg, 0)
  stroke('black')
  strokeWeight(10)
  ellipse(mx, my, hoursRadius*2, hoursRadius*2)

  // if (discrete){
  //   // L[inearly] [int]ERP[olate] from the current fraction of a minute to a
  //   // proportional value in the range 0–2π (for a 'ticking' effect)
  //   s = lerp(0, TWO_PI, now.sec/60) - HALF_PI
  // }

  //HANDS*******
  // Draw the second hand 
  stroke('black')
  strokeWeight(1)
  line(cx, cy, sx, sy)

  // draw the minute hand 
  stroke('black')
  strokeWeight(5)
  line(sx, sy, mx, my)

  // draw the hour hand 
  stroke('black')
  strokeWeight(10)
  line(mx, my, mx + cos(h)*hoursRadius, my + sin(h)*hoursRadius)

}

// function showCirclesyes() {
//   if (mouseX < 100 && mouseY < 100) {
//     //button 1 was just clicked, show button 2 instead
//     showCircles = false;
//   } else if (mouseX > 100 && mouseY > 100) {
//     //button 2 was just clicked, show button 1 instead
//     showCircles = true;
//   }
// }

// function change() {

  // if (showCircles) { //draw the first button
  //   fill(255, 0, 0);
  //   rect(0, 0, 100, 100);
  // } else { //draw the second button
  //   fill(0, 255, 0);
  //   rect(100, 100, 100, 100);
  // }
// }




//****************************


// function setup() {
//   createCanvas(575, 360);
//   background('dimgrey');
//   noStroke();
//   var theTime = clock()
//   print('time', theTime.hour)
// }

// function draw() {
//   let pointsize = 42;
//   var now = clock();
//   textSize(pointsize);
//   text(now.text.time, width/2, height/2 + pointsize/3);
// }

// background('dimgrey');

  // // Draw white bars
  // fill('white');
  // y = 60;
  // for(var i=0; i<num/3; i++) {
  //   rect(50, y, 475, 10);
  //   y += 20; // shorthand for: "y = y + 20"
  // }

  // // Orange bars (leftward)
  // fill('goldenrod');
  // y = 40;
  // for(var i=0; i<num; i++) {
  //   rect(405, y, 30, 10);
  //   y += 20;
  // }

  // // Orange bars (rightward)
  // y = 50;
  // for(var i=0; i<num; i++) {
  //   rect(425, y, 30, 10);
  //   y += 20;
  // }


