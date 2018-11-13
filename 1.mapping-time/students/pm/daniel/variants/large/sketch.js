
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

var x;
var num;
// did some change
// Sets the screen to be 2080 pixels wide and 720 pixels high
function setup() {
  createCanvas(2080, 720);
  noStroke();
}

function draw() {
  var now = clock() // store the current moment in a local variable
  //change background RGB color values according to progress construct
    background(100 * now.progress.hour, 0, 255 * now.progress.day);


  // Draw black bar hours
  fill(50);
  x = 30;
  num = 24;
  for(var i = 0; i < num; i++) {
    // the if/else construct draws the rectangle at different positions based on whether
    // the 'current' rectangle is before or after the clock value for the 24-hour time
    if (i > now.hours){
      rect(x, 40, 31, 150);
    }else{
      rect(x, 70, 31, 150);
    }
    x += 84;
  }


  // Draw gray bar minutes
  fill(150);
  x = 30;
  num = 60;
  for(var i = 0; i < num; i++) {
    // Omit the 'else' too by assigning a default value to the variable 'y' and then modifying
    // it only if we're drawing a bar that came earlier in the hour than the current minute
    var y = 270
    if (i < now.min){
      y += 30
    }

    rect(x, y, 21, 120);
    x += 33;
  }


  // Draw off-white bar seconds
  fill(220);
  x = 30;
  num = 60;
  for(var i = 0; i < num; i++) {
    // the 'ternary operator' assigns one of two values based on whether the first term is true or false
    // in other words it combines an assignment and an if/else into a signle line
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
    var y = (i < now.sec) ? 480 : 450

    rect(x, y, 11, 90);
    x += 33;
  }


  // Draw white moon bar.
    x = 30;
  num = 1000;
  //Fill value changes according to whether moon is less or more than half full. Width of rectangle changes by progress of moon cycle.
 if (now.moon < .5){
    fill(150)
  }else{
    fill(255)
  }
  rect(x, 600, 2000*now.moon, 60)
}

