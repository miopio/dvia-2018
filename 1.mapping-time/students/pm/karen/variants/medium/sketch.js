<<<<<<< HEAD
function setup() {
  // set the width & height of the sketch
  createCanvas(400, 130)

  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you
  print('starting time:', clock())

}

function draw() {
  // check the clock for the current time and unpack some of its fields to generate a time-string
  var now = clock()

  // set the background to 'white' – you can also specify colors use integers, hex-color strings and more.
  // note that setting the background also clears the canvas from our previous round of drawing
  background('white')

  // set up typography & drawing-color
  textFont("Anonymous Pro") // ← check index.html to see how it was loaded from google-fonts
  textSize(42) // make it big
  fill(100, 50, 50)

  // draw the time string to the canvas
  text(now.text.date, 30, 50)
  text(now.text.time, 30, 100)

}
=======
//MEDIUM variant hinged hand clock with colors
//inner thin stroke denotes seconds 
//middle stroke denotes minutes 
//outer thick stroke denotes hours 


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

  
  var sx = cx + cos(s)*secondsRadius
  var sy = cy + sin(s)*secondsRadius

  var mx = sx + cos(m)*minutesRadius
  var my = sy + sin(m)*minutesRadius

  //CIRCLES********
  //draw circle seconds 
  fill(bg, 0)
  stroke('red')
  strokeWeight(2)
  ellipse(cx, cy, secondsRadius*2, secondsRadius*2)

  //draw circle minutes
  fill(bg, 0)
  stroke('black')
  strokeWeight(2)
  ellipse(sx, sy, minutesRadius*2, minutesRadius*2)

  //draw circle hour
  fill(bg, 0)
  stroke('white')
  strokeWeight(2)
  ellipse(mx, my, hoursRadius*2, hoursRadius*2)

  // //HANDS*******
  // // Draw the second hand 
  // stroke('red')
  // strokeWeight(2)
  // line(cx, cy, sx, sy)

  // // draw the minute hand 
  // stroke('black')
  // strokeWeight(2)
  // line(sx, sy, mx, my)

  // // draw the hour hand 
  // stroke('white')
  // strokeWeight(2)
  // line(mx, my, mx + cos(h)*hoursRadius, my + sin(h)*hoursRadius)
}




>>>>>>> 07e3d27472d8c3adbca08059e02a9e179e3f2022
