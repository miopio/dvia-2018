//LOAD DATA SOURCES
var atmospheric;
var underground;
var externalData;

function preload(){
    atmospheric = loadJSON('data/atmospheric.json');
    underground = loadJSON('data/underground.json');
    externalData = loadTable('data/NMC_5_0-wsupplementary.csv');
}


//CREATING CANVAS, FONT, AND OTHER STATIC FUNCTIONS
function setup(){
    createCanvas(800, 800);
    background (77, 77, 77);
  }

var data = atmospheric;
var palette = Brewer.divergent('RdBu', Infinity, -60, 0, 80);

  // trying out another font
  textFont("Roboto+Condensed");
  textSize(12);
  fill(224, 48, 54);
  noStroke();

  var x = 200;
  var y = 100;
  var rowHeight = 60;
  var colWidth = 40;

  // draw country name labels on the left edge of the table
  textStyle(BOLD);
  textAlign(RIGHT);
  for (var country in data.tests){
    text(country, x-colWidth, y);
    y += rowHeight;
  }

  // draw each year's totals, one column at a time
  textStyle(NORMAL);
  textAlign(CENTER);
  for (var i=0; i<data.years.length; i++){
    y = 100;

  // draw the year label in the header row
  var year = data.years[i];
    fill(48, 142, 224);
    text(year, x, y-rowHeight);
}

//DRAW SHAPES AND ANIMATE BACKGROUND & OTHER FEATURES
var r = 0;
var b = 255;

function draw () {
    //background - REMEMBER TO CHANGE THE COLOR & MAP TO DATA TOTALS
    r = map(mouseX, 0, 800, 0, 255);
    b = map(mouseX, 0, 255, 0, 800);
    background(r, 0, b);

    //ellipse
    fill(250, 118, 222);
    ellipse(mouseX, 200, 64, 64);
  }
