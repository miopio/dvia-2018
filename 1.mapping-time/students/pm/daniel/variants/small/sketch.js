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

=======
var x;
var num;

// Sets the screen to be 2080 pixels wide and 720 pixels high
function setup() {
  createCanvas(2080, 720);
  noStroke();
}

function draw() {
  background(180); // this will clear the screen every time we redraw

  var now = clock() // store the current moment in a local variable


  // Draw black bar hours
  fill(75);
  x = 30;
  num = 24;
  for(var i = 0; i < num; i++) {
    // the if/else construct fills the rectangle at different positions based on whether
    // the 'current' rectangle is before or after the clock value for the 24-hour time
    if (i > now.hours){
      rect(x, 40, 31, 150);
    }else{
      rect(x * now.progress.hours, 40, 31, 150);
    }
    x += 84
  }


  // Draw gray bar minutes
  fill(150);
  x = 30;
  num = 60;
  for(var i = 0; i < num; i++) {
    // The if/else construct fills the rectangle at different positions based on whether
    // the 'current' rectangle is before or after the clock value for the 24-hour time
    if (i > now.min){
      rect(x, 240, 21, 120);
    }else{
      rect(x * now.progress.minutes, 240, 21, 120);
    }
    x += 33;
  }


  // Draw off-white bar seconds
  fill(225);
  x = 30;
  num = 60;
  for(var i = 0; i < num; i++) {
    //The if/else construct fills the rectangle at different positions based on whether
    // the 'current' rectangle is before or after the clock value for the 24-hour time
    if (i > now.sec){
      rect(x, 450, 11, 90);
    }else{
      rect(x * now.progress.seconds, 450, 11, 90);
    }
    x += 33;
  }


  // Draw white bar milliseconds
  x = 30;
  num = 1000;
  for(var i = 0; i < num; i++) {

    //The if/else is setting the color rather than position, but the principle is the same
    if (i < now.ms){
      fill(255)
    }else{
      fill(180)
    }

    rect(x, 600, 1, 60);
    x += 2;
  }
>>>>>>> 07e3d27472d8c3adbca08059e02a9e179e3f2022
}