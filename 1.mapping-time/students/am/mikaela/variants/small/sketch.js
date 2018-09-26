var now = clock();
var myArcArray = [];

var w = 700;
var h = w;
var dArc = 60;

class MyArc {
  constructor(xPos, yPos) {
    this.xPos = xPos;
    this.yPos = yPos;
  
  this.display = function(){
    noStroke(); 
    fill (255, 107, 1);
    arc(xPos, yPos, dArc, dArc, 0, now.progress.min*2*PI);
    }
  }
}

  //push();
  //var myArc = new MyArc (500, 500);
  
function setup() {
  createCanvas(w, h);
  frameRate(60);

 
}
var xPos = 0;
var yPos = 0;
for (var i = 0; i < 60; i++) {
    if (xPos == 6) {
    xPos = 0;
    yPos++;
    }
    myArcArray.push(new MyArc (dArc+xPos*(dArc+10), dArc+yPos*(dArc+10) + 20));
    xPos++;

   
    
  }
  console.log(myArcArray);

function draw() {
  now = clock();
  background(0)
  //myArc.display();
  /*
  for (var i = 0; i < myArcArray.length; i++) {
    myArcArray[i].display();
  }
  */
  for (var i = 0; i < now.min; i++) {
    myArcArray[i].display();
  }

  
  // // Bright Orange Arc
  // noStroke(); 
  // fill (255, 107, 1);
  // arc(500, 500, 50, 50, 0, now.progress.min*2*PI)
}

