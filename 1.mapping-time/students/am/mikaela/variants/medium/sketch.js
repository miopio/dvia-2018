function setup() {
  // set the width & height of the sketch
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

  noStroke();
  fill(255, 36, 2, 100); 
  ellipse(500, height/2, 400, 400)
    
  noStroke();
  fill (255, 36, 2)
  arc(500, height/2, 400, 400, 0, now.progress.hour*2*PI)
  
  noStroke();
  fill(255, 107, 1, 100); 
  ellipse(500, height/2, 300, 300)
  
  noStroke(); 
  fill (255, 107, 1)
  arc(500, height/2, 300, 300, 0, now.progress.min*2*PI)
  
  noStroke();
  fill(255, 216, 0, 100); 
  ellipse(500, height/2, 200, 200)
  
  noStroke();
  fill (255, 216, 0)
  arc(500, height/2, 200, 200, 0, now.progress.sec*2*PI)


}

