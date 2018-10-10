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
// Trying to use in the future: https://processing.org/examples/circlecollision.html

// Using coding train tutorials Nature of Code 2.1 – 2.5 https://www.youtube.com/playlist?list=PLRqwX-V7Uu6aFlwukCmDf0-1-uSR7mklK

// Using https://github.com/bmoren/p5.collide2D#collidelinecircle

// Variables for layout
const w = 1600;
const h = 800;
let now = clock();
let groundLevel;
const fr = 30;

let updateGroundLevel = () => {
  groundLevel = h-now.progress.day*h;
}

// Problem:
/*
1. Ball of balls
2. Initial velocity out of the ball
//Rewrite in vectors:
3. Gravity
4. Collision
5. Collection on the ground
*/

let balls = [];

class Ball {

  constructor(id, d, x, y) {
    this.id = id;
    this.d = d;
    this.m = this.d*0.1;
    this.location = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.velocity = p5.Vector.random2D();
    this.velocity.mult(10);
    this.acceleration = createVector(0, 0);
    this.myFill = color(195, 51, 37, 50)


    this.display = () => {
      fill(this.myFill);
      ellipse(this.location.x, this.location.y, this.d, this.d);
    }

    this.applyForce = (force) => {
      // let force = createVector(x, y);
      // let f = createVector(0, 0);
      // f.div(force, this.m);
      this.acceleration.add(force);
    }

    this.move = () => {
      this.velocity.add(this.acceleration)
      this.location.add(this.velocity);
      this.acceleration.mult(0);
    }

    this.checkBoundaryCollision = () => {
      let damp = -0.8;
      const topWallTest = this.location.y < this.d/2;
      const leftWallTest = this.location.x < this.d/2;
      let groundLevelTest = this.location.y > groundLevel-this.d/2;
      const rightWallTest = this.location.x > w-this.d/2;
      if (rightWallTest) {
        this.location.x = w-this.d/2;
        this.velocity.x *= damp;
      } else if (leftWallTest) {
        this.location.x = this.d/2;
        this.velocity.x *= damp;
      } else if (groundLevelTest) {
        this.location.y = groundLevel-this.d/2;
        this.velocity.y *= damp;
      } else if (topWallTest) {
        this.location.y = this.d/2;
        this.velocity.y *= damp;
      }
    }

    this.collisionDetection = (objArray) => {
      for(var i=0; i < objArray.length; i++){
				if(this.id != i){ //dont do the check if it is looking at itself

					this.hit = collideCircleCircle(this.location.x, this.location.y, this.d, objArray[i].location.x, objArray[i].location.y, objArray[i].d); //colliding with anything?

					if(this.hit == true){ // if we ever get a true we have to try again, this works since we iterate down through the objects one by one.
						//try again:
            // console.log("hit");
            // raise the ground level?
            // squeeze the circle
            //
            // this.velocity.mult(-1);
            console.log("hit");
						this.myFill = color(200,200,0)
					}
				}
			}
    }
  }
}

let createNewBalls = (n) => {
  for (var i = 0; i < n; i++) {
    let d = getRndInteger((groundLevel*0.95-0.9*groundLevel)+1, (groundLevel*0.95-0.8*groundLevel)+1);
    let xPos = getRndInteger(w/2, w/2);
    let yPos = getRndInteger(groundLevel/2, groundLevel/2);

    // let d = 10;
    // let xPos = i*20;
    // let yPos = i*5;
    balls.push(new Ball (i, d, xPos, yPos));
  }
}

function setup() {
  createCanvas(w, h)
  angleMode(RADIANS);
  print('starting time:', clock());
  // Create new balls
}



function draw() {
  // Prerequisites
  frameRate(fr);
  now = clock();
  updateGroundLevel()

  // Initial drawing properties
  background(250, 245, 233);
  noStroke();
  // stroke(255);
  // strokeWeight(4);

  // Ground level
  fill(68, 74, 89);
  rect(0, groundLevel, w, h-groundLevel)


    // Empty the balls array
    // balls = [];


    for (var i = 0; i < balls.length; i++) {

      // Forces (move to the class constructor)
      let gravity = createVector(0, 0.8);
      gravity.mult(balls[i].m);
      balls[i].applyForce(gravity.div(balls[i].m));

      let wind = createVector(0.08, 0);
      // balls[i].applyForce(wind);

      let drag = createVector(0, 0);
      drag.add(balls[i].velocity);
      drag.normalize();
      // drag.mult(-1);
      let dragC = -0.002;
      let dragSpeedSq = balls[i].velocity.magSq();
      drag.mult(dragC*dragSpeedSq);
      balls[i].applyForce(drag);

      // console.log('location: ' + balls[i].location.y);
      // console.log('resting position? ' + (groundLevel - balls[i].d/2));
      if (balls[i].location.y >= (groundLevel - balls[i].d)) {
        // console.log("friction");
      let friction = createVector(0, 0);
      friction.add(balls[i].velocity);
      friction.normalize();
      // drag.mult(-1);
      let frictionC = -0.05;
      friction.mult(frictionC);
      balls[i].applyForce(friction);
      }

      // Call the methods
      balls[i].move();
      balls[i].checkBoundaryCollision();
      // balls[i].collisionDetection(balls);
      balls[i].display();
    }

	// translate(w/2, h/2);
  // Balls

	fill(7, 163, 90, now.sec%5*50+50);
  if (now.sec%5 == 4) {
    if (frameCount%fr == fr-1) {    // console.log("yes");
      setTimeout(createNewBalls(1), 999)
    };
    if (frameCount%fr >= fr-7){
      fill(195, 51, 37);
    };
  }
  let myMelD = (groundLevel*0.95)-(now.sec%5)*(groundLevel)/5;
  ellipse(w/2, (groundLevel)/2, myMelD, myMelD);
  // ellipse(0, 0, 70, 70);

}


function isLeapYear(n) {
  if (n % 4 == 0 && n % 400 == 0) {
    return true;
  }
}

function februaryDays(n) {
  return isLeapYear(n) ? 29 : 28;
}

function hdt([h, min]) {
  if (h<=12) {
    return (h + min/60) / 12;
  } else {
    return ((h - 12) + min/60) / 12;
  };
}

function fdt([h, min]) {
    return (h + min/60) / 24;
}

function cta(n) {
  const myPi = 3.141592653589793;
  return 2*myPi*n;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
>>>>>>> 07e3d27472d8c3adbca08059e02a9e179e3f2022
