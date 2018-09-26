var canvasHeight = 900 // height of canvas
var canvasWidth = 1600 // width of canvas

var outerSpacing = 200 // the border around the canvas
var spacing = 20 // the vertical space to skip between bars
var coinSpacing = 3 // space between hour/month coins

var x = outerSpacing // starting x position to draw
var y = spacing  // starting y position to draw

var barHeight = (canvasHeight-(spacing*2)) // height of each bar
var maxWidth = 120 // maximum width of each bar (the actual width will always be ≤ this)

var coinSizeHour = barHeight/12
var coinSizeMin = barHeight/60
var coinSizeMonth = barHeight/12
var coinSizeDay = barHeight/31

var backgroundColor = "White"

var existingHour
var existingMin
var existingMonth
var existingDay

function setup() {
  var now = clock()

  createCanvas(canvasWidth, canvasHeight)
}

function draw() {
  if (existingMonth < 3 && existingMonth === 12) {
    background("#4357AD")
  }
  else if (existingMonth >= 3 && existingMonth < 6) {
    background("#48A9A6")
  }
  else if (existingMonth >= 6 && existingMonth < 9) {
    background("#D4B483")
  }
  else {
    background("#C1666B")
  }

  var now = clock()

  existingHour = now.hour
  existingMin = now.min
  existingMonth = now.month 
  existingDay = now.day

  console.log(existingHour)
  console.log(existingMin)
  console.log(existingMonth)
  console.log(existingDay)

  fill(30, 0, 0)
  rect(x, y, maxWidth, barHeight, 5,5,5,5)
  rect(x + maxWidth+spacing, y, maxWidth, barHeight, 5,5,5,5)
  rect(canvasWidth - (maxWidth+outerSpacing), y, maxWidth, barHeight, 5,5,5,5)
  rect(canvasWidth - (outerSpacing+2*(maxWidth)+spacing), y, maxWidth,  barHeight, 5,5,5,5)

  var coinHeightHour = y+coinSizeHour/2
  for (var i = 0; i < existingHour; i++){
    console.log(i)
    fill("white")
    smooth()
    ellipse(x+maxWidth/2,coinHeightHour,maxWidth,coinSizeHour)
    coinHeightHour+=coinSizeHour
  }
  
  var coinHeightMin = y+coinSizeMin/2
  for (var i = 0; i < existingMin; i++){
    console.log(i)
    fill("white")
    smooth()
    ellipse(x+(maxWidth*1.5)+spacing,coinHeightMin,maxWidth,coinSizeMin)
    coinHeightMin+=coinSizeMin
  }

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