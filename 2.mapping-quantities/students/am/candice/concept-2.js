
const backgroundColor = "black",
	  fontColor = "white",
	  lineColor = "#111",
	  atmosphericColor = "orange",
	  undergroundColor = "blue",
	  totalsColor = "grey",
	  circleOpacity = 75, // 0-255 range
      lineOpacity = 50, // 0-255 range
	  vertSpaceForDates = 25,
      vertSpaceForRows = 75,
      horzSpaceForCountryNames = 100,
      horzSpaceForEachDataPoint = 70,
	  stickLength = 0,
	  maxRadius = 300,
	  minRadius = 10,
      yearFont = "Arial",
      yearFontSize = 11,
	  countryFont = "Arial",
	  countryFontSize = 11,
	  paddingBetweenCountryNamesAndFirstDate = 10,
	  paddingBetweenDatesAndFirstRow = 100,
      paddingAboveTotals = 300,
	  paddingTop = 10,
	  paddingRight = 25,
	  paddingBottom = 150,
	  paddingLeft = 0;

var aColorCircle, aColorLine, uColorCircle, uColorLine, tColorCircle, tColorLine,
    largestDataValue, smallestDataValue;
//var data;

function preload(){
	data = loadJSON("data/all.json");
}

function setup(){
	//get data range
	data.years.forEach(year => {
		data.countries.forEach(country => {
			let atmospheric = year.details[country].atmospheric,
				underground = year.details[country].underground,
				larger = Math.max(atmospheric, underground),
				smaller = Math.min(atmospheric, underground);
			if (!largestDataValue ||  larger > largestDataValue){
				largestDataValue = larger;
			}
			if (!smallestDataValue || (smaller > 0 && smaller < smallestDataValue)){
				smallestDataValue = smaller;
			}
		});
	});
  	//figure out rows and columns
  	var countries = data.countries.length, // allows for scrolling for the browser
        rows = countries * 2 + 1, //include row for totals
        canvasHeight = paddingTop + vertSpaceForDates + paddingBetweenDatesAndFirstRow + (rows * vertSpaceForRows) + paddingAboveTotals + paddingBottom,
        dateRange = data.last - data.first + 1,
        canvasWidth = paddingLeft + horzSpaceForCountryNames + paddingBetweenCountryNamesAndFirstDate + (dateRange * horzSpaceForEachDataPoint) + paddingRight;
	createCanvas(canvasWidth, canvasHeight);
	//color and opacity
	aColorCircle = color(atmosphericColor);
	uColorCircle = color(undergroundColor);
	tColorCircle = color(totalsColor);
    aColorLine = color(atmosphericColor);
	uColorLine = color(undergroundColor);
	tColorLine = color(totalsColor);
	aColorCircle._array[3] = circleOpacity/255;
	uColorCircle._array[3] = circleOpacity/255;
	tColorCircle._array[3] = circleOpacity/255;
  	aColorLine._array[3] = lineOpacity/255;
	uColorLine._array[3] = lineOpacity/255;
	tColorLine._array[3] = lineOpacity/255;
}

function draw(){
	background(backgroundColor);
  	//draw dates
  	drawDates();
  	//draw rows
  	data.countries.forEach(drawAtmosphericRow);
  	data.countries.reverse().forEach(drawUndergroundRow);
	drawTotals();
	//
  	noLoop();
}

function drawDates(){
	fill(fontColor);
  	textAlign(CENTER, CENTER);
  	textFont(yearFont);
  	textSize(yearFontSize);
  	let yearY = paddingTop + vertSpaceForDates/2,
        yearX = paddingLeft + horzSpaceForCountryNames + paddingBetweenCountryNamesAndFirstDate + horzSpaceForEachDataPoint/2;
  	for (let year=data.first; year<=data.last; year++){
    	push(); // saves the context. The grid used as the foundation of the canvas- saves the location and positon
      	translate(yearX, yearY); // //move the 0,0 point from upper-left corner to new coordinates
      	//draw vertical lines
      	stroke(aColorLine);
      	let lineYTransition1 = paddingTop + paddingBetweenDatesAndFirstRow + data.countries.length * vertSpaceForRows,
            lineYTransition2 = lineYTransition1 + data.countries.length * vertSpaceForRows; //transition from blue line to grey line.
      	line(0, vertSpaceForDates, 0, lineYTransition1);
      	stroke(uColorLine);
      	line(0, lineYTransition1, 0, lineYTransition2);
      	stroke(tColorLine);
      	line(0, lineYTransition2, 0, height - paddingBottom); // height subtracted by the padding bottom leaves space at the end so the line doesnt extend all the way down
      	//draw date
      	rotate(-Math.PI/2); //rotate grid around that point
      	text(year, 0, 0);
      	pop(); // Brings it back
      	yearX += horzSpaceForEachDataPoint;
    }
}

function drawAtmosphericRow(country, index){
	//country name
	fill(fontColor);
	textAlign(RIGHT, CENTER);
	textFont(countryFont);
	textSize(countryFontSize);
	let countryX = paddingLeft + horzSpaceForCountryNames,
		countryY = paddingTop + vertSpaceForDates + paddingBetweenDatesAndFirstRow + vertSpaceForRows/2 + vertSpaceForRows * index;
	text(country, countryX, countryY);
	//data points
	drawData(country, countryY, "atmospheric");
}

function drawUndergroundRow(country, index, arr){
	//country name
	fill(fontColor);
	textAlign(RIGHT, CENTER);
	textFont(countryFont);
	textSize(countryFontSize);
  	index += arr.length;
	let countryX = paddingLeft + horzSpaceForCountryNames,
		countryY = paddingTop + vertSpaceForDates + paddingBetweenDatesAndFirstRow + vertSpaceForRows/2 + vertSpaceForRows * index;
	text(country, countryX, countryY);
	//data points
	drawData(country, countryY, "underground");
}

function drawData(country, countryY, dataName){
	let countryX = paddingLeft + horzSpaceForCountryNames + paddingBetweenCountryNamesAndFirstDate + horzSpaceForEachDataPoint/2;
	blendMode(ADD);
	data.years.forEach(year => {
		//atmospheric
		if (dataName === "atmospheric" && year.details[country].atmospheric){
			let radius = map(year.details[country].atmospheric, smallestDataValue, largestDataValue, minRadius, maxRadius);
			stroke(lineColor);
			line(countryX, countryY, countryX, countryY-stickLength);
			noStroke();
			fill(aColorCircle);
			ellipse(countryX, countryY-stickLength, radius);
		}
		//underground
		if (dataName === "underground" && year.details[country].underground){
			let radius = map(year.details[country].underground, smallestDataValue, largestDataValue, minRadius, maxRadius);
			stroke(lineColor);
			line(countryX, countryY, countryX, countryY+stickLength);
			noStroke();
			fill(uColorCircle);
			ellipse(countryX, countryY+stickLength, radius);
		}
		countryX += horzSpaceForEachDataPoint;
	});
	blendMode(BLEND);
}

function drawTotals(){
	//label
	fill(fontColor);
	textAlign(RIGHT, CENTER);
	textFont(countryFont);
	textSize(countryFontSize);
	let totalX = paddingLeft + horzSpaceForCountryNames,
		totalY = paddingTop + vertSpaceForDates + paddingBetweenDatesAndFirstRow + vertSpaceForRows/2 + vertSpaceForRows * data.countries.length * 2 + paddingAboveTotals;
	text("TOTALS", totalX, totalY);
	//data points
	let dataX = paddingLeft + horzSpaceForCountryNames + paddingBetweenCountryNamesAndFirstDate + horzSpaceForEachDataPoint/2,
		dataY = totalY;
	fill(tColorCircle);
	noStroke();
	blendMode(SCREEN);
	data.years.forEach(year => {
		if (year.total.tests){
			let radius = map(year.total.tests, smallestDataValue, largestDataValue, minRadius, maxRadius);
			ellipse(dataX, dataY, radius);
		}
		dataX += horzSpaceForEachDataPoint;
	});
	blendMode(BLEND);
}
