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
var x = 0 // starting x position to draw
var y = 0  // starting y position to draw
var barWidth = 5 // width of each bar
var maxHeight = 597 // max height of columns

function setup() {
  createCanvas(143, 600)
  colorMode(HSB, 1.0)
}

function draw() {
  background(0.0)
  noStroke()
  
  // create a clock object for current time
  var now = clock()

  //create heart beat count: 0.8 seconds in 1 heartbeat = 75 in min
  //create respiratory count: 6 seconds in one breath = 10 in minute
  var heartcount = now.sec / 0.8
  var respcount = now.sec / 6.0

  // make boxes for heart rate
  var numboxes = 75
  var numcolumns = 3
  var boxwidth = 18
  var boxheight = 18
  var boxspacing = 6

  // for each heart rate column
  for (let i = 0; i<numcolumns; i++){
    // for each box
    for (let j=0; j<(numboxes/numcolumns); j++){
      // fill box with color
      if (  j + i*(numboxes/numcolumns) <= heartcount){fill(0.98, 0.6, 1)}
      else{fill(1)}
      // make boxes
      rect(boxspacing/2+i*(boxwidth+boxspacing),boxspacing/2+j*(boxheight+boxspacing),boxwidth,boxheight)
    }
  }

  //make boxes for respiratory rate
  var numboxesResp = 10
  var numcolumnsResp = 1
  var numcolumnsResp = 10
  var boxwidthResp = 54
  var boxheightResp = 54

  // for each box in respiratory rate column
  for (let j=0; j<(numboxesResp); j++){
    //fill box with color
    if (j <= respcount){fill(0.25, 0.9, 1)}
    else {fill(1)}
    //make boxes
    rect(75,boxspacing/2+j*(boxheightResp+boxspacing),boxwidthResp,boxheightResp)
  }

  //create minute progression bar that also denotes hour progression by color brightness
  var secsHeight = maxHeight * now.progress.min
  fill(0.5, 1, now.progress.hour)
  rect(135, y+3, barWidth, secsHeight)

}
>>>>>>> 07e3d27472d8c3adbca08059e02a9e179e3f2022
