var tests
var arsenal

function preload(){
  tests = loadTable('data/totals.csv', 'csv', 'header')
  arsenal = loadTable('data/warheads.csv', 'csv', 'header')
}

function setup(){
  createCanvas(7000, 1000)

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
    var x = 100
    text(cols[c], x, y)
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
        fill(255) // when maxPerCountry==0
      }
      text(`${year}:${numBombs}/${maxPerCountry}`, x, y)
      x += 100
    }

    y+=40
  }


  // draw the number of bombs in the arsenal vs the all-time max of *any* country
  var y = 600
  for (var c=1; c<arsenal.getColumnCount(); c++){
    var country = cols[c]
    var x = 100
    text(cols[c], x, y)
    x += 100

    for (var r=0; r<arsenal.getRowCount(); r++){
      var year = arsenal.getString(r,0)
      var numBombs = arsenal.getNum(r,c)
      var allTimeMax = maxWarheads.all

      var palette = Brewer.sequential('Blues', 9, 0, allTimeMax)
      var color = palette.colorForValue(numBombs)
      fill(color)
      text(`${year}:${numBombs}/${allTimeMax}`, x, y)
      x += 100
    }

    y+=40
  }



}
