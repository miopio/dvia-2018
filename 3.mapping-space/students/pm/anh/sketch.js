// an array for the magnitude
var magnitudes;
// an array for depth
var depths;
// an array for lat & long
var latitudes, longitudes;

// minimum and maximum values for magnitude and depth
var magnitudeMin, magnitudeMax;
var depthMin, depthMax;

var magnitudesFiltered;
// an array for depth
var depthsFiltered;
// an array for lat & long
var latitudesFiltered, longitudesFiltered;


// the dots we'll be adding to the map
var circles = [];
var checkboxes;
var filterState = [true, true, true, true, true, true, true];

// table as the data set
var table;

// my leaflet.js map
var mymap;

function preload() {
    // load the CSV data into our `table` variable and clip out the header row
    table = loadTable("data/all_month.csv", "csv", "header");
}

function setup() {
    // first, call our map initialization function (look in the html's style tag to set its dimensions)
    setupMap()

    // next, draw our p5 diagram that complements it
    createCanvas(1100, 600);
    background(222);

    fill(0)
    noStroke()
    textSize(16)
    text(`Plotting ${table.getRowCount()} seismic events`, 20, 40)
    text(`Largest Magnitude: ${getColumnMax("mag")}`, 20, 60)
    text(`Greatest Depth: ${getColumnMax("depth")}`, 20, 80)
    // var button = createButton("click me");
    // button.position(19,19);
    document.querySelector("#checkbox-group").addEventListener("click", function() {
        getFilterState();
        removeAllCircles();
        drawDataPoints();
    })
    checkboxes = document.querySelectorAll("#checkbox-group input");
}

function setupMap(){
    /*
    LEAFLET CODE

    In this case "L" is leaflet. So whenever you want to interact with the leaflet library
    you have to refer to L first.
    so for example L.map('mapid') or L.circle([lat, long])
    */

    // create your own map. SetView 2 argument: Latitude, longtitude. 3 - zoom level. Look at the API reference.
    mymap = L.map('quake-map').setView([51.505, -0.09], 1.5);

    // load a set of map tiles – choose from the different providers demoed here. There are many kind of maps to choose.
    // https://leaflet-extras.github.io/leaflet-providers/preview/
    var CartoDB_DarkMatter = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
    }).addTo(mymap);

    // call our function (defined below) that populates the maps with markers based on the table contents
    drawDataPoints();
}

//Step through data and draw things on the map
function drawDataPoints(){
    strokeWeight(5);
    stroke(255,0,0);

    // Choose 4 columns to use. get the two arrays of interest: depth and magnitude
    depths = table.getColumn("depth");
    magnitudes = table.getColumn("mag");
    latitudes = table.getColumn("latitude");
    longitudes = table.getColumn("longitude");
    // months = table.getColumn("time").map(date => (new Date(date)).getUTCMonth());

    depthsFiltered = depths.filter((depth, index) => {
        return filterState[Math.floor(magnitudes[index])]; 
    });
    magnitudesFiltered = magnitudes.filter((depth, index) => {
        return filterState[Math.floor(magnitudes[index])]; 
    });
    latitudesFiltered = latitudes.filter((depth, index) => {
        return filterState[Math.floor(magnitudes[index])]; 
    });
    longitudesFiltered = longitudes.filter((depth, index) => {
        return filterState[Math.floor(magnitudes[index])]; 
    });

    // get minimum and maximum values for both
    magnitudeMin = 0.0;
    magnitudeMax = getColumnMax("mag");
    console.log('magnitude range:', [magnitudeMin, magnitudeMax])

    depthMin = 0.0;
    depthMax = getColumnMax("depth");
    console.log('depth range:', [depthMin, depthMax])

    // cycle through the parallel depth arrays (can use row insted cause they the same length) and add a dot for each event
    for(var i=0; i<depthsFiltered.length; i++){
        // create a new dot. See reference for more properties
        var circle = L.circle([latitudesFiltered[i], longitudesFiltered[i]], {
            color: 'green',      // the dot stroke color
            fillColor: 'green', // the dot fill color
            fillOpacity: 0.25,  // use some transparency so we can see overlaps
            radius: magnitudesFiltered[i] * 40000
        });

        // place it on the map. Tell the circle to add itself to the map.
        circle.addTo(mymap);

        // save a reference to the circle for later. Creative a global variable circles
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

// get the maximum value within a column. It goes through columns and pick biggest one. Can used to maximum of longtitude, magnitude. 
//Because we don't know what the max is
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

function draw() {
    //console.log("drawing!");
}

function getFilterState() {
    for (var i = 0; i < checkboxes.length; ++i) {
        filterState[i] = checkboxes[i].checked;
    }
    console.log(filterState);
}
