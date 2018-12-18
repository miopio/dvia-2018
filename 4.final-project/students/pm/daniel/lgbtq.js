// an array for discrimination
var discrimination
// an array for internalized homophobia 
var internalized
// an array for hiv tests
var tests
// an array for never heard of prep treatment
var never

var table

var counts24 = [0,0,0,0,0,0];
var counts34 = [0,0,0,0,0,0];
var counts25 = [0,0,0,0,0,0];
var counts35 = [0,0,0,0,0,0];
var total = [0,0,0,0,0,0];

function preload(){
  table = loadTable('data/lgbtq.csv', 'csv', 'header')
}

function setup(){
  createCanvas(1200, 800)
  background(200)

// set up typography
  textFont("Rokkitt")
  textSize(16)
  fill(30)
  textStyle(BOLD)
  textAlign(RIGHT)

  // draw percent scale
  strokeWeight(2)
  line(120, 760, 1120, 760)
  line(320, 750, 320, 760)
  line(520, 750, 520, 760)
  line(720, 750, 720, 760)
  line(920, 750, 920, 760)

  // draw percent numbers 
  text("20", 325, 780)
  text("40", 525, 780)
  text("60", 725, 780)
  text("80", 925, 780)

  // log the whole dataset to the console so we can poke around in it
  //print(table)

  

  //noStroke()

  // var x = 200
  // var y = 100
  // var rowHeight = 60
  // var colWidth = 40

  //for (var c=1; c<table.getColumnCount(); c++){
   // text(table.columns[c], x-colWidth, y)
    //y += rowHeight
  //}

  

  // print numbers for each row
  // x = 200
  // y = 100
  // textStyle(NORMAL)
  // textAlign(BOLD)
  var rowCount = table.getRowCount();


  for (var r=0; r<rowCount; r++){
    // text(table.getString(r, 2), x, y-rowHeight)
    // x += colWidth
    // text(table.getString(r, 3), x, y-rowHeight)
    // x += colWidth
    // text(table.getString(r, 4), x, y-rowHeight)
    // x += colWidth
    // text(table.getString(r, 5), x, y-rowHeight)
    // x = 200
    // y += rowHeight;

    if (table.getString(r, 2) !== "" && table.getString(r, 3) !== ""){ //ignore any line with an empty value in cols 2 and 3
    var cat2 = floor(parseInt(table.getString(r, 2)));
    total[cat2]++;  

    var cat3 = floor(parseInt(table.getString(r, 3)));

    if (table.getString(r, 4) === "1") counts24[cat2]++;   
    if (table.getString(r, 4) === "1") counts34[cat3]++;

    if (table.getString(r, 5) === "1") counts25[cat2]++;   
    if (table.getString(r, 5) === "1") counts35[cat3]++;
   }

  }
  // console.log(total);
  // console.log("counts24: " + counts24);
  // console.log("counts34: " + counts34);
  // console.log("counts25: " + counts25);
  // console.log("counts35: " + counts35);
  // print out the total for each column
  // x = 200
  // for (var r=0; r<table.getRowCount(); r++){
  //   y = 100
  //   for (var c=1; c<table.getColumnCount(); c++){
  //     var value = table.getNum(r, c)
  //     text(value, x, y)
  //     y += rowHeight
  //   }
  //   x += colWidth
  // }
  calc("2v4", counts24, total);
  calc("3v4", counts34, total);
  calc("2v5", counts25, total);
  calc("3v5", counts35, total);
  
  var x = 50; 
  var y = 50;
  bars(50, 1);
  bars(200, 2);
  bars(350, 3);
  bars(500, 4);
  bars(650, 5);
  //cat1

}
  function bars(y, cat){

    var x = 105;
    var caty = y + 50;
    noStroke()
    fill(0);
    text("1-2", 35, 100);
    fill(255);
    text("2v4", x, y + 15);
    fill("green");
    rect(x + 15, y, counts24[cat] * 10, 20);
    y += 25;
    
    fill(0);
    text("2-3", 35, 250);
    fill(255);
    text("3v4", x, y + 15);
    fill("blue");
    rect(x + 15, y, counts34[cat] * 10, 20);
    y += 25;
    
    fill(0);
    text("3-4", 35, 400);
    fill(255);
    text("2v5", x, y + 15);
    fill("purple");
    rect(x + 15, y, counts25[cat] * 10, 20);
    y += 25;
    
    fill(0);
    text("4-5", 35, 550);
    fill(255);
    text("3v5", x, y + 15);
    fill("orange");
    rect(x + 15, y, counts35[cat] * 10, 20);

    fill(0);
    text("5-6", 35, 700);
  }

function calc(title, counts, total){
  console.log(title);
  for(var i = 1; i < 6; i++)
  { 
    counts[i] = 100 * counts[i]/total[i];
  //console.log(100 * counts[i]/total[i]);
  }
}