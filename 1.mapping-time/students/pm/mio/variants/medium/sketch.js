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

  //create DAY column
  var boxwidthDay = 54
  var boxspacing = 6

  var dayHeight = now.progress.halfday * maxHeight 
    if(now.hours <= 11){
      fill(0.1, 1, 1)}
    else {fill(0)}
  rect(boxspacing/2, y+3, boxwidthDay, maxHeight - dayHeight)
 
  //NIGHT column
  var nightHeight = now.progress.day * maxHeight 
  fill(0.55, 1, now.progress.day)
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
    if (j <= cyclecount-8){fill(0.75, 0.4, 1)}
    //else {fill(0.1, 1, 1)}
    //make boxes
    else{fill(1)}
    rect(boxspacing/2+boxwidthSleep+boxspacing,boxspacing/2+j*(boxheightSleep+boxspacing),boxwidthSleep,boxheightSleep)
  }

  //create day progression bar that also denotes week progression by color brightness
  var dayHeight2 = now.progress.day * maxHeight
  fill(0.5, now.progress.week , 1)
  rect(243, y+3, barWidth, dayHeight2)


}
