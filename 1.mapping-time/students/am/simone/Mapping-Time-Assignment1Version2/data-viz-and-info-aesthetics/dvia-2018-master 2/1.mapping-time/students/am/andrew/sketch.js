var canvasHeight = 900 // height of canvas
var canvasWidth = 1600 // width of canvas

var outerSpacing = 200 // the border around the canvas
var spacing = 20 // the vertical space to skip between bars
var coinSpacing = 3 // space between hour/month coins

var x = outerSpacing // starting x position to draw
var y = spacing  // starting y position to draw

var barHeight = (canvasHeight-(spacing*2)) // height of each bar
var maxWidth = 120 // maximum width of each bar (the actual width will always be ≤ this)

// var coinSize = barHeight

var backgroundColor = "White"

var discrete = false // flag whether to have the bars 'tick' from one value to the next or move smoothly,
                    // try setting it to false and see what happens...

//this gets called only once in the very beginning
function setup() {
	createCanvas(canvasWidth, canvasHeight)
}

//this gets called every frame (about 60 frames per second)
function draw() {
  background(backgroundColor)
  noStroke()

  // measure the current time & calculate the width in pixels of each bar
  var now = clock()
  // if (discrete){
  //   // the map() function lets us *normalize* a value from a starting range then *project* it into another range
  //   var hourWidth = map(now.hour, 1,12, 0,maxWidth) // from hours (1-12) to pixels (0–maxWidth)
  //   var minsWidth = map(now.min,  0,60, 0,maxWidth)  // from mins (0–60) to pixels (0–maxWidth)
  //   var secsWidth = map(now.sec,  0,60, 0,maxWidth)  // from secs (0–60) to pixels (0–maxWidth)
  // }else{
  //   // alternatively, we can use the clock's 'progress' percentages
  //   hourWidth = maxWidth * now.progress.day
  //   minsWidth = maxWidth * now.progress.hour
  //   secsWidth = maxWidth * now.progress.min
  // }

  //draw 4 background bars to indicate the max width
  fill(30, 0, 0)
  rect(x, y, maxWidth, barHeight, 5,5,5,5)
  rect(x + maxWidth+spacing, y, maxWidth, barHeight, 5,5,5,5)
  rect(canvasWidth - (maxWidth+outerSpacing), y, maxWidth, barHeight, 5,5,5,5)
  rect(canvasWidth - (outerSpacing+2*(maxWidth)+spacing), y, maxWidth,  barHeight, 5,5,5,5)

  // draw the hours bar at the top...
  // fill(80, 0, 0)
  // rect(x, y, hourWidth, barHeight)

  // ...the minutes bar in the middle...
  // fill(150, 0, 0)
  // rect(x, y + barHeight+spacing,  minsWidth, barHeight)

  // ...and the seconds bar at the bottom
  // fill(255, 0, 0)
  // rect(x, y + 2*(barHeight+spacing), secsWidth, barHeight)


  existingHour = now.hour 
  if (existingHour!=now.hour){
    // drop in coin
  }

  existingMinute = now.min 

  existingMonth = now.month 
  existingDay = now.day 


}