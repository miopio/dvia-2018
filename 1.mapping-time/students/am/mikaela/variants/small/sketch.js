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
var now = clock();
var myArcArray = [];

var w = 700;
var h = w;
var dArc = 60;

class MyArc {
  constructor(xPos, yPos) {
    this.xPos = xPos;
    this.yPos = yPos;
  
  this.display = function(){
    noStroke(); 
    fill (255, 107, 1);
    arc(xPos, yPos, dArc, dArc, 0, now.progress.min*2*PI);
    }
  }
}

  //push();
  //var myArc = new MyArc (500, 500);
  
function setup() {
  createCanvas(w, h);
  frameRate(60);

 
}
var xPos = 0;
var yPos = 0;
for (var i = 0; i < 60; i++) {
    if (xPos == 6) {
    xPos = 0;
    yPos++;
    }
    myArcArray.push(new MyArc (dArc+xPos*(dArc+10), dArc+yPos*(dArc+10) + 20));
    xPos++;

   
    
  }
  console.log(myArcArray);

function draw() {
  now = clock();
  background(0)
  //myArc.display();
  /*
  for (var i = 0; i < myArcArray.length; i++) {
    myArcArray[i].display();
  }
  */
  for (var i = 0; i < now.min; i++) {
    myArcArray[i].display();
  }

  
  // // Bright Orange Arc
  // noStroke(); 
  // fill (255, 107, 1);
  // arc(500, 500, 50, 50, 0, now.progress.min*2*PI)
}

>>>>>>> 07e3d27472d8c3adbca08059e02a9e179e3f2022
