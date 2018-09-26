function setup() {
  createCanvas(1020, 400);
}

function draw() {
  /*var d = day()*/
  var h = hour(); /*between 0 and 23*/
  var m = minute(); /*between 0 and 29*/
  var s = second(); /*between 0 and 59*/

  /*text('Current day: \n' + d, 5, 50);*/

  background(102);

  /*hour*/
  push();
  translate(width*0.2, height*0.5);
  rotate(frameCount / h);
  line(0, 10, 30, 45);
  pop();

  /*minute*/
  push();
  translate(width*0.5, height*0.5);
  rotate(frameCount / m);
  line(70, 10, 100, 45);
  pop();

  /*second*/
  push();
  translate(width*0.8, height*0.5);
  rotate(frameCount / s);
  line(120, 10, 150, 45);
  pop();
}

