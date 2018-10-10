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
//This sketch attempts to show one time, and one date viz.

function setup() {
createCanvas(720, 600);
frameRate(60);

// defaults to RGB, HSB doesn't seem accurate
// colorMode(HSB, 1.0);
// colorMode(rgb, 255);
// cons of using HSB in this context?
// are other clocks using HSB?

}

//there is no file to point to in clock function. Seems to be running from timekeeper. Unsure.
function draw() {
var now = clock();


if (now.pm){
  //dark blue night background
  background(0, 37, 61);
}else{
  //light blue day
  background(106, 181, 222);
}

//this variable just for making circles bigger
var width = 720;
var height = 600;

//part hour, month, day
var day = now.progress.day;
// var partmonth = now.progress.month;
// var parthour = now.progress.hour; //this is the code that represents the minute (approximate)
// var year = now.progress.year; // use this for "large project"

// why doesn't this work? can control size, opacity, color
var min = now.min * 10;
console.log(min);
var hour = now.hour * 48;
var sec = now.sec * 10;
//var date  = now.date(); - for some reason when all images and animation disappears from canvas when var for date or weekday is entered
fill(230,sec); //sec here connected to movement of day for some reason?
//weekday:t.day()+1,
//weekday:t.weekday()+1,
//console.log(date);
noStroke();

//hour circle moves out from the center each hour. color = light greyish blue
fill('rgba(221, 245, 242, 0.5)');
ellipse(360, 300, hour, hour);

//seconds rectangle in light greyish blue on left side of canvas
fill('rgba(222, 198, 210, 0.5)');
rect(0, 0, 50, sec);

//minutes circle translucent greyish white moves out from the center per second
fill('rgba(199, 198, 210, 0.5)');
ellipse(360, 300, min, min);

//progress of the day in "tomato" color, runs diagonally from top left to bottom right corners
fill('rgba(221, 83, 84, 1)');
rect(day * width, day * height, 30, 30);

//progress of date was moving diagonally too but code is weird. Initially wanted it to move from opposite end of canvas. Just opacity animates re: date/weekday var
fill(230,sec);
rect (100,100, 50 ,50);

}
>>>>>>> 07e3d27472d8c3adbca08059e02a9e179e3f2022
