var table

function preload(){
  table = loadTable('data/totals.csv', 'csv', 'header')
}

function setup(){
  createCanvas(3900, 1050)
  background(127)

  textSize(35);
  fill('white');
  text(" Country Atomic Bomb Detonations by Year with UN Bond Data ", 60, 55);// 155);
  noFill()

  noStroke()
  textAlign(CENTER)
  textSize(16)

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

  // draw a box for each year and set its color based on the total number of tests
  var x = 100
  var y = 100
  var dim =35 
  var numberOfShades = 9
  var palette = Brewer.sequential('YlOrRd', numberOfShades, lowest, highest)

  for (var i=0; i<years.length; i++){
    // draw the box
    var color = palette.colorForValue(totals[i])
    fill(color)
    rect(x, y, dim, dim)

    // draw the year number on top
    fill('black')
    textSize(10)
    text(years[i], x+dim*.5, y+dim*.6)
    x+=dim
  }

  textSize(15);
  fill('white');
  text(" China ", 60, 155);// 155);
  noFill()

 // draw a box for each year and set its color based on the total number of tests
  var x = 100
  var y = 150
  var dim =35
  var numberOfShades = 9
  var palette = Brewer.sequential('YlOrRd', numberOfShades, lowest, highest)

  for (var i=0; i<years.length; i++){
    // draw the box
    var color = palette.colorForValue(totals[i])
    fill(color)
    rect(x, y, dim, dim)

    // draw the year number on top
    fill('black')
    textSize(10)
    text(years[i], x+dim*.5, y+dim*.6)
    x+=dim
  }

  stroke('white')
  line(50, 200, width - 1150, 200)
  noStroke()

  textSize(15);
  fill('white');
  text(" France ", 60, 245);// 155);
  noFill()

 // draw a box for each year and set its color based on the total number of tests
  var x = 100
  var y = 210
  var dim =35
  var numberOfShades = 9
  var palette = Brewer.sequential('GnBu', numberOfShades, lowest, highest)

  for (var i=0; i<years.length; i++){
    // draw the box
    var color = palette.colorForValue(totals[i])
    fill(color)
    rect(x, y, dim, dim)

    // draw the year number on top
    fill('black')
    textSize(10)
    text(years[i], x+dim*.5, y+dim*.6)
    x+=dim
  }

 // draw a box for each year and set its color based on the total number of tests
  var x = 100
  var y = 260
  var dim =35
  var numberOfShades = 9
  var palette = Brewer.sequential('GnBu', numberOfShades, lowest, highest)

  for (var i=0; i<years.length; i++){
    // draw the box
    var color = palette.colorForValue(totals[i])
    fill(color)
    rect(x, y, dim, dim)

    // draw the year number on top
    fill('black')
    textSize(10)
    text(years[i], x+dim*.5, y+dim*.6)
    x+=dim
  }

  stroke('white')
  line(50, 300, width - 1150, 300)
  noStroke()

  textSize(15);
  fill('white');
  text(" India ", 60, 345);// 155);
  noFill()

 // draw a box for each year and set its color based on the total number of tests
  var x = 100
  var y = 310
  var dim =35
  var numberOfShades = 9
  var palette = Brewer.sequential('BuPu', numberOfShades, lowest, highest)

  for (var i=0; i<years.length; i++){
    // draw the box
    var color = palette.colorForValue(totals[i])
    fill(color)
    rect(x, y, dim, dim)

    // draw the year number on top
    fill('black')
    textSize(10)
    text(years[i], x+dim*.5, y+dim*.6)
    x+=dim
  }

 // draw a box for each year and set its color based on the total number of tests
  var x = 100
  var y = 360
  var dim =35
  var numberOfShades = 9
  var palette = Brewer.sequential('BuPu', numberOfShades, lowest, highest)

  for (var i=0; i<years.length; i++){
    // draw the box
    var color = palette.colorForValue(totals[i])
    fill(color)
    rect(x, y, dim, dim)

    // draw the year number on top
    fill('black')
    textSize(10)
    text(years[i], x+dim*.5, y+dim*.6)
    x+=dim
  }

  stroke('white')
  line(50, 400, width - 1150, 400)
  noStroke()

  textSize(15);
  fill('white');
  text(" North Korea ", 50, 445);// 155);
  noFill()

// draw a box for each year and set its color based on the total number of tests
  var x = 100
  var y = 410
  var dim =35
  var numberOfShades = 9
  var palette = Brewer.sequential('YlOrBr', numberOfShades, lowest, highest)

  for (var i=0; i<years.length; i++){
    // draw the box
    var color = palette.colorForValue(totals[i])
    fill(color)
    rect(x, y, dim, dim)

    // draw the year number on top
    fill('black')
    textSize(10)
    text(years[i], x+dim*.5, y+dim*.6)
    x+=dim
  }

// draw a box for each year and set its color based on the total number of tests
  var x = 100
  var y = 460
  var dim =35
  var numberOfShades = 9
  var palette = Brewer.sequential('YlOrBr', numberOfShades, lowest, highest)

  for (var i=0; i<years.length; i++){
    // draw the box
    var color = palette.colorForValue(totals[i])
    fill(color)
    rect(x, y, dim, dim)

    // draw the year number on top
    fill('black')
    textSize(10)
    text(years[i], x+dim*.5, y+dim*.6)
    x+=dim
  }

  stroke('white')
  line(50, 500, width - 1150, 500)
  noStroke()

  textSize(15);
  fill('white');
  text(" Pakistan ", 60, 545);// 155);
  noFill()

// draw a box for each year and set its color based on the total number of tests
  var x = 100
  var y = 510
  var dim =35
  var numberOfShades = 9
  var palette = Brewer.sequential('Blues', numberOfShades, lowest, highest)

  for (var i=0; i<years.length; i++){
    // draw the box
    var color = palette.colorForValue(totals[i])
    fill(color)
    rect(x, y, dim, dim)

    // draw the year number on top
    fill('black')
    textSize(10)
    text(years[i], x+dim*.5, y+dim*.6)
    x+=dim
  }
// draw a box for each year and set its color based on the total number of tests
  var x = 100
  var y = 560
  var dim =35
  var numberOfShades = 9
  var palette = Brewer.sequential('Blues', numberOfShades, lowest, highest)

  for (var i=0; i<years.length; i++){
    // draw the box
    var color = palette.colorForValue(totals[i])
    fill(color)
    rect(x, y, dim, dim)

    // draw the year number on top
    fill('black')
    textSize(10)
    text(years[i], x+dim*.5, y+dim*.6)
    x+=dim
  }

  stroke('white')
  line(50, 600, width - 1150, 600)
  noStroke()

  textSize(15);
  fill('white');
  text(" Russia ", 60, 645);// 155);
  noFill()


// draw a box for each year and set its color based on the total number of tests
  var x = 100
  var y = 610
  var dim =35
  var numberOfShades = 9
  var palette = Brewer.sequential('YlGnBu', numberOfShades, lowest, highest)

  for (var i=0; i<years.length; i++){
    // draw the box
    var color = palette.colorForValue(totals[i])
    fill(color)
    rect(x, y, dim, dim)

    // draw the year number on top
    fill('black')
    textSize(10)
    text(years[i], x+dim*.5, y+dim*.6)
    x+=dim
  }

// draw a box for each year and set its color based on the total number of tests
  var x = 100
  var y = 660
  var dim =35
  var numberOfShades = 9
  var palette = Brewer.sequential('YlGnBu', numberOfShades, lowest, highest)

  for (var i=0; i<years.length; i++){
    // draw the box
    var color = palette.colorForValue(totals[i])
    fill(color)
    rect(x, y, dim, dim)

    // draw the year number on top
    fill('black')
    textSize(10)
    text(years[i], x+dim*.5, y+dim*.6)
    x+=dim
  }

  stroke('white')
  line(50, 700, width - 1150, 700)
  noStroke()

  textSize(15);
  fill('white');
  text(" US ", 60, 745);// 155);
  noFill()

// draw a box for each year and set its color based on the total number of tests
  var x = 100
  var y = 710
  var dim =35
  var numberOfShades = 9
  var palette = Brewer.sequential('Reds', numberOfShades, lowest, highest)

  for (var i=0; i<years.length; i++){
    // draw the box
    var color = palette.colorForValue(totals[i])
    fill(color)
    rect(x, y, dim, dim)

    // draw the year number on top
    fill('black')
    textSize(10)
    text(years[i], x+dim*.5, y+dim*.6)
    x+=dim
  }
// draw a box for each year and set its color based on the total number of tests
  var x = 100
  var y = 760
  var dim =35
  var numberOfShades = 9
  var palette = Brewer.sequential('Reds', numberOfShades, lowest, highest)

  for (var i=0; i<years.length; i++){
    // draw the box
    var color = palette.colorForValue(totals[i])
    fill(color)
    rect(x, y, dim, dim)

    // draw the year number on top
    fill('black')
    textSize(10)
    text(years[i], x+dim*.5, y+dim*.6)
    x+=dim
  }

  stroke('white')
  line(50, 800, width - 1150, 800)
  noStroke()

  textSize(15);
  fill('white');
  text(" UK ", 60, 845);// 155);
  noFill()

// draw a box for each year and set its color based on the total number of tests
  var x = 100
  var y = 810
  var dim =35
  var numberOfShades = 9
  var palette = Brewer.sequential('Greys', numberOfShades, lowest, highest)

  for (var i=0; i<years.length; i++){
    // draw the box
    var color = palette.colorForValue(totals[i])
    fill(color)
    rect(x, y, dim, dim)

    // draw the year number on top
    fill('black')
    textSize(10)
    text(years[i], x+dim*.5, y+dim*.6)
    x+=dim
  }

// draw a box for each year and set its color based on the total number of tests
  var x = 100
  var y = 860
  var dim =35
  var numberOfShades = 9
  var palette = Brewer.sequential('Greys', numberOfShades, lowest, highest)

  for (var i=0; i<years.length; i++){
    // draw the box
    var color = palette.colorForValue(totals[i])
    fill(color)
    rect(x, y, dim, dim)

    // draw the year number on top
    fill('black')
    textSize(10)
    text(years[i], x+dim*.5, y+dim*.6)
    x+=dim
  }

}

