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
//Sets up the canvas
function setup() {
  createCanvas(890,890);
  background (0);
  stroke (0,0,0);
  strokeWeight (3);
}

// Code that drives the clock visualization
function draw() {

// Creates the clock variables for calculations
    // var mo = month(); //Turned off for medium and small projects
    // var dd = day();   //Turned off for medium and small projects
    var hh = hour();
    var mm = minute();
    var ss = second();

//set up the parameters to color the grid, for hh, mm, and ss respectively.  These colors
//are non-stationary and change as the get closer to the full DD HH and MM respectively
    var hhColor = color(120+hh*5,0,0,100);
    var mmColor = color(0+mm*2,240-mm*4,0,100);
    var ssColor = color(0,120+ss*2,240-ss*4,100);

    // var hhColor = color(255,0,0,100); //turned off for large and medium projects
    // var mmColor = color(0,255,0,100); //turned off for large and medium projects
    // var ssColor = color(0,0,250,100); //turned off for large and medium projects

//Inserts a heading at the top of the clocks
    fill(255);
    textSize (24);
    text("Exercise #1: Adrian Crockett", 10, 30);

//Creates the borders for the MO and DD coordinates, this is a X, Y vs. X=Y system used below

    // fill(255,255,0,100);    //Turned off for medium and small projects
    // ellipse(50,50,25,25);   //Turned off for medium and small projects
    // ellipse(832,50,25,25);  //Turned off for medium and small projects
    // ellipse(50,832,25,25);  //Turned off for medium and small projects
    // ellipse(832,832,25,25); //Turned off for medium and small projects

// Moves the 0,0 cordinate based on the combination of
    //translate(mo*5,dd*2);  //Turned off for medium and small projects

//HH Rectagles: This code creates the two rectangles to represent the hour
    var x1 = 50+hh*30;
    var y1 = 50;
    var w1 = 30;
    var h1 = 720;
    fill (hhColor); rect (x1,y1,w1,h1);

    var x2 = 50;
    var y2 = 50+hh*30;
    var w2 = 720;
    var h2 = 30;
    fill (hhColor); rect (x2,y2,w2,h2);

//MM Rectagles: This code creates the two rectangles to represent the minute
    var x3 = 50+mm*12;
    var y3 = 50;
    var w3 = 12;
    var h3 = 720;
    fill (mmColor); rect (x3,y3,w3,h3);

    var x4 = 50;
    var y4 = 50+mm*12;
    var w4 = 720;
    var h4 = 12;
    fill (mmColor); rect (x4,y4,w4,h4);

//SS Rectangles: This code creates the two rectangles to represent the second
    var x5 = 50+ss*12;
    var y5 = 50;
    var w5 = 12;
    var h5 = 720;
    fill (ssColor); rect (x5,y5,w5,h5)

    var x6 = 50;
    var y6 = 50+ss*12;
    var w6 = 720;
    var h6 = 12;
    fill (ssColor); rect (x6,y6,w6,h6);
}
>>>>>>> 07e3d27472d8c3adbca08059e02a9e179e3f2022
