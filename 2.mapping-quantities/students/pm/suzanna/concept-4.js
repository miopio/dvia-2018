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
  text("1948 - 2009: Total Atomic Bomb Detonations (background), UN Bond Data (green), and Warhead count (red text) ", 60, 100);// 155);
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
    console.log("totals " + i + " is " + totals[i]);
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
    text(years[i], x+dim*.5, y+dim*1.1)
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
  text(" US ", 50, 300);// 155);

  //axis
  stroke('white')
  
  for (var i=10; i<dim + 10; i+=10){
     line(90, axis - i, 100, axis - i);
     if( i % 20 == 0){
        textSize(9);
        text(i, 80, axis - i + 4)
     }
  }

  //key
  textSize(15);
  text(" Key ", 55, 510);// 155);
  text(" Detonations ", 200, 510);// 155);
  text(" Warheads ", 560, 510);// 155);
  text(" Money ", 760, 510);// 155);
  var s = (highest - lowest)/9
  for (var k = 0; k < 9; k++) {
      var p = palette.colorForValue(lowest + s * k)
      fill(p)
      rect(90 + (30 * k) , 535, 30, 40);
  }
  stroke(palette.colorForValue(lowest + s ))
  fill(palette.colorForValue(lowest + s ))
  text(" 0 ", 70, 555)
  text(" 178 ", 120 + (30 * 9), 555)
  fill('red')
  stroke('red')
  text("0 to 25540 ", 563, 555);// 155);
  fill('green')
  stroke('green')
  text("0 to 144.392 ", 770, 555);// 155);
  console.log(s)
}

