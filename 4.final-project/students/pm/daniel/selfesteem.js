// set variables 
var table;
var yoffset = 150;

// load table 
function preload() {
  table = loadTable("data/self-esteem.csv", "csv", "header");
}

var plotData = [];

function setup() {
  createCanvas(1600, 2000);
  background(0);

  // set up typography
  textFont("DIN Alternate");
  textSize(24);
  fill(0, 255, 255);
  textStyle(BOLD);
  textAlign(LEFT);

  // draw rotated label 
  translate(100,100);
  rotate(HALF_PI);
  text("Population", -250, 150);
  rotate(-HALF_PI);

  //   translate(50, 510);
  // rotate(PI/-2);
  // text("Internalized Homophobia", 0, 0);
  // rotate(PI / 2);
  // translate(-50, -510);

  // count rows
  var rowCount = table.getRowCount();
  var maxY = 0;
  // use titles from first line in csv file
 // var titles = [table.getString(0,2), table.getString(0,3), table.getString(0,4), table.getString(0,5)];
  for (var r = 0; r < rowCount; r++) { // read bucket data 
      var Y = parseInt(table.getString(r, 1));
      maxY = (Y > maxY) ? Y : maxY; // find largest total bar height
      plotData.push([
        table.getString(r, 0), // bucket label
        parseInt(table.getString(r,2)), // testing true
        parseInt(table.getString(r,3)), // testing false
        parseInt(table.getString(r,4)), // prep true
        parseInt(table.getString(r,5))  // prep false
        ]);
  }
  console.log(plotData);
  plotHistogram (0 + yoffset, rowCount, "Self-Esteem Distribution for HIV testing", maxY, 1, 2);
  plotHistogram (670 + yoffset, rowCount, "Self-Esteem Distribution for PrEP Awareness", maxY, 3, 4);
 }

 function plotHistogram (baseY, bucketCount, chartTitle, maxY, b0, b1){ 
  var xScale = bucketCount * 70; 
  var y0 = baseY + maxY + 100; 
// put title on chart
textSize(24);
fill(0, 255, 255);
text(chartTitle, 100, baseY + 30);
// draw Y axis
stroke(0, 255, 255);
line(100, baseY + 100, 100, y0);
// draw X axis = buckets 
line(100, baseY + maxY + 100, xScale + 100, y0);
// draw population numbers 
textSize(16);
text("100", 50, y0 - 90); // need to do this for each value 
text("200", 50, y0 - 190);
text("300", 50, y0 - 290);
text("400", 50, y0 - 390);

//draw population dashed lines
dashedLine(100, y0 - 100, xScale + 100, y0 - 100, 10, 3);
dashedLine(100, y0 - 200, xScale + 100, y0 - 200, 10, 3);
dashedLine(100, y0 - 300, xScale + 100, y0 - 300, 10, 3);
dashedLine(100, y0 - 400, xScale + 100, y0 - 400, 10, 3);

// plot data loop for labels
textSize(16);
for (var bucket = 0; bucket < bucketCount; bucket++){
  var x = 100 + bucket * 70 + 35;
  fill(0, 255, 255);
  text(plotData[bucket][0], x, y0 + 20); // adjust x a bit for text 

  // draw bars
  fill("blue");
  noStroke();
  rect(x - 14, y0 - plotData[bucket][b0], 20, plotData[bucket][b0]);
  fill("red");
  rect(x + 14, y0 - plotData[bucket][b1], 20, plotData[bucket][b1]);

   // draw legend
  fill("blue");
  noStroke();
  rect(100, yoffset + 50, 15, 15);
  fill("red");
  rect(400, yoffset + 50, 15, 15);
  fill("blue");
  noStroke();
  rect(100, yoffset + 725, 15, 15);
  fill("red");
  rect(400, yoffset + 725, 15, 15);

    // draw labels
  textSize(24);
  fill(0, 255, 255);
  text(
    "DISCRIMINATION AND INTERNALIZED HOMOPHOBIA AS PREDICTORS FOR REGULAR HIV TESTING AND PREP AWARENESS\nA Study by Rutgers University Professor Corina Lelutiu-Weinberger",
    100, -50);
  textSize(16);
  text(`    Dr. Corina Lelutiu-Weinberger and her colleagues generate evidence-based guidelines for clinical practice and policy, in order to contribute to reducing chronic conditions of high prevalence 
    among minority groups due to discrimination and inadequate resources. This new study focuses on discrimination and internalized homophobia as predictors for HIV prevention-related outcomes 
    among men who have sex with men, as measured by regular, 6-month HIV testing and awareness of biomedical prevention, or Pre-Exposure Prophylaxis (PrEP). Men who have sex with men are among 
    the highest HIV risk groups in the US. Findings from Dr. Lelutiu-Weinberger’s research will inform intervention approaches that are effective in reducing HIV-related risk among this vulnerable group.`, 85, yoffset - 120);
  text("HIV testing every 6 months", 120, yoffset + 63);
  text("No HIV testing every 6 months", 420, yoffset + 63);
  fill(0, 255, 255);
  text("PrEP awareness", 120, yoffset + 738);
  text("No PrEP awareness", 420, yoffset + 738);
  text("Self-Esteem Scale", 350, yoffset + 613);
  text("Self-Esteem Scale", 350, yoffset + 1280);
  text(`The Rosenberg self-esteem scale, developed by sociologist Dr. Morris Rosenberg, is a self-esteem 
measure widely used in social-science research. It uses a scale of 0-40 where a score less than 15 
may indicate a problematic low self esteem.`, 100, yoffset + 1330);
}
// plot b0 and b1 data as a stack with some = b0 + b1

 }


 function dashedLine(x1, y1, x2, y2, l, g) {
    var pc = dist(x1, y1, x2, y2) / 100;
    var pcCount = 1;
    var lPercent = gPercent = 0;
    var currentPos = 0;
    var xx1 = yy1 = xx2 = yy2 = 0;
 
    while (int(pcCount * pc) < l) {
        pcCount++
    }
    lPercent = pcCount;
    pcCount = 1;
    while (int(pcCount * pc) < g) {
        pcCount++
    }
    gPercent = pcCount;
 
    lPercent = lPercent / 100;
    gPercent = gPercent / 100;
    while (currentPos < 1) {
        xx1 = lerp(x1, x2, currentPos);
        yy1 = lerp(y1, y2, currentPos);
        xx2 = lerp(x1, x2, currentPos + lPercent);
        yy2 = lerp(y1, y2, currentPos + lPercent);
        if (x1 > x2) {
            if (xx2 < x2) {
                xx2 = x2;
            }
        }
        if (x1 < x2) {
            if (xx2 > x2) {
                xx2 = x2;
            }
        }
        if (y1 > y2) {
            if (yy2 < y2) {
                yy2 = y2;
            }
        }
        if (y1 < y2) {
            if (yy2 > y2) {
                yy2 = y2;
            }
        }
 
        line(xx1, yy1, xx2, yy2);
        currentPos = currentPos + lPercent + gPercent;
    }
}