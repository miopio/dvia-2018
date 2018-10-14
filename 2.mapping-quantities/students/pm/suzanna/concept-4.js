var table
var undata 
var warheads 

function preload(){
  table = loadTable('data/totals.csv', 'csv', 'header')
  undata = loadTable('data/undata.csv', 'csv', 'header')
  warheads = loadTable('data/warheads.csv', 'csv', 'header')
}

function setup(){
  createCanvas(12850, 600)
  background('black')

  textSize(35);
  fill('white');
  text("Money and Bombs", 60, 55);// 155);
  textSize(25);
  text("1948 - 2008: Atomic Bomb Detonations (background), UN Bond Data (green), and Warhead count (red text) ", 60, 100);// 155);
  noFill()
  
  noStroke()
  textAlign(CENTER)
  textSize(16)

  // calculate the total number of tests per year (and also the max in any given year)
  var years = []
  var totals = []
  var bonds = []
  var warhead = []
  var lowest = 0
  var highest = 0
  for (var r=0; r<table.getRowCount(); r++){
    var sum = 0
    var year = table.getString(r, 0)
    for (var c=1; c<table.getColumnCount(); c++){
      sum += table.getNum(r, c)
    }

    if(year > 1947 && year < 2010){
      years.push(year)
      totals.push(sum)
      highest = Math.max(sum, highest)
    }
  }

  for (var r=0; r<undata.getRowCount(); r++){
    bonds.push(undata.getNum(r,2))
  }

  for (var r=0; r<warheads.getRowCount(); r++){
    warhead.push(warheads.getNum(r,1))
  }

  console.log(years)
  console.log(totals)
  console.log(bonds)

  // draw a box for each year and set its color based on the total number of tests
  var x = 100
  var y = 200
  var dim =200
  var axis = y + dim
  var lastx = 100
  var lasty = axis 
  var numberOfShades = 9
  var palette = Brewer.sequential('Reds', numberOfShades, lowest, highest)

  for (var i=0; i<years.length; i++){
    // draw the box
    var color = palette.colorForValue(totals[i])
    fill(color)
    rect(x, y, dim, dim)
   
    stroke('green')
    line(lastx, lasty, x, axis - bonds[i]*10)
    var testb = axis - bonds[i]* 10
    console.log("lastx["+lastx+"] lasty["+lasty+"] x["+x+"] bonds[i]["+testb+"]")
    lastx = x
    lasty = axis - bonds[i] * 10 
    noStroke()
    // draw the year number on top
    fill('white')
    textSize(10)
    //text(years[i], x-dim*.5, y+dim*.6)
    text(years[i], x+dim*.5, y+dim*1.3)
    var testx = x+dim*.5
    var testy = y+dim*1.3
    console.log("x+dim*.5["+testx+"] y+dim*1.3["+testy+"]")
    fill('red')
    textSize(60)
    text(warhead[i], x+dim*.5, y+dim*.6)
    x+=dim
  }

  stroke('green')
  line(lastx, lasty, x, axis - bonds[bonds.length - 1]*10)

  textSize(15);
  fill('white');
  text(" US ", 60, 300);// 155);

  //axis
  stroke('white')
  
  for (var i=10; i<dim; i+=10){
     line(90, axis - i, 100, axis - i);
  }
}

