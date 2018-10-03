var x;
var num;
// did some change
// Sets the screen to be 2080 pixels wide and 720 pixels high
function setup() {
  createCanvas(2080, 720);
  noStroke();
}

function draw() {
  var now = clock() // store the current moment in a local variable
  //change background RGB color values according to progress construct
    background(100 * now.progress.hour, 0, 255 * now.progress.day);


  // Draw black bar hours
  fill(50);
  x = 30;
  num = 24;
  for(var i = 0; i < num; i++) {
    // the if/else construct draws the rectangle at different positions based on whether
    // the 'current' rectangle is before or after the clock value for the 24-hour time
    if (i > now.hours){
      rect(x, 40, 31, 250);
    }else{
      rect(x, 70, 31, 250);
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

    rect(x, y, 21, 200);
    x += 33;
  }


  // Draw off-white bar seconds
  fill(220, 127); 
  x = 30;
  num = 60;
  for(var i = 0; i < num; i++) {
    // the 'ternary operator' assigns one of two values based on whether the first term is true or false
    // in other words it combines an assignment and an if/else into a signle line
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
    var y = (i < now.sec) ? 480 : 450

    rect(x, y, 11, 150);
    x += 33;
  }


  // Draw white moon bar.
    x = 30;
  num = 1000;
  //Fill value changes according to whether moon is less or more than half full. Width of rectangle changes by progress of moon cycle.
 if (now.moon < .5){
    fill(150, 127)
  }else{
    fill(255, 127)
  }
  rect(x, 600, 2000*now.moon, 100)
}
