var canvasHeight = 900 // height of canvas
var canvasWidth = 1600 // width of canvas

var outerSpacing = 670 // the border around the canvas
var spacing = 20 // the vertical space to skip between bars
var coinSpacing = 3 // space between hour/month coins

var x = outerSpacing // starting x position to draw
var y = spacing  // starting y position to draw

var barHeight = (canvasHeight-(spacing*2)) // height of each bar
var maxWidth = 120 // maximum width of each bar (the actual width will always be ≤ this)

var coinSizeMonth = barHeight/12
var coinSizeDay = barHeight/31

var backgroundColor = "White"

var existingMonth
var existingDay

function setup() {
  var now = clock()

  createCanvas(canvasWidth, canvasHeight)
}

function draw() {
  background(backgroundColor)

  var now = clock()

  existingMonth = now.month 
  existingDay = now.day
  console.log(existingMonth)
  console.log(existingDay)

  fill(30, 0, 0)
  rect(canvasWidth - (maxWidth+outerSpacing), y, maxWidth, barHeight, 5,5,5,5)
  rect(canvasWidth - (outerSpacing+2*(maxWidth)+spacing), y, maxWidth,  barHeight, 5,5,5,5)

  var coinHeightMonth = y+coinSizeMonth/2
  for (var i = 0; i < existingMonth; i++){
    console.log(i)
    if (existingMonth < 3 && existingMonth === 12) {
      fill("#313F7F")
    }
    else if (existingMonth >= 3 && existingMonth < 6) {
      fill("#2F6D6B")
    }
    else if (existingMonth >= 6 && existingMonth < 9) {
      fill("#A08863")
    }
    else {
      fill("#A3565A")
    }
    smooth()
    ellipse(canvasWidth - ((maxWidth*1.5)+outerSpacing+spacing),coinHeightMonth,maxWidth,coinSizeMonth)
    coinHeightMonth+=coinSizeMonth
  }
  
  var coinHeightDay = y+coinSizeDay/2
  for (var i = 0; i < existingDay; i++){
    console.log(i)
    fill('rgb(255,250,250)')
    smooth()
    ellipse(canvasWidth - ((maxWidth*0.5)+outerSpacing),coinHeightDay,maxWidth,coinSizeDay)
    coinHeightDay+=coinSizeDay
  }

}