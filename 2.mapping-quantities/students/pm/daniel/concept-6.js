var tests
var arsenal


function preload(){
  tests = loadTable('data/totals.csv', 'csv', 'header')
  arsenal = loadTable('data/warheads.csv', 'csv', 'header')

}

function setup(){
  createCanvas(4000, 2150)
  background(0)
  textAlign(LEFT)
  textSize(14)
  fill(255)


  var cols = tests.columns
  var maxTests = {}
  var maxWarheads = {}


  // find the largest number of tests per country and the largest across all countries
  for (var r=0; r<tests.getRowCount(); r++){
    for (var c=1; c<tests.getColumnCount(); c++){
      var country = cols[c]
      var numTests = tests.getNum(r,c)
      maxTests.all = Math.max(maxTests.all || 0, numTests)
      maxTests[country] = Math.max(maxTests[country] || 0, numTests)
    }
  }

  // find the largest arsenal size over time for each country and the all-time peak in any country
  for (var r=0; r<arsenal.getRowCount(); r++){
    for (var c=1; c<arsenal.getColumnCount(); c++){
      var country = cols[c]
      var numBombs = arsenal.getNum(r,c)
      maxWarheads.all = Math.max(maxWarheads.all || 0, numBombs)
      maxWarheads[country] = Math.max(maxWarheads[country] || 0, numBombs)
    }
  }

  console.log('maxTests', maxTests)
  console.log('maxWarheads', maxWarheads)


  // draw the number of bombs in the arsenal for each country & year vs the all-time max for just that country
  var y = 100
  for (var c=1; c<arsenal.getColumnCount(); c++){
    var country = cols[c]
    var x = 50
    var dim = 100
    fill(255)
    text(cols[c], x, y + 20)
    x += 100

    for (var r=0; r<arsenal.getRowCount(); r++){
      var year = arsenal.getString(r,0)
      var numBombs = arsenal.getNum(r,c)

      var maxPerCountry = maxWarheads[country]

      if (maxPerCountry > 0){       
        var palette = Brewer.sequential('Reds', 9, 0, maxPerCountry)
        var color = palette.colorForValue(numBombs)
        fill(color)
      }else{
        fill(255)
  
      }
      rect(x, y, dim, dim)

      x += 50
    }

    y+=40
  }


  // draw the number of bombs in the arsenal vs the all-time max of *any* country
  var y = 600
  for (var c=1; c<arsenal.getColumnCount(); c++){
    var country = cols[c]
    var x = 50
    var dim = 100
    fill(255)
    text(cols[c], x, y + 20)
    x += 100


    for (var r=0; r<arsenal.getRowCount(); r++){
      var year = arsenal.getString(r,0)
      var numBombs = arsenal.getNum(r,c)
      var allTimeMax = maxWarheads.all

      var palette = Brewer.sequential('Oranges', 9, 0, allTimeMax)
      var color = palette.colorForValue(numBombs)
      fill(color)
      rect(x, y, dim, dim)
      x += 50
    }

    y+= 40
  }

  // draw the number of tests for each country & year vs the all-time max for just that country
  var y = 1100
  for (var c=1; c<tests.getColumnCount(); c++){
    var country = cols[c]
    var x = 50
    fill(255)
    text(cols[c], x, y + 20)
    x += 100

    for (var r=0; r<tests.getRowCount(); r++){
      var year = tests.getString(r,0)
      var numTests = tests.getNum(r,c)
      var maxPerCountry = maxTests[country]

      if (maxPerCountry > 0){
        var palette = Brewer.sequential('Greens', 9, 0, maxPerCountry)
        var color = palette.colorForValue(numTests)
        fill(color)
      }else{
      fill(255) // when maxPerCountry==0
      }
      rect(x, y, dim, dim)
      x += 50
    }

    y+=40
  }


  // draw the number of tests vs the all-time max of *any* country
  var y = 1600
  for (var c=1; c<tests.getColumnCount(); c++){
    var country = cols[c]
    var x = 50
    fill(255)
    text(cols[c], x, y + 20)
    x += 100

    for (var r=0; r<tests.getRowCount(); r++){
      var year = tests.getString(r,0)
      var numTests = tests.getNum(r,c)
      var allTimeMax = maxTests.all

      var palette = Brewer.sequential('Purples', 9, 0, allTimeMax)
      var color = palette.colorForValue(numTests)
      fill(color)
      rect(x, y, dim, dim)
      x += 50
    }

    y+=40
   }
  }

function draw(){
strokeWeight(5)
 line(400, 100, 400, 2100)
 line(900, 100, 900, 2100)
 line(1400, 100, 1400, 2100)
 line(1900, 100, 1900, 2100)
 line(2400, 100, 2400, 2100)
 line(2900, 100, 2900, 2100)
 line(3400, 100, 3400, 2100)

  textSize(28)
  fill(255)
  text("1950", 380, 50)
  text("1960", 880, 50)
  text("1970", 1380, 50)
  text("1980", 1880, 50)
  text("1990", 2380, 50)
  text("2000", 2880, 50)
  text("2010", 3380, 50)
  text("Each country's yearly arsenal vs its all-time max", 150, 90)
  text("Each country's yearly arsenal vs any country's all-time max", 150, 590)
  text("Each country's yearly tests vs its all-time max", 150, 1090)
  text("Each country's yearly tests vs any country's all-time max", 150, 1590)
  textSize(54)
  fill(255, 0, 0)
  text("NUCLEAR WEAPONS ARSENALS AND TESTS SINCE THE DAWN OF THE ATOMIC AGE", 150, 2090)
}


