var atmospheric;
var underground;

function preload(){
  atmospheric = loadJSON('../data/atmospheric.json');
  underground = loadJSON('../data/underground.json');
  externalData = loadTable('../data/national_material_capabilities_masterdata.csv', 'statenme', 'year' ,'milex' ,'milper' ,'irst' ,'pec' ,'tpop' ,'upop', 'upopgrowth','cinc');

}

function setup(){
  // print(externalData.getColumn('name'))
  // //["Goat", "Leopard", "Zebra"]
  //
  // //cycle through the table
  // for (var r = 0; r < externalData.getRowCount(); r++)
  //   for (var c = 0; c < externalData.getColumnCount(); c++) {
  //     print(externalData.getString(r, c));
  //   }

  //count the columns
  //print(externalData.getRowCount() + ' total rows in table');
  //print(externalData.getColumnCount() + ' total columns in table');
  var canvasWidth = 3200;
  var canvasHeight = 700;
  createCanvas(canvasWidth, canvasHeight);
  background(0);

  // pick one of the three data files to work with and call it 'data'
  var data = atmospheric;

  //console.log(externalData);

  // create a divergent palette where we'll use negative values for underground tests
  // and positive values for atmospheric (the -60 .. 80 range came from eyeballing the data)
  var palette = Brewer.divergent('RdBu', Infinity, -60, 0, 80);
  var palette2 = Brewer.sequential('PuBuGn', Infinity, 0, 100 , 180);


  // set up typography
  textFont("Oswald");
  textSize(18);
  //fill(0);
  noStroke();

  var x = 200;
  var y = 100;
  var rowHeight = 60;
  var colWidth = 40;
  var backgroundBaseColor = []; //array to store colors per year for gradient

  for (var i=0; i<data.years.length; i++){


  //TOTAL TESTS: at the bottom, draw a background change like a heat map for the total number of tests that year
  var totalTests = 0;

  for (var country in data.tests){ //count up total number of nuclear tests
    totalTests = totalTests + atmospheric.tests[country][i] + underground.tests[country][i];
  }
  backgroundBaseColor[i] = palette2.colorForValue(totalTests); //store color for each year
  //fill(palette2.colorForValue(totalTests)); //set draw color to brewer value of totalTests
  //print(totalTests);
  //ellipse(x, y, radius);
  //rect(x - colWidth/2, 0, colWidth, canvasHeight);//draw a rectangle for this year
  //x += colWidth; //push x to the left, to get ready to draw the next rectangle
}
//draw gradient to represent
for (var i = 0; i < backgroundBaseColor.length; i++){ //go through each color stored
  for (var j = 0; j < colWidth; j++) //go through each line in the column one by one (pixel by pixel)
  {
    if (!(i == backgroundBaseColor.length-1)){ //make sure i don't go past the last color we stored (the last index of our backgroundBaseColor array)
      var c = lerpColor(backgroundBaseColor[i], backgroundBaseColor[i+1], j/colWidth); //lerping between the color we're at & the next color (don't do the last one bc there isn't another color after the last one)
      stroke(c); //set our line drawing color to the color we determined in our lerp
        var xPosition = (200- colWidth/2)+j + (i*colWidth);
      line(xPosition, 0, xPosition, canvasHeight); //draw the line
    }
    else { //deal with the final year
      var c = lerpColor(backgroundBaseColor[i], backgroundBaseColor[i], j/colWidth); //lerping between the color we're at & the next color (don't do the last one bc there isn't another color after the last one)
      stroke(c); //set the line drawing color to the color that is determined in lerp
      var xPosition = (200- colWidth/2)+j + (i*colWidth);
      line(xPosition, 0, xPosition, canvasHeight); //draw the line
    }
  }
}

  stroke(0,0,0,1);

  x = 200; //resetting the value of X, because we need to start drawing from the left again
  // draw country name labels on the left edge of the table
  textStyle(BOLD);
  textAlign(RIGHT);
  fill(255);//set draw color to white
  for (var country in data.tests){ //go through all the countries in dataset
    text(country, x-colWidth, y); //draw the name of each country
    y += rowHeight; //move down in height to get ready for the next row (country)
  }

  // draw each year's totals, one column at a time - UNSURE HOW TO GET THIS TO BECOME 5 YEAR INCREMENTS
  textStyle(NORMAL);
  textAlign(CENTER);
  for (var i=0; i<data.years.length; i++){
    y = 100;

    // draw the year label in the header row - - UNSURE HOW TO GET THIS TO BECOME 5 YEAR INCREMENTS
    var year = data.years[i];// this gets the string for the year, like "1946"
    strokeWeight(2);
    stroke(0);
    fill(255);
    text(year, x, y-rowHeight);

    // step through all the countries' totals for the year, row by row
    for (var j = 0; j < Countries.length; j++){


      // ATMOSPHERIC TESTS: draw the atmospheric tests as an upper semicircle using the palette to set the color by value
      var value = atmospheric.tests[Countries[j]][i];
      var radius = Math.sqrt(60 * value);
      var color = palette.colorForValue(value);
      fill(59, 247, 42, 200); //NEON GREEN ARCS
        stroke(255);
        //stroke(91+20, 91+20, 115+20, 255);
        strokeWeight(1);
      rect(x-colWidth/2+7.5, y, 20, value);
      //arc(x, y, radius, radius, -PI, 0);

      // UNDERGROUND TESTS: draw the underground tests as a lower semicircle using its *negative* value to pick the color
      value = underground.tests[Countries[j]][i];
      radius = Math.sqrt(60 * value);
      color = palette.colorForValue(-value);
        fill(79, 96, 97, 200); //CHARCOAL GRAY ARCS
        //fill(254, 131, 43, 200); //NEON ORANGE ARCS
        stroke(255);
        //stroke(103+20, 222+20, 49+20, 255);
        strokeWeight(1);
      //line(x-colWidth/2+7.5, y, 20, value);
      rect(x-colWidth/2+7.5, y, 20, value);
      //arc(x, y, radius, radius, 0, PI);

      // shift downward before drawing the next country
      y = y + rowHeight;
    }

    // shift leftward before drawing the next year
    x +=  colWidth;
  }
}

/*var clicked  = 1;
clickedRows = 1;
var lastClicked = -1;
function mousePressed() {
  clicked++;
  if (clicked % 71 == 0)
  {
    clickedRows++;
  }
  redraw();
}*/
var Countries =[
"United States", //index 0
"Russia", //index 1
"United Kingdom", //index 2 ...
"France",
"China",
"India",
"Pakistan",
"North Korea"];

// print out the external data for each country, one column at a time
//   x = 200
//   for (var r=0; r<table.getRowCount(); r++){
//     y = 100
//     for (var c=1; c<table.getColumnCount(); c++){
//       var value = table.getNum(r, c)
//       text(value, x, y)
//       y += rowHeight
//     }
//     x += colWidth
//   }
//  rect(30, 20, 55, 55);
// }
