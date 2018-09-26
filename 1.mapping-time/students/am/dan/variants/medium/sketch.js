
var linesGroup = [];
var unit =20;
function setup() {
  // set the width & height of the sketch
  createCanvas(1200, 800);

  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you
  print('starting time:', clock())

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

}

function draw() {
  // check the clock for the current time and unpack some of its fields to generate a time-string
  var now = clock()

  // set the background to 'white' – you can also specify colors use integers, hex-color strings and more.
  // note that setting the background also clears the canvas from our previous round of drawing
  background(colorMatchTime());
//console.log(colorMatchTime());
  // set up typography & drawing-color
  textFont("Anonymous Pro") // ← check index.html to see how it was loaded from google-fonts
  textSize(42) // make it big
  fill(100, 50, 50)
var Test= map(clock().min, 31,60, 0,160,30)
 //console.log(Test);
  // draw the time string to the canvas
  //text(now.text.date, 30, 50)
  //text(now.text.time, 30, 100)

  var indexValue = now.min +now.hours*60
  var seconds = map(now.sec,  0,60, 0,11)



  // var seconds = map(now.sec,  0,60, 0,50)
  //console.log(now.min)
  //
  // line(20,200+seconds,20,250);

//console.log(indexValue);


translate(0, 30);
//rotate(PI / 1.5);
  for(var i=0; i<linesGroup.length; i++){

    if(i<indexValue){

        linesGroup[i].y1=linesGroup[i].yOffset * 30 + 20
        linesGroup[i].Hide();

    }else if (i>indexValue){
        stroke(color(220,200,220,255))
      linesGroup[i].display();
      linesGroup[i].y1=linesGroup[i].yOffset * 30 + 20


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
    var MTime= millis();
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
