var atmospheric;
var underground;

function preload(){
    atmospheric = loadJSON('data/atmospheric.json');
    underground = loadJSON('data/underground.json');
}

function setup(){
    createCanvas(3200, 1600);
    background(0);

  }

  // using divergent palette for negative values for underground tests
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
  // shapes have not been added yet. I'm trying out a mushroom cloud situation 
