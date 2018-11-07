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
var x = 0 // starting x position to draw
var y = 0  // starting y position to draw
var barWidth = 5 // width of each bar
var maxHeight = 597 //max height of columns

function setup() {
  createCanvas(251, 600)
  colorMode(HSB, 1.0)
}

function draw() {
  background(0.0)
  noStroke()
  
  // create a clock object for current time
  var now = clock()

  //create variable for sleep cycle count
  var cyclecount = now.hours / 1.6

  //create circadian rhythm columns
  //make day column go up between 6am - 6pm
  //make night column go down betwen 6pm - 6am

var dayHeight = 0
var nightHeight = 0
  if (now.progress.day <= .25){
    dayHeight = 0
    nightHeight = maxHeight * (now.progress.day + .25)/.5
  }
  if (now.progress.day > .25 && now.progress.day <= .75){
    dayHeight = maxHeight * (now.progress.day - .25)/.5
    nightHeight = 0
  }     
  if (now.progress.day > .75){
    dayHeight = 0
    nightHeight = maxHeight * (now.progress.day - .75)/.5
  }

  //create DAY column
  var boxwidthDay = 54
  var boxspacing = 6

    if(nightHeight > 0){fill(0)}
      else{fill(0.1,1,1)}
    
  rect(boxspacing/2, y+3, boxwidthDay, maxHeight - dayHeight)
 
  //create NIGHT column
  fill(0.55,1,1)  
  rect(boxspacing/2+boxwidthDay+boxspacing, y+3, boxwidthDay, nightHeight)

  
  //create sleep cycle boxes
  var numboxesSleep = 5
  var numcolumnsSleep = 1
  var boxwidthSleep = 114
  var boxheightSleep = 114
  var boxspacing = 6


  // for each box in Sleep column
  for (let j=0; j<(numboxesSleep); j++){
    //fill box with color
    if (j <= cyclecount-9){fill(0.75, 0.4, 1)}
    //else {fill(0.1, 1, 1)}
    //make boxes
    else{fill(1)}
    rect(boxspacing/2+boxwidthSleep+boxspacing,boxspacing/2+j*(boxheightSleep+boxspacing),boxwidthSleep,boxheightSleep)
  }

  //create day progression bar that also denotes week progression by color brightness
  var dayHeight2 = now.progress.day * maxHeight
  fill(0.5, now.progress.week , 1)
  rect(243, y+3, barWidth, dayHeight2)

>>>>>>> 07e3d27472d8c3adbca08059e02a9e179e3f2022

}