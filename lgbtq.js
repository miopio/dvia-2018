// an array for discrimination
var discrimination
// an array for internalized homophobia 
var internalized
// an array for hiv tests
var tests
// an array for never heard of prep treatment
var never

var table

function preload(){
  table = loadTable('lgbtq-reduced.csv', 'csv', 'header')
}

function setup(){
  createCanvas(800, 600)
  background(255)

  // log the whole dataset to the console so we can poke around in it
  //print(table)

  // set up typography
  textFont("Rokkitt")
  textSize(16)
  fill(30)
  noStroke()

  var x = 200
  var y = 100
  var rowHeight = 60
  var colWidth = 40

  // draw country name labels on the left edge of the table
  textStyle(BOLD)
  textAlign(RIGHT)
  //for (var c=1; c<table.getColumnCount(); c++){
   // text(table.columns[c], x-colWidth, y)
    //y += rowHeight
  //}


  // draw id labels in the header row
  x = 200
  y = 100
  textStyle(NORMAL)
  textAlign(BOLD)
  for (var r=0; r<table.getRowCount(); r++){
    var id = table.getString(r, 0)
    text(id, x, y-rowHeight)
    x += colWidth
  }

  // print out the total for each column
  // x = 200
  // for (var r=0; r<table.getRowCount(); r++){
  //   y = 100
  //   for (var c=1; c<table.getColumnCount(); c++){
  //     var value = table.getNum(r, c)
  //     text(value, x, y)
  //     y += rowHeight
  //   }
  //   x += colWidth
  // }

}