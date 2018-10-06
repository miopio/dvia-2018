
var font;
var fontsize = 11;
var atmostphericData; // declare a global variable to store the data
var undergroundData;
var totalsData;
var table;
var c = color('#00ff00');

function preload() {
  // start fetching the data and assign it to your global
  totalsData = loadTable('http://localhost:8080/2.mapping-quantities/students/am/janice/data/totals.csv');
  atmostphericData = loadTable('http://localhost:8080/2.mapping-quantities/students/am/janice/data/atmospheric.csv');
  undergroundData = loadTable('http://localhost:8080/2.mapping-quantities/students/am/janice/data/underground.csv');
}


function setup(){
  createCanvas(2440, 1080);
  font = loadFont('font.otf');
  textFont(font);
  textSize(fontsize);
  textAlign(RIGHT, CENTER);
  table = totalsData;

  print(atmostphericData);
  print(undergroundData);
  print(totalsData);
}
  // Align the text to the right
  // and run drawWords() in the left third of the canvas
  textAlign(RIGHT);
  drawWords( width * .25 );

function drawWords(x) {
  // The text() function needs three parameters:
  // the text to draw, the horizontal position,
  // and the vertical position
  var x = 100
  var y = 350
  var rowHeight = 30
  var colWidth = 31

   // draw year labels in the header row
  textStyle(NORMAL)
  textAlign(BOLD)
  for (var r=0; r<table.getRowCount(); r++){
    var year = table.getString(r, 0);
    //drawRects(x,y-rowHeight,colWidth,rowHeight);
    text(year, x, y-rowHeight);
    
    x += colWidth;
  }
  //function drawRects(x,y,width,height) {
  	  // fill(c);
    //noStroke();
    //rect(x,y,width,height);
  }