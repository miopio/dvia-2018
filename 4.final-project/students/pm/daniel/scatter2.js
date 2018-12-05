var table;


function preload() {
    table = loadTable('data/lgbtq.csv', 'csv', 'header')
}

var plotData = [];

function setup() {
    createCanvas(1800, 1800)
    background(0)

    // set up typography
    textFont("DIN Alternate")
    textSize(20)
    fill(0, 255, 255)
    textStyle(BOLD)
    textAlign(LEFT)

    // draw title
    text("DISCRIMINATION AND INTERNALIZED HOMOPHOBIA AS PREDICTORS FOR REGULAR HIV TESTING AND PREP AWARENESS\nA Study by Rutgers University Professor Corina Lelutiu-Weinberger", 100, 30);

    // count rows 
    var rowCount = table.getRowCount();

    for (var r = 0; r < rowCount; r++) {


        if (table.getString(r, 2) !== "" && table.getString(r, 3) !== "") { //ignore any line with an empty value in cols 2 and 3
            var discr = (parseFloat(table.getString(r, 2)));
            var homo = (parseFloat(table.getString(r, 3)));

            plotData.push([discr, homo, table.getString(r, 4) === "1", table.getString(r, 5) === "1"]);
        }

    }
    var basex = 100;
    var basey = 75;
    // please explain the operation of the trues, falses and nulls here 
    drawScatter("HIV testing every 6 months", true, null, basex, basey, "green"); // draw hiv === true points
    drawScatter("No HIV testing every 6 months", false, null, 50 + basex + chartWidth, basey, "blue"); // draw hiv == false
    drawScatter("PrEP awareness", null, true, basex, basey + 50 + chartHeight, "purple"); // draw prep ==== true
    drawScatter("No PrEP awareness", null, false, 50 + basex + chartWidth, 50 + basey + chartHeight, "orange"); // draw prep === false
}
var chartHeight = 500;
var chartWidth = 500;
var rad90 = radians(90);

// please explain the operation of drawhiv, hivbool, drawprep, prepbool—how are they being defined? 
function drawScatter(title, hiv, prep, basex, basey, color) { // put title on graph
    // draw axes, y = homo, x = discrim, range 1-6
    textAlign(CENTER);
    textSize(18);
    fill(0, 255, 255);
    text(title, basex + 150, basey + 100);

    textSize(14);
    text("Discrimination", basex + chartWidth / 2, basey + chartHeight + 40);
    rotate(-PI / 2);
    text("Internalized Homophobia", -basey - 200, basex - 50);
    rotate(PI / 2);
    stroke(5, 255, 255);
    line(basex, basey, basex, basey + chartHeight);
    textSize(16);
    for (let x = 1; x < 7; x++) {
        let xpos = basex + (x - 0.5) * chartWidth / 6;
        let ypos = basey + chartHeight;
        line(xpos, ypos, xpos, ypos + 10);
        //textAlign(CENTER);
        text(x + "", xpos, ypos + 22);
    }
    line(basex, basey + chartHeight, basex + chartWidth, basey + chartHeight);

    for (let y = 1; y < 7; y++) {
        let xpos = basex;
        let ypos = basey + (6.5 - y) * chartHeight / 6;
        line(xpos - 10, ypos, xpos, ypos);

        //textAlign(CENTER);
        text(y + "", xpos - 22, ypos + 4);
    }
    //an explanation of the structure here would be helpful too
    // add units to axes
    noStroke();
    plotData.forEach(
        (data) => {
            if (drawhiv !== null) {
                if (data[2] === hiv) {
                    // console.log(data[0]);
                    plotPoint(basex, basey, data[0], data[1], color);
                }

            }
            if (prep !== null) {
                if (data[3] === prep) {
                    // console.log(data[0]);
                    plotPoint(basex, basey, data[0], data[1], color);
                }

            }
        }

    );
}

function plotPoint(basex, basey, x, y, color) {
    fill(color);
    ellipse(basex + (x - 0.5) * chartWidth / 6, basey + (6.5 - y) * chartHeight / 6, 5);
}