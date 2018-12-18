// table as the data set
var table;

function preload() {
    // load the CSV data into our `table` variable and clip out the header row
    table = loadTable("data/happinessData2018_regionSort.csv", "csv", "header");
    orderedTable = loadTable("data/happinessData2018_descending.csv", "csv", "header");
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

    tourism = table.getColumn('Tourism 2015');
    tourismSorted = orderedTable.getColumn('Tourism 2015');
    tourismSplice = table.getColumn('Tourism 2015');

    color = table.getColumn('Color');
    colorSorted = orderedTable.getColumn('Color');

    //sort data from table into regions
    ceEurope = countrySplice.splice(0,17);
    ceEurope_lifeladder = lifeladderSplice.splice(0,17);
    ceEurope_cited = citedSplice.splice(0,17);
    ceEurope_tourism = tourismSplice.splice(0,17);

    
    indyStates = countrySplice.splice(0, 12);
    indyStates_lifeladder = lifeladderSplice.splice(0, 12);
    indyStates_cited = citedSplice.splice(0,12);
    indyStates_tourism = tourismSplice.splice(0,12);

    eastAsia = countrySplice.splice(0, 6);
    eastAsia_lifeladder = lifeladderSplice.splice(0, 6);
    eastAsia_cited = citedSplice.splice(0,6);
    eastAsia_tourism = tourismSplice.splice(0,6);

    latinCarib = countrySplice.splice(0, 22);
    latinCarib_lifeladder = lifeladderSplice.splice(0, 22);
    latinCarib_cited = citedSplice.splice(0, 22);
    latinCarib_tourism = tourismSplice.splice(0,22);

    MENA = countrySplice.splice(0,19);
    MENA_lifeladder = lifeladderSplice.splice(0, 19);
    MENA_cited = citedSplice.splice(0, 19);
    MENA_tourism = tourismSplice.splice(0,19);

    NANZ = countrySplice.splice(0,4);
    NANZ_lifeladder = lifeladderSplice.splice(0, 4);
    NANZ_cited = citedSplice.splice(0, 4);
    NANZ_tourism = tourismSplice.splice(0,4);

    southAsia = countrySplice.splice(0,7);
    southAsia_lifeladder = lifeladderSplice.splice(0, 7);
    southAsia_cited = citedSplice.splice(0, 7);
    southAsia_tourism = tourismSplice.splice(0,7);

    seAsia = countrySplice.splice(0,9);
    seAsia_lifeladder = lifeladderSplice.splice(0, 9);
    seAsia_cited = citedSplice.splice(0, 9);
    seAsia_tourism = tourismSplice.splice(0,9);

    ssAfrica = countrySplice.splice(0,39);
    ssAfrica_lifeladder = lifeladderSplice.splice(0, 39);
    ssAfrica_cited = citedSplice.splice(0, 39);
    ssAfrica_tourism = tourismSplice.splice(0,39);

    wEurope = countrySplice;
    wEurope_lifeladder = lifeladderSplice;
    wEurope_cited = citedSplice;
    wEurope_tourism = tourismSplice;


//SORTED LIFE LADDER

var layout = {
  title: 'Happiest Countries in the World',
  showlegend: false,
  paper_bgcolor: 'rgba(0,0,0,0)',
  plot_bgcolor: 'rgba(0,0,0,0)',
  titlefont: {
    color: 'rgb(255,255,255)'
  },
  xaxis: {
    color: 'rgb(255,255,255)',
  },
  yaxis: {
    title: 'Life Ladder (1-10)',
    color: 'rgb(255,255,255',
    range: [0,10]
  }
};

var data = [
  {
    x: countrySorted,
    y: lifeladderSorted,
    marker: {
        color: colorSorted,
    },
    type: 'bar'
  }
];

Plotly.newPlot('lifeladderSorted', data, layout);

//SORTED TOURIST BY LIFE LADDER ORDER
var layout = {
  title: 'Inbound Tourism (2015)',
  showlegend: false,
  paper_bgcolor: 'rgba(0,0,0,0)',
  plot_bgcolor: 'rgba(0,0,0,0)',
  titlefont: {
    color: 'rgb(255,255,255)'
  },
  xaxis: {
    color: 'rgb(255,255,255)',
  },
  yaxis: {
    title: 'Inbound Tourism in 2015 (numbers of people)',
    color: 'rgb(255,255,255'
  }
};

var data = [
  {
    x: countrySorted,
    y: tourismSorted,
    marker: {
        color: colorSorted,
    },
    type: 'bar'
  }
];

Plotly.newPlot('tourismSorted', data, layout);


// SET UP LIFE LADDER BOX PLOT

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

var countryData = [
        country.slice(0 ,16),
        country.slice(17, 28),
        country.slice(29, 34),
        country.slice(35 ,56),
        country.slice(57, 75),
        country.slice(76, 79),
        country.slice(80 ,86),
        country.slice(87, 95),
        country.slice(96, 134),
        country.slice(135, 155)
]


var colors = ['rgb(225, 225, 0)','rgb(255,165,0)', 'rgb(225, 225, 0)','rgb(255,165,0)','rgb(225, 225, 0)','rgb(255,165,0)','rgb(225, 225, 0)','rgb(255,165,0)','rgb(225, 225, 0)','rgb(255,165,0)'];
var data = [];

for ( var i = 0; i < yData.length; i ++ ) {
    var result = {
        type: 'box',
        x: xData[i],
        name: yData[i],
        boxpoints: 'all',
        hoverinfo: countryData[i],
        jitter: 0.5,
        whiskerwidth: 0.2,
        fillcolor: colors[i],
        marker: {
            size: 3
        },
        line: {
            width: 3,
            color: 'rgb(255, 255, 255)'
        }
    };
    data.push(result);
};

layout = {
    title: 'Happiness by Region',
    titlefont: {
    color: 'rgb(255,255,255)'
  },
    xaxis: {range: [0, 10],
        color: "white",
        tickcolor: "white",
    zerolinecolor: 'rgb(255,255,255)'},
    yaxis: {
        showlegend: true,
        showgrid: false,
        zeroline: true,
        tickmode: "auto",
        tickcolor: "white",
        color: "white",
        gridcolor: 'rgb(255, 255, 255)',
        gridwidth: 1,
        zerolinecolor: 'rgb(255, 255, 255)',
        zerolinewidth: 2,
        hoverinfo: countryData
    },
    margin: {
        l: 200,
        r: 30,
        b: 80,
        t: 100
    },
    paper_bgcolor: 'rgba(148,0,211, 0)',
    plot_bgcolor: 'rgba(148,0,211, 0)',
    showlegend: false
};

Plotly.newPlot('boxPlot', data, layout);


// SOCIAL SUPPORT BOX PLOT

var yData = ['Central and Eastern Europe', 'Commonwealth of Independent States', 'East Asia', 'Latin America and Caribbean', 'Middle East and North Africa', 'North America and ANZ', 'South Asia', 'Southeast Asia', 'Sub-Saharan Africa', 'Western Europe'];

var colors = ['rgb(225, 225, 0)','rgb(255,165,0)', 'rgb(225, 225, 0)','rgb(255,165,0)','rgb(225, 225, 0)','rgb(255,165,0)','rgb(225, 225, 0)','rgb(255,165,0)','rgb(225, 225, 0)','rgb(255,165,0)'];

var xData = [
        socialsupport.slice(0 ,16),
        socialsupport.slice(17, 28),
        socialsupport.slice(29, 34),
        socialsupport.slice(35 ,56),
        socialsupport.slice(57, 75),
        socialsupport.slice(76, 79),
        socialsupport.slice(80 ,86),
        socialsupport.slice(87, 95),
        socialsupport.slice(96, 134),
        socialsupport.slice(135, 155)
    ];

var data = [];

for ( var i = 0; i < yData.length; i ++ ) {
    var result = {
        type: 'box',
        x: xData[i],
        name: yData[i],
        boxpoints: 'all',
        jitter: 0.5,
        whiskerwidth: 0.2,
        fillcolor: colors[i],
        marker: {
            size: 3
        },
        line: {
            width: 3,
            color: 'white'
        }
    };
    data.push(result);
};

layout = {
    title: 'Social Support',
    titlefont: {
    color: 'rgb(255,255,255)'
  },
    xaxis: {
        range: [0, 1],
        tickcolor: "white",
        color: "white"
    },
    yaxis: {
        showgrid: false,
        zeroline: true,
        tickmode: "auto",
        tickcolor: "white",
        color: "white",
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
    paper_bgcolor: 'rgba(255,255,255,0)',
    plot_bgcolor: 'rgba(0,0,0,0)',
    showlegend: false
};

Plotly.newPlot('boxPlot3', data, layout);

// GENEROSITY BOX PLOT

var yData = ['Central and Eastern Europe', 'Commonwealth of Independent States', 'East Asia', 'Latin America and Caribbean', 'Middle East and North Africa', 'North America and ANZ', 'South Asia', 'Southeast Asia', 'Sub-Saharan Africa', 'Western Europe'];

var colors = ['rgb(225, 225, 0)','rgb(255,165,0)', 'rgb(225, 225, 0)','rgb(255,165,0)','rgb(225, 225, 0)','rgb(255,165,0)','rgb(225, 225, 0)','rgb(255,165,0)','rgb(225, 225, 0)','rgb(255,165,0)'];

var xData = [
        generosity.slice(0 ,16),
        generosity.slice(17, 28),
        generosity.slice(29, 34),
        generosity.slice(35 ,56),
        generosity.slice(57, 75),
        generosity.slice(76, 79),
        generosity.slice(80 ,86),
        generosity.slice(87, 95),
        generosity.slice(96, 134),
        generosity.slice(135, 155)
    ];

var data = [];

for ( var i = 0; i < yData.length; i ++ ) {
    var result = {
        type: 'box',
        x: xData[i],
        name: yData[i],
        boxpoints: 'all',
        jitter: 0.5,
        whiskerwidth: 0.2,
        fillcolor: colors[i],
        marker: {
            size: 3
        },
        line: {
            width: 3,
            color: 'white'
        }
    };
    data.push(result);
};

layout = {
    title: 'Generosity',
    titlefont: {
    color: 'rgb(255,255,255)'
  },
    xaxis: {
        range: [0, 1],
        tickcolor: "white",
        color: "white"
    },
    yaxis: {
        showgrid: false,
        zeroline: true,
        tickmode: "auto",
        tickcolor: "white",
        color: "white",
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
    paper_bgcolor: 'rgba(255,255,255,0)',
    plot_bgcolor: 'rgba(0,0,0,0)',
    showlegend: false
};

Plotly.newPlot('boxPlot4', data, layout);

//FREEDOM BOX PLOT


var yData = ['Central and Eastern Europe', 'Commonwealth of Independent States', 'East Asia', 'Latin America and Caribbean', 'Middle East and North Africa', 'North America and ANZ', 'South Asia', 'Southeast Asia', 'Sub-Saharan Africa', 'Western Europe'];

var colors = ['rgb(225, 225, 0)','rgb(255,165,0)', 'rgb(225, 225, 0)','rgb(255,165,0)','rgb(225, 225, 0)','rgb(255,165,0)','rgb(225, 225, 0)','rgb(255,165,0)','rgb(225, 225, 0)','rgb(255,165,0)'];


var xData = [
        freedom.slice(0 ,16),
        freedom.slice(17, 28),
        freedom.slice(29, 34),
        freedom.slice(35 ,56),
        freedom.slice(57, 75),
        freedom.slice(76, 79),
        freedom.slice(80 ,86),
        freedom.slice(87, 95),
        freedom.slice(96, 134),
        freedom.slice(135, 155)
    ];

var data = [];

for ( var i = 0; i < yData.length; i ++ ) {
    var result = {
        type: 'box',
        x: xData[i],
        name: yData[i],
        boxpoints: 'all',
        text: countryData[i],
        jitter: 0.5,
        whiskerwidth: 0.2,
        fillcolor: colors[i],
        marker: {
            size: 3
        },
        line: {
            width: 3,
            color: 'white'
        }
    };
    data.push(result);
};

layout = {
    title: 'Freedom to Make Life Choices',
    titlefont: {
    color: 'rgb(255,255,255)'
  },
    xaxis: {
        range: [0, 1],
        tickcolor: "white",
        color: "white"
    },
    yaxis: {
        showgrid: false,
        zeroline: true,
        tickmode: "auto",
        tickcolor: "white",
        color: "white",
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
    paper_bgcolor: 'rgba(255,255,255,0)',
    plot_bgcolor: 'rgba(0,0,0,0)',
    showlegend: false
};

Plotly.newPlot('boxPlot5', data, layout);

//CORRUPTION BOX PLOT


var yData = ['Central and Eastern Europe', 'Commonwealth of Independent States', 'East Asia', 'Latin America and Caribbean', 'Middle East and North Africa', 'North America and ANZ', 'South Asia', 'Southeast Asia', 'Sub-Saharan Africa', 'Western Europe'];

var colors = ['rgb(225, 225, 0)','rgb(255,165,0)', 'rgb(225, 225, 0)','rgb(255,165,0)','rgb(225, 225, 0)','rgb(255,165,0)','rgb(225, 225, 0)','rgb(255,165,0)','rgb(225, 225, 0)','rgb(255,165,0)'];

var xData = [
        corruption.slice(0 ,16),
        corruption.slice(17, 28),
        corruption.slice(29, 34),
        corruption.slice(35 ,56),
        corruption.slice(57, 75),
        corruption.slice(76, 79),
        corruption.slice(80 ,86),
        corruption.slice(87, 95),
        corruption.slice(96, 134),
        corruption.slice(135, 155)
    ];

var data = [];

for ( var i = 0; i < yData.length; i ++ ) {
    var result = {
        type: 'box',
        x: xData[i],
        name: yData[i],
        boxpoints: 'all',
        jitter: 0.5,
        whiskerwidth: 0.2,
        fillcolor: colors[i],
        marker: {
            size: 3
        },
        line: {
            width: 3,
            color: 'white'
        }
    };
    data.push(result);
};

layout = {
    title: 'Perceived Corruption in Country',
    titlefont: {
    color: 'rgb(255,255,255)'
  },
    xaxis: {
        range: [0, 1],
        tickcolor: "white",
        color: "white"
    },
    yaxis: {
        showgrid: false,
        zeroline: true,
        tickmode: "auto",
        tickcolor: "white",
        color: "white",
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
    paper_bgcolor: 'rgba(255,255,255,0)',
    plot_bgcolor: 'rgba(0,0,0,0)',
    showlegend: false
};

Plotly.newPlot('boxPlot6', data, layout);

//SCATTER PLOT

var A = {
  x: ceEurope_lifeladder,
  y: ceEurope_tourism,
  mode: 'markers',
  type: 'scatter',
  name: 'Central and Eastern Europe',
  text: ceEurope,
  textposition: 'top center',
  textfont: {
    family:  'Helvetica'
  },
  marker: { size: 5 }
};

var B = {
  x: indyStates_lifeladder,
  y: indyStates_tourism,
  mode: 'markers',
  type: 'scatter',
  name: 'Commonwealth of Independent States',
  text: indyStates,
  textfont : {
    family:'Helvetica'
  },
  textposition: 'bottom center',
  marker: { size: 5 }
};

var C = {
  x: eastAsia_lifeladder,
  y: eastAsia_tourism,
  mode: 'markers',
  type: 'scatter',
  name: 'East Asia',
  text: eastAsia,
  textfont : {
    family:'Helvetica'
  },
  textposition: 'bottom center',
  marker: { size: 5 }
};

var D = {
  x: latinCarib_lifeladder,
  y: latinCarib_tourism,
  mode: 'markers',
  type: 'scatter',
  name: 'Latin America and Caribbean',
  text: latinCarib,
  textfont : {
    family:'Helvetica'
  },
  textposition: 'bottom center',
  marker: { size: 5 }
};

var E = {
  x: MENA_lifeladder,
  y: MENA_tourism,
  mode: 'markers',
  type: 'scatter',
  name: 'Middle East and North Africa',
  text: MENA,
  textfont : {
    family:'Helvetica'
  },
  textposition: 'bottom center',
  marker: { size: 5 }
};

var F = {
  x: NANZ_lifeladder,
  y: NANZ_tourism,
  mode: 'markers',
  type: 'scatter',
  name: 'North America and ANZ',
  text: NANZ,
  textfont : {
    family:'Helvetica'
  },
  textposition: 'bottom center',
  marker: { size: 5 }
};

var G = {
  x: southAsia_lifeladder,
  y: southAsia_tourism,
  mode: 'markers',
  type: 'scatter',
  name: 'South Asia',
  text: southAsia,
  textfont : {
    family:'Helvetica'
  },
  textposition: 'bottom center',
  marker: { size: 5 }
};

var H = {
  x: seAsia_lifeladder,
  y: seAsia_tourism,
  mode: 'markers',
  type: 'scatter',
  name: 'Southeast Asia',
  text: seAsia,
  textfont : {
    family:'Helvetica'
  },
  textposition: 'bottom center',
  marker: { size: 5 }
};

var I = {
  x: ssAfrica_lifeladder,
  y: ssAfrica_tourism,
  mode: 'markers',
  type: 'scatter',
  name: 'Sub-Saharan Africa',
  text: ssAfrica,
  textfont : {
    family:'Helvetica'
  },
  textposition: 'bottom center',
  marker: { size: 5 }
};

var J = {
  x: wEurope_lifeladder,
  y: wEurope_tourism,
  mode: 'markers',
  type: 'scatter',
  name: 'Western Europe',
  text: wEurope,
  textfont : {
    family:'Helvetica'
  },
  textposition: 'bottom center',
  marker: { size: 5 }
};


var data = [A, B, C, D, E, F, G, H, I, J];

var layout = {
  xaxis: {
    title: "Happiness score (life ladder)",
    range: [ 0, 10 ],
    color: 'white',
    showgrid: false
  },
  yaxis: {
    title: "Number of tourists",
    color: 'white',
    showgrid: false
  },
  legend: {
    y: 0.5,
    color: 'rgba(0,0,0,0,)',
    font: {
      family: 'Helvetica, sans-serif',
      size: 12,
      color: 'white',
    }
  
  },
  paper_bgcolor: 'rgba(0,0,0,0)',
  plot_bgcolor: 'rgba(0,0,0,0)',
  title:'Desirability of Country: Perception of Citizens vs World',
  titlefont: {
    color: "white"
  }
};

Plotly.newPlot('myDiv7', data, layout);

}




