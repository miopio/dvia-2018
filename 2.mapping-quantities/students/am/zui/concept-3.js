var atmospheric
var underground
var table

function preload(){
  atmospheric = loadJSON('data/atmospheric.json')
  underground = loadJSON('data/underground.json')
  table = loadTable('data/warcount.csv', 'csv', 'header')
}

function setup(){
  createCanvas(6200, 700)
  background('#e0e0d9')

  // pick one of the three data files to work with and call it 'data'
  var data = atmospheric

  // create a divergent palette where we'll use negative values for underground tests
  // and positive values for atmospheric (the -60 .. 80 range came from eyeballing the data)
  // var palette = Brewer.divergent('RdBu', Infinity, -60, 0, 80)
  var palette = Brewer.sequential('Oranges', Infinity, 1, 178);
  // set up typography
  textFont("Chakra Petch")
  textSize(16)
  fill('#62592C')
  noStroke()

  var x = 250
  var y = 500
  var rowHeight = 60
  var colWidth = 80

  // draw country name labels on the left edge of the table
  textStyle(BOLD)
  textAlign(RIGHT)
  for (var country in data.tests){
    text(country, x-colWidth, y)
    y -= rowHeight
  }

  // draw each year's totals, one column at a time
  textStyle(NORMAL)
  textAlign(CENTER)
  for (var i=0; i<data.years.length; i++){
    y = 500



    // step through all the countries' totals for the year, row by row
    for (var country in data.tests){
      // draw the atmospheric tests as an upper semicircle using the palette to set the color by value
      var value = atmospheric.tests[country][i]
      var radius = 50
      var color = palette.colorForValue(value)
      fill(color)
      arc(x, y, radius, radius, -PI, 0)

      // draw the underground tests as a lower semicircle using its *negative* value to pick the color
      value = underground.tests[country][i]
      color = palette.colorForValue(value)
      fill(color)
      arc(x, y, radius, radius, 0, PI)

      // shift downward before drawing the next country
      y -= rowHeight
    }

    // at the bottom, draw a full circle with the total number of tests that year
    var totalTests = 0
    for (var country in data.tests){
      totalTests += atmospheric.tests[country][i] + underground.tests[country][i]
    }
    value = totalTests
    color = palette.colorForValue(value)
    fill(color)
    ellipse(x, 592, radius)


    // draw the year label in the header row
    var year = data.years[i]
    fill('#e0e0d9')
    text(year, x, 600)

    // shift leftward before drawing the next year
    x += colWidth
  }

  fill('#62592C')
  textSize(10)
  textAlign(LEFT)
  textStyle(ITALIC)
  text('Reference: Zeev Maoz, Paul L. Johnson, Jasper Kaplan, Fiona Ogunkoya, and Aaron Shreve 2019. The Dyadic Militarized Interstate Disputes (MIDs) Dataset Version 3.0: Logic, Characteristics, and Comparisons to Alternative Datasets, Journal of Conflict Resolution (forthcoming). ',200,30)

  stroke('#62592C')
  strokeWeight(3)
  line(200,550,6100,550)
  strokeWeight(1.5)
  line(4330,35,4330,550)

  noStroke();
  textStyle(NORMAL);
  textSize(16);
  text('The Comprehensive Test Ban Treaty',4330,30);
  triangle(4330,55, 4330,35, 4355, 45)

  //war involvement
  var warYrs = [1947,1950,1951,1954,1956,1958,1962,1965,1968,1970, 1971,1979,1982,1987,1991,1999,2001,2003]


  //
  //
  // fill('#62592C')
  // ellipse(warCols[1],500-rowHeight*5,2,2);
  // ellipse(warCols[1],500-rowHeight*6,2,2);
   ellipse(250+(warYrs[0]-1945)*colWidth,500-rowHeight*5,5,5);
   ellipse(250+(warYrs[0]-1945)*colWidth,500-rowHeight*6,5,5);
   ellipse(250+(warYrs[1]-1945)*colWidth,500-rowHeight*4,5,5);
   ellipse(250+(warYrs[1]-1945)*colWidth,500-rowHeight*7,5,5);
   ellipse(250+(warYrs[1]-1945)*colWidth,500-rowHeight*2,5,5);
   ellipse(250+(warYrs[1]-1945)*colWidth,500-rowHeight*0,5,5);
   ellipse(250+(warYrs[2]-1945)*colWidth,500-rowHeight*3,5,5);
   ellipse(250+(warYrs[3]-1945)*colWidth,500-rowHeight*4,5,5);
   ellipse(250+(warYrs[4]-1945)*colWidth,500-rowHeight*3,5,5);
   ellipse(250+(warYrs[4]-1945)*colWidth,500-rowHeight*2,5,5);
   ellipse(250+(warYrs[4]-1945)*colWidth,500-rowHeight*1,5,5);
   ellipse(250+(warYrs[5]-1945)*colWidth,500-rowHeight*4,5,5);
   ellipse(250+(warYrs[5]-1945)*colWidth,500-rowHeight*3,5,5);
   ellipse(250+(warYrs[6]-1945)*colWidth,500-rowHeight*4,5,5);
   ellipse(250+(warYrs[6]-1945)*colWidth,500-rowHeight*5,5,5);
   ellipse(250+(warYrs[7]-1945)*colWidth,500-rowHeight*5,5,5);
   ellipse(250+(warYrs[7]-1945)*colWidth,500-rowHeight*6,5,5);
   ellipse(250+(warYrs[7]-1945)*colWidth,500-rowHeight*0,5,5);
   ellipse(250+(warYrs[8]-1945)*colWidth,500-rowHeight*0,5,5);
   ellipse(250+(warYrs[9]-1945)*colWidth,500-rowHeight*0,5,5);
   ellipse(250+(warYrs[10]-1945)*colWidth,500-rowHeight*5,5,5);
   ellipse(250+(warYrs[10]-1945)*colWidth,500-rowHeight*6,5,5);
   ellipse(250+(warYrs[11]-1945)*colWidth,500-rowHeight*4,5,5);
   ellipse(250+(warYrs[12]-1945)*colWidth,500-rowHeight*2,5,5);
   ellipse(250+(warYrs[13]-1945)*colWidth,500-rowHeight*4,5,5);
   ellipse(250+(warYrs[14]-1945)*colWidth,500-rowHeight*3,5,5);
   ellipse(250+(warYrs[14]-1945)*colWidth,500-rowHeight*2,5,5);
   ellipse(250+(warYrs[14]-1945)*colWidth,500-rowHeight*0,5,5);
   ellipse(250+(warYrs[15]-1945)*colWidth,500-rowHeight*3,5,5);
   ellipse(250+(warYrs[15]-1945)*colWidth,500-rowHeight*5,5,5);
   ellipse(250+(warYrs[15]-1945)*colWidth,500-rowHeight*6,5,5);
   ellipse(250+(warYrs[15]-1945)*colWidth,500-rowHeight*2,5,5);
   ellipse(250+(warYrs[15]-1945)*colWidth,500-rowHeight*0,5,5);
   ellipse(250+(warYrs[16]-1945)*colWidth,500-rowHeight*3,5,5);
   ellipse(250+(warYrs[16]-1945)*colWidth,500-rowHeight*2,5,5);
   ellipse(250+(warYrs[16]-1945)*colWidth,500-rowHeight*0,5,5);
   ellipse(250+(warYrs[17]-1945)*colWidth,500-rowHeight*2,5,5);
   ellipse(250+(warYrs[17]-1945)*colWidth,500-rowHeight*0,5,5);
}




//////////////////////////////
/////////////////////////////

// var table1;
// var table2;
// var atmospheric;
// var underground;
//
// function preload(){
//   table1 = loadTable('data/totals.csv', 'csv', 'header');
//   table2 = loadTable('data/warcount.csv', 'csv', 'header');
//
//   atmospheric = loadJSON('data/atmospheric.json');
//   underground = loadJSON('data/underground.json');
// }
//
// function setup(){
//   createCanvas(4250, 700);
//   background('#e0e0d9');
//   noStroke();
//   textFont("Chakra Petch");
//   textAlign(CENTER);
//   textSize(16);
//
//   // calculate the total number of tests per year (and also the max in any given year)
//   var years = [];
//   var totals = [];
//   var lowest = 0;
//   var highest = 0;
//   for (var r=0; r<table1.getRowCount(); r++){
//     var sum = 0;
//     var year = table1.getString(r, 0);
//     for (var c=1; c<table1.getColumnCount(); c++){
//       sum += table1.getNum(r, c);
//       var country = table1.getString(0,c);
//     }
//     years.push(year);
//     totals.push(sum);
//     highest = Math.max(sum, highest);
//   }
//
//   // draw a circle for each year and set its color based on the total number of tests
//   var x = 175;
//   var y = 520;
//   var dim = 50;
//   // var numberOfShades = 9;
//   var palette = Brewer.sequential('Oranges', Infinity, lowest, highest);
//
//   textStyle(BOLD);
//   textAlign(RIGHT);
//   fill('#62592C');
//   for (var country in atmospheric.tests){
//     text(country, x, y);
//     y -= 60;
//   }
//
//   // bottom timeline with totals
//   x=250;
//   y=600;
//   for (var i=0; i<years.length; i++){
//     // draw the circles
//     var color = palette.colorForValue(totals[i]);
//     fill(color);
//     ellipse(x, y, dim, dim);
//
//     // draw the year number on top
//     fill('#e0e0d9');
//     text(years[i], x+0.35*dim, y+0.15*dim);
//     x+=dim+5;
//   }
//
//   var data=atmospheric
//   x=200;
//   for (var i=0; i<data.years.length; i++){
//     y = 520
//
//     // draw the year label in the header row
//     var year = data.years[i]
//     fill(230)
//     text(year, x, y-rowHeight)
//
//     // step through all the countries' totals for the year, row by row
//     for (var country in data.tests){
//       // draw the atmospheric tests as an upper semicircle using the palette to set the color by value
//       var value = atmospheric.tests[country][i]
//       var radius = 20
//       var color = palette.colorForValue(value)
//       fill(color)
//       arc(x, y, radius, radius, -PI, 0)
//
//       // draw the underground tests as a lower semicircle using its *negative* value to pick the color
//       value = underground.tests[country][i]
//       radius = 20
//       color = palette.colorForValue(value)
//       fill(color)
//       arc(x, y, radius, radius, 0, PI)
//
//       // shift downward before drawing the next country
//       y -= 60
//     }
//
//     // shift leftward before drawing the next year
//     x += 80
//   }
//
// }
