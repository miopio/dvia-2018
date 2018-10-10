## Process
This clock is inspired by a web and represents the ripple effect of what I think a time warp looks like.

var color = [];

function setup() {
    createCanvas(650, 650);
    for (i = 0; i<100; i++) {
        color[i] = random(50,255);//colors for the circle and line
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

  AM/PM:
  I represented AM and PM differentiation in two ways: 1) The number of hours are structured as a 24 hour clock in that there will be 1-24 circles throughout the day in order to reduce confusion between times during the am and pm (eg. 1am and 1pm). 2) I used the lerpcolor() function to blend colors from blue to black. In the early morning, the background is navy blue. The background color will gradually turn bright blue to represent the blue sky during the day and gradually turn back to black once it hits midnight.

//seasons are divided by quadrant: starting from upper left= spring, lower left=summer, lower right=autumn, upper right=winter
  var startAngle = [-HALF_PI, 0, HALF_PI, PI][now.season-1];
  var stopAngle = [0, HALF_PI, PI, -HALF_PI][now.season-1];
  // arc(width/2, height/2, width * 0.9, height * 0.9, startAngle, stopAngle);

	  if (now.season == 1) {
    strokeWeight(20);
    stroke(color(227,136,136,180)); //pink with opacity at 180 for spring
    noFill();
  }
  
   if (now.season == 2) {
  strokeWeight(20);
  stroke(color(76,155,63,180)); //green with opacity at 180 for summer
  noFill();
  }
  
   if (now.season == 3) {
  strokeWeight(20);
  stroke(color(255,182,83,180)); //orange with opacity at 180 for autumn
  noFill();
  }
  
   if (now.season == 4) {
  strokeWeight(20);
  stroke(color(219,234,240,180)); //white blue with opacity at 180 for winter
  noFill();
  }

arc(width/2, height/2, width * 0.9, height * 0.9, startAngle, stopAngle);

//get where we are in the year
strokeWeight(10);
arc(width/2, height/2, 80, 80, 0 , now.progress.year*2*PI);

Seasons:
The arc around the ellipse represents the seasons we are currently in. I started by placing spring in the upper right quadrant, summer in the lower right, autumn in the lower left, and winter in the upper left. Throughout the year, the bar will move to the quadrant that we are currently in. The colors change from pink to baby blue to represent the changing of the leaves.

    //the decreasing circle in the background which represent seconds
    push();
    translate(width/2, height/2);

    for (i = 0; i<s;i++) {
         stroke(color[i]); //lines are random colors from above from (50,255)
         strokeWeight(0.5);
         noFill();
         ellipse(0, 0, 530-i*24, 530-i*24);
    }
    pop();


    Seconds:
    The seconds are represented by the ellipse that decreases and increases. At the beginning of each new minute, the seconds ellipse starts decreasing in size until it reaches the center, once it reaches the center it regrows back out until the ellipses fill the entire canvas. Once the canvas is filled, it means that one minute has passed.



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

    Minute:
    The minutes are represented by the lines that go around the ellipse. Once the minute has passed, an additional line is added to the minutes lines. At each new hour, there are no lines until it reaches the first minute. I divided 360 by 60 to get the degrees between each line, which is 6.



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



Hour:
The circles that go around the ellipse move at each second of time that passes. However, they also represent the hours. This clock is a 24 hour clock, so if it is 1pm there will be 13 circles and if it is 1am there will be 1 circle that goes around the ellipse.

Color:
The color of the minutes, seconds, and hours are all random(50,255). So it alternates random colors of white, grey and black for each line or shape. The seasons bar is orange to represent something that is different to the standard current time.  


Next Steps:
As next steps, I would like to incorporate a progress arc as the seasons so it not only shows which season we are in, but also how much of the season has already passed (eg. 80% is filled).
