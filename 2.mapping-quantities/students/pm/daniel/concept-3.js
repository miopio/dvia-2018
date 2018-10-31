var totals

function preload(){
  totals = loadJSON('data/totals.json')
}

function setup(){
  createCanvas(3200, 700)
  background(0)   

var data = totals

  // create a sequential palette. (The 0-30 range balances the need to highlight years with many tests and those with few)
var palette = Brewer.sequential('YlOrBr', Infinity, 0, 30)


  // set up typography
  textFont("Avenir")
  textSize(16)
  fill(200)
  noStroke()

  var x = 200
  var y = 100
  var rowHeight = 60
  var colWidth = 40

  // draw country name labels on the left edge of the table
  textStyle(BOLD)
  textAlign(RIGHT)
  for (var country in data.tests){
    text(country, x-colWidth, y)
    y += rowHeight  
 }

 // draw each year's totals, one column at a time
  textStyle(NORMAL)
  textAlign(LEFT)
  for (var i=0; i<data.years.length; i++){
    y = 100

    // draw the year label in the header row
    var year = data.years[i]
    fill(230)
    text(year, x, y-rowHeight)

    // step through all the countries' totals for the year, row by row
    for (var country in data.tests){
      // draw total tests as a square using the palette to set the color by value
      var value = data.tests[country][i]
      var color = palette.colorForValue(value)
      fill(color)
      rect(x, y, 40, 40)
      // shift downward before drawing the next country
      y += rowHeight
  } 
    
      // shift leftward before drawing the next year
       x += colWidth
    }

}

