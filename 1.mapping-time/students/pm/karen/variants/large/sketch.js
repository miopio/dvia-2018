//LARGE variant hinged hand clock with colors
//inner thin stroke denotes seconds 
//middle stroke denotes minutes 
//outer thick stroke denotes hours 


var cx, cy; // center position of canvas


// Radius for hands of the clock
var secondsRadius
var minutesRadius
var hoursRadius
var daysRadius
var clockDiameter

var bg = 200; 

var discrete = true

function setup() {
  createCanvas(500, 500)
  stroke(255)

  var radius = min(width, height) / 2.3; // this is the maximum possible radius
  secondsRadius = radius * 0.4
  minutesRadius = radius * 0.35
  hoursRadius = radius * 0.3
  daysRadius = radius * 0.1

  cx = width / 2
  cy = height / 2
}

function draw() {
  background(bg, 10)


  // Angles for sin() and cos() start at 3 o'clock
  // subtract HALF_PI to make them start at the top
  var now = clock()
  var s = (now.progress.min * TWO_PI) - HALF_PI
  var m = (now.progress.hour * TWO_PI) - HALF_PI
  var h = (now.progress.halfday * TWO_PI) - HALF_PI
  var d = (now.progress.week * TWO_PI) - HALF_PI

  //change background color based on day of week 
  // var backgroundDay = now.progress.week * 255 
  // print(backgroundDay)
  // bg = backgroundDay; 

  
  var sx = cx + cos(s)*secondsRadius
  var sy = cy + sin(s)*secondsRadius

  var mx = sx + cos(m)*minutesRadius
  var my = sy + sin(m)*minutesRadius

  var hx = mx + cos(h)*hoursRadius
  var hy = my + sin(h)*hoursRadius

  var dx = mx + cos(d)*daysRadius
  var dy = my + sin(d)*daysRadius

  // //CIRCLES********
  // //draw circle seconds 
  // fill(bg, 0)
  // stroke('black')
  // strokeWeight(2)
  // ellipse(cx, cy, secondsRadius*2, secondsRadius*2)

  // //draw circle minutes
  // fill(bg, 0)
  // stroke('black')
  // strokeWeight(2)
  // ellipse(sx, sy, minutesRadius*2, minutesRadius*2)

  // //draw circle hour
  // fill(bg, 0)
  // stroke('black')
  // strokeWeight(2)
  // ellipse(mx, my, hoursRadius*2, hoursRadius*2)

  //HANDS*******
  // Draw the second hand 
  stroke('black')
  strokeWeight(1)
  line(cx, cy, sx, sy)

  // draw the minute hand 
  stroke('black')
  strokeWeight(3)
  line(sx, sy, mx, my)

  // draw the hour hand 
  stroke('black')
  strokeWeight(4)
  line(mx, my, hx, hy)

  // draw the days hand 
  stroke('black')
  strokeWeight(5)
  line(hx, hy, dx, dy)
}




