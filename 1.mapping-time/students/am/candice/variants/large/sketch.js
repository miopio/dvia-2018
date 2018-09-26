var color = [];

function setup() {
    createCanvas(650, 650);
    for (i = 0; i<100; i++) {
        color[i] = random(50,255);//colours for the circle and line
    }
    frameRate(1);
}

function draw() {
  var now = clock();
  var h = now.hours; //hour();
  var m = now.min; //minute();
  var s = now.sec; //second();

//changing the color of the background based on time of the day (blue when it is AM and fades to black when PM)
  var dayProgress = now.progress.day;
  var fromColor = color(0, 0, 0);
  var toColor = color(85, 174, 244);
  background(lerpColor(fromColor, toColor, dayProgress));

//seasons are divided by quadrant: starting from upper left= spring, lower left=summer, lower right=autum, upper right=winter
  var startAngle = [-HALF_PI, 0, HALF_PI, PI][now.season-1];
  var stopAngle = [0, HALF_PI, PI, -HALF_PI][now.season-1];
  // arc(width/2, height/2, width * 0.9, height * 0.9, startAngle, stopAngle);

	  if (now.season == 1) {
    strokeWeight(20);
    stroke(color(227,136,136,210)); //pink with opacity at 180 for spring
    noFill();
  }
  
   if (now.season == 2) {
  strokeWeight(20);
  stroke(color(76,155,63,210)); //green with opacity at 180 for summer
  noFill();
  }
  
   if (now.season == 3) {
  strokeWeight(20);
  stroke(color(255,182,83,210)); //orange with opacity at 180 for autumn
  noFill();
  }
  
   if (now.season == 4) {
  strokeWeight(20);
  stroke(color(219,234,240,210)); //white blue with opacity at 180 for winter
  noFill();
  }

arc(width/2, height/2, width * 0.9, height * 0.9, startAngle, stopAngle);


//get where we are in the year
strokeWeight(10);
arc(width/2, height/2, 80, 80,0,now.progress.year*2*PI);


    //the decreasing circle in the background which represent seconds
    push();
    translate(width/2, height/2);

    for (i = 0; i<s;i++) {
         stroke(color[i]); //lines are random colours from above from (50,255)
         strokeWeight(0.5);
         noFill();
         ellipse(0, 0, 530-i*24, 530-i*24);
    }
    pop();

    //the lines representing the minute
    push();
    translate(width/2, height/2);
    for ( i = 0; i<m; i++) {
        rotate(radians(6));
        stroke(color[i]);
        strokeWeight(2);
        line(0, 0, 0, -300+random(-0.5,0.5));
    }
    pop();


    push();
    translate(width/2, height/2);
    var angle = 360*s/60
    rotate(radians(angle-90));//make the circle of ellipse rotate according to seconds
    for (i = 0; i<h; i++) {
        rotate(radians(15));
        noStroke();
        fill(color[i]);
        ellipse(0, -268, 25,25);// number of circles represent the current hour (  3am-3 circle, 3pm-15 circles)
    }
    pop();
}
