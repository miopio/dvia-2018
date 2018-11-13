// an array for the magnitude
var magnitudes;
// an array for depth
var depths;
// an array for lat & long
var latitudes, longitudes;
//an array for times
var times;
// position for the plot
var plotX1, plotY1; // top left corner
var plotX2, plotY2; // bottom right corner

// minimum and maximum values for magnitude, depth, and time
var magnitudeMin, magnitudeMax;
var depthMin, depthMax;
var timeMin, timeMax;

//How much is one day in milliseconds?
// we will need this for calculations later
// 1000 milliseconds * 60 seconds * 60 minutes * 24 hours
var tsDay = 1000 * 60 * 60 * 24;

// the dots we'll be adding to the map
var circles = [];

// table as the data set
var table;

//graphtable for data set for graph
var graphtable;

// my leaflet.js map
var mymap;

function preload() {
    // load the CSV data into our `table` variable and clip out the header row
    table = loadTable("data/all_month.csv", "csv", "header");
    //boundaries = loadJSON("data/PB2002_boundaries.json");
    plates = loadJSON("data/PB2002_plates.json");
    graphtable = loadTable("data/significant_month.csv", "csv", "header");
}

function setup() {
    // first, call our map initialization function (look in the html's style tag to set its dimensions)
    setupMap()

    // next, draw our p5 diagram that complements it
    createCanvas(1280, 700);
    background(222);

    fill(0)
    noStroke()
    textSize(16)
    text(`Plotting ${table.getRowCount()} seismic events`, 20, 40)
    text(`Largest Magnitude: ${getColumnMax("mag")}`, 20, 60)
    text(`Greatest Depth: ${getColumnMax("depth")}`, 20, 80)

    times = graphtable.getColumn('time');
    depths = graphtable.getColumn('depth');
    magnitudes = graphtable.getColumn('magnitude');
    magnitudes = magnitudes^10;

    var trace1 = {
      x: times,
      y: depths,
      mode: 'markers',
      marker: {
        size: magnitudes
      }
    };

    var data = [trace1];

    var layout = {
      title: 'Depth and magnitude of most significant earthquakes this month',
      showlegend: false,
      height: 400,
      width: 1000
    };

    Plotly.newPlot('quake-graph', data, layout);


}

function setupMap(){
    /*
    LEAFLET CODE

    In this case "L" is leaflet. So whenever you want to interact with the leaflet library
    you have to refer to L first.
    so for example L.map('mapid') or L.circle([lat, long])
    */

    // create your own map
    mymap = L.map('quake-map').setView([37.7749, -122.4194], 4);

    // load a set of map tiles – choose from the different providers demoed here:
    // https://leaflet-extras.github.io/leaflet-providers/preview/
   

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
    }).addTo(mymap);

    /*L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(mymap);*/

    // control that shows state info on hover
    var info = L.control();
    info.onAdd = function(mymap) {
      this._div = L.DomUtil.create("div", "info");
      this.update();
      return this._div;
    };
    info.update = function(props) {
      this._div.innerHTML =
        "<h4>Tectonic Plates</h4>" +
        (props
          ? "<b>" +
            props.PlateName
          : "Hover over a plate");
    };
    info.addTo(mymap);

    function mystyle(feature) {
        return {
            //fillColor: getColor(feature.properties.Code),
            fillColor: '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6),
            weight: 0.5,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.2
        };
    }

    function getColor(m) {
      return m > 7.0 ? '#800026' :
             m > 6.0  ? '#BD0026' :
             m > 5.0  ? '#E31A1C' :
             m > 4.0  ? '#FC4E2A' :
             m > 3.0  ? '#FD8D3C' :
             m > 2.0  ? '#FEB24C' :
             m > 1.0  ? '#FED976' :
                        '#FFEDA0'; 
    }

    function getRadius(d) {
      return d < 70  ? 100000 :
             d < 300 ? 5000 :
             d < 700 ? 100:
                       0;
    }

    function highlightFeature(e) {
        var layer = e.target;

        layer.setStyle({
            weight: 5,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.7
        });

        if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
            layer.bringToFront();
        }

        info.update(layer.feature.properties)
    }

    var geojson;

    function resetHighlight(e) {
        geojson.resetStyle(e.target);
        info.update();
    }

    function zoomToFeature(e) {
        mymap.fitBounds(e.target.getBounds());
    }

    function onEachFeature(feature, layer) {
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight,
            click: zoomToFeature
        });
    }
    
    geojson = L.geoJson(plates, {style: mystyle}, {onEachFeature: onEachFeature}).addTo(mymap);

    var legend = L.control({ position: "bottomright" });

      legend.onAdd = function (map) {
  
      var div = L.DomUtil.create('div', 'info legend'),
      grades = [0, 1, 2, 3, 4, 5, 6, 7, 8],
      labels = [];

      div.innerHTML+='Magnitude<br><hr>'
  
      // loop through our density intervals and generate a label with a colored square for each interval
      for (var i = 0; i < grades.length; i++) {
          div.innerHTML +=
              '<i style="background:' + getColor(grades[i] + 1) + '">&nbsp&nbsp&nbsp&nbsp</i> ' +
              grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
  }
  
  return div;
  };

    legend.addTo(mymap);

  var legend2 = L.control({ position: "bottomleft" });

      legend2.onAdd = function (map) {
  
      var div = L.DomUtil.create('div', 'info legend'),
      grades = [0, 70, 300, 700],
      labels = [];

      div.innerHTML+='Depth<br><hr>'
  
      // loop through our density intervals and generate a label with a colored square for each interval
      for (var i = 0; i < grades.length; i++) {
          div.innerHTML +=
              '<k style="background:' + getRadius(grades[i] + 1) + '">&nbsp&nbsp&nbsp&nbsp</i> ' +
              grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
  }
  
  return div;
  };

  legend2.addTo(mymap);

    //drawPolygons();
    // call our function (defined below) that populates the maps with markers based on the table contents
    drawDataPoints();


}


function getColor(m) {
  return m > 7.0 ? '#800026' :
         m > 6.0  ? '#BD0026' :
         m > 5.0  ? '#E31A1C' :
         m > 4.0  ? '#FC4E2A' :
         m > 3.0  ? '#FD8D3C' :
         m > 2.0  ? '#FEB24C' :
         m > 1.0  ? '#FED976' :
                    '#FFEDA0'; 
}

function getRadius(d) {
  return d < 70  ? 100000 :
         d < 300 ? 5000 :
         d < 700 ? 100:
                   0;
}


function drawDataPoints(){
    strokeWeight(5);
    stroke(255,0,0);


    // get the two arrays of interest: depth and magnitude
    depths = table.getColumn("depth");
    magnitudes = table.getColumn("mag");
    latitudes = table.getColumn("latitude");
    longitudes = table.getColumn("longitude");

    // get minimum and maximum values for both
    magnitudeMin = 0.0;
    magnitudeMax = getColumnMax("mag");
    console.log('magnitude range:', [magnitudeMin, magnitudeMax])

    depthMin = 0.0;
    depthMax = getColumnMax("depth");
    console.log('depth range:', [depthMin, depthMax])


    // cycle through the parallel arrays and add a dot for each event
    for(var i=0; i<depths.length; i++){
        // create a new dot
        var circle = L.circle([latitudes[i], longitudes[i]], {
            color: 'yellow',
            weight: 0,      // the dot stroke color
            fillColor: getColor(magnitudes[i]), // the dot fill color
            fillOpacity: 0.5,  // use some transparency so we can see overlaps
            radius: getRadius(depths[i])
            //radius: magnitudes[i] * 10000
        // just the points
        });

        var points = L.circle([latitudes[i], longitudes[i]], {
            color: 'white',
            weight: 0,      // the dot stroke color
            fillColor: 'white', // the dot fill color
            fillOpacity: 1,  // use some transparency so we can see overlaps
            radius: 50
        });

        // place it on the map
        circle.addTo(mymap);
        points.addTo(mymap);

        // save a reference to the circle for later
        circles.push(circle)
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

/*// an array for the time
var times;
// an array for the magnitude
var magnitudes;
//an array for the epth
var depths;
//an array for graph dataset
var graphtable;


times = graphtable.getColumn('time');
depths = graphtable.getColumn('depth');
magnitudes = graphtable.getColumn('magnitude');

var trace1 = {
  x: times,
  y: depths,
  mode: 'markers',
  marker: {
    size: magnitudes
  }
};

var data = [trace1];

var layout = {
  title: 'Marker Size',
  showlegend: false,
  height: 400,
  width: 1000
};

Plotly.newPlot('quake-graph', data, layout); */


//GRAPH SKETCH

/*
// position for the plot
var plotX1, plotY1; // top left corner
var plotX2, plotY2; // bottom right corner

// minimum and maximum values for data and time
var magnitudeMin, magnitudeMax;
var timeMin, timeMax;

// table as the data set
var table;

// an array for the time
var times;
// an array for the magnitude
var magnitudes;

//How much is one day in milliseconds?
// we will need this for calculations later
// 1000 milliseconds * 60 seconds * 60 minutes * 24 hours
var tsDay = 1000 * 60 * 60 * 24;

var magnitudeInterval = 1.0;

function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable("data/significant_month.csv", "csv", "header");
}

function setup() {
 
  // define top left and bottom right corner of our plot
  plotX1 = 110;
  plotX2 = width - 80;
  plotY1 = 60;
  plotY2 = height- 80;


  // draw a background rectangle for the plot
  fill(255);
  noStroke();
  rectMode(CORNERS);
  rect(plotX1, plotY1, plotX2, plotY2);

  // get the two arrays of interest: time and magnitude
  times = table.getColumn("timestamp");
  magnitudes = table.getColumn("mag");

  // get minimum and maximum values for both
  magnitudeMin = 0.0;
  // rounding up the max value to leave a visual margin at the top
  magnitudeMax = ceil(getColumnMax("mag")/magnitudeInterval) * magnitudeInterval;

  // the minimum for time should be the first date - one day
  timeMin = times[0]-tsDay;

  // the maximum for time should be the last date + one day
  timeMax = float(times[times.length-1]) + tsDay;

  //draw the title for the current plot
  fill(0);
  textSize(16);
  text("Significant Earthquakes - Past 30 days", plotX1, plotY1-16);

  // draw the lables for magnitude on the left
  drawMagnitudeLabels();

  // draw the lables for date at the bottom
  drawDateLabels();

  // draw the labels for both axes
  drawAxisLabels();

  // draw the actual points
  drawDataPoints();
}


// draw the two data points
function drawDataPoints(){
  strokeWeight(5);
  stroke(255,0,0);
  // cycle through array
  for(var i=0; i<times.length; i++){
    //map the x position to the time
    var x = map(times[i],timeMin, timeMax, plotX1, plotX2);
    // map the y position to magnitude
    var y = map(magnitudes[i],magnitudeMin, magnitudeMax, plotY2, plotY1);
    point(x,y);
  }
}

// draw labels "Magnitude" and "Year" next to each of the axes
function drawAxisLabels(){
  fill(0);
  textSize(13);
  textAlign(CENTER, CENTER);
  text("Magnitude", 50, (plotY1+plotY2)/2);
  textAlign(CENTER);
  text("Year", (plotX1+plotX2)/2, plotY2+40);

}

// draw labels for magnitude on the left
function drawMagnitudeLabels(){
  fill(128);
  // we increase i by the interval, which are the sections
  for (var i=0; i<=magnitudeMax; i+=magnitudeInterval){
    noStroke();
    textSize(8);
    textAlign(RIGHT, CENTER);
    // map y to the plotting surface
    var y = map(i, magnitudeMin, magnitudeMax, plotY2, plotY1);

    // write value
    text(floor(i), plotX1-10, y);

    // add visual tick mark
    stroke(128);
    strokeWeight(1);
    line(plotX1-4, y, plotX1-1, y);
  }
}

// draw date labels
// we need to find full days, independent of the actual earthquake events
function drawDateLabels(){
    textSize(8);
    textAlign(CENTER);
    // what is the first day in our plot?
    var firstDay = Math.floor(timeMin);

    // how many days are we plotting total?
    var totalDays = Math.floor((timeMax - timeMin))/1000/60/60/24;

  for(var i=0; i<totalDays; i++){
    var dayCount = firstDay+(i*tsDay);
    // find the x position for each day
    var x = map(dayCount,timeMin, timeMax, plotX1, plotX2);

    // draw a line for each day
    strokeWeight(1);
    stroke(240);
    line(x, plotY1,x,plotY2);

    // write the label in clear text
    // convert the label into a date object again
    var d = new Date(firstDay+dayCount);

    // and write it out in clear text
    var dateNow =  (d.getUTCMonth()+1) + "/" + d.getUTCDate();
    noStroke();
    text(dateNow, x,plotY2+15);
  }
}
*/

