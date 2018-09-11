/*
  Using suncalc by Vladimir Agafonkin
 (c) 2011-2015, Vladimir Agafonkin
 SunCalc is a JavaScript library for calculating sun/moon position and light phases.
 https://github.com/mourner/suncalc
*/


// Sleeping times
  // Change the arcs according to pre and past midnight sleeping times
var sleepStart = [23, 45];
var sleepEnd = [8, 0];

// Productivity times
var productivityStart = [15, 30];
var productivityEnd = [19, 30];

// Variables for layout
var w = 800;
var h = 800;
var outerIndicatorPercentage = 0.03;
var yearRadius = 3;
var yearMargin = 4;
var centerRadius = 102;
var moonRadius = centerRadius*0.9;
var scoreMargin = centerRadius/4;
var donutHoleRadius = centerRadius/3;
var myB = 0.96;

var spaceForScoreOuter = (h/2-1)*(1-outerIndicatorPercentage)-yearRadius*2-yearMargin-scoreMargin;
var spaceForScoreInner = 2*centerRadius+moonRadius+scoreMargin;
var spaceForScore = spaceForScoreOuter - spaceForScoreInner;


function setup() {
  createCanvas(w, h)

  ellipseMode(RADIUS);
  angleMode(RADIANS);

  print('starting time:', clock())

}

function draw() {

  frameRate(1);

  translate(w/2,h/2);
  var now = clock()
  var myDate = now.moment._d;
  // console.log(myDate);
  // Sunrise / -set,
  var times = SunCalc.getTimes(myDate, 40.7128, -74.0060);
  var sunRise = [times.sunrise.getHours(), times.sunrise.getMinutes()];
  // var sunriseStr = times.sunrise.getHours() + ':' + times.sunrise.getMinutes();
  // console.log(sunriseStr);
  var sunSet = [times.sunset.getHours(), times.sunset.getMinutes()];

  // Color scheme, ToDo: add seasons here

    // Center colors
      // spring = 1
      if (now.season == 1) {254, 243, 131
        var cSleep = color(118, 214, 202);
        var cAwake = color(254, 243, 131);
        var cProductivity = color(253, 112, 90);
      } else if (now.season == 2) {
        var cSleep = color(66, 21, 131);
        var cAwake = color(250, 187, 0);
        var cProductivity = color(198, 29, 59);
      } else if (now.season == 3) {
      var cSleep = color(131, 67, 15);
      var cAwake = color(210, 155, 89);
      var cProductivity = color(252, 104, 57);
    } else {
      var cSleep = color(178, 198, 201);
      var cAwake = color(251, 245, 178);
      var cProductivity = color(159, 104, 129);
    }
    // Todo: cNow = cSleep breaks!!
    // console.log(cSleep.levels);
    // cNow
    if (now.progress.day > fdt(sleepStart) && now.progress.day < fdt(sleepEnd)) {
      var cNow = cSleep;
    } else if (now.progress.day > fdt(sleepEnd) && now.progress.day < fdt(sleepStart)) {
      var cNow = cAwake;
      if (now.progress.day > fdt(productivityStart) && now.progress.day < fdt(productivityEnd)) {
        var cNow = cProductivity;
      }
    }
    // console.log(cNow.levels);

      // Day/night modifier
      var cNight = color(0, 140);

    //Background and strokes?
      var isDay = true;

      if (isDay) {
        var cStrokeShift;
        var cFillShift;
      } else {
        var cStrokeShift;
        var cFillShift;
      }

  background('white')

  //background of the clock for indicators
  noStroke();

  fill(245);
  ellipse(0,0,w/2-1,h/2-1);
  // fill(0, 40);
  // ellipse(0,0,w/2-1,h/2-1);

  // Clock indicators
  strokeWeight(4);
  stroke(255);
  push();
    for (var i = 0; i < 12; i++) {
      rotate(2*PI/12);
      line(0,(h/2-1)*(1-outerIndicatorPercentage),0,h);
  }
  pop();

  // background, now.color
  noStroke();
  fill(cNow);
  ellipse(0,0,(w/2-1)*(1-outerIndicatorPercentage),(h/2-1)*(1-outerIndicatorPercentage))
  fill(225, 200);
  ellipse(0,0,(w/2-1)*(1-outerIndicatorPercentage),(h/2-1)*(1-outerIndicatorPercentage))
  // fill(0, 50);
  // ellipse(0,0,(w/2-1)*(1-outerIndicatorPercentage),(h/2-1)*(1-outerIndicatorPercentage))

  // Circle of 100 years, ToDo: +change to 120, calculate the leap years better
    //change next line to the gap?
  push();
    rotate((2*PI/12)*now.month)
    push();
      for (var i = 0; i < 100; i++) {
        if (!i == 0) {
          rotate((2*PI/100));
        }

        if (i % 4 == 0) {
          fill(255);
          // "Schaltjahre"!
          if (i == 0) {
            fill(160);
            // noFill();
            stroke(160);
            strokeWeight(2);
          }
        } else if (i == now.year-2000) {
          noStroke();
          noFill();
        } else {
          noFill();
          stroke(255);
          strokeWeight(1);
        }

        translate(0, -((h/2-1)*(1-outerIndicatorPercentage)-yearRadius-yearMargin));
        ellipse(0, 0, yearRadius, yearRadius);
        translate(0, ((h/2-1)*(1-outerIndicatorPercentage)-yearRadius-yearMargin));
      }
    pop();
  pop();

  // score
  for (var i = 0; i < 5; i++) {
    noFill();
    stroke(255);
    strokeWeight(1);
    ellipse(0, 0, spaceForScoreOuter-spaceForScore/5*i, spaceForScoreOuter-spaceForScore/5*i)
  }

  // notes
  push();
    for (var i = 0; i <= now.min; i++) {
      noStroke();
      fill(255);
      translate(0, -(spaceForScoreInner+9));
      ellipse(0, 0, yearRadius, yearRadius);
      stroke(255)
      line(2, 0, 0, -15);
      translate(0, spaceForScoreInner+9);
      rotate((2*PI/60))
    }
  pop();


  // moon
  push();
    // rotate & de-center
    rotate(2*PI/12*now.progress.halfday*12);
    translate(0, -centerRadius*2);

    // Indicator
    noStroke();
    fill(180);
    push()
      translate(0, -3);
      ellipse(0, -moonRadius-5, 2, 2);
    pop();

    //  un-rotate moon
    rotate(-(2*PI/12*now.progress.halfday*12));


    //Start days, ToDo: Highlight Sundays
    noFill()
    stroke(255);
    strokeWeight(1);


    var nDaysMonthArray = [31, februaryDays(now.year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    for (var i = 0; i <= now.day; i++) {
      var myDay = i * (2*moonRadius/nDaysMonthArray[now.month-1]);
      beginShape();
        vertex(
          -moonRadius, 0
        );
        bezierVertex(
          -moonRadius, (-moonRadius + myDay) * myB,
          0, -moonRadius + myDay,
          0, -moonRadius + myDay
        );
        bezierVertex(
          moonRadius, (-moonRadius + myDay) * myB,
          moonRadius, 0,
          moonRadius, 0
        );
      endShape();
    }

    // start moon
    fill(255,100);
    noStroke();
    beginShape();
      if (now.progress.moon >= 0.5) {
        var myMoon = map(now.progress.moon, 1, 0.5, 0, 2*moonRadius);
        rotate(PI)
      } else {
        var myMoon = map(now.progress.moon, 0, 0.5, 0, 2*moonRadius);
      }
      // Start, mid bottom
      vertex(
        0,                                moonRadius
      );
      // Outer (left)
      bezierVertex(
        +moonRadius*myB,                  moonRadius,
        +moonRadius,                      0+((1-myB*0.98)*moonRadius),
        +moonRadius,                      0
      );
      bezierVertex(
        +moonRadius,                     -moonRadius*myB,
        0+((1-myB)*moonRadius*0.98),     -moonRadius,
        0,                               -moonRadius
      );
      // Inner (right)
      bezierVertex(
        (+moonRadius-myMoon)*myB,        -moonRadius+(1-myB*0.98)*moonRadius,
        +moonRadius-myMoon,              0-(1-myB*0.98)*moonRadius,
        0+moonRadius-myMoon,             0
      );
      bezierVertex(
        (+moonRadius-myMoon)*myB,        moonRadius-(1-myB*0.98)*moonRadius,
        0,                               moonRadius,
        0,                               moonRadius
      );
    endShape();

    // Moon contour
    noFill();
    stroke(255);
    strokeWeight(4);
    ellipse(0,0,moonRadius,moonRadius)

    /*
    // Grid
    fill(0);
    ellipse(-moonRadius, -moonRadius, 2, 2);
    ellipse(-moonRadius, 0, 2, 2);
    ellipse(-moonRadius, moonRadius, 3, 3);

    fill(255,0,0);
    ellipse(0, -moonRadius, 2, 2);
    ellipse(0, 0, 2, 2);
    ellipse(0, moonRadius, 3, 3);

    fill(0,0,255)
    ellipse(moonRadius, -moonRadius, 2, 2);
    ellipse(moonRadius, 0, 2, 2);
    ellipse(moonRadius, moonRadius, 3, 3);
    */

  pop();

  // draw center, ToDo define colors, variables for positions
  push();
  rotate(-HALF_PI);
    noStroke();

    if (now.hours < 12) {
      // Test what time the sleep time is
      fill(cAwake);
      arc(0, 0, centerRadius, centerRadius, 0, cta(hdt(sleepStart)), PIE);

      fill(cSleep);
      arc(0, 0, centerRadius, centerRadius, cta(hdt(sleepStart)), cta(hdt(sleepEnd)), PIE);

      fill(cAwake);
      arc(0, 0, centerRadius, centerRadius, cta(hdt(sleepEnd)), 2*PI, PIE);

      fill(cNight);
      arc(0, 0, centerRadius, centerRadius, 0, cta(hdt(sunRise)), PIE);

    } else {
      // console.log("else");
      fill(cAwake);
      arc(0, 0, centerRadius, centerRadius, 0, cta(hdt(sleepStart)), PIE);

      fill(cSleep);
      arc(0, 0, centerRadius, centerRadius, cta(hdt(sleepStart)), 2*PI, PIE);

      fill(cProductivity);
      arc(0, 0, centerRadius, centerRadius, cta(hdt(productivityStart)), cta(hdt(productivityEnd)), PIE);

      fill(cNight);
      arc(0, 0, centerRadius, centerRadius, cta(hdt(sunSet)), 2*PI, PIE);
    }
  pop();

  // Donut center background, now.color
  noStroke();
  fill(235);
  ellipse(0,0,donutHoleRadius, donutHoleRadius);

  // Metronome now.color
  push();
  fill(235);
  stroke(255)
  strokeWeight(2)
    translate(0, donutHoleRadius-1);
    //bpm??
    var r = map(now.ms, 0, 1000, -0.125*PI, 0.125*PI)
    if (now.sec % 2 == 0){
      rotate(-r);
    } else {
      rotate(r);
    };
    // rotate(r);
    line(0, 0, 0, -donutHoleRadius*2*0.75);
    ellipse(0, -donutHoleRadius*2*0.75+15, 5, 5);
  pop();

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
  var myPi = 3.141592653589793;
  return 2*myPi*n;
}


// old
/*
beginShape();
  vertex(0, moonRadius);
  bezierVertex(-moonRadius/14*(14-i), moonRadius/14*(14-i), -moonRadius/14*(14-i), 0, -moonRadius/14*(14-i), 0);
  bezierVertex(-moonRadius/14*(14-i), -moonRadius, 0, -moonRadius, 0, -moonRadius);
  // bezierVertex(-moonRadius/14*(14-i+1), -moonRadius, -moonRadius/14*(14-i+1), 0, -moonRadius/14*(14-i+1), 0);
  // bezierVertex(-moonRadius/14*(14-i+1), moonRadius, 0, moonRadius, 0, moonRadius);
endShape();
*/

/*
for (var i = 0; i <= 14; i++) {
  // if (i > 7 && i <= 14) {
  //   fill(255);
  // } else {
  //   noFill();
  // }
  // It’s not perfectly round

  beginShape();
    vertex(0, moonRadius);
    bezierVertex(moonRadius/14*i, moonRadius/14*i, moonRadius/14*i, 0, moonRadius/14*i, 0);
    bezierVertex(moonRadius/14*i, -moonRadius, 0, -moonRadius, 0, -moonRadius);
    vertex(0, moonRadius);
  endShape();
}
*/
/*
fill(255, 175, 16);
arc(0, 0, centerRadius, centerRadius, 0, cta(hdt(productivityStart)), PIE);
fill(255, 50, 34);
arc(0, 0, centerRadius, centerRadius, cta(hdt(productivityStart)), cta(hdt(sunSet)), PIE);
fill(110, 36, 5);
arc(0, 0, centerRadius, centerRadius, cta(hdt(sunSet)), cta(hdt(productivityEnd)), PIE);
fill(109, 82, 23);
arc(0, 0, centerRadius, centerRadius, cta(hdt(productivityEnd)), 2*PI, PIE);
*/
