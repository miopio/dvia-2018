var data;

function preload() {
  data = loadJSON("data/all.json");
  table = loadTable('data/nuclear_warhead_inventory.csv', 'csv', 'header')

}

function setup() {
  // Setup the canvas
  createCanvas(3200, 3000);
  background(255);

  // Setup the typography
  textFont("Arial");
    textSize(16);
  fill(0);
  noStroke();


  // Base width values of our canvas. StartX and startY
  var startX = 200;
  var startY = 100;
  var rowHeight = 60;
  var colWidth = 40;

  var pal = Brewer.sequential('Reds', Infinity, 0, 100)

  // Render the countries on the Y Axis
  textStyle(BOLD);
  textAlign(RIGHT);
    //Sort countries name by Alphabet
  data.countries = data.countries.sort();
  for (var x = 0; x < data.countries.length; x++) {
    var country = data.countries[x];
    text(country, startX, startY + rowHeight * x);
  }

  // Render the years on the X Axis
  var columnYearCount = 1;
  for (var y = data.first; y <= data.last; y++) {
    text(y, startX + 40 * columnYearCount+15, 560);
    columnYearCount++;
  }

  // Render the . Loop row (x) first then loop column (y)
  for (var z = 0; z < data.years.length; z++) {
    var details = data.years[z].details;
    var testCount = Object.values(details);

    var xAxisPosition = startX + colWidth * (z + 1);

    for (var i = 0; i < testCount.length; i++) {
      var yAxisPosition = startY + rowHeight * i;
      var value = testCount[i].tests;

     //Set color according to value 
      if (value > 0) {
        //colorMode(HSB);
        // fill(260, value, 50);
        var c = pal.colorForValue(value)
        fill(c)
        ellipse(xAxisPosition, yAxisPosition, 20);
      }
    }
  }
  //////////////////////////////All


  textFont("Arial");
    textSize(16);
  fill(0);
  noStroke();

  textAlign(CENTER);
  fill(0);
  text("All Tests", 100, 80);


  var pal = Brewer.sequential('Greens', Infinity, 0, 100)
   
   var startX = 200;
  var startatmY = 700;
  var rowHeight = 60;
  var colWidth = 40;

  // Render the countries on the Y Axis
  textStyle(BOLD);
  textAlign(RIGHT);
    //Sort countries name by Alphabet
  data.countries = data.countries.sort();
  for (var x = 0; x < data.countries.length; x++) {
    var country = data.countries[x];
    text(country, startX, startatmY + rowHeight * x);
  }

  // Render the years on the X Axis
  var columnYearCount = 1;
  for (var y = data.first; y <= data.last; y++) {
    text(y, startX + 40 * columnYearCount+15, 1165);
    columnYearCount++;
  }

// Render the . Loop row (x) first then loop column (y)
  for (var z = 0; z < data.years.length; z++) {
    var details = data.years[z].details;
    var testCount = Object.values(details);

    var xAxisPosition = startX + colWidth * (z + 1);

    for (var i = 0; i < testCount.length; i++) {
      var yAxisPosition = startatmY + rowHeight * i;
      var value = testCount[i].atmospheric;

     //Set saturation according to value 
      if (value > 0) {
        //colorMode(HSB);
        // fill(260, value, 50);
        var c = pal.colorForValue(value)
        fill(c)
        ellipse(xAxisPosition, yAxisPosition, 20);
      }
    }
  }

  //////////////////////////////Atm

   textFont("Arial");
    textSize(16);
  fill(0);
  noStroke();

  textAlign(CENTER);
  fill(0);
  text("Atmospheric", 100, 670);

  textAlign(CENTER);
  fill(0);
  text("Underground", 100, 1250);

  var pal = Brewer.sequential('Blues', Infinity, 0, 100)
   var startX = 200;
  var startundY = 1300;
  var rowHeight = 60;
  var colWidth = 40;

  // Render the countries on the Y Axis
  textStyle(BOLD);
  textAlign(RIGHT);
    //Sort countries name by Alphabet
  data.countries = data.countries.sort();
  for (var x = 0; x < data.countries.length; x++) {
    var country = data.countries[x];
    text(country, startX, startundY + rowHeight * x);
  }

  // Render the years on the X Axis
  var columnYearCount = 1;
  for (var y = data.first; y <= data.last; y++) {
    text(y, startX + 40 * columnYearCount+15, 1760);
    columnYearCount++;
  }

// Render the . Loop row (x) first then loop column (y)
  for (var z = 0; z < data.years.length; z++) {
    var details = data.years[z].details;
    var testCount = Object.values(details);

    var xAxisPosition = startX + colWidth * (z + 1);

    for (var i = 0; i < testCount.length; i++) {
      var yAxisPosition = startundY + rowHeight * i;
      var value = testCount[i].underground;

     //Set saturation according to value 
      if (value > 0) {
        //colorMode(HSB);
        // fill(260, value, 50);
        var c = pal.colorForValue(value)
        fill(c)
        ellipse(xAxisPosition, yAxisPosition, 20);
      }
    }
  }

  

}