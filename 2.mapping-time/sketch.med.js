var x = 400 // starting x position to draw
var y = 300  // starting y position to draw
var maxWidth = 500 // maximum width of each bar (the actual width will always be ≤ this)
var startArc = 0
var discrete = false // flag whether to have the bars 'tick' from one value to the next or move smoothly,
                    // try setting it to false and see what happens...

//this gets called only once in the very beginning
function setup() {
  createCanvas(800, 600)
}

//this gets called every frame (about 60 frames per second)
function draw() {
  background(224)
  noStroke()

  // measure the current time & calculate the width in pixels of each bar
  var now = clock()
  if (discrete){
    // the map() function lets us *normalize* a value from a starting range then *project* it into another range
    var hourWidth = map(now.hour, 1,12, 0,maxWidth) // from hours (1-12) to pixels (0–maxWidth)
    var minsWidth = map(now.min,  0,60, 0,maxWidth)  // from mins (0–60) to pixels (0–maxWidth)
    var secsWidth = map(now.sec,  0,60, 0,maxWidth)  // from secs (0–60) to pixels (0–maxWidth)
  }else{
    // alternatively, we can use the clock's 'progress' percentages
    hourWidth = now.progress.day
    minsWidth = now.progress.hour
    secsWidth = now.progress.min
  }

  //draw 3 background bars to indicate the max width
  //fill(30, 0, 0)
  //rect(x, y,                         maxWidth,  barHeight)
  //rect(x, y +    barHeight+spacing,  maxWidth,  barHeight)
  //rect(x, y + 2*(barHeight+spacing), maxWidth,  barHeight)

  // draw the hours arc at the top...
  fill(92, 59, 97)
  arc(x, y, maxWidth, maxWidth, startArc, PI/6)

  // ...the minutes bar in the middle...
  fill(141, 138, 88)
  arc(x, y, maxWidth*2/3, maxWidth*2/3, startArc, minsWidth*2*PI)

  // ...and the seconds bar at the bottom
  fill(9, 106, 125)
  arc(x, y, maxWidth*1/3, maxWidth*1/3, startArc, secsWidth*2*PI)

}



/* 
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
*/