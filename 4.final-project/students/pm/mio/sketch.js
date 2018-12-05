// table as the data set
var table;

function preload() {
    // load the CSV data into our `table` variable and clip out the header row
    table = loadTable("data/WHR2018Chapter2OnlineData", "csv", "header");
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

    country = graphtable.getColumn('country');
    year = graphtable.getColumn('year');
    lifeladder = graphtable.getColumn('Life Ladder');
    socialsupport = graphdepth.getColumn('Social support');
    freedom = graphtable.getColumn('Freedom to make life choices');
    generosity = graphtable.getColumn('Generosity');
    corruption = graphtable.getColumn('Perceptions of corruption');
    democracy = graphtable.getColumn('Democratic quality');


}
