// an array for the magnitude
var magnitudes;
// an array for depth
var depths;
// an array for lat & long
var latitudes, longitudes;

var earthquakeTime;
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

  soundFormats('mp3');
  earthquakeSound = loadSound('assets/equake4.mp3');
    // load the CSV data into our `table` variable and clip out the header row
    table = loadTable("data/significant_month.csv", "csv", "header");
    table2 = loadTable("data/all_hour.csv", "csv", "header");

}

// function setup() {
//     // first, call our map initialization function (look in the html's style tag to set its dimensions)
//     setupMap()
//
//     // next, draw our p5 diagram that complements it
//     //createCanvas(800, 600);
//     background(200);
//
//     fill(0)
//     noStroke()
//     textSize(16)
//     text(`Plotting ${table.getRowCount()} seismic events`, 20, 40)
//     text(`Largest Magnitude: ${getColumnMax("mag")}`, 20, 60)
//     text(`Greatest Depth: ${getColumnMax("depth")}`, 20, 80)
// }

function setupMap(){
    /*
    LEAFLET CODE

    In this case "L" is leaflet. So whenever you want to interact with the leaflet library
    you have to refer to L first.
    so for example L.map('mapid') or L.circle([lat, long])
    */

    // create your own map
    //mymap = L.map('quake-map').setView([51.505, -0.09], 3);
      mymap = L.map('quake-map',{
        worldCopyJump:true,
        center: [51.505, 0.09],
        //inertia: true
      }).setView([0, 0], 1);

      // var southWest = L.latLng(-90, -200),
      // northEast = L.latLng(90, 190);
      var southWest = L.latLng(-90, -Infinity),
      northEast = L.latLng(90, Infinity);
      var bounds = L.latLngBounds(southWest, northEast);
    //  var latlng = L.latLng(89.5, 30.5)
    var latlng = L.latLng(100.5, 200)
      mymap.wrapLatLng(latlng);
      mymap.setMaxBounds(bounds);
//       mymap.on('drag', function() {
//       //map.panInsideBounds(bounds, { animate: false });
// });
    // load a set of map tiles – choose from the different providers demoed here:
    // https://leaflet-extras.github.io/leaflet-providers/preview/
    // L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    //     attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    //     maxZoom: 18,
    //     id: 'mapbox.streets',
    //     accessToken: 'pk.eyJ1IjoiZHZpYTIwMTciLCJhIjoiY2o5NmsxNXIxMDU3eTMxbnN4bW03M3RsZyJ9.VN5cq0zpf-oep1n1OjRSEA'
    //L.noWrap('true')
    //===============black
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png?access_token={accessToken}', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19,


//===========================white
     // L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	   //    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
	   // subdomains: 'abcd',
	   // maxZoom: 19,

      minZoom:1,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoiZHZpYTIwMTciLCJhIjoiY2o5NmsxNXIxMDU3eTMxbnN4bW03M3RsZyJ9.VN5cq0zpf-oep1n1OjRSEA',

      //  noWrap:true






    }).addTo(mymap);

    // call our function (defined below) that populates the maps with markers based on the table contents
    drawDataPoints();

}

function drawDataPoints(){
    strokeWeight(5);
    stroke(255,0,0);

    // get the two arrays of interest: depth and magnitude



  // depths = table2.getColumn("depth");
  // magnitudes = table2.getColumn("mag");
  // latitudes = table2.getColumn("latitude");
  // longitudes = table2.getColumn("longitude");
  // place = table2.getColumn("place");
  // earthquakeTime=table2.getColumn("time");

  //
  depths = table.getColumn("depth");
  magnitudes = table.getColumn("mag");
  latitudes = table.getColumn("latitude");
  longitudes = table.getColumn("longitude");
  place = table.getColumn("place");
  earthquakeTime=table.getColumn("time");




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
            color: 'Grey',      // the dot stroke color
            stroke: false,
            fillColor: 'pink', // the dot fill color
            fillOpacity: 0.5,  // use some transparency so we can see overlaps
            radius: magnitudes[i] * 40000,
            data:{id:i}
        });

        //marker.bindPopup("Popup content");


        circle.bindPopup(place[i]+"<br> Time: "+earthquakeTime[i]+"<br> Magnitudes: "+magnitudes[i] +"<br> Depths: " + depths[i]);
        // circle.number(i);
        circle.on('mouseclicked', function (e) {
            var data = this.options.data
            this.openPopup();
            this.setStyle({
              //fillColor: '#FE01AA',
            })
            //magVal=this.getPopup();
            //magVal=this.getLatLng();
            //magVal=this.get('id');
          //console.log(data.id);
            idofEvent= data.id;
          });

          circle.on('mouseover', function (e) {
              var data = this.options.data
              //this.openPopup();
              this.setStyle({
                fillColor: '#FE01AA',
              })
              //magVal=this.getPopup();
              //magVal=this.getLatLng();
              //magVal=this.get('id');
            //console.log(data.id);
              idofEvent= data.id;
            });






        circle.on('mouseout', function (e) {
          //  this.closePopup();
          this.setStyle({
            fillColor: 'pink',
          });
        });



        // place it on the map
        circle.addTo(mymap);

        // save a reference to the circle for later
        circles.push(circle)

    }
}

function mouseoverF(){
  mymap.circles.on('mouseover',function(ev) {
    ev.target.openPopup();
  });


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
