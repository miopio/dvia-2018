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
var maxHeight = 597 // maximum height of each bar (the actual height will always be ≤ this)

function setup() {
  createCanvas(251, 600)
  colorMode(HSB, 1.0)
}

function draw() {
  background(0.0)
  noStroke()
  
  // create a clock object for current time
  var now = clock()

  //FSH boxes
  var numboxesFSH = 10
  var numcolumnsFSH = 1
  var boxwidthFSH = 54
  var boxheightFSH = 54
  var boxspacing = 6

  //create variable for four periods of menstrual cycle
  var cyclePeriod = now.day/7


  // for each box in FSH column, color in relative FSH levels during each period
  for (let j=0; j<(numboxesFSH); j++){
    if (cyclePeriod < 1) {
      if(j < 7) {fill(1)}
      else {fill(0.15,0.7,1)}
    }
    else if (1<=cyclePeriod && cyclePeriod <2){
      if (j<5) {fill(1)} 
      else {fill(0.15,0.7,1)}
    }
    else if (2<=cyclePeriod && cyclePeriod <3){
      if (j<9) {fill(1)}
      else {fill(0.15,0.7,1)}
    }
    else if (3<=cyclePeriod && cyclePeriod <4){
      if (j<9) {fill(1)}
      else {fill(0.15,0.7,1)}
    }
    else if (cyclePeriod >= 4){
      if (j<9) {fill(1)}
      else {fill(0.15,0.7,1)}
    }
    else {fill(1)}
    rect(boxspacing/2,boxspacing/2+j*(boxheightFSH+boxspacing),boxwidthFSH,boxheightFSH)
  }
  
  //LH boxes
  var numboxesLH = 10
  var numcolumnsLH= 1
  var numboxesLH = 10
  var boxwidthLH = 54
  var boxheightLH = 54
  var boxspacing = 6


  // for each box in LH column, color in relative LH levels during each period
  for (let j=0; j<(numboxesLH); j++){
    if (cyclePeriod < 1) {
      if(j < 9) {fill(1)}
      else {fill(0.1,0.7,1)}
    }
    else if (1<=cyclePeriod && cyclePeriod <2){
      if (j<0) {fill(1)} 
      else {fill(0.1,0.7,1)}
    }
    else if (2<=cyclePeriod && cyclePeriod <3){
      if (j<10) {fill(1)}
      else {fill(0.1,0.7,1)}
    }
    else if (3<=cyclePeriod && cyclePeriod <4){
      if (j<10) {fill(1)}
      else {fill(0.1,0.7,1)}
    }
    else if (cyclePeriod >= 4){
      if (j<10) {fill(1)}
      else {fill(0.1,0.7,1)}
    }
    else {fill(1)}
    rect(boxspacing/2+boxwidthFSH+boxspacing,boxspacing/2+j*(boxheightLH+boxspacing),boxwidthLH,boxheightLH)
  }

  //estrogen boxes
  var numboxesEST = 10
  var numcolumnsEST = 1
  var numboxesEST = 10
  var boxwidthEST = 54
  var boxheightEST = 54


  // for each box in EST column, color in relative EST levels during each period
  for (let j=0; j<(numboxesEST); j++){
    if (cyclePeriod < 1) {
      if(j < 8) {fill(1)}
      else {fill(0.05,0.7,1)}
    }
    else if (1<=cyclePeriod && cyclePeriod <2){
      if (j< 1) {fill(1)} 
      else {fill(0.05,0.7,1)}
    }
    else if (2<=cyclePeriod && cyclePeriod <3){
      if (j<7) {fill(1)}
      else {fill(0.05,0.7,1)}
    }
    else if (3<=cyclePeriod && cyclePeriod <4){
      if (j<6) {fill(1)}
      else {fill(0.05,0.7,1)}
    }
    else if (cyclePeriod >= 4){
      if (j<6) {fill(1)}
      else {fill(0.05,0.7,1)}
    }
    else {fill(1)}
    rect(boxspacing/2+boxwidthFSH*2+boxspacing*2,boxspacing/2+j*(boxheightEST+boxspacing),boxwidthEST,boxheightEST)
  }

  //progesterone boxes
  var numboxesPRO = 10
  var numcolumnsPRO = 1
  var numboxesPRO = 10
  var boxwidthPRO = 54
  var boxheightPRO = 54


  // for each box in PRO column, color in relative PRO levels during each period
  for (let j=0; j<(numboxesEST); j++){
    if (cyclePeriod < 1) {
      if(j < 10) {fill(1)}
      else {fill(0.95,0.7,1)}
    }
    else if (1<=cyclePeriod && cyclePeriod <2){
      if (j< 10) {fill(1)} 
      else {fill(0.95,0.7,1)}
    }
    else if (2<=cyclePeriod && cyclePeriod <3){
      if (j<5) {fill(1)}
      else {fill(0.95,0.7,1)}
    }
    else if (3<=cyclePeriod && cyclePeriod <4){
      if (j<1) {fill(1)}
      else {fill(0.95,0.7,1)}
    }
    else if (cyclePeriod >= 4){
      if (j<1) {fill(1)}
      else {fill(0.95,0.7,1)}
    }
    else {fill(1)}
    rect(boxspacing/2+boxwidthFSH*3+boxspacing*3,boxspacing/2+j*(boxheightPRO+boxspacing),boxwidthPRO,boxheightPRO)
  }

  //create month progress bar that also denotes progression of year by color brightness
  var monthHeight = now.progress.month * maxHeight
  fill(0.5, now.progress.year, 1)
  rect(boxspacing/2+ boxwidthFSH*4+boxspacing*4, y+3, barWidth, monthHeight)
>>>>>>> 07e3d27472d8c3adbca08059e02a9e179e3f2022
}