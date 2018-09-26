
var linesGroup = [];
var unit =60;
function setup() {
  // set the width & height of the sketch
  createCanvas(600, 600)

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


//create line obj
for (var y=0; y< highCount; y++) {
    for (var x= 0; x<wideCount; x++) {
            if(index<60){
              // if (index < clock().min) {
              //   linesGroup[index++]= new lineClass(x*60+30, y*60+230, x*60+30, y*60+230, x, y);
              // } else {
                linesGroup[index++]= new lineClass(x*60+30, y*60+200, x*60+30, y*60+230, x, y);
              //}


            }
          }
        }


        linesGroup.forEach(function(item, index, array){

        //  console.log(item.y1-30);

        });

  console.log(clock().hours);

}

function draw() {
  // check the clock for the current time and unpack some of its fields to generate a time-string
  var now = clock()

  // set the background to 'white' – you can also specify colors use integers, hex-color strings and more.
  // note that setting the background also clears the canvas from our previous round of drawing
  background(color(20,20,20))

  // set up typography & drawing-color
  textFont("Anonymous Pro") // ← check index.html to see how it was loaded from google-fonts
  textSize(42) // make it big
  fill(100, 50, 50)

  // draw the time string to the canvas
  //text(now.text.date, 30, 50)
  //text(now.text.time, 30, 100)

  var indexValue = now.min
  var seconds = map(now.sec,  0,60, 0,31)



  // var seconds = map(now.sec,  0,60, 0,50)
  //console.log(now.min)
  //
  // line(20,200+seconds,20,250);

//console.log(indexValue);


translate(0, -60);

  for(var i=0; i<linesGroup.length; i++){

    if(i<indexValue){

        linesGroup[i].y1=linesGroup[i].yOffset * 60 + 200
        linesGroup[i].Hide();
        //linesGroup[indexValue].y1 = (linesGroup[indexValue].yOffset * 60) + (200 + seconds)

        //console.log(StrokeShow);
    }else if (i>indexValue){
        stroke(color(220,200,220,255))
      linesGroup[i].display();
      linesGroup[i].y1=linesGroup[i].yOffset * 60 + 200


    } else if (i==indexValue){
      linesGroup[i].y1=linesGroup[i].yOffset * 60 + 200
      linesGroup[i].Hide();
        stroke(color(random(100,255),random(100,150),random(100,255),255))
      linesGroup[indexValue].y1 = (linesGroup[indexValue].yOffset * 60) + (200 + seconds)
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
