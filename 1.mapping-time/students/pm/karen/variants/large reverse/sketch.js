//LARGE REVERSE variant hinged hand clock with colors
//inner thin stroke denotes hours
//middle stroke denotes minutes 
//outer thick stroke denotes seconds


var cx, cy; // center position of canvas


// Radius for hands of the clock
var secondsRadius
var minutesRadius
var hoursRadius
var clockDiameter

var bg = 200; 

var discrete = true

function setup() {
  createCanvas(500, 500)
  stroke(255)

  var radius = min(width, height) / 2.1; // this is the maximum possible radius
  secondsRadius = radius * 0.5
  minutesRadius = radius * 0.3
  hoursRadius = radius * 0.2

  cx = width / 2
  cy = height / 2
}

function draw() {
  background(bg, 80)


  // Angles for sin() and cos() start at 3 o'clock
  // subtract HALF_PI to make them start at the top
  var now = clock()
  var s = (now.progress.min * TWO_PI) - HALF_PI
  var m = (now.progress.hour * TWO_PI) - HALF_PI
  var h = (now.progress.halfday * TWO_PI) - HALF_PI

  //change background color based on day of week 
  var backgroundDay = now.progress.week * 255 
  print(backgroundDay)
  bg = backgroundDay; 


  var hx = cx + cos(h)*hoursRadius
  var hy = cy + sin(h)*hoursRadius

  var mx = hx + cos(m)*minutesRadius
  var my = hy + sin(m)*minutesRadius

  //CIRCLES********

  //draw circle seconds
  fill(bg, 0)
  stroke('red')
  strokeWeight(2)
  ellipse(mx, my, secondsRadius*2, secondsRadius*2)

  //draw circle minutes
  fill(bg, 0)
  stroke('black')
  strokeWeight(2)
  ellipse(hx, hy, minutesRadius*2, minutesRadius*2)

  //draw circle hours
  fill(bg, 0)
  stroke('white')
  strokeWeight(2)
  ellipse(cx, cy, hoursRadius*2, hoursRadius*2)

  //HANDS*******
  // draw the second hand 
  stroke('red')
  strokeWeight(2)
  line(mx, my, mx + cos(s)*secondsRadius, my + sin(s)*secondsRadius)

  // draw the minute hand 
  stroke('black')
  strokeWeight(2)
  line(hx, hy, mx, my)

  // draw the hour hand 
  stroke('white')
  strokeWeight(2)
  line(cx, cy, hx, hy)
}




