var totalNuclearTest = function(p) {

	var table;

		// Load the table before the sketch is run
	p.preload = function() {
		// Load the cvs dataset.
		// The file has the following format:
		// country,income,health,population
		// Central African Republic,599,53.8,4900274
		// ...
		table = p.loadTable("data/totals.csv", "header");
	};

	// Initial setup
	p.setup = function() {

		var points, row, data, year, usa, russia, uk, france, china, india, pakistan, nk;
		// Create the canvas
		var canvas = p.createCanvas(750, 450);
		p.background(150);

		// Prepare the points for the plot
		var points = [];
		//var seed = 100 * p.random();

		for (row = 0; row < table.getRowCount(); row++) {
			data = table.getRow(row);

			// Check that the row contains valid data
			if (data.get("Year") !== "undefined") {
				usa = data.getString("United States");
				//usayield = data.getNum("usayield");
				year = data.getNum("Year");
				//health = data.getNum("health");
				//population = data.getNum("population");
				points[row] = new GPoint(year, usa, year);

			}
		}


		// Create a new plot and set its position on the screen
		var plot = new GPlot(p);
		plot.setPos(25, 25);

		// Set the plot title and the axis labels
		plot.setPoints(points);
		plot.getXAxis().setAxisLabelText("x axis");
		plot.getYAxis().setAxisLabelText("y axis");
		plot.setTitleText("A very simple example");

		// Draw it!
		plot.defaultDraw();

		p.noLoop();
	};
};
