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
var color = [];

function setup() {
    createCanvas(650, 650);
    for (i = 0; i<100; i++) {
        color[i] = random(50,255);//colours for the circle and line
    }
    frameRate(1);
}

function draw() {
  var now = clock();
  var h = now.hours; //hour();
  var m = now.min; //minute();
  var s = now.sec; //second();

//changing the color of the background based on time of the day (blue when it is AM and fades to black when PM)
  var dayProgress = now.progress.day;
  var fromColor = color(0, 0, 0);
  var toColor = color(35,118,195);
  background(lerpColor(fromColor, toColor, dayProgress));

    //the decreasing circle in the background which represent seconds
    push();
    translate(width/2, height/2);

    for (i = 0; i<s;i++) {
         stroke(color[i]); //lines are random colours from above from (50,255)
         strokeWeight(0.5);
         noFill();
         ellipse(0, 0, 530-i*24, 530-i*24);
    }
    pop();

    //the lines representing the minute
    push();
    translate(width/2, height/2);
    for ( i = 0; i<m; i++) {
        rotate(radians(6));
        stroke(color[i]);
        strokeWeight(3);
        line(0, 0, 0, -300+random(-0.5,0.5));
    }
    pop();


    push();
    translate(width/2, height/2);
    var angle = 360*s/60
    rotate(radians(angle-90));//make the circle of ellipse rotate according to seconds
    for (i = 0; i<h; i++) {
        rotate(radians(15));
        noStroke();
        fill(color[i]);
        ellipse(0, -258, 25,25);// number of circles represent the current hour (  3am-3 circle, 3pm-15 circles)
    }
    pop();
}
>>>>>>> 07e3d27472d8c3adbca08059e02a9e179e3f2022
