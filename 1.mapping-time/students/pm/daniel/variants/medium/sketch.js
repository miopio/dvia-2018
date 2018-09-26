var x;
var num;

// Sets the screen to be 2080 pixels wide and 720 pixels high
function setup() {
  createCanvas(2080, 720);
  noStroke();
}

function draw() {
  //background(180); // this will clear the screen every time we redraw

  var now = clock() // store the current moment in a local variable
  // fill the background with black for pm and white for am
if (now.pm){
    background(0)
  }else{
    background(255)
  }
  // Draw black bar hours
  fill(75);
  x = 30;
  num = 24;
  for(var i = 0; i < num; i++) {
    // the if/else construct draws the rectangle at different positions based on whether
    // the 'current' rectangle is before or after the clock value for the 24-hour time
    if (i > now.hours){
      rect(x, 40, 31, 150);
    }else{
      rect(x, 70, 31, 150);
    }
    x += 84;
  }


  // Draw gray bar minutes
  fill(150);
  x = 30;
  num = 60;
  for(var i = 0; i < num; i++) {
    // Omit the 'else' too by assigning a default value to the variable 'y' and then modifying
    // it only if we're drawing a bar that came earlier in the hour than the current minute
    var y = 270
    if (i < now.min){
      y += 30
    }

    rect(x, y, 21, 120);
    x += 33;
  }


  // Draw off-white bar seconds
  fill(225);
  x = 30;
  num = 60;
  for(var i = 0; i < num; i++) {
    // The 'ternary operator' assigns one of two values based on whether the first term is true or false
    // in other words it combines an assignment and an if/else into a signle line
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
    var y = (i < now.sec) ? 480 : 450

    rect(x, y, 11, 90);
    x += 33;
  }


  // Draw white bar milliseconds
  x = 30;
  num = 1000;
  for(var i = 0; i < num; i++) {

    // The if/else is setting the color rather than position
    if (i < now.ms){
      fill(255)
    }else{
      fill(180)
    }

    rect(x, 600, 1, 60);
    x += 2;
  }
}