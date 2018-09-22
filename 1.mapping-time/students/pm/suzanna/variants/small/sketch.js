var a;
var b;
var c;

function setup() {
  createCanvas(720, 400);
  stroke(255);
  a = width / 2;
}

function draw() {
  var h = hour(); /*between 0 and 23*/
  var m = minute(); /*between 0 and 29*/
  var s = second(); /*between 0 and 59*/
  var d = day();

  background('navy');
  /*line(0, a, width, a);*/
  line(a, 0, a, height);
  a = a - d;
  if (a < 0) {
    a = width;
  }

}
