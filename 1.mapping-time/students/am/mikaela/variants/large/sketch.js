function setup() {
  // set the width & height of the sketch
<<<<<<< HEAD
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
  createCanvas(1000, 1000)

  // draw will be called this many times per second
  frameRate(60)

  // specify colors in hue/saturation/brightness mode & use 0–1 values rather than 0–255
  //colorMode(HSB, 1.0)
}

function draw() {
  
  // check the clock for the current time and unpack some of its fields to generate a time-string
  var now = clock()

  // use the current 'doneness' of the current hour to choose the hue for the background color
  // (note that setting the background also clears the canvas from our previous round of drawing)
  background(0)
  
  var startAngle = [-HALF_PI, 0, HALF_PI, PI][now.season-1];
  var stopAngle = [0, HALF_PI, PI, -HALF_PI][now.season-1];
  
  if (now.season == 1) {
    fill(44, 132, 9);
  }
  
   if (now.season == 2) {
    fill(191, 28, 107);
  }
  
   if (now.season == 3) {
    fill(165, 92, 14);
  }
  
   if (now.season == 4) {
    fill(29, 47, 183);
  }

  arc(width/2, height/2, width * 0.5, height * 0.5, startAngle, stopAngle);
  
  stroke(2);
  noFill();
  ellipse(500, height/2, 500, 500);

  noStroke();
  fill(193, 9, 0, 100); 
  ellipse(500, height/2, 420, 420)
    
  noStroke();
  fill (193, 9, 0)
  arc(500, height/2, 420, 420, 0, now.progress.month*2*PI)
  
  noStroke();
  fill(255, 59, 20, 100); 
  ellipse(500, height/2, 340, 340)
    
  noStroke();
  fill (255, 59, 20)
  arc(500, height/2, 340, 340, 0, now.progress.day*2*PI)
  
  noStroke();
  fill(255, 98, 20, 100); 
  ellipse(500, height/2, 260, 260)
    
  noStroke();
  fill (255, 98, 20)
  arc(500, height/2, 260, 260, 0, now.progress.hour*2*PI)
  
  noStroke();
  fill(255, 141, 20, 100); 
  ellipse(500, height/2, 180, 180)
  
  noStroke(); 
  fill (255, 141, 20)
  arc(500, height/2, 180, 180, 0, now.progress.min*2*PI)
  
  noStroke();
  fill(244, 223, 66, 100); 
  ellipse(500, height/2, 100, 100)
  
  noStroke();
  fill (244, 223, 66)
  arc(500, height/2, 100, 100, 0, now.progress.sec*2*PI)


}

>>>>>>> 07e3d27472d8c3adbca08059e02a9e179e3f2022
