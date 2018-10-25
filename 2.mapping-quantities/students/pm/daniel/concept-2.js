var table

function preload(){
  table = loadTable('data/totals.csv', 'csv', 'header')
}

function setup(){
  createCanvas(7500, 200)
  background(255)
  noStroke()
  textAlign(CENTER)
  textSize(40)

  // calculate the total number of tests per year (and also the max in any given year)
  var years = []
  var totals = []
  var lowest = 0
  var highest = 0
  for (var r=0; r<table.getRowCount(); r++){
    var sum = 0
    var year = table.getString(r, 0)
    for (var c=1; c<table.getColumnCount(); c++){
      sum += table.getNum(r, c)
    }

    years.push(year)
    totals.push(sum)
    highest = Math.max(sum, highest)
  }

  // draw a white band and set the color of each year's text based on the total number of tests
  var x = 100
  var y = 100
  var dim = 100

  // set the color palette
  var numberOfShades = 9
  var palette = Brewer.sequential('Reds', numberOfShades, lowest, highest)

  
  // count the number of years 
  for (var i=0; i<years.length; i++){
    
    //set the color sequence according to total tests 
    var color = palette.colorForValue(totals[i])
 

    // draw the year number
    fill(color)
    textStyle(BOLD)
    textFont("Rokkitt")
    text(years[i], x+dim*.5, y+dim*.2)
    x+=dim
  }

}