function setup() {
    createCanvas(600,600);
    angleMode(DEGREES);
}

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

  //arc
  strokeWeight(2.5);
  stroke(178,207,240);

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
