var totals
var atmospheric
var underground

function preload(){
  totals = loadJSON('data/totals.json')
  atmospheric = loadJSON('data/atmospheric.json')
  underground = loadJSON('data/underground.json')
}

function setup(){
  createCanvas(3200, 600)
  background(200)

  // pick one of the three data files to work with and call it 'data'
  var data = atmospheric 
  
  var palette = Brewer.divergent('RdBu', Infinity, -60, 0, 80)

  // log the whole dataset to the console so we can poke around in it
  print(data)

  // set up typography
  textFont("Helvetica")
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
  for (var country in data.tests){
    text(country, x-colWidth, y)
    y += rowHeight
  }


  textStyle(NORMAL)
  textAlign(CENTER)
  for (var i=0; i<data.years.length; i++){
    y = 100

    // draw the year labels in the header row
    var year = data.years[i]
    fill(30)
    text(year, x, y-rowHeight)

    // print out the total for each country, one row at a time
    for (var country in data.tests){
      // draw the atmospheric tests as a circle 
      var value = data.tests[country][i]
      var radius = Math.sqrt(60 * value)
      var color = palette.colorForValue(value)
      fill(color)
      ellipse(x, y, radius, radius)
      
      // draw the underground tests as a circle 
      value = underground.tests[country][i]
      radius = Math.sqrt(60 * value)
      color = palette.colorForValue(-value)
      fill(color)
      ellipse(x, y, radius, radius)
      
      // text(value, x, y)
      y += rowHeight
    }

    x += colWidth
  }

}
