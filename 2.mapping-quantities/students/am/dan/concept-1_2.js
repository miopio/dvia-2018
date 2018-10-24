var usaNdata;
var usaTrustTable;
var trustRate;
var presidents
var nuclearImage = [];
var faceImages = [];
var img, faceImg, path;
var palette;
var a=0.0;
var b= false;
var presidentInYear,presidentOutYear;
var presidentInYears=0;
var presidentOutYears=0;
var democratic, republican;
function preload() {
  usaNdata = loadJSON('data/totals.json');
  usaTrustTable = loadTable('data/public-trust-in-government.csv', 'csv', 'header');
  presidents = loadTable('data/presidents.csv', 'csv', 'header');
  img = loadImage('assets/Nuclearbomb.svg');
  democratic = loadImage('assets/DemocraticLogo.svg');
  republican = loadImage('assets/Republicanlogo.svg');

}

function setup() {
  createCanvas(3300, 800);
  frameRate(25);
  //background(60,60,50);
  background(10,10,20);
  palette = Brewer.divergent('RdYlGn', Infinity, 0, 50, 100);

  // print(usaNdata.tests["United States"]);
  // print(usaTrustTable.getRowCount() + ' total rows in table');
  // print(usaTrustTable.getColumnCount() + ' total columns in table');
  // print(usaTrustTable.getColumn('Trust in Government (%)'));
  print(usaTrustTable.getColumn('Trust in Government (%)'));

  //print(presidents.getColumn('Took office '));
  //print(presidents.getColumn('Left office '));

 presidentInYear  = presidents.getColumn('Took_office');
 presidentOutYear = presidents.getColumn('Left_office');


  trustRate = usaTrustTable.getColumn('Trust in Government (%)');

 TestPres= new Date(presidents.getColumn('Left_office')[5]).getFullYear();

  print(typeof(usaNdata.years[2]));

  print(presidentInYear);
  print(usaNdata.years[2]);
  //path = querySVG('path');
  //console.log(querySVG('path'));
  //faceImg.strokeWeight(10);



  //translate(0,100)
  //drawTrustLine();
  //var index=0;
  //image(img, 0, 0, 10, 10);  usaNdata.years.length

  //drawNuclear();



  //drawFace(130,130,7);

//restoreDate();
}

function draw(){

background(10,10,20);
//basic info

push();
fill(30,20,50)
noStroke();
rect(0, height-170, width, 170);
rect(0, height-268, width, 10);
fill(30,10,20)
rect(0, height-295, width, 10);
pop();

fill(80,80,50);
rect(0, height-185, width, 45);
fill(255);
image(img,33,height-70,35,40);
textSize(12);
text('Public Trust Rate in US Government (0-100%)', 70, height-90);
text('Nuclear Weapen Test', 70, height-35);
textSize(15);
fill(220)
text('USA Nuclear Weapen Test Data & Pubilic Trust Rate ', 10, 25);

//data
drawNuclear();
showPresident();
drawTrustInRightPos();
faceSample();

}

function faceSample(){


  //var sColor = function(){
  if(a<=100 && b==false){
      a+=0.5;
      if(a>=100){
        b=true;
        }

  } else if  (a >0 && b==true ){
    a-=0.5;
      if (a<=0){
        b=false;

      }
  }

  // return a;
  // }
//print(a)

    var sampleColor= palette.colorForValue(a);
    var sExRate= map(a, 0,100, 1,7);
    drawFace(50,height-100,25,25,sExRate, sampleColor);




}



//line graph
function drawTrustLine() {
  var trusts = [];
  line(11 * 23 + 50, height, 11 * 23 + 50, height - 300);
  text('100%', 10 * 23 + 15, height - 295);
  text('0%', 10 * 23 + 15, height - 5);
  text('Public trust in government, United States', width / 3, height - 10);
  for (var i = 0; i < trustRate.length; i++) {
    var trust = map(trustRate[i], 0, 100, 0, 300);
    trusts.push(trust);
  }
  for (var i = 0; i < trusts.length; i++) {
    line(13 * 23 + 25 + i * 23, height - trusts[i], 13 * 23 + 25 + (i + 1) * 23, height - trusts[i + 1]);
    textSize(8);
    text(usaTrustTable.getColumn('Year')[i], (1958 - 1945) * 23 + 25 + i * 23, height - 300);
  }

  print('remap turst rate'+trusts);
}


function drawTrustInRightPos(){
  var xWidth=43;
  var x =25;



  for (var i = 0; i < usaNdata.years.length; i++) {

    for(var trustYear = 0; trustYear<trustRate.length; trustYear++){

       //ellipse(x+5, height-300, 18, 18);
      if (usaNdata.years[i]==usaTrustTable.getColumn('Year')[trustYear]){
        //text(usaTrustTable.getColumn('Year')[trustYear], x , height-340);
        //fill(255);



        if (mouseX<=x+20 && mouseX>=x-20){
          fill(255);
        text(nfc(trustRate[trustYear],1)+'/%', x +3, height-200);
      } else{
        fill(40,40,70);
        text(nfc(trustRate[trustYear],1)+'/%', x +3, height-200);

      }



        var color= palette.colorForValue(trustRate[trustYear]);
        var expressionRate= map(trustRate[trustYear], 10,80, 0,7);
        drawFace(x+10,height-230, 18, 18,expressionRate, color);
      } else if(usaTrustTable.getColumn('Year')[trustYear]!=usaNdata.years[i]){
        //ellipse(x, height-300, 20, 20);
        push();
            //fill(0);
             //ellipse(x, height-300, 18, 18);
            //drawFace(x+5,height-300,3.5);
        pop();
       }

    }



      x+=xWidth;
  }





}


function showPresident(){
  var xWidth = 43;
  var x = 25;

  for (var i = 0; i < usaNdata.years.length; i++) {



      for (var j = 0 ; j < presidentInYear.length; j++){

       presidentInYears= (new Date(presidentInYear[j]).getFullYear());
       presidentOutYears= (new Date(presidentOutYear[j]).getFullYear());
         //print(presidentInYear[j]);
         //text(usaNdata.years[i], x, 110)

        if ( usaNdata.years[i]>=presidentInYears && usaNdata.years[i]<presidentOutYears){
          //print()
          if (mouseX<=x+20 && mouseX>=x-20){
            fill(255);
              if(presidents.getColumn('Party')[j]=='Republican '){
                image(republican, x + 5, height-162, 15, 15)
              }else{
                image(democratic, x + 5, height-162, 15, 15)
              }

          text(presidents.getColumn('President')[j], x, height-171);
        }
        //  text(presidents.getColumn('President')[33], x, 290);


        }
      }
  x += xWidth;
  }



}








function drawNuclear() {

  var xWidth = 43;
  var x = 25;


  //print(presidentInYear.length);
  for (var i = 0; i < usaNdata.years.length; i++) {
    textSize(8);
    fill(255);

    // print(presidentInYears);

    //text(x, x, 740)

    if (mouseX<=x+20 && mouseX>=x-20){

      fill(250);
      text(usaNdata.years[i], x, 540)
      text(usaNdata.tests["United States"][i], x, 500+usaNdata.tests["United States"][i]*(-5))
  } else{
      fill(100);
      text(usaNdata.years[i], x, 540)
      text(usaNdata.tests["United States"][i], x, 500+usaNdata.tests["United States"][i]*(-5))
  }

    for (var yImage = 0; yImage < usaNdata.tests["United States"][i]; yImage++) {

      if (usaNdata.tests["United States"][i] > 0) {
        //image(img, x, 100, 10, usaNdata.tests["United States"][i]);

        image(img, x + 5, 500 + yImage * (-5), 4, 3);
      }
    }
    x += xWidth;

  }
  // for (var testYear in usaNdata.tests){
  //   text (testYear, x, 100)
  //   x+=xWidth;
  // }

}

function drawFace(x1, y1,w1,h1, expression, color) {
  this.x1 = x1;
  this.y1 = y1;
  this.w1 = w1;
  this.h1 = h1
  this.epression = expression  // sad/0-6/smile
  this.color= color;

  push();
  stroke(255);
  strokeWeight(2);
  strokeCap(ROUND);
  ellipseMode(CENTER);
  fill(color);
  ellipse(x1,y1, w1, h1);
  strokeWeight(.5);
  fill(0)
  stroke(50);
  ellipse(x1-4,y1-1.4, w1/6, w1/6);
  ellipse(x1+4,y1-1.4, w1/6, w1/6);
  noFill();
  strokeWeight(2);
  bezier(x1-4.5, y1+3.5, x1-2, y1+expression, x1+2, y1+expression, x1+4.5, y1+3.5);
  pop();

}
