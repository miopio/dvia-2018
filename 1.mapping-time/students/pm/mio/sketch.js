<<<<<<< HEAD
function setup() {
  // set the width & height of the sketch
  createCanvas(1280, 800)

  // draw will be called this many times per second
  frameRate(60)

  // specify colors in hue/saturation/brightness mode & use 0–1 values rather than 0–255
=======
var x = 0 // starting x position to draw
var y = 0  // starting y position to draw
var barWidth = 5 // width of each bar
var maxHeight = 597 // max height of columns

function setup() {
  createCanvas(645, 600)
>>>>>>> 07e3d27472d8c3adbca08059e02a9e179e3f2022
  colorMode(HSB, 1.0)
}

function draw() {
  background(0.0)
  noStroke()
  
  // create a clock object for current time
  var now = clock()

<<<<<<< HEAD
  // use the current 'doneness' of the current hour to choose the hue for the background color
  // (note that setting the background also clears the canvas from our previous round of drawing)
  background(now.progress.day, 1, .3)

  // set up typography & drawing-color
  let pointSize = 42
  textFont("Nixie One")
  textSize(pointSize)
  textAlign(CENTER)
  fill('white')

  // print the time string to the canvas
  //text(now.text.time, width/2, height/2 + pointSize/3)
}
=======
//SMALL VARIANT STARTS

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


//MEDIUM VARIANT STARTS

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
    
  rect(143+boxspacing/2, y+3, boxwidthDay, maxHeight - dayHeight)
 
  //create NIGHT column
  fill(0.55,1,1)  
  rect(143+boxspacing/2+boxwidthDay+boxspacing, y+3, boxwidthDay, nightHeight)


  
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
    rect(143+ boxspacing/2+boxwidthSleep+boxspacing,boxspacing/2+j*(boxheightSleep+boxspacing),boxwidthSleep,boxheightSleep)
  }

  //create day progression bar that also denotes week progression by color brightness
  var dayHeight2 = now.progress.day * maxHeight
  fill(0.5, now.progress.week , 1)
  rect(143+ 243, y+3, barWidth, dayHeight2)

//LARGE VARIANT STARTS

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
    rect(394+boxspacing/2,boxspacing/2+j*(boxheightFSH+boxspacing),boxwidthFSH,boxheightFSH)
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
    rect(394+boxspacing/2+boxwidthFSH+boxspacing,boxspacing/2+j*(boxheightLH+boxspacing),boxwidthLH,boxheightLH)
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
    rect(394+boxspacing/2+boxwidthFSH*2+boxspacing*2,boxspacing/2+j*(boxheightEST+boxspacing),boxwidthEST,boxheightEST)
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
    rect(394+boxspacing/2+boxwidthFSH*3+boxspacing*3,boxspacing/2+j*(boxheightPRO+boxspacing),boxwidthPRO,boxheightPRO)
  }

  //create month progress bar that also denotes progression of year by color brightness
  var monthHeight = now.progress.month * maxHeight
  fill(0.5, now.progress.year, 1)
  rect(394+boxspacing/2+ boxwidthFSH*4+boxspacing*4, y+3, barWidth, monthHeight)

}


>>>>>>> 07e3d27472d8c3adbca08059e02a9e179e3f2022
