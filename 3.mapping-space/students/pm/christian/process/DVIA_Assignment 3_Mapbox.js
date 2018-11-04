// Christian Theodore
// DVIA: Assignment #3: Mapping Space

var mapimg;

// set the lats and long to 0, ie. the center of the world
var clat = 0;
var clon = 0;

// How to map a specific location:
//Shanghai Coordinates: 31.2304° N, 121.4737° E
// Vancouver Coordinates: 49.2827° N, 123.1207° W
// var lat = 31.2304;
// var lon = 121.4737;


//set the canvas dimensions
var ww = 1024;
var hh = 512;


var zoom = 1;
var earthquakes;

function preload() {
	// Using the Mapbox API, Grab a static map image from Mapbox- using your public API key
	//mapimg = loadImage('https://api.mapbox.com/styles/v1/mapbox/dark-v9/streets-v10/static/0,0,1,0,0/1024x512?access_token=pk.eyJ1IjoiY2hyaXN0aWFudGhlb2RvcmUiLCJhIjoiY2lxd2RhMTJyMDBkYmZua3FicmN4c3Y4dyJ9.fX-0tO7IURT8YK03GB4oJA')
	mapimg = loadImage('https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/' +
    clon + ',' + clat + ',' + zoom + '/' +
    ww + 'x' + hh +
    '?access_token=pk.eyJ1IjoiY2hyaXN0aWFudGhlb2RvcmUiLCJhIjoiY2lxd2RhMTJyMDBkYmZua3FicmN4c3Y4dyJ9.fX-0tO7IURT8YK03GB4oJA');
	// in the URL, change some arguements to customize the map: dark-v9 for dark theme, set the coordinates to 0,0, and set the zoom to 1, and set the map canvas to 1024 X 512
	// using the URL to the USGS data for now- 
	earthquakes = loadStrings('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv');
}

// we need to convert the lat and long values into x and y values in Web Mercator
// for an explanation of what this is, read the "Formulas" section of this page: https://en.wikipedia.org/wiki/Web_Mercator_projection
// write this function to convert the longs into x values
function mercX(lon) {
	lon = radians (lon);
	var a = (256 / PI) * pow(2,zoom);
	var b = lon + PI;
	return a * b;
}

// write this function to convert the lats into y values
function mercY(lat){
	lat = radians(lat);
	var a = (256 / PI) * pow(2,zoom);
	var b = tan(PI/4 + lat / 2);
	var c = PI - log(b) // we need the natural log (base e)
	return a * c; // we need this to get the y location

}

function setup() {
	createCanvas(1024, 512);
	translate(width/2, height/2);
	imageMode(CENTER); // We want the values drawn to be relative to the center of the map
	image(mapimg, 0, 0);

	var cx = mercX(clon);
	var cy = mercY(clat);

for (var i = 0; i <earthquakes.length; i++) {
	var data = earthquakes[i].split(/,/); // /,/ is a RegX that uses the comma delimiter to split the data in the .csv file
	console.log(data);
	// each of these calls the data from the column index in the .csv file
	var lat = data[1];
	var lon = data[2];
	var mag = data[4];
	var x = mercX(lon) - cx;
	var y = mercY(lat) - cy;
	// we want to map the magnitude to the diameter of the circles
 	if(x < - width/2) {
      	x += width;
    } else if(x > width / 2) {
     	 x -= width;
    }

	// we need to add a logarithm here to allow large magnitudes to be displayed without minimizing the small values too much
	mag = pow(10, mag);
	mag = sqrt(mag);
	// On the Richter Scale, a 6 is 10x a 5- account for this in how mag is mapped to diameter
	var magmax = sqrt(pow(10,10));
//we need this to be the difference from the center point
	// var x = mercX(lon) - cx;
	// var y = mercY(lat) - cy;
	var d = map(mag, 0, 10, 0, 180);
	// to make the smaller ellipses more visible given the scaling by magnitude
	stroke(255, 0, 255);
	fill(255, 0, 255, 200);
	ellipse(x, y, 8, 8);
 }
	// Get a data feed of earthquakes from USGS
}



