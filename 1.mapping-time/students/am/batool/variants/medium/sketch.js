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
// Clock with Hour, Minutes and Seconds
var x = 300
var y = 300
var minR = 45;
var maxR = 375;
var spacing = 30;

function setup() {
  createCanvas(600, 600);
  background(35);
  ellipseMode(CENTER);
  noLoop();
  setTimeout(resetSketch,1000);

}

function resetSketch(){
  background(35);
  draw()
  setTimeout(resetSketch,1000);
}

function draw() {
  var hr = hour();
  var mn = minute();
  var sc = second();

  // fill(70);
  // noStroke();
  // text(hr + ':' + mn + ':' + sc, 50, 50);

  var r = [];
  for (let i =0; i < 12; i++) {
    if (i == 0){
      r.push(maxR);
    } else {
      r.push(r[i-1] - spacing);
    }
  }

// ellipse size
  var opacity1;
  var minuteCircle = map(mn, 0, 59, 1, spacing);
  var secOpacity = map(sc, 0, 59, 0, 225);
  var curHour = hr % 12;

  if (hr <= 12) {
    fill (235, 110, 32, secOpacity);
  } else {
    fill (0,165,174, secOpacity);
  }

// ellipse opacity
  noStroke();
    if (curHour == 0){
      curHour = 12
    }
  var minuteR = r[curHour-1] - minuteCircle;
  ellipse(x, y, minuteR, minuteR);


// outer circles opacity
  var opacity;
  noFill();
  strokeWeight(0.185);
  for (let i =0; i < 12; i++) {
    if (i < curHour){
      opacity = int(map(curHour-i, 0, 11, 255, 10));
      // console.log(opacity);
      stroke(255,255,255, opacity);
      ellipse(x, y, r[i], r[i]);
    }
  }
}
>>>>>>> 07e3d27472d8c3adbca08059e02a9e179e3f2022
