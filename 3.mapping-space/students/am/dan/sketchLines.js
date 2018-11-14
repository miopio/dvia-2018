var canvas;

var xoff = 0;
var yoff = 1000;

var xspacing = 1;    // Distance between each horizontal location
var w;                // Width of entire wave
var theta = 0.0;      // Start angle at 0
var amplitude = 5.0; // Height of wave
var period = 50.0;   // How many pixels before the wave repeats
var dx;               // Value for incrementing x
var yvalues=[];  // Using an array to store height values for the wave

var testN =0.0;
var magVal=0;

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
  canvas.position(width+200, 100);
  canvas.class("lemon");
  fill(0)
  noStroke()
  textSize(16)

    w = width+16;
    dx = (TWO_PI / period) * xspacing;
    yvalues = new Array(0.8*width);
    console.log(yvalues.length);
    console.log(dx);

}

function draw() {

  // These commands are applied to the graphics canvas as normal.
  background(250, 230, 230);


  // ellipse(width/2, height/2, 100, 100);
  // ellipse(width/4, height/2, 50, 50);
    push();
    translate(50, 200);
    strokeWeight(1);
    stroke(20);
    smooth();
    maglines();
sinWave();
    pop();
    fill(0);
    strokeWeight(1);

    //console.log(yvalues[1])
    fill(20);
    text(`Plotting ${table.getRowCount()} seismic events`, 20, 40)
    text(`Largest Magnitude: ${getColumnMax("mag")}`, 20, 60)
    text(`Greatest Depth: ${getColumnMax("depth")}`, 20, 80)

}



function maglines(){

  var y = height*0.5;
  beginShape();
  noFill();
    for(var x = width*0.1; x < width*0.9; x++) {
    var ypos = map(noise(x/100 + xoff, y/100 + yoff), 0, 1, -30, 50);

    var magnitu = x < width*0.9 ? map(x, width*0.1, width*0.5, 0, 1) : map(x, width*0.5, width*0.9, 1, 0) ;
        ypos *= magnitu;
        if(ypos > 0) ypos = 0;
      vertex(x, ypos);


    }

    endShape();

    xoff += 0.01;
    yoff += -0.01;
}

function sinWave(){
  var ypos = height*0.1;
  // Increment theta (try different values for
  // 'angular velocity' here)
  theta += 0.02;
  //theta += random(0,1);
  testN += 0.09 ;
  var x2=testN;
  // For every x value, calculate a y value with sine function
  var x1 = theta;
  for (var i = 0; i < yvalues.length; i++) {
    //yvalues[i] = sin(x1)*amplitude*noise(100);
    yvalues[i] = amplitude*noise(x2);
    x1+=dx;
    //x2+=.02;
    x2+= .05;
  }


  beginShape();
  noFill();

  for (var x = 0; x < yvalues.length; x++) {
  //  ellipse(x*xspacing, height/2+yvalues[x], 1, 1);

    vertex(x, ypos+yvalues[x]);

  }



    endShape();

}
