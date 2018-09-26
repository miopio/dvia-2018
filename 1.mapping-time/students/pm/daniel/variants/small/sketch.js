var x;
var num;

// Sets the screen to be 2080 pixels wide and 720 pixels high
function setup() {
  createCanvas(2080, 720);
  noStroke();
}

function draw() {
  background(180); // this will clear the screen every time we redraw

  var now = clock() // store the current moment in a local variable

  // Draw black bar hours
  fill(75);
  x = 30;
  num = 24;
  for(var i = 0; i < num; i++) {
    // the if/else construct fills the rectangle at different positions based on whether
    // the 'current' rectangle is before or after the clock value for the 24-hour time
    if (i > now.hours){
      rect(x, 40, 31, 150);
    }else{
      rect(x * now.progress.hours, 40, 31, 150);
    }
    x += 84
  }


  // Draw gray bar minutes
  fill(150);
  x = 30;
  num = 60;
  for(var i = 0; i < num; i++) {
    // The if/else construct fills the rectangle at different positions based on whether
    // the 'current' rectangle is before or after the clock value for the 24-hour time
    if (i > now.min){
      rect(x, 240, 21, 120);
    }else{
      rect(x * now.progress.minutes, 240, 21, 120);
    }
    x += 33;
  }


  // Draw off-white bar seconds
  fill(225);
  x = 30;
  num = 60;
  for(var i = 0; i < num; i++) {
    //The if/else construct fills the rectangle at different positions based on whether
    // the 'current' rectangle is before or after the clock value for the 24-hour time
    if (i > now.sec){
      rect(x, 450, 11, 90);
    }else{
      rect(x * now.progress.seconds, 450, 11, 90);
    }
    x += 33;
  }


  // Draw white bar milliseconds
  x = 30;
  num = 1000;
  for(var i = 0; i < num; i++) {

    //The if/else is setting the color rather than position, but the principle is the same
    if (i < now.ms){
      fill(255)
    }else{
      fill(180)
    }

    rect(x, 600, 1, 60);
    x += 2;
  }
}