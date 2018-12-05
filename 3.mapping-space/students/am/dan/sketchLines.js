var canvas;

var xoff = 0;
var yoff = 1000;

var xspacing = 1; // Distance between each horizontal location
var w; // Width of entire wave
var theta = 0.0; // Start angle at 0
var amplitude = 10.0; // Height of wave
var period = 100.0; // How many pixels before the wave repeats
var dx; // Value for incrementing x
var yvalues = []; // Using an array to store height values for the wave

var testN = 0.0;
var magVal = 0;

var mouseV = 0.0;

//var linesGroup=[];
var index = 0;
var mapDepths = 0;
var mapMag = 0;
var idofEvent = 0;


//sound part
var carrier; // this is the oscillator we will hear
var modulator; // this oscillator will modulate the amplitude of the carrier
var fft; // we'll visualize the waveform

var earthquakeSound;
var triggerEarthSound;
var soundBoolean= false;

function setup() {
  setupMap()
  // We are still calling createCanvas like in the past, but now
  // we are storing the result as a variable. This way we can
  // call methods of the element, to set the position for instance.
  canvas = createCanvas(600, 500);



  // Here we call methods of each element to set the position
  // and id, try changing these values.
  // Use the inspector to look at the HTML generated from this
  // code when you load the sketch in your browser.
  canvas.position(width + 200, 100);
  canvas.class("lemon");
  fill(0)
  noStroke()
  textSize(16)

  w = width + 16;


  console.log(yvalues.length);
  console.log(dx);
  console.log(magnitudes);
  // for(var x= 0; x<depths.length; x++){
  //
  //     linesGroup[index++] = new sinWave(x);
  //
  // }

  console.log(depths);

// sound setup*******************

carrier = new p5.Oscillator(); // connects to master output by default
carrier.freq(340);
carrier.amp(0);
//carrier's amp is 0 by default, giving our modulator total control



modulator = new p5.Oscillator('triangle');
modulator.disconnect();  // disconnect the modulator from master output
modulator.freq(5);
modulator.amp(1);


// Modulate the carrier's amplitude with the modulator
// Optionally, we can scale the signal.
carrier.amp(modulator.scale(-1,1,1,-1));

// create an fft to analyze the audio
fft = new p5.FFT();

// earthquakeSound.loop();
// earthquakeSound.play();
var removeAtt= select('.leaflet-control-attribution leaflet-control');
removeAtt.hide();
}

function draw() {

  // These commands are applied to the graphics canvas as normal.
  background(12, 10, 10);

  //  mouseV= map(mouseX,0,width, 0.0, 1);


  //console.log(idofEvent);



  strokeWeight(4);
  stroke(90);
  fill(220,220,220);
  rect(150,20, width*.6,height-50)

  push();
  translate(50, 50);
  strokeWeight(1);
  stroke(20);
  smooth();
  //  maglines();

  theta -= 0.009;


  for (var a = 0; a < depths.length; a++) {

    mapDepths = map(depths[a], 4, 600, 30, 1);
    mapMag = map(magnitudes[a], 1.0, 9.0, 4.0, 30.0)
    xspacing = map(magnitudes[a], 0.0, 10.0, .9, .01)
    period = map(magnitudes[a], 0.0, 10.0, 400, 100)

    if (a == idofEvent) {
      let colorOn = color(250, 100, 100);
      mapDepths = map(depths[idofEvent], 4, 600, 30, 1);
      mapMag = map(magnitudes[idofEvent], 1.0, 9.0, 4.0, 30.0)
      xspacing = map(magnitudes[idofEvent], 0.0, 10.0, .9, .01)
      period = map(magnitudes[idofEvent], 0.0, 10.0, 400, 100)
      sinWave(idofEvent, mapDepths, mapMag, colorOn);

      //sound
      var modFreq = map(magnitudes[idofEvent], 3.0, 8.0, 0, 10);
      modulator.freq(modFreq);

      var modAmp = map(depths[idofEvent], 0, 600, 0.04, 0.001);
      modulator.amp(modAmp, 0.01); // fade time of 0.1 for smooth fading

      //earthquakeSound.setVolume(map(magnitudes[idofEvent], 1.0, 8.0, 0, 1))
      //earthquakeSound.playMode('restart');



    } else {

      let colorNo = color(100,100,100);
      sinWave(a, mapDepths, mapMag, colorNo);




    };
  }


  //console.log(y)


  // for (var a= 0; a<linesGroup.length; a++){

  //   linesGroup[a].display();
  //
  // }


  pop();
  fill(0);
  strokeWeight(1);

  fill(20);
  // text(`Plotting ${table.getRowCount()} seismic events`, 20, 40)
  // text(`Largest Magnitude: ${getColumnMax("mag")}`, 20, 60)
  // text(`Greatest Depth: ${getColumnMax("depth")}`, 20, 80)

}


//testing with a noise line
function maglines() {

  var y = height * 0.5;
  beginShape();
  noFill();
  for (var x = width * 0.1; x < width * 0.9; x++) {
    var ypos = map(noise(x / 100 + xoff, y / 100 + yoff), 0, 1, -30, 50);

    var magnitu = x < width * 0.9 ? map(x, width * 0.1, width * 0.5, 0, 1) : map(x, width * 0.5, width * 0.9, 1, 0);
    ypos *= magnitu;
    if (ypos > 0) ypos = 0;
    vertex(x, ypos);
  }
  endShape();
  xoff += 0.01;
  yoff += -0.01;
}

function sinWave(lineHeight, linedepth, linemagAmplitute, wavecolor) {
  dx = (TWO_PI / period) * xspacing;

  this.lineHeight = lineHeight;

  yvalues = new Array(0.6 * width);

  var ypos = lineHeight * 33;
  // Increment theta (try different values for
  // 'angular velocity' here)

  //theta += random(0,1);
  testN += 0.02;

  var x2 = testN;
  // For every x value, calculate a y value with sine function
  var x1 = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(linedepth * x1) * linemagAmplitute * noise(x1);
    // yvalues[i] = sin(4*x1)*amplitude*noise(x1);
    // yvalues[i] = sin(.5*x1)*amplitude*noise(100);
    // yvalues[i] = amplitude*noise(x2);
    x1 += dx;

    x2 += .05;
  }
  strokeWeight(1);
  stroke(220, 200, 200);
  line(100, ypos, yvalues.length+100, ypos);
  //strokeWeight(2);
  //stroke(200, 200, 200);
  //line(100, -100, 100, width);
  //line(width*.6+100, -100, width*.6+100, width);


    push();
    fill(wavecolor);
    strokeWeight(0);
    textSize(12);
    text(`Magnitude: ${magnitudes[lineHeight]}`, 0, lineHeight*33-2)
    text(`Depths: ${depths[lineHeight]}`, 0, lineHeight*33+12)
    textStyle(NORMAL);
    pop();



  beginShape();
  noFill();



  stroke(wavecolor);
  strokeWeight(1);
  for (var x = 0; x < yvalues.length; x++) {
    //  ellipse(x*xspacing, height/2+yvalues[x], 1, 1);
    vertex(x+100, ypos + yvalues[x]);
  }

  endShape();

};

// function mousePressed() {
//
//   if ( soundBoolean==true ) { // .isPlaying() returns a boolean
//     modulator.stop();
//     carrier.stop();
//     soundBoolean=false;
//   } else {
//
//     soundBoolean=true;
//   }
//
//
// }


var btnSS;

function btnFunction(){
  if ( soundBoolean==true ) {
    modulator.stop();
    carrier.stop();
    soundBoolean=false;
    btnSS =select('.btnS');
    //btnSS.('btnS:hover');
    btnSS.style('color',"rgba(155,155,155,.9)");

  } else {
    modulator.start();
    carrier.start();
    soundBoolean=true;
    select('.btnS').style('color',"rgba(0,0,0,1)");

  }

  //console.log(test);
}
