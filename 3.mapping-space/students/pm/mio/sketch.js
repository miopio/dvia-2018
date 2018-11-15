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
    graphtable2 = loadTable("data/4.5_month.csv", "csv", "header")
    graphtable3 = loadTable("data/2.5_month.csv", "csv", "header");
    graphtablejapan = loadTable("data/significant_month_japan.csv", "csv", "header");
    graphtablejapan2 = loadTable("data/4.5_month_japan.csv", "csv", "header");
    graphtablejapan3 = loadTable("data/2.5_month_japan.csv", "csv", "header");
}

function setup() {
    // first, call our map initialization function (look in the html's style tag to set its dimensions)
    setupMap()

    // next, draw our p5 diagram that complements it
    //createCanvas(1280, 700);
    //background(222);

    /*fill(0)
    noStroke()
    textSize(16)
    text(`Plotting ${table.getRowCount()} seismic events`, 20, 40)
    text(`Largest Magnitude: ${getColumnMax("mag")}`, 20, 60)
    text(`Greatest Depth: ${getColumnMax("depth")}`, 20, 80)*/

    graphtimes = graphtable.getColumn('time');
    graphdepth = graphtable.getColumn('depth');
    graphdepth = graphdepth.map(x => x * -1);
    graphmagnitude = graphtable.getColumn('magnitude');
    graphmagnitude = graphmagnitude^20;

    graphtimes2 = graphtable2.getColumn('time');
    graphdepth2 = graphtable2.getColumn('depth');
    graphdepth2 = graphdepth2.map(x => x * -1);
    graphmagnitude2 = graphtable2.getColumn('magnitude');
    graphmagnitude2 = graphmagnitude2^20;

    graphtimes3 = graphtable3.getColumn('time');
    graphdepth3 = graphtable3.getColumn('depth');
    graphdepth3 = graphdepth3.map(x => x * -1);
    graphmagnitude3 = graphtable3.getColumn('magnitude');
    graphmagnitude3 = graphmagnitude3^20;

    graphplace3 = graphtable3.getColumn('place');



    var significant = {
      x: graphtimes,
      y: graphdepth,
      name: 'significant',
      mode: 'markers',
      marker: {
        color: 'rgba(189, 0, 38, 0.5)',
        size: 30
      }
    };

    var abovemag4 = {
      x: graphtimes2,
      y: graphdepth2,
      name: 'above magnitude 4.5',
      mode: 'markers',
      marker: {
        color: 'rgba(252, 78, 42, 0.5)',
        size: 10
      }
    };

    var abovemag2 = {
      x: graphtimes3,
      y: graphdepth3,
      name: 'above magnitude 2.5',
      mode: 'markers',
      marker: {
        color: 'rgba(254, 178, 76, 0.5)',
        size: 5
      }
    };

    var data = [abovemag2, abovemag4, significant];

    var layout = {
      title: 'Depth and magnitude of earthquakes this month',
        xaxis: {
          title: 'Time',
          titlefont: {
            family: 'Lato',
            size: 12,
            color: 'rgb(169,169,169)'
          }
        },
        yaxis: {
          title: 'Depth (km)',
          titlefont: {
            family: 'Lato',
            size: 12,
            color: 'rgb(169,169,169)'
          }
        },
      showlegend: true,
      height: 400,
      width: 1280,
      font: {
        family: 'Lato',
        size: 12,
        color: 'rgb(169,169,169)'
      },
      plot_bgcolor: 'rgba(0,0,0, 0.1)',
      margin: {
        pad: 10
      },
        };

    Plotly.newPlot('quake-graph', data, layout);



  /*var japan = []
  for (var i = 0; i < graphmagnitude3.length; i++) {
    if (graphplace3[i].includes("japan")){

    }
  //}*/

    graphtimesjapan = graphtablejapan.getColumn('time');
    graphdepthjapan = graphtablejapan.getColumn('depth');
    graphdepthjapan = graphdepthjapan.map(x => x * -1);
    graphmagnitudejapan = graphtablejapan.getColumn('magnitude');
    graphmagnitudejapan = graphmagnitudejapan^20;

    graphtimesjapan2 = graphtablejapan2.getColumn('time');
    graphdepthjapan2 = graphtablejapan2.getColumn('depth');
    graphdepthjapan2 = graphdepthjapan2.map(x => x * -1);
    graphmagnitudejapan2 = graphtablejapan2.getColumn('magnitude');
    graphmagnitudejapan2 = graphmagnitudejapan2^20;

    graphtimesjapan3 = graphtablejapan3.getColumn('time');
    graphdepthjapan3 = graphtablejapan3.getColumn('depth');
    graphdepthjapan3 = graphdepthjapan3.map(x => x * -1);
    graphmagnitudejapan3 = graphtablejapan3.getColumn('magnitude');
    graphmagnitudejapan3 = graphmagnitudejapan3^20;

    graphplace3 = graphtable3.getColumn('place');



    var significant = {
      x: graphtimesjapan,
      y: graphdepthjapan,
      name: 'significant',
      mode: 'markers',
      marker: {
        color: 'rgba(189, 0, 38, 0.5)',
        size: 30
      }
    };

    var abovemag4 = {
      x: graphtimesjapan2,
      y: graphdepthjapan2,
      name: 'above magnitude 4.5',
      mode: 'markers',
      marker: {
        color: 'rgba(252, 78, 42, 0.5)',
        size: 10
      }
    };

    var abovemag2 = {
      x: graphtimesjapan3,
      y: graphdepthjapan3,
      name: 'above magnitude 2.5',
      mode: 'markers',
      marker: {
        color: 'rgba(254, 178, 76, 0.5)',
        size: 5
      }
    };

    var data = [abovemag2, abovemag4, significant];

    var layout = {
      title: 'Depth and magnitude of earthquakes this month around Japan (Amur, Okhotsk, Phillipine Sea Plates)',
      xaxis: {
          title: 'Time',
          titlefont: {
            family: 'Lato',
            size: 12,
            color: 'rgb(169,169,169)'
          }
        },
        yaxis: {
          title: 'Depth (km)',
          titlefont: {
            family: 'Lato',
            size: 12,
            color: 'rgb(169,169,169)'
          }
        },
      showlegend: true,
      height: 400,
      width: 1280,
      font: {
        family: 'Lato',
        size: 12,
        color: 'rgb(169,169,169)'
      },
      plot_bgcolor: 'rgba(0,0,0, 0.1)',
      margin: {
        pad: 10
      },
        };

    Plotly.newPlot('quake-graph-example', data, layout);

}

function setupMap(){
    /*
    LEAFLET CODE

    In this case "L" is leaflet. So whenever you want to interact with the leaflet library
    you have to refer to L first.
    so for example L.map('mapid') or L.circle([lat, long])
    */

    // create your own map
    mymap = L.map('quake-map').setView([40.7128, -74.0060], 4);

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

    /*function getColor(m) {
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
      return d > 700 ? 500:
             d > 300 ? 5000:
             d > 70  ? 50000:
             d > 0   ? 100000:
                       100;
    }*/

    /*function highlightFeature(e) {
        var layer = e.target;

        layer.setStyle({
            weight: 5,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.7
        });

        if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
            layer.bringToFront();
            console.log('work please');
        }

        info.update(layer.feature.properties);
        console.log('full of');
    }*/

    //var geojson = plates;

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
        console.log('shit');
    }
    
    console.log('why');
    geojson = L.geoJson(plates, {style: mystyle}, {onEachFeature: onEachFeature}).addTo(mymap);

    console.log('mio');
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

      /*var legend2 = L.control({ position: "bottomleft" });

      legend2.onAdd = function (map) {
  
      var div = L.DomUtil.create('div', 'info legend'),
      grades = [0, 70, 300, 700],
      labels = [];

      div.innerHTML+='Depth<br><hr>'
  
      // loop through our density intervals and generate a label with a colored square for each interval
      for (var i = 0; i < grades.length; i++) {
          div.innerHTML +=
              //'<k style="background:' + getRadius(grades[i] + 1) + '">&nbsp&nbsp&nbsp&nbsp</i> ' +
              //grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');

              '<k style="width:' + getRadius(grades[i] + 1) + 'px;height:' + getRadius(grades[i] + 1) + 'px;' + '">&nbsp&nbsp&nbsp&nbsp</i> ' +
              grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
  }
  
  return div;
  };

  legend2.addTo(mymap);*/

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
  return d > 700 ? '500':
         d > 300 ? '5000':
         d > 70  ? '50000':
         d > 0   ? '100000':
                   '100';
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
            //radius: getRadius(depths[i])
            //radius: 50000
            radius: getRadius(depths[i])
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
        circle.bindPopup("magnitude: " +  magnitudes[i] + "; " + "depth: " + depths[i] + "km");

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

