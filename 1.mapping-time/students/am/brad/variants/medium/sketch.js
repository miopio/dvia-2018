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
function draw() {
  // get the current time
  var now = clock()

  // set the width & height of the sketch
  createCanvas(800, 600)
  background(0);


  // use the `sec`, `min`, `hours`, and `day` numbers (which are all in the range 0-59, 0-23, or 1-31) to draw
  // boxes. the width argument to rect() is always: <some number of pixels> multiplied by <a time component>

  //seconds
  fill(70, 53, 29);
  noStroke();
  rect(0, 0, 5 * now.sec, 600);

  //minutes
  fill(100, 111, 75);
  noStroke();
  rect(300, 0, 5 * now.min, 600);

  //hours
  fill(131, 157, 154);
  noStroke();
  rect(600, 0, 4 * now.hours, 600);

  //days
  fill(123, 178, 217);
  noStroke();
  rect(700, 0, 4 * now.day, 600);
  


  // use the `progress` values (which are always between 0.0 and 1.0) and draw an arc by subdividing the whole 
  // circle (aka 2*π) by the current fraction of the given time period

  //week
  fill(0,0,0,0);
  stroke(91, 210, 191);
  strokeWeight(4);
  arc(400, 300, 250, 250, 0, 2*PI*now.progress.week);

  //month
  fill(0,0,0,0);
  stroke(91, 210, 191);
  strokeWeight(3);
  arc(400, 300, 300, 300, 0, 2*PI*now.progress.month);

  // year or seasons
  fill(0,0,0,0);
  stroke(91, 210, 191);
  strokeWeight(2);
  arc(400, 300, 550, 550, 0, 2*PI*now.progress.season);

/*
// Draw seconds bars
  fill('red');
  y = 0;

  for(var i=0; i<60; i++) {
    rect(y, 0, 0, 13);
    y += 5; // shorthand for: "y = y + 20" 
  }

  // Draw ninutes bars
  fill('red');
  y = 300;

  for(var i=0; i<60; i++) {
    rect(y, 0, 0, 20);
    y += 5; // shorthand for: "y = y + 20" 
  }

  // Draw hours bars
  fill('red');
  y = 600;

  for(var i=0; i<24; i++) {
    rect(y, 0, 0, 28);
    y += 4.15; // shorthand for: "y = y + 20" 
  }

  // Draw days bars
  fill('red');
  y = 700;

  for(var i=0; i<30; i++) {
    rect(y, 0, 0, 36);
    y += 3.5; // shorthand for: "y = y + 20" 
  }
*/
>>>>>>> 07e3d27472d8c3adbca08059e02a9e179e3f2022
}