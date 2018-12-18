// an array for the magnitude
var magnitudes;
// an array for lat & long
var latitudes, longitudes;

var leftBuffer;
var rightBuffer;

// minimum and maximum values for magnitude and depth
var magnitudeMin, magnitudeMax;

// the dots we'll be adding to the map
var circles = [];

// table as the data set
var table;
var tableIdentCov;
var tableIdentLoc;

// my leaflet.js map
var mymap;

function preload() {
    // load the CSV data into our `table` variable and clip out the header row
    table = loadTable("./data/BreachesByStateFinal.csv", "csv", "header");
    tableIdentCov = loadTable("./data/IncidentByTotalIndividuals.csv", "csv", "header");
    tableIdentLoc = loadTable("./data/IncidentTypeByCoveredEntityCount.csv", "csv", "header");

}

function setup() {
    // first, call our map initialization function (look in the html's style tag to set its dimensions)
    //setupMap()

    // next, draw our p5 diagram that complements it
    createCanvas(1200, 1090);
    background('white');
    rightBuffer = createGraphics(700, 900);
    leftBuffer = createGraphics(800,600);
    fill(0)
    noStroke()
    //textSize(16)
    //text(`Plotting ${table.getRowCount()} seismic events`, 20, 40)
    //text(`Largest Magnitude: ${getColumnMax("mag")}`, 20, 60)
    //text(`Greatest Depth: ${getColumnMax("depth")}`, 20, 80)
}

function draw(){
   drawLeftBuffer();
   drawRightBuffer();
   image(leftBuffer, 0, 100);
   image(rightBuffer, 780, 0);
}

function drawLeftBuffer() {
    setupMap();
    leftBuffer.background('white');
    leftBuffer.fill(255, 255, 255);
    leftBuffer.textSize(32);
    leftBuffer.text("This is the left buffer!", 50, 50);
}

function drawRightBuffer() {
    rightBuffer.background('white');
    rightBuffer.fill(0, 0, 0);
    rightBuffer.textSize(10);
    //rightBuffer.text("This is the right buffer!", 50, 50);
    //tableIdentCov = loadTable("./data/IncidentByTotalIndividuals.csv", "csv", "header");;
    //tableIdentLoc = loadTable("./data/IncidentTypeByCoveredEntityCount.csv", "csv", "header");;

    var incByIn = tableIdentCov.getColumn("Types of Incident");
    var inByInc = tableIdentCov.getColumn("Individuals Affected");
    var x = 70
    var y = 50
    var dim = 10
    for(var j = 0; j < incByIn.length; j++){
        rightBuffer.textSize(9);
        rightBuffer.text(incByIn[j] + " \t" + inByInc[j], x+dim*.5, y+dim*.8);
        console.log(incByIn[j] + " " + " \t" + inByInc[j]);
        y+=dim;
    }

    console.log("Trying location");
    var loc = tableIdentLoc.getColumn("Incident Location");
    var locCE = tableIdentLoc.getColumn("Covered Entity Count");
    var count = 0;
    var hash = {};
    loc.forEach(function(item){
      if (item.indexOf(",") == -1){
        var key = item.slice(0, item.length).trim();   //physical location
      }else {
        var key = String(item.slice(0, item.indexOf(",")).trim()) ;   //physical location
      }
      if (hash[key]) {
         hash[key] = int(hash[key]) + int(locCE[count]) ;
      } else {
         hash[key] = int(locCE[count]);
      }
    count++;
    });
    console.log(hash);
    console.log(hash);
    var min = max = 0;
    for (var k in hash){
         //console.log( k + " (" + hash[k] + ")");
         if(hash[k] > max){
            max = hash[k];
         }
    }
    console.log("Elements examined " + Object.keys(hash).length);
    rightBuffer.textSize(20);
    rightBuffer.text("Breaches count", 250, 20);
    //rightBuffer.text("Elements examined " + Object.keys(hash).length, 50, 14 + (i));
    var numberOfShades = 9;
    var palette = Brewer.sequential('Greens', numberOfShades, min, max)
    var x = 70
    var y = 150
    var xright = 200
    var dim = 10
    for (var j in hash){
      // draw the box
      var color = palette.colorForValue(hash[j]);
      rightBuffer.fill(color);
      rightBuffer.rect(x, y, xright, dim);
      if(hash[j] < 70){
          rightBuffer.fill('black');
      } else {
          rightBuffer.fill('white');
      }
      rightBuffer.textSize(9);
      rightBuffer.text(j + " (" + hash[j] + ")", x+dim*.5, y+dim*.8);
      console.log(j + " (" + hash[j] + ")");
      stroke('#222222');
      strokeWeight(4);
      line(xright + dim, y + dim*.8, int(xright) + int(hash[j]), y + dim*.8);
      console.log("xright " + xright + " dim " + dim + " y " +  y + " hash[j] " + hash[j]);
      y+=dim;
     }
}



function setupMap(){
    /*
    LEAFLET CODE

    In this case "L" is leaflet. So whenever you want to interact with the leaflet library
    you have to refer to L first.
    so for example L.map('mapid') or L.circle([lat, long])
    */

    console.log("Column count: " + table.getColumnCount());
    console.log("Row count: " + table.getRowCount());
    // create your own map
    mymap = L.map('breach-map').setView([26, -97], 4);

    // load a set of map tiles – choose from the different providers demoed here:
    // https://leaflet-extras.github.io/leaflet-providers/preview/
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiZHZpYTIwMTciLCJhIjoiY2o5NmsxNXIxMDU3eTMxbnN4bW03M3RsZyJ9.VN5cq0zpf-oep1n1OjRSEA'
    }).addTo(mymap);

    // call our function (defined below) that populates the maps with markers based on the table contents
    drawDataPoints();
}

function drawDataPoints(){
    strokeWeight(5);
    stroke(255,0,0);
    
    // get the two arrays of interest: magnitude
    magnitudes = table.getColumn('Total');
    latitudes  = table.getColumn('latitude');
    longitudes = table.getColumn('longitude');

    console.log("Magnitudes length: " + magnitudes.length);
    console.log("Longitudes length: " + longitudes.length);
    console.log("Latitudes length: " + latitudes.length);
    
    // get minimum and maximum values for both
    magnitudeMin = 0.0;
    magnitudeMax = getColumnMax("Total");
    console.log('magnitude range:', [magnitudeMin, magnitudeMax])

    var numberOfShades = 9;
    var mpalette = Brewer.divergent('PiYG', numberOfShades, 0, magnitudeMax/2,  magnitudeMax)

    // cycle through the parallel arrays and add a dot for each event
    for(var i=0; i<magnitudes.length; i++){
        // create a new dot
        console.log("lat: " + latitudes[i] + " long: " + longitudes[i]);
        var circle = L.circle([latitudes[i], longitudes[i]], {
            //color: mpalette.colorForValue(magnitudes[i]), //'green',      // the dot stroke color
            color: mpalette.colorForValue(magnitudes[i]), //'green',      // the dot stroke color
            fillColor: mpalette.colorForValue(magnitudes[i]), //'#f03', // the dot fill color
            fillOpacity: 0.5,  // use some transparency so we can see overlaps
            radius: magnitudes[i] * 10000
        });
        circle.bindPopup("<b>latitude:</b> "+latitudes[i] + " <b>longitude:</b> " +longitudes[i]+" <br> magnitude: </b> " + magnitudes[i]);
        //https://api.flickr.com/services/rest/?method=flickr.photos.geo.photosForLocation&api_key=b386b34076768fea100cd9a1ba4ec7b3&lat=30.4634&lon=87.7605&format=rest&auth_token=72157703565874615-e3fcdd07e7a0cce8&api_sig=b4961de1ce023b3101deb65185df0493
        // place it on the map
        circle.addTo(mymap);
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
