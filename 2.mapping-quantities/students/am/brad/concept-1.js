var atmospheric
//var underground

function preload(){
  atmospheric = loadJSON('data/atmospheric.json')
  underground = loadJSON('data/underground.json')
}

function setup(){
  createCanvas(3200, 700)
  background(35)


  // added lines for eye to follow
 //fill(0);
 stroke(255,15);
 strokeWeight(1);
  y = 200;

  for(var i=0; i<73; i++) {
    rect(y, 0, 0, 700);
    y += 40; // shorthand for: "y = y + 20" 
  }

 fill(35);
 noStroke();
 rect(0, 0, 3200, 35);

  // pick one of the three data files to work with and call it 'data'
  var data = atmospheric

  // create a divergent palette where we'll use negative values for underground tests
  // and positive values for atmospheric (the -60 .. 80 range came from eyeballing the data)
  var palette = Brewer.divergent('RdYlBu', Infinity, -60, 0, 80)

  // set up typography
  textFont("Montserrat")
  textSize(14)
  fill(255)
  noStroke()

  var x = 200
  var y = 100
  var rowHeight = 80
  var colWidth = 40

  // draw country name labels on the left edge of the table
  //textStyle(BOLD)
  textAlign(RIGHT)
  for (var country in data.tests){
    text(country, x-colWidth, y)
    y += rowHeight
  }


  // draw each year's totals, one column at a time
  textStyle(NORMAL)
  textAlign(CENTER)
  for (var i=0; i<data.years.length; i++){
    y = 100

    // draw the year label in the header row
    var year = data.years[i]
    fill(255)
    text(year, x, y-rowHeight)

    // step through all the countries' totals for the year, row by row
    for (var country in data.tests){
      // draw the atmospheric tests as an upper semicircle using the palette to set the color by value
      var value = atmospheric.tests[country][i]
      var radius = Math.sqrt(60 * value)
      var color = palette.colorForValue(value)
      fill(color)
      arc(x, y, radius, radius, -PI, 0)

      // draw the underground tests as a lower semicircle using its *negative* value to pick the color
      value = underground.tests[country][i]
      radius = Math.sqrt(60 * value)
      color = palette.colorForValue(-value)
      fill(color)
      arc(x, y, radius, radius, 0, PI)

      // shift downward before drawing the next country
      y += rowHeight
    }

    /*// at the bottom, draw a full circle with the total number of tests that year
    var totalTests = 0
    for (var country in data.tests){
      totalTests += atmospheric.tests[country][i] + underground.tests[country][i]
    }
    var radius = Math.sqrt(60 * totalTests)
    fill(255, 80)
    ellipse(x, y, radius)
    */

    // shift leftward before drawing the next year
    x += colWidth

  }


}
