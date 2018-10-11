function setup() {
<<<<<<< HEAD
  // set the width & height of the sketch
  createCanvas(400, 130)

  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you
  print('starting time:', clock())

}

function draw() {
  // check the clock for the current time and unpack some of its fields to generate a time-string
  var now = clock()

  // set the background to 'white' – you can also specify colors use integers, hex-color strings and more.
  // note that setting the background also clears the canvas from our previous round of drawing
  background('white')

  // set up typography & drawing-color
  textFont("Anonymous Pro") // ← check index.html to see how it was loaded from google-fonts
  textSize(42) // make it big
  fill(100, 50, 50)

  // draw the time string to the canvas
  text(now.text.date, 30, 50)
  text(now.text.time, 30, 100)

}
=======
  createCanvas(1400, 700);
  
}
  
function draw() {
  background(0);

  stroke(255);
  strokeWeight(0.2);
  noFill();
  ellipse(700, 350, 200, 200);
  ellipse(700, 350, 300, 300);
  ellipse(700, 350, 400, 400); 
  ellipse(700, 350, 560, 560); 

  var x = 700;
      y = 350;
      
      stroke(255, 178, 56);
      strokeWeight(90);
      point(x,y);
      
      var now = clock;
      var angleSecond = map(now.second, 0, 60, 0, TWO_PI) -  HALF_PI;
      var rs = 100;


      var dx = rs * cos(angleSecond);
      var dy = rs * sin(angleSecond);

      stroke(132, 235, 244);
      strokeWeight(30);
      point(x+dx, y+dy);

      var angleMinute = map(now.minute, 0, 60, 0, TWO_PI) - HALF_PI;
      var rm = 150;

      var d2x = rm * cos(angleMinute);
      var d2y = rm * sin(angleMinute);

      stroke(79, 175, 104);
      strokeWeight(20);
      point(x+d2x, y+d2y);


      var angleHour = map(hour(), 0, 24, 0, TWO_PI) - HALF_PI;
      var rh = 200;

      var d3x = rh * cos(angleHour);
      var d3y = rh * sin(angleHour);

      stroke(249, 242, 182);
      strokeWeight(40);
      point(x+d3x, y+d3y);

      var angleDay = map(now.hour, 0, 31, 0, TWO_PI) - HALF_PI;
      var rd = 280;

      var d4x = rd * cos(angleDay);
      var d4y = rd * sin(angleDay);

      stroke(226, 77, 77);
      strokeWeight(13);
      point(x+d4x, y+d4y);

 
}


>>>>>>> 07e3d27472d8c3adbca08059e02a9e179e3f2022
