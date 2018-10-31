
const backgroundColor = "black",
	  fontColor = "white",
	  lineColor = "silver",
	  atmosphericColor = "orange",
	  undergroundColor = "blue",
	  totalsColor = "grey",
	  opacity = 75, // 0-255 range
	  vertSpaceForDates = 25,
      vertSpaceForRows = 75,
      horzSpaceForCountryNames = 100,
      horzSpaceForEachDataPoint = 85,
	  stickLength = vertSpaceForRows/5,
	  maxRadius = 300,
	  minRadius = 10,
      yearFont = "Arial",
      yearFontSize = 11,
	  countryFont = "Arial",
	  countryFontSize = 11,
	  paddingBetweenCountryNamesAndFirstDate = 10,
	  paddingBetweenDatesAndFirstRow = 100,
	  paddingTop = 10,
	  paddingRight = 25,
	  paddingBottom = 150,
	  paddingLeft = 0;

var aColor, uColor, tColor, largestDataValue, smallestDataValue;
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
        rows = countries + 1, //include row for totals
        canvasHeight = paddingTop + vertSpaceForDates + paddingBetweenDatesAndFirstRow + (rows * vertSpaceForRows) + paddingBottom,
        dateRange = data.last - data.first + 1,
        canvasWidth = paddingLeft + horzSpaceForCountryNames + paddingBetweenCountryNamesAndFirstDate + (dateRange * horzSpaceForEachDataPoint) + paddingRight;
	createCanvas(canvasWidth, canvasHeight);
	//color and opacity
	aColor = color(atmosphericColor);
	uColor = color(undergroundColor);
	tColor = color(totalsColor);
	aColor._array[3] = opacity/255;
	uColor._array[3] = opacity/255;
	tColor._array[3] = opacity/255;
}

function draw(){
	background(backgroundColor);
  	//draw dates
  	drawDates();
  	//draw rows
  	data.countries.forEach(drawRow);
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
      	rotate(-Math.PI/2); //rotate grid around that point
      	text(year, 0, 0);
      	pop(); // Brings it back
      	yearX += horzSpaceForEachDataPoint;
    }
}

function drawRow(country, index){
	//country name
	fill(fontColor);
	textAlign(RIGHT, CENTER);
	textFont(countryFont);
	textSize(countryFontSize);
	let countryX = paddingLeft + horzSpaceForCountryNames,
		countryY = paddingTop + vertSpaceForDates + paddingBetweenDatesAndFirstRow + vertSpaceForRows/2 + vertSpaceForRows * index;
	text(country, countryX, countryY);
	//horizontal line
	let lineX = paddingLeft + horzSpaceForCountryNames + paddingBetweenCountryNamesAndFirstDate,
		lineY = countryY;
	stroke(lineColor);
	line(lineX, lineY, width - paddingRight, lineY);
	//data points
	drawData(country, countryY);
}

function drawData(country, countryY){
	let countryX = paddingLeft + horzSpaceForCountryNames + paddingBetweenCountryNamesAndFirstDate + horzSpaceForEachDataPoint/2;
	blendMode(ADD);
	data.years.forEach(year => {
		//atmospheric
		if (year.details[country].atmospheric){
			let radius = map(year.details[country].atmospheric, smallestDataValue, largestDataValue, minRadius, maxRadius);
			stroke(lineColor);
			line(countryX, countryY, countryX, countryY-stickLength);
			noStroke();
			fill(aColor);
			ellipse(countryX, countryY-stickLength, radius);
		}
		//underground
		if (year.details[country].underground){
			let radius = map(year.details[country].underground, smallestDataValue, largestDataValue, minRadius, maxRadius);
			stroke(lineColor);
			line(countryX, countryY, countryX, countryY+stickLength);
			noStroke();
			fill(uColor);
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
		totalY = paddingTop + vertSpaceForDates + paddingBetweenDatesAndFirstRow + vertSpaceForRows/2 + vertSpaceForRows * data.countries.length;
	text("TOTALS", totalX, totalY);
	//horizontal line
	let lineX = paddingLeft + horzSpaceForCountryNames + paddingBetweenCountryNamesAndFirstDate + horzSpaceForEachDataPoint/2,
		lineY = totalY;
	stroke(lineColor);
	line(lineX, lineY, width - paddingRight, lineY);
	//data points
	let dataX = lineX,
		dataY = lineY;
	fill(tColor);
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
