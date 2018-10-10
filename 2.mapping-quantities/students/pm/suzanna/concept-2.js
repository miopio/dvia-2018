var countries = ['c', 'f', 'i', 'n', 'p', 'r', 'us', 'uk']
var data
var points = [2.99, 4.00, 1.00, 3.5];
var lastPrice = 0;

function preload(){
  data = loadJSON('data/totals.json')
}

function setup() { 
  createCanvas(800, 650);
} 

function draw() { 
  background('white');
  fill('white')
  var palette = Brewer.qualitative('Dark2', countries)
  var i = 3

     //key
    /*for (var k = 0; k < 9; k++) {
      var p = palette.colorForValue(countries[k])
      fill(p)
      rect(750, 20 + (k * 25), 20, 20);
    }*/
 
   for (var j = 0; j < 9; j++) {
    var c = palette.colorForValue(countries[j])
 	
    for (var i=0; i<points.length; i++) {
      var adjustedPrice = map(points[i]*(j+1/2), 0, 5, 0, 100);
      stroke(c)
      line(i*100 + 100, lastPrice, (i+1)*100 + 100, 600 - adjustedPrice);
      lastPrice = 600 - adjustedPrice;
    //key
    stroke('black')
    line(90, 580, 90, 100)
    line(90, 580, 700, 580)
    textSize(10);
    fill('black')
    text("y-axis:", 25, 220);
    text("Total Detonation Count", 25, 240);
    text("x-axis: Year", 100, 590);

    //key
    //for (var k = 0; k < 9; k++) {
    //  var p = palette.colorForValue(countries[k])
    //  fill(p)
    //  rect(750, 20 + (k * 25), 20, 20);
    //}
   }
  }
}
