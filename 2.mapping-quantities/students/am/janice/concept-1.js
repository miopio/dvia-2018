
var font;
var fontsize = 11;
var atmostphericData; // declare a global variable to store the data
var undergroundData;
var totalsData;
var table;
var countryColors = ['red','blue','magenta','yellow','green','purple','turquoise','orange','white'];

function preload() {
  // start fetching the data and assign it to your global
  totalsData = loadTable('http://localhost:8080/2.mapping-quantities/students/am/janice/data/totals.csv');
  atmostphericData = loadTable('http://localhost:8080/2.mapping-quantities/students/am/janice/data/atmospheric.csv');
  undergroundData = loadTable('http://localhost:8080/2.mapping-quantities/students/am/janice/data/underground.csv');
}


function setup(){
  createCanvas(2440, 1080);
  var c = color('#00ff00');
  var d = color(0,0,0,);
  font = loadFont('font.otf');
  textFont(font);
  textSize(fontsize);
  textAlign(RIGHT, CENTER);
  table = totalsData;
  atmoTable = atmostphericData;

  print(atmostphericData);
  print(undergroundData);
  print(totalsData);

  // Align the text to the right
  // and run drawWords() in the left third of the canvas
  textAlign(RIGHT);

  // The text() function needs three parameters:
  // the text to draw, the horizontal position,
  // and the vertical position
  var x = 100
  var y = 350
  var rowHeight = 30
  var colWidth = 51

   // draw year labels in the header row
  textStyle(NORMAL)
  textAlign(BOLD)
  for (let r=0; r<table.getRowCount(); r++){
    let year = table.getString(r, 0);
    //drawRects(x,y-rowHeight,colWidth,rowHeight);
    text(year, x, y-rowHeight);
    console.log(year);
    x += colWidth;
  }
  
x=125
y=300

    for (let r = 1; r<atmoTable.getRowCount();r++){
    	let countries = []
    for (let c=1; c<atmoTable.getColumnCount(); c++){
    
    	let explosions = atmoTable.getString(r ,c);
    	if (explosions.toString()>0){
    		countries.push(1)}
		let country = atmoTable.getString(0, c);    	
    	console.log(explosions);
    	let colorBar = color(countryColors[c]);
    	noStroke();
      fill(colorBar);
      h = x+(c-1)*10;
    	rect(h,y,10,-explosions*3);
    }
    //drawRects(x,y-rowHeight,colWidth,rowHeight);
    // text(country, x, y-rowHeight);
    // console.log(country);
    x += colWidth;
    console.log(countries);
  }

  function drawRects(x,y,width,height) {
  	  fill(d);
    noStroke();
    rect(x,y,width,height);
  }
}