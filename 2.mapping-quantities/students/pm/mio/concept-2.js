var table

function preload(){
  table = loadTable('data/nuclearTreatyTypes.csv', 'csv', 'header')
}

function setup(){
  createCanvas(3900, 250)
  background(127)
  noStroke()
  textAlign(CENTER)
  textSize(16)

  // calculate the total number of tests per year (and also the max in any given year)
  /*var years = []
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
  } */

  var years = []
  var treatyType = []
  for (var r=0; r<table.getRowCount(); r++){
  	var year = table.getString(r,0)
  	var tType = table.getString(r,1)
  

  years.push(year)
  treatyType.push(tType)
}

console.log(years)
console.log(treatyType)

  // draw a box for each year and set its color based on the total number of tests
  var x = 50
  var y = 50
  var dim = 15
  var numberOfShades = 4
  var palette = Brewer.sequential('PuRd', numberOfShades, 0, 3)

  for (var i=0; i<years.length; i++){
    // draw the box
    var color = palette.colorForValue(treatyType[i])
    fill(color)
    rect(x, y, dim, dim)

    // draw the year number on top
    /*fill('white')
    text(years[i], x+dim*.5, y+dim*.6) */
    x+=dim 
  }

}
