// an array for the magnitude
var magnitudes;
// an array for depth
var depths;
// an array for lat & long
var latitudes, longitudes;
var latitudesValues; var longitudesValues;
// an array for cities lat & long
var cityLatitudes, cityLongitudes;
// an array for city names
var cityNames;
// an array for city populations
var cityPopulations;

// minimum and maximum values for magnitude and depth
var magnitudeMin, magnitudeMax;
var depthMin, depthMax;

var nycPop = 8623000;
var worldPop = 7530000000;

// the dots we'll be adding to the map
var circles = [];

// table as the data set
var table;

// colors
var lowMagColor = "#D6DBDF"
var medMagColor = "#85929E"
var highMagColor = "#E74C3C"

// fonts
var title = "Merriweather";
var facts = "Noto Sans";

// my leaflet.js map
var mymap;

function preload() {
    // load the CSV data into our `table` variable and clip out the header row
    table = loadTable("data/all_month.csv", "csv", "header");
    popTable = loadTable("data/world-cities.csv", "csv", "header");
}

function setup() {
    // first, call our map initialization function (look in the html's style tag to set its dimensions)
    setupMap()

    // next, draw our p5 diagram that complements it
    createCanvas(screen.width, 600);
    background(0);

    fill("white")
    noStroke()

    var populationCount = getPopulationCount()
    var nycComparison = Math.trunc(populationCount/nycPop)
    var worldComparison = populationCount/worldPop
    var worldComparisonPercent = Math.trunc(worldComparison*100)

    textSize(20)
    textFont(title)
    text("How many people have possibly been affected by Seismic events this month?",20, 40)

    textSize(16)
    textFont(facts)

    text("There have been", 20, 80)
    fill("#E74C3C")
    textSize(20)
    text(`${table.getRowCount()}`, 20, 100)
    fill("white")
    textSize(16)
    text("seismic events so far this month.", 20, 120)

    fill("#E74C3C")
    textSize(20)
    text(`${populationCount}`, 20, 160)
    fill("white")
    textSize(16)
    text(" people have been near one of those Seismic events.", 20, 180)

    text("That's", 20, 220)
    fill("#E74C3C")
    textSize(20)
    text(`${nycComparison}`, 20, 240)
    fill("white")
    textSize(16)
    text("times the population of New York City—", 20, 260)

    fill("#E74C3C")
    textSize(20)
    text(`—and ${worldComparisonPercent}% of the world population.`, 20, 300)

    fill("#B3B6B7")
    rect(20, 320, 600,  40)
    fill("#EAECEE")
    rect(20, 320,600*worldComparison, 40)



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
    var Esri_WorldGrayCanvas = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
	maxZoom: 16
        // accessToken: 'pk.eyJ1IjoiZHZpYTIwMTciLCJhIjoiY2o5NmsxNXIxMDU3eTMxbnN4bW03M3RsZyJ9.VN5cq0zpf-oep1n1OjRSEA'
    }).addTo(mymap);

    // call our function (defined below) that populates the maps with markers based on the table contents
    drawDataPoints();
}

function drawDataPoints(){
    strokeWeight(0);
    // stroke(255,0,0);

    // get the two arrays of interest: depth and magnitude
    depths = table.getColumn("depth");
    magnitudes = table.getColumn("mag");
    latitudes = table.getColumn("latitude");
    longitudes = table.getColumn("longitude");
    latitudesValues = _.map(latitudes, float);
    longitudesValues = _.map(longitudes, float);
    // console.log(latitudesValues)
    // console.log(longitudesValues)
    
    // get city arrays
    cityLatitudes = popTable.getColumn("lat");
    cityLongitudes = popTable.getColumn("lng");
    cityLatitudes = _.map(cityLatitudes, float);
    cityLongitudes = _.map(cityLongitudes, float);
    // console.log(cityLatitudes)
    // console.log(cityLongitudes)
    cityNames = popTable.getColumn("city");
    cityPopulations = popTable.getColumn("population");

    // get minimum and maximum values for both
    magnitudeMin = 0.0;
    magnitudeMax = getColumnMax("mag");
    console.log('magnitude range:', [magnitudeMin, magnitudeMax])

    depthMin = 0.0;
    depthMax = getColumnMax("depth");
    console.log('depth range:', [depthMin, depthMax])

    // var result = getClosest(cityLatitudes,cityLongitudes,13.9759,44.1709)
    // console.log(result)

    // cycle through the parallel arrays and add a dot for each event
    for(var i=0; i<depths.length; i++){

        var cityIndex = getClosest(cityLatitudes,cityLongitudes,latitudesValues[i],longitudesValues[i])
        
        var name = cityNames[cityIndex]
        var pop = cityPopulations[cityIndex]

        // create a new dot
        if (magnitudes[i] <= 3) {
            var circle = L.circle([latitudes[i], longitudes[i]], {
                color: '',      // the dot stroke color
                fillColor: lowMagColor, // the dot fill color
                fillOpacity: 0.7,  // use some transparency so we can see overlaps
                radius: 200000
            });
            circle.bindTooltip(`closest city: ${name}, population: ${pop}`,{className: 'tooltip'}).openTooltip();
        }
        else if (magnitudes[i] > 3 && magnitudes[i] <= 5.5) {
            var circle = L.circle([latitudes[i], longitudes[i]], {
                color: '',      // the dot stroke color
                fillColor: medMagColor, // the dot fill color
                fillOpacity: 0.7,  // use some transparency so we can see overlaps
                radius: 200000
            });
            circle.bindTooltip(`closest city: ${name}, population: ${pop}`,{className: 'tooltip'}).openTooltip();
        }
        else {
            var circle = L.circle([latitudes[i], longitudes[i]], {
                color: '',      // the dot stroke color
                fillColor: highMagColor, // the dot fill color
                fillOpacity: 0.7,  // use some transparency so we can see overlaps
                radius: 200000
            });
            circle.bindTooltip(`closest city: ${name}, population: ${pop}`,{className: 'tooltip'}).openTooltip();
        }  

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

function getClosest(arrLat,arrLon,lat,lon){
    var closestIndex = 0;
    var mindif = 99999;

    // console.log(arrLatValues)
    // console.log(arrLonValues)

    for(var i=0; i<arrLat.length; i++){
        var dif = distance(lat, lon, arrLat[i], arrLon[i]);
        if (dif < mindif) {
            closestIndex = i;
            mindif = dif;
        }
    }

    return closestIndex
}

function distance(lat1, lon1, lat2, lon2) {
    var R = 6371; // km
    var x = (lon2 - lon1) * Math.cos((lat1 + lat2) / 2);
    var y = (lat2 - lat1);
    var d = Math.sqrt(x * x + y * y) * R;
    return d;
  }

function getPopulationCount() {
    latitudes = table.getColumn("latitude");
    longitudes = table.getColumn("longitude");
    latitudesValues = _.map(latitudes, float);
    longitudesValues = _.map(longitudes, float);
    // console.log(latitudesValues)
    // console.log(longitudesValues)
    
    // get city arrays
    cityLatitudes = popTable.getColumn("lat");
    cityLongitudes = popTable.getColumn("lng");
    cityLatitudes = _.map(cityLatitudes, float);
    cityLongitudes = _.map(cityLongitudes, float);
    // console.log(cityLatitudes)
    // console.log(cityLongitudes)
    cityNames = popTable.getColumn("city");
    cityPopulations = popTable.getColumn("population");

    var populationCount = 0;

    for(var i=0; i<latitudes.length; i++){

        var cityIndex = getClosest(cityLatitudes,cityLongitudes,latitudesValues[i],longitudesValues[i])
        
        var pop = cityPopulations[cityIndex]

        // console.log(parseInt(pop))
        populationCount = populationCount + parseInt(pop)
    }

    return populationCount
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }