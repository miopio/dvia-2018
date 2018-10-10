var usaNdata;
var usaTrustTable;
var trustRate ;
var nuclearImage= [];

function preload(){
  usaNdata = loadJSON('data/totals.json');
  usaTrustTable= loadTable('data/public-trust-in-government.csv', 'csv', 'header');
   img = loadImage('data/nuclear.svg');
}

function setup(){
  createCanvas(2000, 900);
  background(200);
  print(usaNdata.tests["United States"]);
  print(usaTrustTable.getRowCount() + ' total rows in table');
  print(usaTrustTable.getColumnCount() + ' total columns in table');
  print(usaTrustTable.getColumn('Trust in Government (%)'));

  trustRate= usaTrustTable.getColumn('Trust in Government (%)');
  print(trustRate[1]);



  //translate(0,100)
  drawTrustLine();
//var index=0;
//image(img, 0, 0, 10, 10);  usaNdata.years.length
  drawNuclear();

}

function drawTrustLine(){
  var trusts=[];
  line(11*23+50,height,11*23+50,height-300);
  text('100%', 10*23+15, height-295);
  text('0%', 10*23+15, height-5);
  text('Public trust in government, United States', width/3, height-10);
  for(var i=0; i<trustRate.length; i++){
    var trust = map (trustRate[i],0,100, 0,300);
    trusts.push(trust);
  }
  for(var i=0; i<trusts.length; i++){
    line(13*23+25+i*23, height-trusts[i], 13*23+25+(i+1)*23, height-trusts[i+1]);
    textSize(8);
    text(usaTrustTable.getColumn('Year')[i], (1958-1945)*23+25+i*23, height-300);
  }

print(trusts);
}

function drawNuclear(){
  var xWidth= 23;
  var x=25;
  for (var i =0 ; i<usaNdata.years.length; i++){
      textSize(8);
      text (usaNdata.years[i], x, 540)
      for(var yImage=0; yImage< usaNdata.tests["United States"][i]; yImage++){

      if (usaNdata.tests["United States"][i]>0){
     //image(img, x, 100, 10, usaNdata.tests["United States"][i]);

     image(img, x+5, 500+yImage*(-5), 4, 4);
    }
   }
     x+=xWidth;

  }
  // for (var testYear in usaNdata.tests){
  //   text (testYear, x, 100)
  //   x+=xWidth;
  // }

}

function drawImgClass(x1,y1,w1,h1){
  this.x1= x1;
  this.y1= y1;
  this.w1= w1;
  this.h1= h1;


  image(img, this.x1, this.x2, this.w1, this.h1 );



}
