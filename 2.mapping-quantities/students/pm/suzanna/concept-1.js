var angles = [ 30, 10, 45, 35, 60, 38, 75, 67  ];
var countries = ['c', 'f', 'i', 'n', 'p', 'r', 'us', 'uk']
var data
var numOfColors = 8
function preload(){
  //table = loadTable('data/totals.csv', 'csv', 'header')
}

function setup() {
  createCanvas(720, 400);
  noStroke();
  noLoop();  // Run once and stop
}

function draw() {
  background('white');
  pieChart(300, angles);
  fill('black');
  textSize(15);
  text("Total Atomic Detonations By Country 1945 - 2017", 25, 30);
}

function pieChart(diameter, data) {
  var palette = Brewer.qualitative('Dark2', countries)
  var lastAngle = 0;
  for (var i = 0; i < data.length; i++) {
    var c = palette.colorForValue(countries[i])
    fill(c)
    console.log('h' + c)
    //var gray = map(i, 0, data.length, 0, 255);
    //fill(gray);
    arc(width/2, height/2, diameter, diameter, lastAngle, lastAngle+radians(angles[i]));
    lastAngle += radians(angles[i]);
  }
}

