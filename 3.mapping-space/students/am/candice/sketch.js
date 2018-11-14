

//load csv data
//filter and sort by depth
//figure out length of longest name to get radius of outer circle
//count data points so we can divide evenly (deltaAngle)
//for loop through data points, incrementing by deltaAngle
//	-- change display depending on scale, damage, depth, tsunami
const yellowCircleRadiusPercent = 2.3,
      blueCircleRadiusPercent = 1,
      redCircleRadiusPercent = 10,
      redCircleRadiusInset1Percent = 80/100,
      redCircleRadiusInset2Percent = 65/100,
      magLinesPercent = 17,
      minOpacity = 0.2,
      maxOpacity = 0.95,
      largestTextSize = 9.5,
      font = "Raleway";

var data, redCircleRadius, whiteCircleDiameter, yellowCircleRadius,
    blueCircleRadius, magLinesSpacing, minDamage, maxDamage,
    mymap, circles = [];

function preload(){
	loadJSON("signif.json", (json) => {
    	data = json.filter((m) => m.YEAR === 2018)
      			   .map((m) => {return {depth: m.FOCAL_DEPTH,
								lat: m.LATITUDE,
                                lon: m.LONGITUDE,
          						magnitude: m.EQ_PRIMARY,
                                tsunami: m.FLAG_TSUNAMI,
                                damage: m.TOTAL_DAMAGE_DESCRIPTION,
                                location: m.LOCATION_NAME};})
      			   .sort((a,b) => b.damage - a.damage);
        minDamage = data[data.length-1].damage;
        maxDamage = data[0].damage;
    });
}

function setup(){
	createCanvas(windowWidth/2, windowHeight);
  	var maxSize = Math.min(width, height);
    yellowCircleRadius = maxSize * (yellowCircleRadiusPercent/100);
    blueCircleRadius = maxSize * (blueCircleRadiusPercent/100);
    redCircleRadius = maxSize * (redCircleRadiusPercent/100);
    magLinesSpacing = maxSize * (magLinesPercent/100);
    whiteCircleDiameter = maxSize - magLinesSpacing - yellowCircleRadius;
    var textSpace = whiteCircleDiameter/2 - redCircleRadius,
  		longestString = data.reduce((a,b) => {
    		if (a.location.length > b.location.length) return a;
      		return b;
    	}).location,
        textFontSize = largestTextSize;
	textSize(textFontSize);
  	while(textWidth(longestString) > textSpace){
    	textSize(--textFontSize);
    }
  	//
  	fill("#021445");
  	rect(0, 0, width, height); //canvas blue
  	drawRed(redCircleRadius);
  	drawWhite(whiteCircleDiameter);
  	var deltaAngle = Math.PI*2 / data.length; //how many circles to put around the circle based on how many data points there are
    textAlign(LEFT, CENTER);
  	for (let i=0, a = -Math.PI/2; a < Math.PI*3/2; a += deltaAngle){ // angle pointing up is -Math.PI/2, increment
    	//a < Math.PI*3/2 - keep going until you reach the beginning of the circle
     	// a += deltaAngle - incrementing each angle to reach the beginning of the circle
		push();
      	translate(width/2, height/2);
      	rotate(a);
      	var datum = data[i++];
      	if (datum) drawDataPoint(datum);
      	pop();
    }
  	//
  	setupMap();
  	noLoop();
}

function setupMap(){
    /*
    LEAFLET CODE

    In this case "L" is leaflet. So whenever you want to interact with the leaflet library
    you have to refer to L first.
    so for example L.map('mapid') or L.circle([lat, long])
    */

    // create your own map
    mymap = L.map('quake-map').setView([51.505, -0.09], 3);

    // load a set of map tiles – choose from the different providers demoed here:
    // https://leaflet-extras.github.io/leaflet-providers/preview/
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiZHZpYTIwMTciLCJhIjoiY2o5NmsxNXIxMDU3eTMxbnN4bW03M3RsZyJ9.VN5cq0zpf-oep1n1OjRSEA'
    }).addTo(mymap);

    // call our function (defined below) that populates the maps with markers based on the table contents
    drawMapDataPoints();
}

function drawMapDataPoints(){
	// cycle through the parallel arrays and add a dot for each event
    for(var i=0; i<data.length; i++){
        // create a new dot
        var circle = L.circle([data[i].lat, data[i].lon], {
            color: '#F6B823',      // the dot stroke color
            fillColor: '#F6B823', // the dot fill color
            fillOpacity: 0.25,  // use some transparency so we can see overlaps
            radius: data[i].magnitude * 40000
        });
      
      	//event
      	let text  = "magnitude: " + data[i].magnitude + "<br>";
      		text += "damage: " + data[i].damage + "<br>";
      		text += "location: " + data[i].location + "<br>";
        circle.bindPopup(text);

        // place it on the map
        circle.addTo(mymap);

        // save a reference to the circle for later
        circles.push(circle);

      	// tsunami?
      	if (data[i].tsunami){
        	let circle = L.circle([data[i].lat, data[i].lon], {
                color: '#2391F6',      // the dot stroke color
                fillColor: '#2391F6', // the dot fill color
                fillOpacity: 0.25,  // use some transparency so we can see overlaps
                radius: data[i].magnitude * 10000
            });
          	circle.addTo(mymap);
          	circles.push(circle);
        }
    }
}

function drawDataPoint(obj){
	//white line
  	stroke("white");
  	noFill();
  	var depthOffset = 0;
  	if (obj.depth < 100) depthOffset = redCircleRadius * redCircleRadiusInset2Percent;
  	if (obj.depth < 50) depthOffset = redCircleRadius * redCircleRadiusInset1Percent;
  	line(depthOffset, 0, redCircleRadius, 0);
    //text
    textFont(font);
    textStyle(NORMAL);
    text(obj.location, redCircleRadius, 0);
  	//yellow circle
    var opacity = map(obj.damage, minDamage, maxDamage, minOpacity, maxOpacity);
  	noStroke();
  	fill("rgba(246, 184, 35, "+ opacity +")"); //#F6B823
  	ellipse(whiteCircleDiameter/2, 0, yellowCircleRadius*2, yellowCircleRadius*2);//method that will draw a portion of a circle- requires 5 arguments and optional 6th. 1) x,y 2. radius of circle 4. start angle. 5. end angles
  	//blue circle
  	if (obj.tsunami){
    	fill("#2391F6");
      	ellipse(whiteCircleDiameter/2, 0, blueCircleRadius*2, blueCircleRadius*2);
	}
  	//mag lines
  	noFill();
  	stroke("white");
  	strokeWeight(0.5);
  	let magLinesMargin = magLinesSpacing/10,
        r = whiteCircleDiameter + yellowCircleRadius*2 + magLinesMargin; //maglinesmargin is the spacing between each of the lines and the first line with the yellow circle
  	for (var i=0; i<obj.magnitude; i++, r+=magLinesMargin){
    	arc(0, 0, r, yellowCircleRadius*10, -0.18, 0.042);
    }
}

function drawRed(radius){
  	noStroke();
	fill("#FF0031");
  	ellipse(width/2, height/2, radius*2);
  	fill("#E5002C");
  	ellipse(width/2, height/2, radius*2*redCircleRadiusInset1Percent);
  	fill("#B70023");
  	ellipse(width/2, height/2, radius*2*redCircleRadiusInset2Percent);
}

function drawWhite(diameter){
	stroke("white");
  	strokeWeight(1);
  	noFill();
  	ellipse(width/2, height/2, diameter);
}
