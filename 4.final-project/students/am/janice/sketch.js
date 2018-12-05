var font;
var fontsize = 11;
var migrationData; // declare a global variable to store the data
var table;
//var countryColors = ['red','blue','magenta','yellow','green','purple','turquoise','orange','white'];

function preload() {
  // start fetching the data and assign it to your global
  migrationData = loadTable('http://localhost:8000/4.final-project/students/am/janice/data/syrian_refugees_count.csv');
  
}


function setup(){
  createCanvas(1000, 1000);
  table = migrationData;
  var d = color(0,0,0,);
  var c = color(10,100,200,);
  var Bottom = 500;

  for (let i=1; i<table.getRowCount(); i++){
    	let migrants = table.getString(i,1);
    	let date = new Date(table.getString(i,0));
    	y = date.getFullYear();
    	//text(y,10,10*i);
    	fill(d);
    	noStroke();
    	rect(i*10,Bottom,10,-migrants/10000);	
    }
    text("2011",10,Bottom+20);
    text("2012",100,Bottom+20);
    text("4,000,000",1,Bottom-400);
    text("3,000,000",1,Bottom-300);
}

/*
 	var c = color('#00ff00');
 	var d = color(0,0,0,);
  	font = loadFont('font.otf');
 	textFont(font);
 	textSize(fontsize);
  	textAlign(RIGHT, CENTER);

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
 
}

  function drawRects(x,y,width,height) {
  	  fill(d);
    noStroke();
    rect(x,y,width,height);
  }
   */

