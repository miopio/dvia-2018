var data;

function preload() {
	data = loadJSON("data/all.json");
}

function setup() {
	// Setup the canvas
	createCanvas(3200, 700);
 	background(0);

 	// Setup the typography
	textFont("Comic Sans MS");
  	textSize(16);
	fill(230);
	noStroke();


	// Base width values of our canvas. StartX and startY
	var startX = 200;
	var startY = 100;
	var rowHeight = 60;
	var colWidth = 40;

	// Render the countries on the Y Axis
	textStyle(BOLD);
	textAlign(RIGHT);
	data.countries = data.countries.sort();
	for (var x = 0; x < data.countries.length; x++) {
		var country = data.countries[x];
		text(country, startX, startY + rowHeight * x);
	}

	// Render the years on the X Axis
	var columnYearCount = 1;
	for (var y = data.first; y <= data.last; y++) {
		text(y, startX + 40 * columnYearCount, 560);
		columnYearCount++;
	}

	// Render the circles
	for (var z = 0; z < data.years.length; z++) {
		var details = data.years[z].details;
		var testCount = Object.values(details);

		var xAxisPosition = startX + colWidth * (z + 1);

		for (var i = 0; i < testCount.length; i++) {
			var yAxisPosition = startY + rowHeight * i;
			var value = testCount[i].tests;

			if (value > 0) {
				colorMode(HSB);
				fill(260, value, 50);

				ellipse(xAxisPosition, yAxisPosition, 20);
			}
		}
	}
}