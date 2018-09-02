
function setup() {
  createCanvas(512, 256); // set the size of the canvas
  frameRate(60) // redraw the screen 60 times per second
  background(255) // fill the canvas with white pixels
  print("Hello, javascript console.")
}

function draw() {
  // set parameters that will affect our drawing commands below
  ellipseMode(CENTER)
  textAlign(CENTER)
  textSize(72)
  noStroke()

  // pick random values to decide on location, size, and color of the next dot
  var x = random(width),
      y = randomGaussian(height/2, height/6),
      r = randomGaussian(20, 10),
      c = Math.floor(random(150));

  // set the color & draw the dot
  fill(c)
  ellipse(x, y, r)

  // switch back to drawing in white and print our greeting on top
  fill(255)
  text("Hello, world.", width/2, height/2 + textSize()/3)
}
