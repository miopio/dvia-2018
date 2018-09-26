function setup() {
  createCanvas(1400, 700);
  
}
  
function draw() {
  background(0);

  stroke(255);
  strokeWeight(0.2);
  noFill();
  ellipse(700, 350, 300, 300);
  ellipse(700, 350, 400, 400);
  ellipse(700, 350, 500, 500); 
   

  var x = 700;
      y = 350;
      
      stroke(255, 178, 56);
      strokeWeight(120);
      point(x,y);

      var angleSecond = map(second(), 0, 60, 0, TWO_PI) -  HALF_PI;
      var rs = 150;


      var dx = rs * cos(angleSecond);
      var dy = rs * sin(angleSecond);

      stroke(132, 235, 244);
      strokeWeight(30);
      point(x+dx, y+dy);

      var angleMinute = map(minute(), 0, 60, 0, TWO_PI) - HALF_PI;
      var rm = 200;

      var d2x = rm * cos(angleMinute);
      var d2y = rm * sin(angleMinute);

      stroke(79, 175, 104);
      strokeWeight(20);
      point(x+d2x, y+d2y);


      var angleHour = map(hour(), 0, 24, 0, TWO_PI) - HALF_PI;
      var rh = 250;

      var d3x = rh * cos(angleHour);
      var d3y = rh * sin(angleHour);

      stroke(249, 242, 182);
      strokeWeight(40);
      point(x+d3x, y+d3y);

     

 
}


