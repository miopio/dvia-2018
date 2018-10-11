<<<<<<< HEAD
function setup() {
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
let secondBalls = []; // array to hold seconds ball objects
let minBalls = []; // array to hold minutes ball objects
let hourBalls = []; // array to hold hours ball objects
let dayBalls = []; // array to hold days ball objects

let totalHours;
let totalDays;

let canvasX = outerWidth * 0.8;
let canvasY = outerHeight * 0.8;

function setup() {
  createCanvas(canvasX, canvasY);

  noStroke();
  console.log("canvas x: ", canvasX);
  console.log("canvas y: ", canvasY);
}

function draw() {
  background("#0F1633");
  let now = clock();
  let t = frameCount / 60; // update time

  // hours of day
  if (now.pm && now.hour == 12) {
    totalHours = now.hour;
  } else if (now.pm) {
    totalHours = now.hour + 12;
  } else if (now.am && now.hour == 12) {
    totalHours = 0;
  } else {
    totalHours = now.hour;
  }
  console.log(totalHours);

  // seconds balls
  // create balls to match seconds count
  if (secondBalls.length < now.sec) {
    secondBalls.push(
      new ball(0, 0, 5, canvasY * 0.2, canvasX * 0.05, "#F77C7C")
    ); // append ball object
  }
  // delete balls once container is full
  if (now.sec >= 59) {
    secondBalls = [];
  }
  // loop through secondBalls with a for..of loop
  for (let flake of secondBalls) {
    flake.update(t); // update ball position
    flake.display(); // draw ball
  }

  // minutes balls
  // create balls to match minutes count
  if (minBalls.length < now.min) {
    minBalls.push(new ball(0, 0, 5, canvasY * 0.4, canvasX * 0.1, "#7C92F7")); // append ball object
  }
  // delete balls once container is full
  if (now.min >= 59) {
    minBalls = [];
  }
  // loop through secondBalls with a for..of loop
  for (let flake of minBalls) {
    flake.update(t); // update ball position
    flake.display(); // draw ball
  }

  // hours balls
  // create balls to match hours count
  if (hourBalls.length < totalHours) {
    hourBalls.push(new ball(0, 0, 5, canvasY * 0.6, canvasX * 0.2, "#F7CC7C")); // append ball object
  }
  // delete balls once container is full
  if (totalHours >= 24) {
    hourBalls = [];
  }
  // loop through secondBalls with a for..of loop
  for (let flake of hourBalls) {
    flake.update(t); // update ball position
    flake.display(); // draw ball
  }

  // days balls
  // create balls to match days count
  let totalDays = Math.floor(((now.month - 1 + now.day / 30) / 12) * 365);
  if (dayBalls.length < totalDays) {
    dayBalls.push(new ball(0, 0, 5, canvasY * 0.8, canvasX * 0.4, "#7CF7E0")); // append ball object
  }
  // delete balls once container is full
  if (totalDays >= 365) {
    dayBalls = [];
  }
  // loop through secondBalls with a for..of loop
  for (let flake of dayBalls) {
    flake.update(t); // update ball position
    flake.display(); // draw ball
  }
}

// ball class
function ball(posX, posY, size, shelfY, shelfWidth, color) {
  // initialize coordinates
  this.posX = posX;
  this.posY = posY;
  this.initialangle = random(0, 2 * PI);
  this.size = size;
  this.shelfY = shelfY;
  this.shelfWidth = shelfWidth;
  this.color = color;

  // radius of ball spiral
  // chosen so the secondBalls are uniformly spread out in area
  this.radius = sqrt(random(pow(10, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.8; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = canvasX / 2 + (this.shelfWidth + this.radius) * sin(angle);

    // different size secondBalls fall at slightly different y speeds

    if (this.posY >= this.shelfY) {
      this.posY == this.shelfY;
    } else {
      this.posY += pow(this.size, 0.5);
    }
  };

  this.display = function() {
    fill(this.color);
    ellipse(this.posX, this.posY, this.size);
  };
}

function mouseReleased() {
  remove();
  console.log("canvas removed");
}
>>>>>>> 07e3d27472d8c3adbca08059e02a9e179e3f2022
