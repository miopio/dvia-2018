  //This sketch shows current hour, minute, and seconds 

function setup() {
  createCanvas(720, 600);
  frameRate(60);

  // defaults to RGB, HSB doesn't seem accurate
  // colorMode(HSB, 1.0);
  // colorMode(rgb, 255);
  // cons of using HSB in this context?
  // are other clocks using HSB?

}

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
  // var year = now.progress.year;// use this for "large project"

  // why doesn't this work? can control size, opacity, color
  var min = now.min * 10;
  var hour = now.hour * 48;
  var sec = now.sec * 10;
  noStroke();


  //hour circle in green
  fill('rgba(221, 245, 242, 0.5)');
  ellipse(360, 300, hour, hour);

  //seconds rectangle in blue on left side
  fill('rgba(222, 198, 210, 0.5)');
  rect(0, 0, 50, sec);

  //minutes circle in weird browns
  fill('rgba(199, 198, 210, 0.5)');
  ellipse(360, 300, min, min);


}
