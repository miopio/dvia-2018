// TODO: set slider?!

// an array for the magnitude
var magnitudes;
// an array for depth
var depths;
// an array for lat & long
var latitudes, longitudes;

// minimum and maximum values for magnitude and depth
var magnitudeMin, magnitudeMax;
var depthMin, depthMax;

// the dots we'll be adding to the map
var circles = [];

// table as the data set
var table;

// my leaflet.js map
var mymap;

var thresholdEnd = 14;
var thresholdStart = 0;



function preload() {
    // load the CSV data into our `table` variable and clip out the header row
    table = loadTable("data/all_month.csv", "csv", "header");
    verticalSlider.noUiSlider.on('end', updateGraph)
}

function setup() {
    // first, call our map initialization function (look in the html's style tag to set its dimensions)
    setupMap()
    //TODO: Convert dates to numbers
    // scale
    // plot lines with opacity
    // include a slider
    // – that’s probably d3
    // next, draw our p5 diagram that complements it
    width = document.getElementById('diagram-container').offsetWidth;
    height = 240;
    var canvas = createCanvas(width, height);
    canvas.parent('diagram-container')
    background(41,41,41);
    //
    // fill(0)
    // noStroke()
    // textSize(16)
    // text(`Plotting ${table.getRowCount()} seismic events`, 20, 40)
    // text(`Largest Magnitude: ${getColumnMax("mag")}`, 20, 60)
    // text(`Greatest Depth: ${getColumnMax("depth")}`, 20, 80)
}


function draw() {
}

function drawHistogram() {
  console.log('happened');
  background(41,41,41);
  magnitudes = table.getColumn("mag");
  times = table.getColumn("time");
  type = table.getColumn("type")
  startTime = Date.parse(times[0]);
  endTime = Date.parse(times[times.length-1]);
  // console.log(startTime, endTime);
  if (isNaN(thresholdStart)) {
    thresholdStart = 0;
  }
  times.forEach((e, i) => {
    var x1 = getXPos(e);
    var x2 = getXPos(e);
    var y1 = getYPos(0);
    var y2 = getYPos(magnitudes[i]);
    strokeWeight(1);

    if (magnitudes[i] > thresholdStart && magnitudes[i] < thresholdEnd ) {
      if (type[i] == 'earthquake') {
        stroke(233, 90, 44, 40);
        fill(233, 90, 44, 150);
        ellipse(x2, y2, 2.5, 2.5);
        line(x1, y1, x2, y2);

      } else {
        strokeWeight(1);
        stroke(28, 175, 214, 150);
        fill(233, 90, 44, 255);
        ellipse(x2, y2, 2.5, 2.5);
        line(x1, y1, x2, y2);

      }
    } else {
      stroke(255, 16);
      line(x1, y1, x2, y2);

    }
  })
}

function updateGraph() {
  sliderStart = verticalSlider.noUiSlider.get()[1]
  sliderEnd = verticalSlider.noUiSlider.get()[0]
  thresholdStart = getSliderPos(sliderStart);
  thresholdEnd = getSliderPos(sliderEnd);
  console.log(thresholdStart, thresholdEnd)
  if (isNaN(thresholdStart)) {
    thresholdStart = 0;
  }
  removeAllCircles()
  drawHistogram()
  drawDataPoints()
}

function getXPos(time) {
   return map(Date.parse(time), startTime, endTime, 0, width)
}

function getYPos(value) {
  return map(value, 0, magnitudeMax, height, 0)
}

function getSliderPos(value) {
  return map(value, 0, 100, magnitudeMax, 0)
}

function setupMap(){
    /*
    LEAFLET CODE

    In this case "L" is leaflet. So whenever you want to interact with the leaflet library
    you have to refer to L first.
    so for example L.map('mapid') or L.circle([lat, long])
    */

    // create your own map
    mymap = L.map('quake-map').setView([30.505, 10.09], 1.5);

    // load a set of map tiles – choose from the different providers demoed here:
    // https://leaflet-extras.github.io/leaflet-providers/preview/
    L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}{r}.{ext}', {
	subdomains: 'abcd',
  // noWrap: true,
	minZoom: 0,
	maxZoom: 20,
  opacity: 0.4,
	ext: 'png'
}).addTo(mymap);

    // call our function (defined below) that populates the maps with markers based on the table contents
    updateGraph();
    // document.getElementsByClassName('leaflet-control-attribution')[0].style.display = 'none';
}

function drawDataPoints(){
    strokeWeight(1);
    stroke(255,0,0);
    noStroke();

    // get the two arrays of interest: depth and magnitude
    depths = table.getColumn("depth");
    magnitudes = table.getColumn("mag");
    latitudes = table.getColumn("latitude");
    longitudes = table.getColumn("longitude");
    type = table.getColumn("type")

    // get minimum and maximum values for both
    magnitudeMin = 0.0;
    magnitudeMax = getColumnMax("mag");
    // console.log('magnitude range:', [magnitudeMin, magnitudeMax])

    depthMin = 0.0;
    depthMax = getColumnMax("depth");
    // console.log('depth range:', [depthMin, depthMax])

    // cycle through the parallel arrays and add a dot for each event
    for(var i=0; i<depths.length; i++){
        // create a new dot
        if (magnitudes[i] > thresholdStart && magnitudes[i] < thresholdEnd) {
          if (type[i] == "earthquake") {
            var circle = L.circle([latitudes[i], longitudes[i]], {
                color: '#E95A2C',      // the dot stroke color
                fillColor: '#E95A2C', // the dot fill color
                fillOpacity: 0.5,  // use some transparency so we can see overlaps
                stroke: false,
                radius: magnitudes[i] * 30000
            });
          } else {
            var circle = L.circle([latitudes[i], longitudes[i]], {
                color: '#1CAFD6',      // the dot stroke color
                fillColor: '#1CAFD6', // the dot fill color
                fillOpacity: 0.5,  // use some transparency so we can see overlaps
                stroke: false,
                radius: magnitudes[i] * 30000
            });
          }
          if (type[i] != "earthquake") {

          }
          // place it on the map
          circle.addTo(mymap);

          // save a reference to the circle for later
          circles.push(circle)
        }
    }
}

function removeAllCircles(){
    // remove each circle from the map and empty our array of references
    circles.forEach(function(circle, i){
        mymap.removeLayer(circle);
    })
    circles = [];
}

// get the maximum value within a column
function getColumnMax(columnName){
    // get the array of strings in the specified column
    var colStrings = table.getColumn(columnName);

    // convert to a list of numbers by running each element through the `float` function
    var colValues = _.map(colStrings, float);

    // find the max value by manually stepping through the list and replacing `m` each time we
    // encounter a value larger than the biggest we've seen so far
    var m = 0.0;
    for(var i=0; i<colValues.length; i++){
        if (colValues[i] > m){
            m = colValues[i];
        }
    }
    return m;

    // or do it the 'easy way' by using lodash:
    // return _.max(colValues);
}

var verticalSlider = document.getElementById('slider');

noUiSlider.create(verticalSlider, {
    start: [0,100],
    margin: 7,
    connect: true,
    behaviour: 'drag-tap',
    orientation: 'vertical',
    range: {
        'min': 0,
        'max': 100
    }
});
