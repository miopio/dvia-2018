var totals
var atmospheric
var underground


function preload(){
  totals = loadTable('data/totals.csv', 'csv', 'header')
  atmospheric = loadTable('data/atmospheric.csv', 'csv', 'header')
  underground = loadTable('data/underground.csv', 'csv', 'header')
}

function setup(){
  createCanvas(4000, 2000)
  // background(255, 215, 215)

  // pick one of the three data files to work with and call it 'table'
  var table = totals

  // log the whole dataset to the console so we can poke around in it
  print(table)

  // set up typography
  textFont("Helvetica")
  textSize(16)
  fill(30)
  noStroke()

  var c;
c = color('rgb(0,0,255)');
fill(c);
blendMode(ADD);
ellipse(100, 100, 100, 100);

strokeWeight(1);
stroke(100);
line(100,100,100+(cos((21/57)*TWO_PI)*(100/2)),100+(sin((21/57)*TWO_PI)*(100/2)))

noStroke();
c = color('rgb(200,200,10)');
fill(c);
// blendMode(ADD);
ellipse(100, 100, 30, 30);

ellipse(170, 100, 110, 110);


  c = color('rgb(0,0,0)')
  fill(c);
  var x = 200
  var y = 100
  var rowHeight = 60
  var colWidth = 100

  // draw country name labels on the left edge of the table
  // textStyle(BOLD)
  textAlign(LEFT)
  for (var c=1; c<table.getColumnCount(); c++){
   text(table.columns[c], x-colWidth, y)
    y += rowHeight
  }


  // draw year labels in the header row
  x = 200
  y = 100
  textStyle(NORMAL)
  textAlign(BOLD)
  for (var r=0; r<table.getRowCount(); r++){
    var year = table.getString(r, 0)
    text(year, x, y-rowHeight)
    x += colWidth
  }

  // print out the total for each country, one column at a time
  x = 200
  for (var r=0; r<table.getRowCount(); r++){
    y = 100
    for (var c=1; c<table.getColumnCount(); c++){
      var value = table.getNum(r, c)
      text(value, x, y)
      y += rowHeight
    }
    x += colWidth
  }



}