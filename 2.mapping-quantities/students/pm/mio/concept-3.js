var atmospheric
var underground

function preload(){
  johnstons = loadTable('data/johnstons-archive.csv', 'csv', 'header')
  atmospheric = loadJSON('data/atmospheric.json')
  underground = loadJSON('data/underground.json')

}

function setup(){
  createCanvas(3200, 700)
  background(0)

  // pick one of the three data files to work with and call it 'data'
  var data = atmospheric

  // create a divergent palette where we'll use negative values for underground tests
  // and positive values for atmospheric (the -60 .. 80 range came from eyeballing the data)
  var palette = Brewer.divergent('PiYG', Infinity, -60, 0, 80)

  // set up typography
  textFont("Rokkitt")
  textSize(16)
  fill(230)
  noStroke()

  var x = 200
  var y = 100
  var rowHeight = 60
  var colWidth = 40

  // draw country name labels on the left edge of the table
  /*textStyle(BOLD)
  textAlign(RIGHT)
  for (var country in data.tests){
    text(country, x-colWidth, y)
    y += rowHeight
  }*/

  // draw each year's totals, one column at a time
  textStyle(NORMAL)
  textAlign(CENTER)
  for (var i=0; i<data.years.length; i++){
    y = 100

    // draw the year label in the header row
    var year = data.years[i]
    fill(230)
    text(year, x, y-rowHeight)

    // step through all the countries' totals for the year, row by row
    /*for (var country in data.tests){
      // draw the atmospheric tests as an upper semicircle using the palette to set the color by value
      var value = atmospheric.tests[country][i]
      var radius = Math.sqrt(60 * value)
      var color = palette.colorForValue(value)
      fill(color)
      ellipse(x, y, radius, radius, -PI, 0)

      // draw the underground tests as a lower semicircle using its *negative* value to pick the color
      value = underground.tests[country][i]
      radius = Math.sqrt(60 * value)
      color = palette.colorForValue(-value)
      fill(color)
      ellipse(x, y, radius, radius, 0, PI)

      // shift downward before drawing the next country
      y += rowHeight
    } */

    var totalAtmosphericTests = 0
    var totalUndergroundTests = 0
    for (var country in data.tests){
      totalAtmosphericTests += atmospheric.tests[country][i]
      var radius = Math.sqrt(60 * totalAtmosphericTests)
      var color = palette.colorForValue(totalAtmosphericTests)
      fill(color, 0.5)
      arc(x, y, radius, radius, -PI, 0)

      totalUndergroundTests += underground.tests[country][i]
      radius = Math.sqrt(60 * totalUndergroundTests)
      color = palette.colorForValue(-totalUndergroundTests)
      fill(color)
      arc(x, y, radius, radius, 0, PI)

      //y += rowHeight

     



    }

    // at the bottom, draw a full circle with the total number of tests that year
    var totalTests = 0
    for (var country in data.tests){
      totalTests += atmospheric.tests[country][i] + underground.tests[country][i]
    }
    var radius = Math.sqrt(60 * totalTests)
    fill(255, 0)
    ellipse(x, y, radius)

    // shift leftward before drawing the next year
    x += colWidth 
  }

}