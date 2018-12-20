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

var thresholdEnd, thresholdStart = 0;

function preload() {
    // load the CSV data into our `table` variable and clip out the header row
    table = loadTable("data/all_month.csv", "csv", "header");
}

function initSlider() {
  noUiSlider.create(verticalSlider, {
      start: [0,magnitudeMax],
      tooltips: [true, true],
      margin: 0.2,
      connect: true,
      direction: 'rtl',
      behaviour: 'drag-tap',
      orientation: 'vertical',
      range: {
          'min': 0,
          'max': magnitudeMax
      }
  });
}

function setup() {
    // first, call our map initialization function (look in the html's style tag to set its dimensions)
    magnitudes = table.getColumn("mag");
    magnitudeMin = 0.0;
    magnitudeMax = getColumnMax("mag");
    times = table.getColumn("time");
    times.reverse();
    startTime = Date.parse(times[0]);
    endTime = Date.parse(times[times.length-1]);
    initSlider();
    verticalSlider.noUiSlider.on('end', updateGraph)
    setupMap()
    addLegends();
    //TODO: Convert dates to numbers
    // scale
    // plot lines with opacity
    // include a slider
    // – that’s probably d3
    // next, draw our p5 diagram that complements it
    width = document.getElementById('diagram-container').offsetWidth;
    height = 210;
    var canvas = createCanvas(width, height);
    canvas.parent('diagram-container')
    background(10,10,10);
    updateGraph();
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
  background(10,10,10);
  magnitudes = table.getColumn("mag");
  times = table.getColumn("time");
  times.reverse();
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
        stroke(255, 45, 253, 25);
        fill(255, 45, 253, 65);
        ellipse(x2, y2, 3.5, 3.5);
        line(x1, y1, x2, y2);

      } else {
        strokeWeight(1);
        stroke(111, 255, 255, 150);
        fill(111, 255, 255, 220);
        ellipse(x2, y2, 3.5, 3.5);
        line(x1, y1, x2, y2);

      }
    } else {
      stroke(255, 6);
      line(x1, y1, x2, y2);

    }
  })
}

function updateGraph() {
  sliderStart = verticalSlider.noUiSlider.get()[0]
  sliderEnd = verticalSlider.noUiSlider.get()[1]
  thresholdStart = sliderStart;
  thresholdEnd = sliderEnd;

  // console.log(thresholdStart, thresholdEnd)
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
  // console.log(value, magnitudeMax);
  return map(value, 0, magnitudeMax, magnitudeMax, 0)
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
  opacity: 0.2,
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
    console.log(table)
    // get the two arrays of interest: depth and magnitude
    depths = table.getColumn("depth");
    hErrors = table.getColumn("horizontalError");
    dErrors = table.getColumn("depthError");
    magnitudes = table.getColumn("mag");
    latitudes = table.getColumn("latitude");
    longitudes = table.getColumn("longitude");
    types = table.getColumn("type")
    places = table.getColumn("place")
    times = table.getColumn("time")

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
          if (types[i] == "earthquake") {
            var circle = L.circle([latitudes[i], longitudes[i]], {
                color: '#ff2dfd',      // the dot stroke color
                fillColor: '#ff2dfd', // the dot fill color
                fillOpacity: 0.2,  // use some transparency so we can see overlaps
                stroke: '#fff',
                weight: 0.2,
                radius: Math.sqrt(magnitudes[i]) * 55000,
                place: places[i],
                time: times[i],
                type: types[i],
                depth: depths[i],
                hError: hErrors[i],
                dError: dErrors[i],
                riseOnHover: true
            });
            ;
          } else {
            var circle = L.circle([latitudes[i], longitudes[i]], {
                  color: '#6fffff',      // the dot stroke color
                fillColor: '#6fffff', // the dot fill color
                fillOpacity: 0.2,  // use some transparency so we can see overlaps
                stroke: '#fff',
                weight: 0.2,
                radius: Math.sqrt(magnitudes[i]) * 55000,
                place: places[i],
                time: times[i],
                type: types[i],
                depth: depths[i],
                hError: hErrors[i],
                dError: dErrors[i],
                riseOnHover: true
            });
          }
          circle.bindPopup()
          // place it on the map
          circle.on('click', function(e) {
            // mymap.setView(circle.latLng);
            const sel = e.sourceTarget.options;
              console.log()
              var date = new Date(sel.time);
              var options = { weekday: 'short', year: '2-digit', month: 'short', day: 'numeric' }
              // hour: 'numeric' , minute: 'numeric'
              d3.select('#place-name').text(`${sel.place}`);
              d3.select('#time').text(`${date.toLocaleDateString('en-US')}`);
              d3.select('#type').text(`${sel.type}`)
              d3.select('#depth').text(`${sel.depth} km`)
              d3.select('#horizontal-error').text(`${sel.hError} km`)
              d3.select('#depth-error').text(`${sel.dError} km`)
          });

          circle.addTo(mymap);

          // save a reference to the circle for later
          circles.push(circle)
        }
    }
}

function myFunc(e) {
  console.log(e.myProp)
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


// ------------------ Legend

function addLegends () {
  addXLegend();
  addYLegend();
}

function addXLegend() {
  const selection =  d3.select('#diagram-legend-month')
  let width = selection.node().getBoundingClientRect().width
  const svg = selection.append('svg').attr('width', `${width}`).attr('height', '40px');

   xScale = d3.scaleTime()
       .domain([new Date(startTime), new Date(endTime)])
       .range([0, selection.node().getBoundingClientRect().width])
   xAxis = d3.axisBottom(xScale).tickFormat(d3.timeFormat("%m – %d"))

   svg.append("g")
    .attr('class', 'axis')
       .call(xAxis)
     .selectAll("text")
         .style("text-anchor", "start")
         // .attr("dx", "-.8em")
         // .attr("dy", ".15em")
         // .attr("transform", "rotate(-30)");
}

function addYLegend() {
  // console.log(magnitudeMax);
  const selection =  d3.select('#diagram-legend-magnitude')
  // let width = selection.node().getBoundingClientRect().width
  const svg = selection.append('svg').attr('width', `70px`).attr('height', '215px');

  yScale = d3.scaleLinear()
     .domain([magnitudeMax, 0])
     .range([0, 210])
     // .nice()
   // Adjust to specific scale
   yAxis = d3.axisRight(yScale)
   svg.append("g").attr('class', 'axis')
     .call(yAxis.ticks(8).tickFormat(d3.format(".2s")));

   // svg.append("g")
   //  .attr('class', 'axis')
   //     .call(xAxis)
   //   .selectAll("text")
   //       .style("text-anchor", "start")
   //       // .attr("dx", "-.8em")
   //       // .attr("dy", ".15em")
   //       // .attr("transform", "rotate(-30)");
}
