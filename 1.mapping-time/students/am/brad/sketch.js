<<<<<<< HEAD
var x = 20 // starting x position to draw
var y = 20  // starting y position to draw
var barHeight = 72 // height of each bar
var maxWidth = 760 // maximum width of each bar (the actual width will always be ≤ this)
var spacing = 10 // the vertical space to skip between bars
=======
function setup() {
    createCanvas(600,600);
    angleMode(DEGREES);
}
>>>>>>> 07e3d27472d8c3adbca08059e02a9e179e3f2022

function draw(){
  background(250,128,114);
  //variables for hours, minutes, and seconds
  hr = hour(); // current hour of computer comes back at 0-23 integers
  mn = minute();
  s = second();

  //rotate entire canvas -90 degrees
  // push()
  translate(300,300);
  rotate(-90);


  // //arc
  // strokeWeight(2.5);
  // stroke(178,207,240);

  //First arc is the seconds arc
  var sAngle = map(s, 0, 60, 0, 360);
  fill(0,102,204,150);
  arc(0, 0, 350, 350, 0, sAngle); // the x and y points are 0,0, the circle is 350 width and height, it begins at 0 and goes until

  //Middle arc is the minutes arc
  var mnAngle = map(mn, 0, 60, 0, 360); // map(value to be converted, lower bound of range, upper bound of the range, lower bound of target range, upper bound of target range)
  fill(68,171,210,150);
  arc(0, 0, 250, 250, 0, mnAngle)// arc(x,y,w,h,)

  //inner arc is for hours
  //Try to form an opening to show the hours

  var hrAngle = map(hr, 0, 12, 0, 360); //make sure 360 fits into 12 hours instead of 24 hours
  fill(198,226,255,150);
  arc(0, 0, 150, 150, 0, hrAngle)

  // pop();

}

<<<<<<< HEAD
//this gets called every frame (about 60 frames per second)
function draw() {
  background(255)
  noStroke()

  // measure the current time & calculate the width in pixels of each bar
  var now = clock()
  if (discrete){
    // the map() function lets us *normalize* a value from a starting range then *project* it into another range
    var dayWidth = map(now.hour, 1,12, 0,maxWidth) // from hours (1-12) to pixels (0–maxWidth)
    var hourWidth = map(now.hour, 1,12, 0,maxWidth) // from hours (1-12) to pixels (0–maxWidth)
    var minsWidth = map(now.min,  0,60, 0,maxWidth)  // from mins (0–60) to pixels (0–maxWidth)
    var secsWidth = map(now.sec,  0,60, 0,maxWidth)  // from secs (0–60) to pixels (0–maxWidth)
  }else{
    // alternatively, we can use the clock's 'progress' percentages
    hourWidth = maxWidth * now.progress.day
    minsWidth = maxWidth * now.progress.hour
    secsWidth = maxWidth * now.progress.min
  }

  //draw 3 background bars to indicate the max width
  fill(30, 0, 0)
  rect(x, y,                         maxWidth,  barHeight)
  rect(x, y +    barHeight+spacing,  maxWidth,  barHeight)
  rect(x, y + 2*(barHeight+spacing), maxWidth,  barHeight)
  rect(x, y + 3*(barHeight+spacing), maxWidth,  barHeight)
  rect(x, y + 4*(barHeight+spacing), maxWidth,  barHeight)
  rect(x, y + 5*(barHeight+spacing), maxWidth,  barHeight)
  rect(x, y + 6*(barHeight+spacing), maxWidth,  barHeight)

  // draw the hours bar at the top...
  fill(80, 0, 0)
  rect(x, y,                         hourWidth, barHeight)

  // ...the minutes bar in the middle...
  fill(150, 0, 0)
  rect(x, y +    barHeight+spacing,  minsWidth, barHeight)

  // ...and the seconds bar at the bottom
  fill(255, 0, 0)
  rect(x, y + 2*(barHeight+spacing), secsWidth, barHeight)

  // ...and the seconds bar at the bottom
  fill(255, 0, 0)
  rect(x, y + 3*(barHeight+spacing), secsWidth, barHeight)

  // ...and the seconds bar at the bottom
  fill(255, 0, 0)
  rect(x, y + 4*(barHeight+spacing), secsWidth, barHeight)

  // ...and the seconds bar at the bottom
  fill(255, 0, 0)
  rect(x, y + 5*(barHeight+spacing), minsWidth, barHeight)

  // ...and the seconds bar at the bottom
  fill(255, 0, 0)
  rect(x, y + 6*(barHeight+spacing), secsWidth, barHeight)
}
=======










//Original Template from class
// function setup() {
//   // set the width & height of the sketch
//   createCanvas(400, 130)
//
//   // print the time to the console once at the beginning of the run. try opening up the
//   // web inspector and poking around to see the various values the clock function gives you
//   print('starting time:', clock())
//
// }
//
// function draw() {
//   // check the clock for the current time and unpack some of its fields to generate a time-string
//   var now = clock()
//
//   // set the background to 'white' – you can also specify colors use integers, hex-color strings and more.
//   // note that setting the background also clears the canvas from our previous round of drawing
//   background('white')
//
//   // set up typography & drawing-color
//   textFont("Anonymous Pro") // ← check index.html to see how it was loaded from google-fonts
//   textSize(42) // make it big
//   fill(100, 50, 50)
//
//   // draw the time string to the canvas
//   text(now.text.date, 30, 50)
//   text(now.text.time, 30, 100)
//
// }
>>>>>>> 07e3d27472d8c3adbca08059e02a9e179e3f2022
