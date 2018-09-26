function setup() {
  createCanvas(720, 400);
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
  fill('purple');
  polygon(0, 0, 82, 3);
  pop();

  /*time colons*/
  push();
  fill('black');
  ellipse( 250, 180, 15, 15);
  ellipse( 250, 210, 15, 15);
  pop();

  /*minute*/
  push();
  translate(width*0.5, height*0.5);
  rotate(frameCount / m);
  fill('purple');
  polygon(0, 0, 70, 4);
  pop();

  /*second*/
  push();
  translate(width*0.8, height*0.5);
  rotate(frameCount / s);
  fill('purple');
  polygon(0, 0, 60, 7);
  pop();
}

function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
