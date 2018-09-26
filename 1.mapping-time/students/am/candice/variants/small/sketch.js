function setup() {
    createCanvas(650,650);
    angleMode(DEGREES);
}

function draw(){
  var now = clock();
    var h = now.hours; //hour();
    var m = now.min; //minute();
    var s = now.sec; //second();
  background(250,128,114);

  //rotate entire canvas -90 degrees
  push()
  translate(width/2,height/2);
  rotate(-90);

  //arc
  strokeWeight(2.5);
  stroke(178,207,240);

  //First arc is the seconds arc
  var sAngle = map(s, 0, 60, 0, 360);
  fill(0,102,204,150);
  arc(0, 0, 350, 350, 0, sAngle); // the x and y points are 0,0, the circle is 350 width and height, it begins at 0 and goes until

  //Middle arc is the minutes arc
  var mAngle = map(m, 0, 60, 0, 360); // map(value to be converted, lower bound of range, upper bound of the range, lower bound of target range, upper bound of target range)
  fill(68,171,210,150);
  arc(0, 0, 250, 250, 0, mAngle)// arc(x,y,w,h,)

  //inner arc is for hours
  //Try to form an opening to show the hours

  var hAngle = map(h % 12, 0, 12, 0, 360); //make sure 360 fits into 12 hours instead of 24 hours
  fill(198,226,255,150);
  arc(0, 0, 150, 150, 0, hAngle)

  pop();

}


// var color = [];
//
// function setup() {
//     createCanvas(650, 650);
//     for (i = 0; i<100; i++) {
//         color[i] = random(50,255);//colours for the circle and line
//     }
//     frameRate(1);
// }
//
// function draw() {
//   var now = clock();
//   var h = now.hours; //hour();
//   var m = now.min; //minute();
//   var s = now.sec; //second();
// background(0);
//
//
//     //the decreasing circle in the background which represent seconds
//     push();
//     translate(width/2, height/2);
//
//     for (i = 0; i<s;i++) {
//          stroke(color[i]); //lines are random colours from above from (50,255)
//          strokeWeight(0.5);
//          noFill();
//          ellipse(0, 0, 530-i*40, 530-i*40);
//     }
//     pop();
//
//     //the lines representing the minute
//     push();
//     translate(width/2, height/2);
//     for ( i = 0; i<m; i++) {
//         rotate(radians(6));
//         stroke(color[i]);
//         strokeWeight(3);
//         line(0, 0, 0, -300+random(-0.5,0.5));
//     }
//     pop();
//
//
//     push();
//     translate(width/2, height/2);
//     var angle = 360*s/60
//     rotate(radians(angle-90));//make the circle of ellipse rotate according to seconds
//     for (i = 0; i<h; i++) {
//         rotate(radians(15));
//         noStroke();
//         fill(color[i]);
//         ellipse(0, -258, 25,25);// number of circles represent the current hour (  3am-3 circle, 3pm-15 circles)
//     }
//     pop();
// }
