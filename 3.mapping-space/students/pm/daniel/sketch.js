// an array for the magnitude
var magnitudes;
// an array for depth
var depths;
// an array for lat & long
var latitudes, longitudes;

// an array for Japanese intensity
var deaths;

// minimum and maximum values for magnitude, depth
var magnitudeMin, magnitudeMax;
var depthMin, depthMax;

// minimum and maximum values for Japanese intensity
var deathMin, deathMax;

// the dots we'll be adding to the map
var circles = [];

// table as the data set
var table;

//JapanTable as the data set 
var japanTable;

// my leaflet.js map
var mymap;

function preload() {
    // load the CSV data into our `table` and `japanTable` variable and clip out the header row
    table = loadTable("data/all_week.csv", "csv", "header");
    japanTable = loadTable("data/japan_major_quakes.csv", "csv", "header");
}

console.log(japanTable);


function setup() {
    // first, call our map initialization function (look in the html's style tag to set its dimensions)
    setupMap()

    // next, draw our p5 diagram that complements it
    createCanvas(800, 600);
    background(222);

    fill(0)
    noStroke()
    textSize(16)
    text(`Plotting ${table.getRowCount()} seismic events`, 20, 40)
    text(`Largest Magnitude: ${getColumnMax("mag")}`, 20, 60)
    text(`Greatest Depth: ${getColumnMax("depth")}`, 20, 80)

}

function setupMap(){
    /*
    LEAFLET CODE

    In this case "L" is leaflet. So whenever you want to interact with the leaflet library
    you have to refer to L first.
    so for example L.map('mapid') or L.circle([lat, long])
    */

    // create your own map
    mymap = L.map('quake-map').setView([38.00, 139.50], 5);

    // load a set of map tiles – choose from the different providers demoed here:
    // https://leaflet-extras.github.io/leaflet-providers/preview/
    L.tileLayer('https://{s}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey={apikey}', {
    attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    apikey: '84f79b907f8c451d880219e3f07bbd73',
    maxZoom: 22,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiZGFuZ3J1bmViYXVtIiwiYSI6ImNqbzM3dGh3bDB1ZXgzdnBoNjl3MDM4ZnQifQ.qT8VydwK8OtqWCYUUcaSIQ'
    }).addTo(mymap);

    // call our function (defined below) that populates the maps with markers based on the table contents
    drawDataPoints();
}

function drawDataPoints(){


    // get the two arrays of interest: depth and magnitude
    depths = table.getColumn("depth");
    magnitudes = table.getColumn("mag");
    latitudes = table.getColumn("latitude");
    longitudes = table.getColumn("longitude");

    // get minimum and maximum values for both
    magnitudeMin = 0.0;
    magnitudeMax = getColumnMax("mag");
    //console.log('magnitude range:', [magnitudeMin, magnitudeMax])

    depthMin = 0.0;
    depthMax = getColumnMax("depth");
    //console.log('depth range:', [depthMin, depthMax])

    // cycle through the parallel arrays and add a dot for each event
    for(var i=0; i<depths.length; i++){
        // create a new dot
        var circle = L.circle([latitudes[i], longitudes[i]], {
            color: 'T',      // the dot stroke color
            fillColor: '#f03', // the dot fill color
            fillOpacity: 0.25,  // use some transparency so we can see overlaps
            radius: magnitudes[i] * 15000


        });

        // place it on the map
        circle.addTo(mymap);

        // save a reference to the circle for later
        circles.push(circle);
    }

    panda();
}

// function removeAllCircles(){
//     // remove each circle from the map and empty our array of references
//     circles.forEach(function(circle, i){
//         mymap.removeLayer(circle);
//     })
//     circles = [];
// }

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
function panda(){

    var popupText = [
"Great Kanto Earthquake, 1923. Magnitude 8.3. Intensity 6. 142,000 deaths.",
"Kita Tango Earthquake, 1927. Magnitude 7.3. Intensity 6. 3,200 deaths.",
"Sanriku earthquake, 1933. Magnitude 8.1. Intensity 5. 3,700 deaths.",
"Tottori Earthquake, 1943. Magnitude 7.2. Intensity 6. 1,100 deaths.",
"Tonankai Earthquake, 1944. Magnitude 8.1. Intensity 1,200 deaths.",
"Mikawa Earthquake, 1945. Magnitude 6.8. Intensity 5. 2,300 deaths.",
"Nankai Earthquake, 1946. Magnitude 8.1. Intensity 6. 1,400 deaths.",
"Fukui Earthquake, 1948. Magnitude 7.1. Intensity 6. 3,800 deaths.",
"Great Hanshin Earthquake, 1995. Magnitude 7.3. Intensity 7. 6,400 deaths.",
"Tohoku Earthquake, 2011. Magnitude 9.0. Intensity 7. 15,900 deaths.",

    ];

    //get the two arrays of interest from japanTable: magnitude and intensity
    magnitude = japanTable.getColumn("Magnitude");
    console.log(magnitude)

    deaths = japanTable.getColumn("Deaths");
    let max = 0;

    for (let d=0;d<deaths.length;d++) {
        
        let deathCount = deaths[d];
        // console.log(deathCount,max,deathCount>max)
        if (deathCount > max) {
            max = deathCount;
        }
        console.log(max);
    }
    latitudes = japanTable.getColumn("Latitude");
    longitudes = japanTable.getColumn("Longitude");

    // get minimum and maximum values for both
    magnitudeMin = 0.0;
    magnitudeMax = getColumnMax("Magnitude");
    // console.log('magnitude range:', [magnitudeMin, magnitudeMax]);

    deathMin = 0;
    deathMax = getColumnMax("Deaths");
    console.log('deaths range:', [deathMin, deathMax]);



    var palette = Brewer.sequential('YlOrBr', 4, 0, deathMax);
    console.log(palette);
    //intensity [1] = 3;    
    // cycle through the parallel arrays and add a dot for each event
    for(var i=0; i<magnitude.length; i++){
        // create a new dot
        var color = palette.colorForValue(deaths[i]);
        // console.log(deaths[i]);
        var circle = L.circle([latitudes[i], longitudes[i]], {
            color: 'T',      // the dot stroke color
            fillColor: color, // the dot fill color
            fillOpacity: 0.50,  // use some transparency so we can see overlaps
            radius: magnitude[i] * 15000
        });
        
    
 //   circle.bindpopup(L.popup().setContent(latitudes[i]+' '+longitudes[i])); 
var popup1 = L.popup()
    .setLatLng([35.10, 139.50])
    .setContent(popupText[i])
    .openOn(mymap);
   circle.bindPopup(popup1);
// var popup2 = L.popup()
//     .setLatLng([35.59, 134.89])
//     .setContent("Kita Tango earthquake, 1923. Magnitude 7.3. Intensity 6. 3,200 deaths.")
//     .openOn(mymap);

        // place it on the map
        circle.addTo(mymap);

        // save a reference to the circle for later
        circles.push(circle)
    }
}



