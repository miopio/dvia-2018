<<<<<<< HEAD
function setup() {
  // set the width & height of the sketch
  createCanvas(400, 130)
=======

var linesGroup = [];
var unit =20;
function setup() {
  // set the width & height of the sketch
  createCanvas(1200, 800);
>>>>>>> 07e3d27472d8c3adbca08059e02a9e179e3f2022

  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you
  print('starting time:', clock())

<<<<<<< HEAD
=======
  var wideCount = width / unit;
  var highCount = height / unit;



    // for(var i=0; i<60; i++){
    //   linesGroup.push(new lineClass(i*60+30, 200, i*60+30, 250));
    //
    // }
    var index = 0;
    var xPos= 20+10;

//create line obj for minuts in a day
for (var y=0; y< highCount; y++) {
    for (var x= 0; x<wideCount; x++) {
            if(index<1440){
              // if (index < clock().min) {
              //   linesGroup[index++]= new lineClass(x*60+30, y*60+230, x*60+30, y*60+230, x, y);
              // } else {
                linesGroup[index++]= new lineClass(x*20+10, y*30+20, x*20+10, y*30+30, x, y);
              //}
            }
          }
        }






  console.log(colorMatchTime());

>>>>>>> 07e3d27472d8c3adbca08059e02a9e179e3f2022
}

function draw() {
  // check the clock for the current time and unpack some of its fields to generate a time-string
  var now = clock()

  // set the background to 'white' – you can also specify colors use integers, hex-color strings and more.
  // note that setting the background also clears the canvas from our previous round of drawing
<<<<<<< HEAD
  background('white')

=======
  background(colorMatchTime());
//console.log(colorMatchTime());
>>>>>>> 07e3d27472d8c3adbca08059e02a9e179e3f2022
  // set up typography & drawing-color
  textFont("Anonymous Pro") // ← check index.html to see how it was loaded from google-fonts
  textSize(42) // make it big
  fill(100, 50, 50)
<<<<<<< HEAD

  // draw the time string to the canvas
  text(now.text.date, 30, 50)
  text(now.text.time, 30, 100)

}
=======
var Test= map(clock().min, 31,60, 0,160,30)
 //console.log(Test);
  // draw the time string to the canvas
  //text(now.text.date, 30, 50)
  //text(now.text.time, 30, 100)

  var indexValue = now.min +now.hours*60
  var seconds = map(now.sec,  0,60, 0,11)



  // var seconds = map(now.sec,  0,60, 0,50)
  //console.log(now.ms)
  //
  // line(20,200+seconds,20,250);

 //console.log(now.millis);
  //console.log(secondLine.MTime);
MoreLine();



  translate(0, 31);
//rotate(PI / 1.5);
  for(var i=0; i<linesGroup.length; i++){

    if(i<indexValue){

        linesGroup[i].y1=linesGroup[i].yOffset * 30 + 20
        linesGroup[i].Hide();

    }else if (i>indexValue){
        stroke(color(220,200,220,255))
      linesGroup[i].display();
      linesGroup[i].y1=linesGroup[i].yOffset * 30 + 20
      //if(indexValue)

    } else if (i==indexValue){
      linesGroup[i].y1=linesGroup[i].yOffset * 30 + 20
      linesGroup[i].Hide();
        stroke(color(random(100,255),random(100,150),random(100,255),255))
      linesGroup[indexValue].y1 = (linesGroup[indexValue].yOffset * 30) + (20 + seconds)
      linesGroup[i].display();
     }
  }
}



function lineClass(x1, y1, x2, y2, xoff, yoff){
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
  this.xOffset = xoff
  this.yOffset = yoff

  this.display = function() {

      strokeWeight(2);
    //stroke(pink);
    line(this.x1,this.y1, this.x2, this.y2);

  };
  this.Hide = function(){


    //White = color(255,0,0,StrokeShow);

  //  var StrokeShow=150;

    var Showcolor=color(50,50,50,255);
    strokeWeight(2);
      stroke(Showcolor);
    line(this.x1,this.y1, this.x2, this.y2);

  }

  };


  function colorMatchTime(){

    var colorMatch;
    //0-6
    if(clock().hours<6 || clock().hours>=20){
      colorMatch=color(20,30,20)
    } else if( clock().hours>= 6 && clock().hours< 7 ){

          var Plus100 = map(clock().min,  0,60, 0,100)
          var Plus50 = map(clock().min,  0,60, 0,50)
      colorMatch= color((20+Plus100),(30+Plus100),(20+Plus50));

    }else if(clock().hours>=7 &&clock().hours<19){
        colorMatch= color(120,130,80);

    }else if(clock().hours>=19 && clock().hours<20){
      var Plus60 = map(clock().min,  0,30, 0,60)
      var Minus50 = map(clock().min,  0,30, 0,50)
      var Plus40 = map(clock().min,  0,30, 0,40)
      var Min160= map(clock().min, 31,60, 0,160,30)
      var Minus51 = map(clock().min,  31,60, 0,50,30)
      var Minus90=map(clock().min, 31,60, 0,90,30)
      if(clock().min<30){
        colorMatch=color((120+Plus60),(130-Minus50),(70+Plus40));
      }else if(clock().min>=30){
        colorMatch=color((180-Min160),(80-Minus51),(110-Minus90));
      }
      //colorMatch=color((120+Plus60-Min160),(130+Minus50-Minus51),(100+Plus40-Minus90));
    }
    return colorMatch;

  }


  var MoreLine = function(){
    smooth()

    //translate(,0);
    stroke(color(100,100,220,200))
    var yearProgress= map(clock().progress.year, 0,1, 0, width)
    line(0+(yearProgress/2),.5*height, width-yearProgress+yearProgress/2, 0.5*height);

    // strokeWeight(3);

    // line(0,0.5*height,width,0.5*height);
    stroke(color(250,100,100,255))
    strokeWeight(3);
    var ms= map(clock().ms, 0,1000, 0, width);

    line(-30+ms,0.5*height,0+ms,0.5*height);
    line(width-ms,0.5*height,width-30-ms,0.5*height);

    // var MTime=0;
    // if ((millis()-MTime)>=1000){
    //   for(var i=0; i<width; i=i+.1){
    //
    // line(0+i,0.5*height,10+i,0.5*height);
    // }
    // MTime=millis();

    //}

  }
>>>>>>> 07e3d27472d8c3adbca08059e02a9e179e3f2022
