// table as the data set
var table;

function preload() {
    // load the CSV data into our `table` variable and clip out the header row
    table = loadTable("data/happinessData2018.csv", "csv", "header");
}

 function setup() {
    // next, draw our p5 diagram that complements it
    //createCanvas(1280, 700);
    //background(222);

    /*fill(0)
    noStroke()
    textSize(16)
    text(`Plotting ${table.getRowCount()} seismic events`, 20, 40)
    text(`Largest Magnitude: ${getColumnMax("mag")}`, 20, 60)
    text(`Greatest Depth: ${getColumnMax("depth")}`, 20, 80)*/

    country = table.getColumn('country');
    region = table.getColumn('Region indicator');
    //year = table.getColumn('year');
    lifeladder = table.getColumn('Life ladder, 2015-2017');
    //lifeladder.sort(function(a, b){return b-a});
    socialsupport = table.getColumn('Social support, 2015-2017');
    freedom = table.getColumn('Freedom to make life choices, 2015-2017');
    generosity = table.getColumn('Generosity, 2015-2017, without adjustment for GDP per person');
    corruption = table.getColumn('Perceptions of corruption, 2015-2017');
    //democracy = table.getColumn('Democratic quality');

var data = [
  {
    x: country,
    y: lifeladder,
    type: 'bar'
  }
];

Plotly.newPlot('myDiv', data);


var data1 = [
  {
    x: country,
    y: socialsupport,
    type: 'bar'
  }
];

Plotly.newPlot('myDiv1', data1);

var data2 = [
  {
    x: country,
    y: freedom,
    type: 'bar'
  }
];

Plotly.newPlot('myDiv2', data2);

var data3 = [
  {
    x: country,
    y: generosity,
    type: 'bar'
  }
];

Plotly.newPlot('myDiv3', data3);

var data4 = [
  {
    x: country,
    y: corruption,
    type: 'bar'
  }
];

Plotly.newPlot('myDiv4', data4);


}




