let data;

// preload table data
function preload() {
    data = loadTable(
      'data/lgbtq.csv',
			'csv',
			'header');
}

// using a p5js table object, return an object having
// the values of the given column, plus the minimum value
// and maximum value from that column
function colValsMinMax(tab, colName) {
  let vals = data.getColumn(colName);
  let obj = {
    values: vals,
    min: min(vals),
    max: max(vals),
  }
  return obj;
}

function setup() { 

  createCanvas(1000, 1000);
  // how many rows?
  console.log(data.getRowCount());
  // what are the columns?
  console.log(data.columns);
  
  background(0);

  stroke(0, 255, 255);
  line(100, 30, 100, 830);
  line(100, 830, 900, 830);

  textFont("DIN Alternate");
  textSize(20);
  fill(0, 255, 255);
  text("Discrimination", 450, 890);
  text("1-40 Self-Esteem Score is represented by increased dot size", 230, 30);

  translate(50, 510);
  rotate(PI/-2);
  text("Internalized Homophobia", 0, 0);
  rotate(PI / 2);
  translate(-50, -510);

  line(90, 30, 100, 30);
  line(90, 163, 100, 163);
  line(90, 296, 100, 296);
  line(90, 430, 100, 430);
  line(90, 564, 100, 564);
  line(90, 697, 100, 697);

  line(233, 830, 233, 840);
  line(366, 830, 366, 840);
  line(499, 830, 499, 840);
  line(633, 830, 633, 840);
  line(766, 830, 766, 840);
  line(900, 830, 900, 840);

  text("6", 70, 40);
  text("6", 895, 860);
  
  // fetch values and min/max for discrimination
  let disc = colValsMinMax(data, "discrimination");
  console.log(disc.min);
  console.log(disc.max);
  
  // fetch values and min/max for internalized homophobia 
  let int = colValsMinMax(data, "internalized-homophobia");
  console.log(int.min);
  console.log(int.max);

  // // fetch values and min/max for self-esteem
  let sel = colValsMinMax(data, "self-esteem");
  console.log("sel", sel.min);
  console.log("sel", sel.max);

  noStroke();
  // noprotect
  for (var i = 0; i < data.getRowCount(); i++) {
  if (disc.values[i] !== "" && int.values[i] !== ""){

    // x position is discrimination; y position is internalized-homophobia 
    
    let xpos = map(disc.values[i], disc.min, disc.max, 50, width - 250);
    let ypos = map(int.values[i], int.min, int.max, height - 50, 50);
 //   text(i, xpos + 10, ypos);
 let dot = map(sel.values[i], sel.min, sel.max, 1, 80);
 // console.log(i, disc.values[i], int.values[i], map(sel.values[i], sel.min, sel.max, 255, 50));
 fill(color(255, 255, 0, 20));//map(sel.values[i], sel.min, sel.max, 255, 50)));
    ellipse(xpos, ypos, dot); 
  }   
 }
}