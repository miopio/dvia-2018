//lgqt.js
var table;

function preload() {
  table = loadTable("data/lgbtq.csv", "csv", "header");
}

var plotData = [];

function setup() {
  createCanvas(1800, 1800);
  background(0);

  // set up typography
  textFont("DIN Alternate");
  textSize(24);
  fill(0, 255, 255);
  textStyle(BOLD);
  textAlign(LEFT);

  // draw title
  text(
    "DISCRIMINATION AND INTERNALIZED HOMOPHOBIA AS PREDICTORS FOR REGULAR HIV TESTING AND PREP AWARENESS\nA Study by Rutgers University Professor Corina Lelutiu-Weinberger",
    100,
    50
  );

  // count rows
  var rowCount = table.getRowCount();

  for (var r = 0; r < rowCount; r++) {
    if (table.getString(r, 2) !== "" && table.getString(r, 3) !== "") {
      //ignore any line with an empty value in cols 2 and 3
      var discr = parseFloat(table.getString(r, 2));

      var homo = parseFloat(table.getString(r, 3));

      plotData.push([
        discr,
        homo,
        table.getString(r, 4) === "1",
        table.getString(r, 5) === "1"
      ]);
    }
  }
  var basex = 100;
  var basey = 100;
  // please explain the operation of the trues, falses and nulls here
  // the single function drawScatter can draw either the hit or the prep data as trues or falser. Sooo
  // to get his data true — the first two args are true true, the draw prep value will be false UNLESS you want that drawn too, if false then then the 4th value won’t be tested so null is a place holder
  // we could implement different by supplying a single argument with a list of what to plot how… so then we’d need only two args
  // see comments in code where they are used

  drawScatter("HIV testing every 6 months", true, null, basex, basey, "green"); // hiv true
  drawScatter(
    "No HIV testing every 6 months",
    false, // hiv false
    null,
    50 + basex + chartWidth,
    basey,
    "blue"
  );
  drawScatter(
    "PrEP awareness",
    null,
    true, // prep true
    basex,
    basey + 50 + chartHeight,
    "purple"
  );
  drawScatter(
    "No PrEP awareness",
    null,
    false, // prep false
    50 + basex + chartWidth,
    50 + basey + chartHeight,
    "orange"
  );
}
var chartHeight = 500;
var chartWidth = 500;
var rad90 = radians(90);

// please explain the operation of hiv, prep, —how are they being defined?
function drawScatter(title, hiv, prep, basex, basey, color) {
  // put title on graph. <— move this comment to next line
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
    let xpos = basex + ((x - 0.5) * chartWidth) / 6;
    let ypos = basey + chartHeight;
    line(xpos, ypos, xpos, ypos + 10);
    //textAlign(CENTER);
    text(x + "", xpos, ypos + 22);
  }
  line(basex, basey + chartHeight, basex + chartWidth, basey + chartHeight);

  for (let y = 1; y < 7; y++) {
    let xpos = basex;
    let ypos = basey + ((6.5 - y) * chartHeight) / 6;
    line(xpos - 10, ypos, xpos, ypos);

    //textAlign(CENTER);
    text(y + "", xpos - 22, ypos + 4);
  }
  //an explanation of the structure here would be helpful too
  // add units to axes
  noStroke();
  plotData.forEach(
    // this is where we generate 1 plot or four plots
    data => {
      if (hiv != null && data[2] === hiv) {
        // true ==> draw the hiv points
        plotPoint(basex, basey, data[0], data[1], color);
      }
      if (prep != null && data[3] === prep) {
        // only draw a point when this record has a value === the prepbool argument (true or false)
        // console.log(data[0]);
        plotPoint(basex, basey, data[0], data[1], color);
      }
    }
  );
}

function plotPoint(basex, basey, x, y, color) {
  fill(color);
  ellipse(
    basex + ((x - 0.5) * chartWidth) / 6,
    basey + ((6.5 - y) * chartHeight) / 6,
    5
  );
}
