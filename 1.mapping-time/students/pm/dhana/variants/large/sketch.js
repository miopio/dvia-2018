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
