var totals;
var atmospheric;
var underground;
var yearNum = 0;

function preload() {
  totals = loadJSON("data/totals.json");
  atmospheric = loadJSON("data/atmospheric.json");
  underground = loadJSON("data/underground.json");
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(230);
  textSize(50);
  text(yearNum + 1940, 50, 100);
  // pick one of the three data files to work with and call it 'data'
  var data = totals;

  // log the whole dataset to the console so we can poke around in it
  print(data);
  // usa = new Country(USA, 30, 500);

  // set up typography
  textFont("Rokkitt");
  textSize(16);
  fill(30);
  noStroke();

  //usa
  textSize(data.tests["United States"][yearNum] * 5);
  text("USA", 50, 400);
  console.log(data.tests["United States"][yearNum]);

  //Russia
  textSize(data.tests["Russia"][yearNum] * 5);
  text("Russia", 800, 100);
  console.log(data.tests["Russia"][yearNum]);

  //China
  textSize(data.tests["China"][yearNum] * 5);
  text("China", 900, 300);
  console.log(data.tests["China"][yearNum]);

  //France
  textSize(data.tests["France"][yearNum] * 5);
  text("France", 500, 200);
  console.log(data.tests["France"][yearNum]);

  // var x = 200;
  // var y = 100;
  // var rowHeight = 60;
  // var colWidth = 40;

  // draw country name labels on the left edge of the table
  // textStyle(BOLD);
  // textAlign(RIGHT);
  // for (var country in data.tests) {
  //   text(country, x - colWidth, y);
  //   textSize(data.tests[country][2]);
  //   y += rowHeight;
  // }

  // textStyle(NORMAL);
  // textAlign(CENTER);
  // for (var i = 0; i < data.years.length; i++) {
  //   y = 100;

  //   // draw the year labels in the header row
  //   var year = data.years[i];
  //   fill(30);
  //   text(year, x, y - rowHeight);

  //   // print out the total for each country, one row at a time
  //   for (var country in data.tests) {
  //     var value = data.tests[country][i];
  //     text(value, x, y);
  //     y += rowHeight;
  //   }

  //   x += colWidth;
  // }
}

function draw() {
  frameRate(1);
  console.log(yearNum);
  if (yearNum < 2017 - 1940) {
    yearNum++;
  } else {
    yearNum = 0;
  }

  setup();
}
