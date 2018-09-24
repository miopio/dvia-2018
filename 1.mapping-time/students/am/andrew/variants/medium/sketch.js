let secondBalls = []; // array to hold seconds ball objects
let minBalls = []; // array to hold minutes ball objects
let hourBalls = []; // array to hold hours ball objects
let dayBalls = []; // array to hold days ball objects

let totalHours;
let totalDays;

let canvasX = 500;
let canvasY = 400;

function setup() {
  createCanvas(canvasX, canvasY);
  noStroke();
}

function draw() {
  background("#3d3d3d");
  let now = clock();
  let t = frameCount / 60; // update time

  if (now.pm) {
    totalHours = now.hour + 12;
  } else {
    totalHours = now.hour;
  }

  // seconds balls
  // create balls to match seconds count
  if (secondBalls.length < now.sec) {
    secondBalls.push(new ball(50, 50, canvasX / 60)); // append ball object
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
    minBalls.push(new ball(50, 150, canvasX / 60)); // append ball object
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
    hourBalls.push(new ball(50, 250, canvasX / 24)); // append ball object
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
    dayBalls.push(new ball(50, 350, canvasX / 365)); // append ball object
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
function ball(posX, posY, size) {
  // initialize coordinates
  this.posX = posX;
  this.posY = posY;
  this.initialangle = random(0, 2 * PI);
  this.size = size;

  // radius of ball spiral
  // chosen so the secondBalls are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size secondBalls fall at slightly different y speeds
    // this.posY += pow(this.size, 0.5);
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}

function mouseReleased() {
  remove();
  console.log("canvas removed");
}
