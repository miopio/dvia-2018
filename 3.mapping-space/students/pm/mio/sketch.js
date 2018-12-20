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


    graphtimes = graphtable.getColumn('time');
    graphdepth = graphtable.getColumn('depth');
    graphdepth = graphdepth.map(x => x * -1);
    graphmagnitude = graphtable.getColumn('mag');
    graphmagnitude = graphmagnitude^20;

    graphtimes2 = graphtable2.getColumn('time');
    graphdepth2 = graphtable2.getColumn('depth');
    graphdepth2 = graphdepth2.map(x => x * -1);
    graphmagnitude2 = graphtable2.getColumn('mag');
    graphmagnitude2 = graphmagnitude2^20;

    graphtimes3 = graphtable3.getColumn('time');
    graphdepth3 = graphtable3.getColumn('depth');
    graphdepth3 = graphdepth3.map(x => x * -1);
    graphmagnitude3 = graphtable3.getColumn('mag');
    graphmagnitude3 = graphmagnitude3^20;


    //See if I can extract all earthquakes around Alaska
    place = graphtable3.getColumn('place');
    test = graphtable3.getColumn('mag');

    alaskadepth = [];
    alaskamagnitude = [];
    alaskatime =[];

    for (i = 0; i < place.length; i++){
      if (place[i].includes("Alaska")){
        alaskadepth.push(graphdepth3[i]);
        alaskamagnitude.push(test[i]);
        alaskatime.push(graphtimes3[i]);
      }
    }

    alaska2times = [];
    alaska4times = [];
    alaskasigtimes = [];

    alaska2mag = [];
    alaska4mag = [];
    alaskasigmag = [];

    alaska2depth = [];
    alaska4depth = [];
    alaskasigdepth = [];


    for (i = 0; i < alaskadepth.length; i++){
      if ((alaskamagnitude[i] >= 2.5) && (alaskamagnitude[i] < 4.5)){
        alaska2times.push(alaskatime[i]);
        alaska2mag.push(alaskamagnitude[i]);
        alaska2depth.push(alaskadepth[i]);
      }
      else if ((alaskamagnitude[i] >= 4.5) && (alaskamagnitude[i] < 5.1)){
        alaska4times.push(alaskatime[i]);
        alaska4mag.push(alaskamagnitude[i]);
        alaska4depth.push(alaskadepth[i]);
      }
      else if (alaskamagnitude[i] >= 5.1){
        alaskasigtimes.push(alaskatime[i]);
        alaskasigmag.push(alaskamagnitude[i]);
        alaskasigdepth.push(alaskadepth[i]);
      }
    }

    //Depth graph for earthquakes around alaska
    var significant = {
      x: alaskasigtimes,
      y: alaskasigdepth,
      name: 'significant',
      mode: 'markers',
      marker: {
        color: 'rgba(189, 0, 38, 0.5)',
        size: 30
      }
    };

    var abovemag4 = {
      x: alaska4times,
      y: alaska4depth,
      name: 'above magnitude 4.5',
      mode: 'markers',
      marker: {
        color: 'rgba(252, 78, 42, 0.5)',
        size: 10
      }
    };

    var abovemag2 = {
      x: alaska2times,
      y: alaska2depth,
      name: 'above magnitude 2.5',
      mode: 'markers',
      marker: {
        color: 'rgba(254, 178, 76, 0.5)',
        size: 5
      }
    };

    var data = [abovemag2, abovemag4, significant];

    var layout = {
      title: 'Alaska (Pacific & North American Plates)',
        xaxis: {
          showticklabels: false,
        },
        yaxis: {
          showticklabels: false,
          range: [-700, 100],
          color: 'rgb(169,169,169)'
          },
      showlegend: false,
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

    Plotly.newPlot('quake-graph-alaska', data, layout);


    //Extract earthquake info around California
    calidepth = [];
    calimagnitude = [];
    calitime =[];

    for (i = 0; i < place.length; i++){
      if (place[i].includes("CA")){
        calidepth.push(graphdepth3[i]);
        calimagnitude.push(test[i]);
        calitime.push(graphtimes3[i]);
      }
    }

    cali2times = [];
    cali4times = [];
    calisigtimes = [];

    cali2mag = [];
    cali4mag = [];
    calisigmag = [];

    cali2depth = [];
    cali4depth = [];
    calisigdepth = [];


    for (i = 0; i < calidepth.length; i++){
      if ((calimagnitude[i] >= 2.5) && (calimagnitude[i] < 4.5)){
        cali2times.push(calitime[i]);
        cali2mag.push(calimagnitude[i]);
        cali2depth.push(calidepth[i]);
      }
      else if ((calimagnitude[i] >= 4.5) && (calimagnitude[i] < 5.1)){
        cali4times.push(calitime[i]);
        cali4mag.push(calimagnitude[i]);
        cali4depth.push(calidepth[i]);
      }
      else if (calimagnitude[i] >= 5.1){
        calisigtimes.push(calitime[i]);
        calisigmag.push(calimagnitude[i]);
        calisigdepth.push(calidepth[i]);
      }
    }

    //Depth graph for earthquakes around cali
    var significant = {
      x: calisigtimes,
      y: calisigdepth,
      name: 'significant',
      mode: 'markers',
      marker: {
        color: 'rgba(189, 0, 38, 0.5)',
        size: 30
      }
    };

    var abovemag4 = {
      x: cali4times,
      y: cali4depth,
      name: 'above magnitude 4.5',
      mode: 'markers',
      marker: {
        color: 'rgba(252, 78, 42, 0.5)',
        size: 10
      }
    };

    var abovemag2 = {
      x: cali2times,
      y: cali2depth,
      name: 'above magnitude 2.5',
      mode: 'markers',
      marker: {
        color: 'rgba(254, 178, 76, 0.5)',
        size: 5
      }
    };

    var data = [abovemag2, abovemag4, significant];

    var layout = {
      title: 'California (Pacific & North American Plates)',
        xaxis: {
          showticklabels: false
        },
        yaxis: {
          showticklabels: false,
          range: [-700, 100]
        },
      showlegend: false,
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

    Plotly.newPlot('quake-graph-cali', data, layout);

    //Extract info for earthquakes around Indonesia
    inddepth = [];
    indmagnitude = [];
    indtime =[];

    for (i = 0; i < place.length; i++){
      if (place[i].includes("Indonesia")){
        inddepth.push(graphdepth3[i]);
        indmagnitude.push(test[i]);
        indtime.push(graphtimes3[i]);
      }
    }

    ind2times = [];
    ind4times = [];
    indsigtimes = [];

    ind2mag = [];
    ind4mag = [];
    indsigmag = [];

    ind2depth = [];
    ind4depth = [];
    indsigdepth = [];


    for (i = 0; i < inddepth.length; i++){
      if ((indmagnitude[i] >= 2.5) && (indmagnitude[i] < 4.5)){
        ind2times.push(indtime[i]);
        ind2mag.push(indmagnitude[i]);
        ind2depth.push(inddepth[i]);
      }
      else if ((indmagnitude[i] >= 4.5) && (indmagnitude[i] < 5.1)){
        ind4times.push(indtime[i]);
        ind4mag.push(indmagnitude[i]);
        ind4depth.push(inddepth[i]);
      }
      else if (indmagnitude[i] >= 5.1){
        indsigtimes.push(indtime[i]);
        indsigmag.push(indmagnitude[i]);
        indsigdepth.push(inddepth[i]);
      }
    }

    //Depth graph for earthquakes around ind
    var significant = {
      x: indsigtimes,
      y: indsigdepth,
      name: 'significant',
      mode: 'markers',
      marker: {
        color: 'rgba(189, 0, 38, 0.5)',
        size: 30
      }
    };

    var abovemag4 = {
      x: ind4times,
      y: ind4depth,
      name: 'above magnitude 4.5',
      mode: 'markers',
      marker: {
        color: 'rgba(252, 78, 42, 0.5)',
        size: 10
      }
    };

    var abovemag2 = {
      x: ind2times,
      y: ind2depth,
      name: 'above magnitude 2.5',
      mode: 'markers',
      marker: {
        color: 'rgba(254, 178, 76, 0.5)',
        size: 5
      }
    };

    var data = [abovemag2, abovemag4, significant];

    var layout = {
      title: 'Indonesia (Australian & Eurasian Plates)',
        xaxis: {
          showticklabels: false
        },
        yaxis: {
          showticklabels: false,
          range: [-700, 100]
        },
      showlegend: false,
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

    Plotly.newPlot('quake-graph-indonesia', data, layout);

    //Extract info for earthquakes around Chile
    chiledepth = [];
    chilemagnitude = [];
    chiletime =[];

    place = graphtable3.getColumn('place');
    test = graphtable3.getColumn('mag');

    for (i = 0; i < place.length; i++){
      if (place[i].includes("Chile")){
        chiledepth.push(graphdepth3[i]);
        chilemagnitude.push(test[i]);
        chiletime.push(graphtimes3[i]);
      }
    }


    chile2times = [];
    chile4times = [];
    chilesigtimes = [];

    chile2mag = [];
    chile4mag = [];
    chilesigmag = [];

    chile2depth = [];
    chile4depth = [];
    chilesigdepth = [];

    for (i = 0; i < chiledepth.length; i++){
      if ((chilemagnitude[i] >= 2.5) && (chilemagnitude[i] < 4.5)){
        chile2times.push(chiletime[i]);
        chile2mag.push(chilemagnitude[i]);
        chile2depth.push(chiledepth[i]);
      }
      else if ((chilemagnitude[i] >= 4.5) && (chilemagnitude[i] < 5.1)){
        chile4times.push(chiletime[i]);
        chile4mag.push(chilemagnitude[i]);
        chile4depth.push(chiledepth[i]);
      }
      else if (chilemagnitude[i] >= 5.1){
        chilesigtimes.push(chiletime[i]);
        chilesigmag.push(chilemagnitude[i]);
        chilesigdepth.push(chiledepth[i]);
      }
    }
  
    
    //Depth graph for earthquakes around chile
    var significant = {
      x: chilesigtimes,
      y: chilesigdepth,
      name: 'significant',
      mode: 'markers',
      marker: {
        color: 'rgba(189, 0, 38, 0.5)',
        size: 30
      }
    };

    var abovemag4 = {
      x: chile4times,
      y: chile4depth,
      name: 'above magnitude 4.5',
      mode: 'markers',
      marker: {
        color: 'rgba(252, 78, 42, 0.5)',
        size: 10
      }
    };

    var abovemag2 = {
      x: chile2times,
      y: chile2depth,
      name: 'above magnitude 2.5',
      mode: 'markers',
      marker: {
        color: 'rgba(254, 178, 76, 0.5)',
        size: 5
      }
    };

    var data = [abovemag2, abovemag4, significant];

    var layout = {
      title: 'Chile (Nazca & South American Plate)',
        xaxis:{
          showticklabels: false
        },
        yaxis: {
          showticklabels: false,
          range: [-700, 100]
        },
      showlegend: false,
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

    Plotly.newPlot('quake-graph-chile', data, layout);

        //Extract info for earthquakes around Chile
    drdepth = [];
    drmagnitude = [];
    drtime =[];

    place = graphtable3.getColumn('place');
    test = graphtable3.getColumn('mag');

    for (i = 0; i < place.length; i++){
      if (place[i].includes("Dominican Republic")){
        drdepth.push(graphdepth3[i]);
        drmagnitude.push(test[i]);
        drtime.push(graphtimes3[i]);
      }
    }


    dr2times = [];
    dr4times = [];
    drsigtimes = [];

    dr2mag = [];
    dr4mag = [];
    drsigmag = [];

    dr2depth = [];
    dr4depth = [];
    drsigdepth = [];

    for (i = 0; i < drdepth.length; i++){
      if ((drmagnitude[i] >= 2.5) && (drmagnitude[i] < 4.5)){
        dr2times.push(drtime[i]);
        dr2mag.push(drmagnitude[i]);
        dr2depth.push(drdepth[i]);
      }
      else if ((drmagnitude[i] >= 4.5) && (drmagnitude[i] < 5.1)){
        dr4times.push(drtime[i]);
        dr4mag.push(drmagnitude[i]);
        dr4depth.push(drdepth[i]);
      }
      else if (drmagnitude[i] >= 5.1){
        drsigtimes.push(drtime[i]);
        drsigmag.push(drmagnitude[i]);
        drsigdepth.push(drdepth[i]);
      }
    }
  
    
    //Depth graph for earthquakes around dr
    var significant = {
      x: drsigtimes,
      y: drsigdepth,
      name: 'significant',
      mode: 'markers',
      marker: {
        color: 'rgba(189, 0, 38, 0.5)',
        size: 30
      }
    };

    var abovemag4 = {
      x: dr4times,
      y: dr4depth,
      name: 'above magnitude 4.5',
      mode: 'markers',
      marker: {
        color: 'rgba(252, 78, 42, 0.5)',
        size: 10
      }
    };

    var abovemag2 = {
      x: dr2times,
      y: dr2depth,
      name: 'above magnitude 2.5',
      mode: 'markers',
      marker: {
        color: 'rgba(254, 178, 76, 0.5)',
        size: 5
      }
    };

    var data = [abovemag2, abovemag4, significant];

    var layout = {
      title: 'Dominican Republic (Caribbean Plate)',
        xaxis:{
          showticklabels: false
        },
        yaxis: {
          showticklabels: false,
          range: [-700, 100]
        },
      showlegend: false,
      font: {
        family: 'Lato',
        size: 12,
        color: 'rgb(169,169,169)'
      },
      plot_bgcolor: 'rgba(0,0,0, 0.1)',
        };

    Plotly.newPlot('quake-graph-dr', data, layout);

    //Depth graph for all earthquakes this month, bottom half of page
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
      height: 400,
      width: 1200,
      showlegend: true,
      legend: {"orientation": "h"},
      font: {
        family: 'Lato',
        size: 12,
        color: 'rgb(169,169,169)'
      },
      plot_bgcolor: 'rgba(0,0,0, 0.1)',
        };

    Plotly.newPlot('quake-graph', data, layout);

    //Manually got all Japan earthquakes from, put them in CSVs
    //Get time, depth, and magnitude info from them
    graphtimesjapan = graphtablejapan.getColumn('time');
    graphdepthjapan = graphtablejapan.getColumn('depth');
    graphdepthjapan = graphdepthjapan.map(x => x * -1);
    graphmagnitudejapan = graphtablejapan.getColumn('mag');
    graphmagnitudejapan = graphmagnitudejapan^20;

    graphtimesjapan2 = graphtablejapan2.getColumn('time');
    graphdepthjapan2 = graphtablejapan2.getColumn('depth');
    graphdepthjapan2 = graphdepthjapan2.map(x => x * -1);
    graphmagnitudejapan2 = graphtablejapan2.getColumn('mag');
    graphmagnitudejapan2 = graphmagnitudejapan2^20;

    graphtimesjapan3 = graphtablejapan3.getColumn('time');
    graphdepthjapan3 = graphtablejapan3.getColumn('depth');
    graphdepthjapan3 = graphdepthjapan3.map(x => x * -1);
    graphmagnitudejapan3 = graphtablejapan3.getColumn('mag');
    graphmagnitudejapan3 = graphmagnitudejapan3^20;

    graphplace3 = graphtable3.getColumn('place');


    //Plot Japan depth graph
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
      title: 'Japan (Amur, Okhotsk, Phillipine Sea Plates)',
        xaxis: {
          showticklabels: false
        },
        yaxis: {
          showticklabels: false,
          range: [-700, 100]
        },
      showlegend: false,
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

//Set up the earthquake map at the top half of page
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

