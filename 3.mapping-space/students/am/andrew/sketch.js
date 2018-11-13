// an array for the magnitude
var magnitudes;
// an array for depth
var depths;
// an array for lat & long
var latitudes, longitudes;

var magError, depthError, horizontalError;

// minimum and maximum values for magnitude and depth
var magnitudeMin, magnitudeMax;
var depthMin, depthMax;

// the dots we'll be adding to the map
var circles = [];

// table as the data set
var table;

// my leaflet.js map
var mymap;

function preload() {
  // load the CSV data into our `table` variable and clip out the header row
  // table = loadTable("data/all_month.csv", "csv", "header");
  table = loadTable("data/significant_month.csv", "csv", "header");
}

function setup() {
  // first, call our map initialization function (look in the html's style tag to set its dimensions)
  setupMap();

  // next, draw our p5 diagram that complements it

  canvas = createCanvas(320, 115);
  canvas.parent("canvas-holder");
  background("#3d3d3d");

  fill("#fff");
  noStroke();
  textSize(16);
  textFont("monospace");
  text(`Plotting ${table.getRowCount()} seismic events`, 20, 40);
  text(`Largest Magnitude: ${getColumnMax("mag")}`, 20, 60);
  text(`Greatest Depth: ${getColumnMax("depth")}`, 20, 80);
}

function setupMap() {
  /*
    LEAFLET CODE

    In this case "L" is leaflet. So whenever you want to interact with the leaflet library
    you have to refer to L first.
    so for example L.map('mapid') or L.circle([lat, long])
    */

  // create your own map
  mymap = L.map("quake-map").setView([51.505, -0.09], 3);

  // load a set of map tiles – choose from the different providers demoed here:
  // https://leaflet-extras.github.io/leaflet-providers/preview/
  L.tileLayer(
    "https://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}{r}.{ext}?access_token={accessToken}",
    {
      // attribution:
      //   'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      minZoom: 2,
      maxZoom: 10,
      opacity: 0.2,
      id: "mapbox.streets",
      ext: "png",
      accessToken:
        "pk.eyJ1IjoiZHZpYTIwMTciLCJhIjoiY2o5NmsxNXIxMDU3eTMxbnN4bW03M3RsZyJ9.VN5cq0zpf-oep1n1OjRSEA"
    }
  ).addTo(mymap);

  // call our function (defined below) that populates the maps with markers based on the table contents
  drawDataPoints();
}

function drawDataPoints() {
  strokeWeight(5);
  stroke(255, 0, 0);

  // get the two arrays of interest: depth and magnitude
  depths = table.getColumn("depth");
  magnitudes = table.getColumn("mag");
  latitudes = table.getColumn("latitude");
  longitudes = table.getColumn("longitude");
  magError = table.getColumn("magError");
  depthError = table.getColumn("depthError");
  horizontalError = table.getColumn("horizontalError");

  // convert to numbers
  for (var x = 0; x < depths.length; x++) {
    depths[x] = +depths[x];
  }
  for (var x = 0; x < magnitudes.length; x++) {
    magnitudes[x] = +magnitudes[x];
  }
  for (var x = 0; x < latitudes.length; x++) {
    latitudes[x] = +latitudes[x];
  }
  for (var x = 0; x < longitudes.length; x++) {
    longitudes[x] = +longitudes[x];
  }
  for (var x = 0; x < magError.length; x++) {
    magError[x] = +magError[x];
  }
  for (var x = 0; x < depthError.length; x++) {
    depthError[x] = +depthError[x];
  }
  for (var x = 0; x < horizontalError.length; x++) {
    horizontalError[x] = +horizontalError[x];
  }

  // get avg. values for both
  var avgMag = magnitudes.reduce((a, b) => a + b, 0) / magnitudes.length;
  var avgDepth = depths.reduce((a, b) => a + b, 0) / depths.length;

  // get minimum and maximum values for both
  magnitudeMin = 0.0;
  magnitudeMax = getColumnMax("mag");
  // console.log("magnitude range:", [magnitudeMin, magnitudeMax]);

  depthMin = 0.0;
  depthMax = getColumnMax("depth");
  // console.log("depth range:", [depthMin, depthMax]);

  var latlngs = [
    [latitudes[0], longitudes[0]],
    [latitudes[1], longitudes[1]],
    [latitudes[2], longitudes[2]],
    [latitudes[3], longitudes[3]],
    [latitudes[4], longitudes[4]],
    [latitudes[5], longitudes[5]],
    [latitudes[6], longitudes[6]],
    [latitudes[7], longitudes[7]],
    [latitudes[8], longitudes[8]],
    [latitudes[9], longitudes[9]],
    [latitudes[10], longitudes[10]],
    [latitudes[11], longitudes[11]],
    [latitudes[12], longitudes[12]]
  ];

  // create a red polygon from an array of LatLng points
  // var ls = [
  //   [latitudes[0], longitudes[0]],
  //   [41, -109.03],
  //   [41, -102.05],
  //   [37, -102.04]
  // ];

  var numberOfShades = 9;
  var palette = Brewer.sequential("Reds", numberOfShades, 0, 13);

  //create the circles
  for (var i = 0; i < latlngs.length; i++) {
    // set color
    var color = palette.colorForValue(i);
    // create a new dot
    var circleEvent = L.circle([latitudes[i], longitudes[i]], {
      color: "#67000d", // the dot stroke color
      // fillColor: "#f03", // the dot fill color
      fillColor: color,
      fillOpacity: 1, // use some transparency so we can see overlaps
      // radius: magnitudes[i] * 40000
      // radius: depths[i] * 2000
      radius: 80000
    });
    // place it on the map and make clickable
    circleEvent.addTo(mymap);
    circleEvent.on("click", onCircleClick);
    // save a reference to the circle for later
    circles.push(circleEvent);

    // create a new dot for magError
    var circleMagErr = L.circle(
      [latitudes[i] + magnitudes[i] * 0.8, longitudes[i]],
      {
        color: "blue", // the dot stroke color
        fillColor: "blue",
        fillOpacity: 0.3,
        radius: 300000 * magError[i]
      }
    );
    // place it on the map and make clickable
    circleMagErr.addTo(mymap);
    circleMagErr.on("click", onCircleClick);

    // create a new dot for depthError
    var circleDepthErr = L.circle(
      [latitudes[i] - depths[i] * 0.2, longitudes[i]],
      {
        color: "green", // the dot stroke color
        fillColor: "green",
        fillOpacity: 0.3,
        radius: 20000 * depthError[i]
      }
    );
    // place it on the map and make clickable
    circleDepthErr.addTo(mymap);
    circleDepthErr.on("click", onCircleClick);
  }

  // create the polylines
  for (i = 0; i < latlngs.length; i++) {
    let adjust = 0.5;
    var horizontalLineRight = [
      [latitudes[i], longitudes[i]],
      [latitudes[i], longitudes[i] + horizontalError[i] * adjust]
    ];
    var horizontalLineLeft = [
      [latitudes[i], longitudes[i]],
      [latitudes[i], longitudes[i] - horizontalError[i] * adjust]
    ];
    var pointMag = [
      [latitudes[i], longitudes[i] + horizontalError[i] * adjust],
      [latitudes[i] + magnitudes[i] * 0.8, longitudes[i]],
      [latitudes[i], longitudes[i] - horizontalError[i] * adjust]
    ];
    var pointDepth = [
      [latitudes[i], longitudes[i] + horizontalError[i] * adjust],
      [latitudes[i] - depths[i] * 0.2, longitudes[i]],
      [latitudes[i], longitudes[i] - horizontalError[i] * adjust]
    ];

    var pointMagAvg = [
      [latitudes[i], longitudes[i] + horizontalError[i] * adjust],
      [latitudes[i] + avgMag * 0.8, longitudes[i]],
      [latitudes[i], longitudes[i] - horizontalError[i] * adjust]
    ];

    var pointDepthAvg = [
      [latitudes[i], longitudes[i] + horizontalError[i] * adjust],
      [latitudes[i] - avgDepth * 0.2, longitudes[i]],
      [latitudes[i], longitudes[i] - horizontalError[i] * adjust]
    ];

    // var pointMag = [
    //   [latitudes[i] + magnitudes[i] * 0.5, longitudes[i]],
    //   [latitudes[i], longitudes[i]]
    // ];
    // var pointDepth = [
    //   [latitudes[i], longitudes[i]],
    //   [latitudes[i] - depths[i] * 0.2, longitudes[i]]
    // ];
    var colorRecent = palette.colorForValue(i);
    var polygonMag = L.polyline(pointMag, {
      color: "blue",
      opacity: 0.8
      // fill: colorRecent,
      // fillOpacity: 0.5
    }).addTo(mymap);
    var polygonMagAvg = L.polyline(pointMagAvg, {
      color: "blue",
      opacity: 0.2,
      className: "avg"
      // fill: colorRecent,
      // fillOpacity: 0.5
    }).addTo(mymap);
    var polygonDepth = L.polyline(pointDepth, {
      color: "green",
      opacity: 0.8
      // fill: colorRecent,
      // fillOpacity: 0.5
    }).addTo(mymap);
    var polygonDepthAvg = L.polyline(pointDepthAvg, {
      color: "green",
      opacity: 0.2,
      className: "avg"
      // fill: colorRecent,
      // fillOpacity: 0.5
    }).addTo(mymap);
    var polygonHorL = L.polyline(horizontalLineLeft, { color: "black" }).addTo(
      mymap
    );
    var polygonHorR = L.polyline(horizontalLineRight, { color: "black" }).addTo(
      mymap
    );

    // // trigger click event
    polygonDepth.on("click", onPolyClick);
    polygonHorL.on("click", onPolyClick);
    polygonHorR.on("click", onPolyClick);
    polygonMag.on("click", onPolyClick);
    polygonMagAvg.on("click", onPolyClick);
    polygonDepthAvg.on("click", onPolyClick);
  }

  // click events
  function onPolyClick() {
    console.log("clicked!", this);
    // console.log(this.options.opacity);

    this.options.color = "red"; // updates value but doesnt change map
    mymap.flyTo([this._latlngs[0].lat, this._latlngs[0].lng], 5);
  }

  function onCircleClick() {
    // console.log("clicked!", this);

    mymap.flyTo([this._latlng.lat, this._latlng.lng], 5);
  }

  // connect the events
  var polyline = L.polyline(latlngs, {
    color: "#3d3d3d",
    opacity: 0.3,
    dashArray: "6",
    weight: 2
  }).addTo(mymap);
  // zoom the map to the polyline
  mymap.fitBounds(polyline.getBounds());
}

// not used...should call if making dynamic and updating on new data pull
function removeAllCircles() {
  // remove each circle from the map and empty our array of references
  circles.forEach(function(circle, i) {
    mymap.removeLayer(circle);
  });
  circles = [];
}

// get the maximum value within a column
function getColumnMax(columnName) {
  // get the array of strings in the specified column
  var colStrings = table.getColumn(columnName);

  // convert to a list of numbers by running each element through the `float` function
  var colValues = _.map(colStrings, float);

  // find the max value by manually stepping through the list and replacing `m` each time we
  // encounter a value larger than the biggest we've seen so far
  var m = 0.0;
  for (var i = 0; i < colValues.length; i++) {
    if (colValues[i] > m) {
      m = colValues[i];
    }
  }
  return m;

  // or do it the 'easy way' by using lodash:
  // return _.max(colValues);
}
