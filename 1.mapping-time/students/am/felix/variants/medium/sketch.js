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

const w = 800, h = 600;

var now = clock();

class Spirograph {
	constructor (scale, R, r, p, revolutions) {
		this.n = 0;
		this.myStep = 0.06312;
		this.x = 0;
		this.y = 0;
		this.orig_x = this.x;
		this.orig_y = this.y;

		this.scale = scale;
		this.i = 0;
		this.j = 1;
		this.R = R;
		this.r = r;
		this.p = p;
		this.l = this.p/this.r;
		this.k = this.r/this.R;
		this.myColor;

		this.color = (color) => {
			this.myColor = color;
		};

		this.clock = (revolutions) => {
			this.n = 0;
			for (var i = 0; i < revolutions; i++) {
				for (var j = 0; j < 100; j++) {
					this.x = w/2;
					this.y = h/2;

					this.x += this.scale*this.R*((1-this.k)*Math.cos(this.n) + this.l*this.k*cos(this.n*((1-this.k)/this.k)));
					this.y += this.scale*this.R*((1-this.k)*Math.sin(this.n) + this.l*this.k*sin(this.n*((1-this.k)/this.k)));


					// stroke(cos(this.n/10)*(255), 0, sin(this.n/20)*(255));
					stroke(this.myColor);
					line(this.orig_x, this.orig_y, this.x, this.y);

					this.orig_x = this.x;
					this.orig_y = this.y;

					this.n += this.myStep;
				}
			}
		}
	}
}
var secSpiro = new Spirograph (2.5, 1, 60, 50, now.sec);
var minSpiro = new Spirograph (4, 1, 60, 15, now.min);
var hourSpiro = new Spirograph (8, 1, 24, 5, now.hours)

function setup() {
	createCanvas(w, h);
	cos = Math.cos;
	sin = Math.sin;
	print('starting time:', clock());
}


function draw() {
	frameRate(1)
  now = clock();
	background(224, 224, 217);

	minSpiro.color(color(255, 255, 0));
	minSpiro.clock(now.min);

	secSpiro.color(color(255, 255, 255));
	secSpiro.clock(now.sec);

	hourSpiro.color(color(0, 160, 240));
	hourSpiro.clock(now.hours);






}
