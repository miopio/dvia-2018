// var totals
var atmospheric
var underground
var canvasWidth = window.innerWidth
var canvasHeight = 8000
var margin = 100
var backgroundColor = "#185396"
var serif = "Lora"
var sansSerif = "Roboto"
var titleSize = 30
var fontColor = "white"
var subSize = 15
var atmosphericBarColor = "#F9F461"
var undergroundBarColor = "#A19E9A"

function preload(){
  // totals = loadTable('data/totals.csv', 'csv', 'header')
  atmospheric = loadTable('data/atmospheric_years.csv', 'csv', 'header')
  underground =loadTable('data/underground_years.csv', 'csv', 'header')

  atmospheric_us = loadTable('data/atmospheric_us.csv', 'csv', 'header')
  underground_us =loadTable('data/underground_us.csv', 'csv', 'header')

  atmospheric_russia = loadTable('data/atmospheric_russia.csv', 'csv', 'header')
  underground_russia =loadTable('data/underground_russia.csv', 'csv', 'header')

  atmospheric_uk = loadTable('data/atmospheric_uk.csv', 'csv', 'header')
  underground_uk =loadTable('data/underground_uk.csv', 'csv', 'header')

  atmospheric_france = loadTable('data/atmospheric_france.csv', 'csv', 'header')
  underground_france =loadTable('data/underground_france.csv', 'csv', 'header')

  atmospheric_china = loadTable('data/atmospheric_china.csv', 'csv', 'header')
  underground_china =loadTable('data/underground_china.csv', 'csv', 'header')

  atmospheric_india = loadTable('data/atmospheric_india.csv', 'csv', 'header')
  underground_india =loadTable('data/underground_india.csv', 'csv', 'header')

  atmospheric_pakistan = loadTable('data/atmospheric_pakistan.csv', 'csv', 'header')
  underground_pakistan =loadTable('data/underground_pakistan.csv', 'csv', 'header')

  atmospheric_northkorea = loadTable('data/atmospheric_northkorea.csv', 'csv', 'header')
  underground_northkorea =loadTable('data/underground_northkorea.csv', 'csv', 'header')
}

function setup(){
  createCanvas(canvasWidth,canvasHeight)
  background(backgroundColor)

  textFont(serif)
  textSize(titleSize)
  fill(fontColor)
  // textAlign(CENTER, TOP)
  // noStroke()

  text("A THOUSAND SUNS",margin, margin)
  textFont(sansSerif)
  textSize(subSize)
  text("Protoype #1",margin,margin+25)

  var x = margin
  var y = margin+400
  var barPadding = 5
  var noOfYears = atmospheric.getRowCount()
  var barWidth = (canvasWidth-(margin*2)-(barPadding*noOfYears))/noOfYears
  var scalingFactor = 2

  // overall

  text("Nuclear Testing by Year, All Years",margin,margin+150)

  for (var i=0; i< atmospheric.getRowCount(); i++){
    var year = atmospheric.getNum(i,1)
    print(year)
    fill(atmosphericBarColor)
    rect(x+(barWidth*i)+(barPadding*i),(canvasHeight-year*2)-7500,barWidth,year*scalingFactor)
  }

  for (var i=0; i< underground.getRowCount(); i++){
    var year = underground.getNum(i,1)
    print(year)
    fill(undergroundBarColor)
    rect(x+(barWidth*i)+(barPadding*i),y,barWidth,year*scalingFactor)
  }

  // us
  fill("white")
  text("Nuclear Testing by Year, United States",margin,margin+600)

  for (var i=0; i< atmospheric_us.getRowCount(); i++){
    var year = atmospheric_us.getNum(i,1)
    print(year)
    if (atmospheric_us.get(i,2)!=1)
      fill("red")
    else {fill(atmosphericBarColor)}
    rect(x+(barWidth*i)+(barPadding*i),(canvasHeight-year*2)-7000,barWidth,year*scalingFactor)
  }

  for (var i=0; i< underground_us.getRowCount(); i++){
    var year = underground_us.getNum(i,1)
    print(year)
    if (underground_us.get(i,2)!=1)
    fill("red")
    else {fill(undergroundBarColor)}
    rect(x+(barWidth*i)+(barPadding*i),y+500,barWidth,year*scalingFactor)
  }

  // russia 

  fill("white")
  text("Nuclear Testing by Year, Russia",margin,margin+1100)
  for (var i=0; i< atmospheric_russia.getRowCount(); i++){
    var year = atmospheric_russia.getNum(i,1)
    print(year)
    if (atmospheric_us.get(i,2)!=1)
    fill("red")
  else {fill(atmosphericBarColor)}
    rect(x+(barWidth*i)+(barPadding*i),(canvasHeight-year*2)-6500,barWidth,year*scalingFactor)
  }

  for (var i=0; i< underground_russia.getRowCount(); i++){
    var year = underground_russia.getNum(i,1)
    print(year)
    if (underground_us.get(i,2)!=1)
    fill("red")
    else {fill(undergroundBarColor)}
    rect(x+(barWidth*i)+(barPadding*i),y+1000,barWidth,year*scalingFactor)
  }

  // uk

  fill("white")
  text("Nuclear Testing by Year, United Kingdom",margin,margin+1600)

  for (var i=0; i< atmospheric_uk.getRowCount(); i++){
    var year = atmospheric_uk.getNum(i,1)
    print(year)
    if (atmospheric_us.get(i,2)!=1)
    fill("red")
  else {fill(atmosphericBarColor)}
    rect(x+(barWidth*i)+(barPadding*i),(canvasHeight-year*2)-6000,barWidth,year*scalingFactor)
  }

  for (var i=0; i< underground_uk.getRowCount(); i++){
    var year = underground_uk.getNum(i,1)
    print(year)
    if (underground_us.get(i,2)!=1)
    fill("red")
    else {fill(undergroundBarColor)}
    rect(x+(barWidth*i)+(barPadding*i),y+1500,barWidth,year*scalingFactor)
  }

  // france

  fill("white")
  text("Nuclear Testing by Year, France",margin,margin+2100)

  for (var i=0; i< atmospheric_france.getRowCount(); i++){
    var year = atmospheric_france.getNum(i,1)
    print(year)
    if (atmospheric_us.get(i,2)!=1)
    fill("red")
  else {fill(atmosphericBarColor)}
    rect(x+(barWidth*i)+(barPadding*i),(canvasHeight-year*2)-5500,barWidth,year*scalingFactor)
  }

  for (var i=0; i< underground_france.getRowCount(); i++){
    var year = underground_france.getNum(i,1)
    print(year)
    if (underground_us.get(i,2)!=1)
    fill("red")
    else {fill(undergroundBarColor)}
    rect(x+(barWidth*i)+(barPadding*i),y+2000,barWidth,year*scalingFactor)
  }

  // china

  fill("white")
  text("Nuclear Testing by Year, China",margin,margin+2600)

  for (var i=0; i< atmospheric_china.getRowCount(); i++){
    var year = atmospheric_china.getNum(i,1)
    print(year)
    if (atmospheric_us.get(i,2)!=1)
    fill("red")
  else {fill(atmosphericBarColor)}
    rect(x+(barWidth*i)+(barPadding*i),(canvasHeight-year*2)-5000,barWidth,year*scalingFactor)
  }

  for (var i=0; i< underground_china.getRowCount(); i++){
    var year = underground_china.getNum(i,1)
    print(year)
    if (underground_us.get(i,2)!=1)
    fill("red")
    else {fill(undergroundBarColor)}
    rect(x+(barWidth*i)+(barPadding*i),y+2500,barWidth,year*scalingFactor)
  }

  // india

  fill("white")
  text("Nuclear Testing by Year, India",margin,margin+3100)

  for (var i=0; i< atmospheric_india.getRowCount(); i++){
    var year = atmospheric_india.getNum(i,1)
    print(year)
    if (atmospheric_us.get(i,2)!=1)
    fill("red")
  else {fill(atmosphericBarColor)}
    rect(x+(barWidth*i)+(barPadding*i),(canvasHeight-year*2)-4500,barWidth,year*scalingFactor)
  }

  for (var i=0; i< underground_india.getRowCount(); i++){
    var year = underground_india.getNum(i,1)
    print(year)
    if (underground_us.get(i,2)!=1)
    fill("red")
    else {fill(undergroundBarColor)}
    rect(x+(barWidth*i)+(barPadding*i),y+3000,barWidth,year*scalingFactor)
  }

  // pakistan

  fill("white")
  text("Nuclear Testing by Year, Pakistan",margin,margin+3600)

  for (var i=0; i< atmospheric_pakistan.getRowCount(); i++){
    var year = atmospheric_pakistan.getNum(i,1)
    print(year)
    if (atmospheric_us.get(i,2)!=1)
    fill("red")
  else {fill(atmosphericBarColor)}
    rect(x+(barWidth*i)+(barPadding*i),(canvasHeight-year*2)-4000,barWidth,year*scalingFactor)
  }

  for (var i=0; i< underground_pakistan.getRowCount(); i++){
    var year = underground_pakistan.getNum(i,1)
    print(year)
    if (underground_us.get(i,2)!=1)
    fill("red")
    else {fill(undergroundBarColor)}
    rect(x+(barWidth*i)+(barPadding*i),y+3500,barWidth,year*scalingFactor)
  }

  // north korea

  fill("white")
  text("Nuclear Testing by Year, North Korea",margin,margin+4100)

  for (var i=0; i< atmospheric_northkorea.getRowCount(); i++){
    var year = atmospheric_northkorea.getNum(i,1)
    print(year)
    if (atmospheric_us.get(i,2)!=1)
    fill("red")
  else {fill(atmosphericBarColor)}
    rect(x+(barWidth*i)+(barPadding*i),(canvasHeight-year*2)-3500,barWidth,year*scalingFactor)
  }

  for (var i=0; i< underground_northkorea.getRowCount(); i++){
    var year = underground_northkorea.getNum(i,1)
    print(year)
    if (underground_us.get(i,2)!=1)
    fill("red")
    else {fill(undergroundBarColor)}
    rect(x+(barWidth*i)+(barPadding*i),y+4000,barWidth,year*scalingFactor)
  }



  print(atmospheric_us)
  print(underground)
}
