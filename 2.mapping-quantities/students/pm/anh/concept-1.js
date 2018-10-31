var atmospheric
var underground

function preload(){
  atmospheric = loadJSON('data/atmospheric.json')
  underground = loadJSON('data/underground.json')
}

function setup(){
  createCanvas(4700, 1500)
  background(0)

  // pick one of the three data files to work with and call it 'data'
  var data = atmospheric

  // create a divergent palette where we'll use negative values for underground tests
  // and positive values for atmospheric (the -60 .. 80 range came from eyeballing the data)
  var palette = Brewer.divergent('Spectral', Infinity, -60, 0, 80)

  // set up typography
  textFont("Rokkitt")
  textSize(16)
  fill(230)
  noStroke()

  var x = 200
  var y = 200
  var rowHeight = 120
  var colWidth = 60

  // draw country name labels on the left edge of the table
  textStyle(BOLD)
  textAlign(RIGHT)
  for (var country in data.tests){
    text(country, x-colWidth, y)
    y += rowHeight
  }

  // draw each year's totals, one column at a time
  textStyle(NORMAL)
  textAlign(CENTER)
  for (var i=0; i<data.years.length; i++){
    y = 230

    // draw the year label in the header row
    var year = data.years[i]
    fill(230)
    text(year, x, y-rowHeight)

    // step through all the countries' totals for the year, row by row
    for (var country in data.tests){
      // draw the atmospheric tests as an upper semicircle using the palette to set the color by value
      var value = atmospheric.tests[country][i]
      //var radius = Math.sqrt(60 * value)
      var radius = value*1.6
      var color = palette.colorForValue(value)
      fill(color)
      //arc(x, y, radius, radius, -PI, 0)
       triangle(x, y, x+radius/2, y-radius, x+radius, y);
        //rect(x, y-value, radius, radius)
      

      // draw the underground tests as a lower semicircle using its *negative* value to pick the color
      value = underground.tests[country][i]
      //radius = Math.sqrt(60 * value)
      radius = value*1.6
      color = palette.colorForValue(-value)
      fill(color)
      triangle(x, y, x+radius/2, y+radius, x+radius, y);
      //arc(x, y, radius, radius, 0, PI)
      //rect(x, y, radius, radius)

      // shift downward before drawing the next country
      y += rowHeight
    }

     // at the bottom, draw a full circle with the total number of tests that year
    var totalTests = 0
    for (var country in data.tests){
      totalTests += atmospheric.tests[country][i] + underground.tests[country][i]
    }
    var radius = totalTests
    fill(255, 122, 122, 80)
    //ellipse(x, y, radius)
    rect(x, y, radius, radius)

    // shift leftward before drawing the next year
    x += colWidth
  }

}
