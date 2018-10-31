var totals
//var level

function preload(){
  totals = loadJSON('data/totals.json')
  level = loadJSON('data/ines.json')
}

function setup(){
  createCanvas(1400, 600)
  background(255)

  // pick one of the three data files to work with and call it 'data'
  var data = totals 
  //var tests = level
  
  var palette = Brewer.divergent('RdBu', Infinity, -60, 0, 80)
  //console.log(level)
  // log the whole dataset to the console so we can poke around in it
  print(data)

  // set up typography
  textFont("Helvetica")
  textSize(10)
  fill(30)
  noStroke()

  var x = 70
  var y = 200
  var rowHeight = 100
  var colWidth = 27

  // draw country name labels on the left edge of the table
  // textStyle(BOLD)
  // textAlign(LEFT)
  // for (var country in data.tests){
  //   text(country, x-colWidth, y)
  //   y += rowHeight + 50
  // }

  // textStyle(NORMAL)
  // textAlign(CENTER)
  
  data.tests.ines = []
  
  // show the ines tests at the bottom 
  for (var i=0; i<data.years.length ; i++){
    y = 200
    data.tests.ines.push(level[i].INES)
    
  // draw the year labels in the header row
    var year = data.years[i]
    fill(30)
    text(year, x, y-rowHeight)
    
  // draw the total tests as a circle 
    var tests = data.tests.ines[i]
    fill('rgba(255,0,0, 0.25)')
    stroke('red')
    strokeWeight(1.5)
    //radius = Math.sqrt(60 * value)
    if (value == 0) { 
      noStroke()
    }
    ellipse(x, 300, value*15, value*15)
   
  // print out the total for each country, one row at a time
    for (var country in data.tests){
      
  //draw the total tests as a rectangle 
      var value = data.tests[country][i]
      var color = palette.colorForValue(value)
      var negColor = palette.colorForValue(-value)
      noStroke()
      
      //fill(color)
      if (country == "Russia") {
        fill(color)
      } else {
        fill(negColor)
      }
      
      if (country == "ines") {
        noFill()
      }
      
      if (country == "Russia") {
        rectMode(CORNER)
      } 
      
      if (country == "Russia") {
        rect(x, 125, 20, value*2)
      } else {
        rect(x, 425, 20, value*2)
      }
      
      //rect(x, y, 20, value*2)
      
   // shift downward before drawing the next country
     y += rowHeight
    }

   x += colWidth
  }
  print(data)

}
