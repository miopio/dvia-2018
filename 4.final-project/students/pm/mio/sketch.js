// table as the data set
var table;

function preload() {
    // load the CSV data into our `table` variable and clip out the header row
    table = loadTable("data/happinessData2018_regionSort.csv", "csv", "header");
    orderedTable = loadTable("data/happinessData2018.csv", "csv", "header");
    travelTable = loadTable("data/travelDestinations_cited.csv", "csv", "header");
}

 function setup() {

    //get data from table
    country = table.getColumn('country');
    countrySplice = table.getColumn('country');
    countrySorted = orderedTable.getColumn('country');

    region = table.getColumn('Region indicator');

    lifeladder = table.getColumn('Life ladder, 2015-2017');
    lifeladderSplice = table.getColumn('Life ladder, 2015-2017');
    lifeladderSorted = orderedTable.getColumn('Life ladder, 2015-2017');

    socialsupport = table.getColumn('Social support, 2015-2017');
    freedom = table.getColumn('Freedom to make life choices, 2015-2017');
    generosity = table.getColumn('Generosity, 2015-2017, without adjustment for GDP per person');
    corruption = table.getColumn('Perceptions of corruption, 2015-2017');

    cited = travelTable.getColumn('number cited');
    citedSplice = travelTable.getColumn('number cited');

    //sort data from table into regions
    ceEurope = countrySplice.splice(0,17);
    ceEurope_lifeladder = lifeladderSplice.splice(0,17);
    ceEurope_cited = citedSplice.splice(0,17);
    console.log(ceEurope);
    
    indyStates = countrySplice.splice(0, 12);
    indyStates_lifeladder = lifeladderSplice.splice(0, 12);
    indyStates_cited = citedSplice.splice(0,12);
    console.log(indyStates);

    eastAsia = countrySplice.splice(0, 6);
    eastAsia_lifeladder = lifeladderSplice.splice(0, 6);
    eastAsia_cited = citedSplice.splice(0,6);
    console.log(eastAsia);

    latinCarib = countrySplice.splice(0, 22);
    latinCarib_lifeladder = lifeladderSplice.splice(0, 22);
    latinCarib_cited = citedSplice.splice(0, 22);
    console.log(latinCarib);

    MENA = countrySplice.splice(0,19);
    MENA_lifeladder = lifeladderSplice.splice(0, 19);
    MENA_cited = citedSplice.splice(0, 19);
    console.log(MENA);

    NANZ = countrySplice.splice(0,4);
    NANZ_lifeladder = lifeladderSplice.splice(0, 4);
    NANZ_cited = citedSplice.splice(0, 4);
    console.log(NANZ);

    southAsia = countrySplice.splice(0,7);
    southAsia_lifeladder = lifeladderSplice.splice(0, 7);
    southAsia_cited = citedSplice.splice(0, 7);
    console.log(southAsia);

    seAsia = countrySplice.splice(0,9);
    seAsia_lifeladder = lifeladderSplice.splice(0, 9);
    seAsia_cited = citedSplice.splice(0, 9);
    console.log(seAsia);

    ssAfrica = countrySplice.splice(0,39);
    ssAfrica_lifeladder = lifeladderSplice.splice(0, 39);
    ssAfrica_cited = citedSplice.splice(0, 39);
    console.log(ssAfrica);

    wEurope = countrySplice;
    wEurope_lifeladder = lifeladderSplice;
    wEurope_cited = citedSplice;
    console.log(wEurope);



 function getColor(m) {
  return region = 'Central and Eastern Europe' ? '#800026' :
         region = 'Commonwealth of Independent States'  ? '#BD0026' :
         region = 'East Asia'  ? '#E31A1C' :
         region = 'Latin America and Caribbean'  ? '#FC4E2A' :
         region = 'Middle East and North Africa'  ? '#FD8D3C' :
         region = 'North America and ANZ'  ? '#FEB24C' :
         region = 'South Asia'  ? '#FED976' :
         region = 'Southeast Asia' ? '#6e6e6e' :
         region = 'Sub-Saharan Africa' ? '#1a1a1a' :
         region = 'Western Europe' ? '#888888' :
                    '#FFEDA0'; 
};

color = [];

for (var i = 0; i < region.length; i++){
    getColor(region[i])
    }

console.log('hi')

function chooseColor(){
 for (var i = 0; i < region.length; i++){
        if (region = 'Central and Eastern Europe'){
            color = 'orange';
            console.log('red');
        }
        if (region = 'Commonwealth of Independent States'){
            console.log('orange');
        }
        if (region = 'East Asia'){
            console.log('yellow');
        }
        if (region = 'Latin America and Caribbean'){
            console.log('green');
        }
        else {
            console.log('blue');
        }
    };
};


//BAR GRAPH: LIFE LADDER

var layout = {
  title: 'Life Ladder: Happiness by region',
  showlegend: true
};

var data = [
  {
    x: country,
    y: lifeladder,
    marker: {
        color: 'light blue'
    },
    type: 'bar'
  }
];

Plotly.newPlot('myDiv', data, layout);

var layoutA = {
  title: 'Life Ladder: Happiness by region',
  showlegend: true
};

var dataA = [
  {
    x: countrySorted,
    y: lifeladderSorted,
    marker: {
        color: getColor(region)
    },
    type: 'bar'
  }
];

Plotly.newPlot('lifeladderSorted', dataA, layoutA);

//BAR GRAPH: SOCIAL SUPPORT

var layout1 = {
      title: 'Social Support',
      showlegend: true
    };


var data1 = [
  {
    x: country,
    y: socialsupport,
    type: 'bar'
  }
];

Plotly.newPlot('myDiv1', data1, layout1);

//BAR GRPAH: FREEDOM TO MAKE LIFE CHOICES

var layout2 = {
      title: 'Freedom to Make Life Choices',
      showlegend: true
    };


var data2 = [
  {
    x: country,
    y: freedom,
    type: 'bar'
  }
];


Plotly.newPlot('myDiv2', data2, layout2);

//BAR GRAPH: GENEROSITY

var layout3 = {
      title: 'Generosity',
      showlegend: true
    };

var data3 = [
  {
    x: country,
    y: generosity,
    type: 'bar'
  }
];

Plotly.newPlot('myDiv3', data3, layout3);

//BAR GRAPH: PERCEPTIONS OF CORRUPTION

var layout4 = {
      title: 'Perceptions of Corruption',
      showlegend: true
    };

var data4 = [
  {
    x: country,
    y: corruption,
    type: 'bar'
  }
];


Plotly.newPlot('myDiv4', data4, layout4);


// SET UP BOX PLOT

var yData = ['Central and Eastern Europe', 'Commonwealth of Independent States', 'East Asia', 'Latin America and Caribbean', 'Middle East and North Africa', 'North America and ANZ', 'South Asia', 'Southeast Asia', 'Sub-Saharan Africa', 'Western Europe'];


var xData = [
        lifeladder.slice(0 ,16),
        lifeladder.slice(17, 28),
        lifeladder.slice(29, 34),
        lifeladder.slice(35 ,56),
        lifeladder.slice(57, 75),
        lifeladder.slice(76, 79),
        lifeladder.slice(80 ,86),
        lifeladder.slice(87, 95),
        lifeladder.slice(96, 134),
        lifeladder.slice(135, 155)
    ];

var colors = ['rgba(93, 164, 214, 0.5)', 'rgba(255, 144, 14, 0.5)', 'rgba(44, 160, 101, 0.5)', 'rgba(255, 65, 54, 0.5)', 'rgba(207, 114, 255, 0.5)', 'rgba(127, 96, 0, 0.5)', 'rgba(255, 140, 184, 0.5)', 'rgba(79, 90, 117, 0.5)', 'rgba(222, 223, 0, 0.5)', 'rgba(0, 0, 0, 0.5)'];

var data = [];

for ( var i = 0; i < yData.length; i ++ ) {
    var result = {
        type: 'box',
        x: xData[i],
        name: yData[i],
        boxpoints: 'all',
        jitter: 0.5,
        whiskerwidth: 0.2,
        fillcolor: 'cls',
        marker: {
            size: 3
        },
        line: {
            width: 3
        }
    };
    data.push(result);
};

layout = {
    title: 'Happiness by Region',
    xaxis: {range: [0, 10]},
    yaxis: {
        showgrid: true,
        zeroline: true,
        dtick: 5,
        gridcolor: 'rgb(255, 255, 255)',
        gridwidth: 1,
        zerolinecolor: 'rgb(255, 255, 255)',
        zerolinewidth: 2
    },
    margin: {
        l: 200,
        r: 30,
        b: 80,
        t: 100
    },
    paper_bgcolor: 'rgb(243, 243, 243)',
    plot_bgcolor: 'rgb(243, 243, 243)',
    showlegend: true
};

Plotly.newPlot('boxPlot', data, layout);

function zoom() {
  var min = 0;
  var max = 10;
  Plotly.animate('boxPlot', {
    layout: {
      xaxis: {range: [min, max]},
      yaxis: {range: [min, max]}
    }
  }, {
    transition: {
      duration: 500,
      easing: 'cubic-in-out'
    }
  })
}




var layout5 = {
      title: 'Destinations recommended to travelers 2018-2019 (not normalized)',
      showlegend: true
    };

var data5 = [
  {
    x: ['Central and Eastern Europe', 'Commonwealth of Independent States', 'East Asia', 'Latin America and Caribbean', 'Middle East and North Africa', 'North America and ANZ', 'South Asia', 'Southeast Asia', 'Sub-Saharan Africa', 'Western Europe'
],
    y: [15, 6, 12, 32, 14, 43, 7, 11, 12, 36],
    type: 'bar'
  }
];

Plotly.newPlot('barPlot', data5, layout5);


var A = {
  x: ceEurope_lifeladder,
  y: ceEurope_cited,
  mode: 'markers+text',
  type: 'scatter',
  name: 'ceEurope',
  text: ceEurope,
  textposition: 'top center',
  textfont: {
    family:  'Helvetica'
  },
  marker: { size: 12 }
};

var B = {
  x: indyStates_lifeladder,
  y: indyStates_cited,
  mode: 'markers+text',
  type: 'scatter',
  name: 'indyStates',
  text: indyStates,
  textfont : {
    family:'Helvetica'
  },
  textposition: 'bottom center',
  marker: { size: 12 }
};

var C = {
  x: eastAsia_lifeladder,
  y: eastAsia_cited,
  mode: 'markers+text',
  type: 'scatter',
  name: 'eastAsia',
  text: eastAsia,
  textfont : {
    family:'Helvetica'
  },
  textposition: 'bottom center',
  marker: { size: 12 }
};

var D = {
  x: latinCarib_lifeladder,
  y: latinCarib_cited,
  mode: 'markers+text',
  type: 'scatter',
  name: 'latinCarib',
  text: latinCarib,
  textfont : {
    family:'Helvetica'
  },
  textposition: 'bottom center',
  marker: { size: 12 }
};

var E = {
  x: MENA_lifeladder,
  y: MENA_cited,
  mode: 'markers+text',
  type: 'scatter',
  name: 'MENA',
  text: MENA,
  textfont : {
    family:'Helvetica'
  },
  textposition: 'bottom center',
  marker: { size: 12 }
};

var F = {
  x: NANZ_lifeladder,
  y: NANZ_cited,
  mode: 'markers+text',
  type: 'scatter',
  name: 'NANZ',
  text: NANZ,
  textfont : {
    family:'Helvetica'
  },
  textposition: 'bottom center',
  marker: { size: 12 }
};

var G = {
  x: southAsia_lifeladder,
  y: southAsia_cited,
  mode: 'markers+text',
  type: 'scatter',
  name: 'southAsia',
  text: southAsia,
  textfont : {
    family:'Helvetica'
  },
  textposition: 'bottom center',
  marker: { size: 12 }
};

var H = {
  x: seAsia_lifeladder,
  y: seAsia_cited,
  mode: 'markers+text',
  type: 'scatter',
  name: 'seAsia',
  text: seAsia,
  textfont : {
    family:'Helvetica'
  },
  textposition: 'bottom center',
  marker: { size: 12 }
};

var I = {
  x: ssAfrica_lifeladder,
  y: ssAfrica_cited,
  mode: 'markers+text',
  type: 'scatter',
  name: 'ssAfrica',
  text: ssAfrica,
  textfont : {
    family:'Helvetica'
  },
  textposition: 'bottom center',
  marker: { size: 12 }
};

var J = {
  x: wEurope_lifeladder,
  y: wEurope_cited,
  mode: 'markers+text',
  type: 'scatter',
  name: 'wEurope',
  text: wEurope,
  textfont : {
    family:'Helvetica'
  },
  textposition: 'bottom center',
  marker: { size: 12 }
};


var data = [A, B, C, D, E, F, G, H, I, J];

var layout = {
  xaxis: {
    title: "Happiness score (life ladder)",
    range: [ 0, 10 ]
  },
  yaxis: {
    title: "Number of times cited in travel recommendations",
    range: [-1, 10]
  },
  legend: {
    y: 0.5,
    yref: 'paper',
    font: {
      family: 'Arial, sans-serif',
      size: 20,
      color: 'grey',
    }
  },
  title:'Data Labels on the Plot'
};

Plotly.newPlot('myDiv7', data, layout);

}

function zoom() {
  var min = 0;
  var max = 10;
  Plotly.animate('boxPlot', {
    layout: {
      xaxis: {range: [min, max]},
      yaxis: {range: [min, max]}
    }
  }, {
    transition: {
      duration: 500,
      easing: 'cubic-in-out'
    }
  })
}



