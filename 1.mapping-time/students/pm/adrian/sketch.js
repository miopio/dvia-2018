//Sets up the canvas
function setup() {
  createCanvas(3000, 3000);
  frameRate (60);
  background (0,0,0);
  stroke (0,0,0);
  strokeWeight (3);
}

// Code for all 3 clock visualizations
function draw() {
    fill(255, 255, 255);
    textSize (20);
    text("Exercise #1: Adrian Crockett", 10, 30);

// Creates the clock variables for calculations
    var mo = month();
    var dd = day();
    var hh = hour();
    var mm = minute();
    var ss = second();

//set up the parameters to color the grid, for hh, mm, and ss respectively.  These colors
//are non-stationary and change as the get closer to the full DD HH and MM respectively
    var hhColor = color(120+hh*5,0,0);
    var mmColor = color(0+mm*2,240-mm*4,0);
    var ssColor = color(0,120+ss*2,240-ss*4);

// This code is for the 1st exhibit
//set up the parameters for the size and placement of the rectangles making up the grid
    var x = 50;
    var y = x;
    var w = 50;
    var h = w;

    fill (122,122,122);
    rect (x, y, 4, x*12);
    rect (x*2, y, 4, x*12);
    rect (x*3, y, 4, x*12);
    rect (x*4, y, 4, x*12);
    rect (x*5, y, 4, x*12);
    rect (x*6, y, 4, x*12);
    rect (x*7, y, 4, x*12);
    rect (x*8, y, 4, x*12);
    rect (x*9, y, 4, x*12);
    rect (x*10, y, 4, x*12);
    rect (x*11, y, 4, x*12);
    rect (x*12, y, 4, x*12);
    rect (x*13, y, 4, x*12);
    rect (x*14, y, 4, x*12);
    rect (x*15, y, 4, x*12);
    rect (x*16, y, 4, x*12);
    rect (x*17, y, 4, x*12);
    rect (x*18, y, 4, x*12);
    rect (x*19, y, 4, x*12);
    rect (x*20, y, 4, x*12);
    rect (x*21, y, 4, x*12);
    rect (x*22, y, 4, x*12);
    rect (x*23, y, 4, x*12);
    rect (x*24, y, 4, x*12);
    rect (x*25, y, 4, x*12);
    rect (x*26, y, 4, x*12);
    rect (x*27, y, 4, x*12);
    rect (x*28, y, 4, x*12);
    rect (x*29, y, 4, x*12);
    rect (x*30, y, 4, x*12);
    rect (x*31, y, 4, x*12);
    rect (x*32, y, 4, x*12);

    rect (x, y, x*31, 4);
    rect (x, y*2, x*31, 4);
    rect (x, y*3, x*31, 4);
    rect (x, y*4, x*31, 4);
    rect (x, y*5, x*31, 4);
    rect (x, y*6, x*31, 4);
    rect (x, y*7, x*31, 4);
    rect (x, y*8, x*31, 4);
    rect (x, y*9, x*31, 4);
    rect (x, y*10, x*31, 4);
    rect (x, y*11, x*31, 4);
    rect (x, y*12, x*31, 4);
    rect (x, y*13, x*31, 4);

// Moves the 0,0 cordinate based on the combination of
    // translate(mo*y,dd*x);

//HH Clean: Cleans the block of HH to reset a black canvas
    if (hh==0) {fill (0); rect (x,y,w*12,h*5);}

//HH Grids: Provides the top 2 rows for the hours, where rectangles are colored based on the hour
    if (hh>=0) {fill (hhColor); rect (x,y,w,h);}
    if (hh>=1) {fill (hhColor); rect (x*2,y,w,h);}
    if (hh>=2) {fill (hhColor); rect (x*3,y,w,h);}
    if (hh>=3) {fill (hhColor); rect (x*4,y,w,h);}
    if (hh>=4) {fill (hhColor); rect (x*5,y,w,h);}
    if (hh>=5) {fill (hhColor); rect (x*6,y,w,h);}
    if (hh>=6) {fill (hhColor); rect (x*7,y,w,h);}
    if (hh>=7) {fill (hhColor); rect (x*8,y,w,h);}
    if (hh>=8) {fill (hhColor); rect (x*9,y,w,h);}
    if (hh>=9) {fill (hhColor); rect (x*10,y,w,h);}
    if (hh>=10) {fill (hhColor); rect (x*11,y,w,h);}
    if (hh>=11) {fill (hhColor); rect (x*12,y,w,h);}
    if (hh>=12) {fill (hhColor); rect (x,y*2,w,h);}
    if (hh>=13) {fill (hhColor); rect (x*2,y*2,w,h);}
    if (hh>=14) {fill (hhColor); rect (x*3,y*2,w,h);}
    if (hh>=15) {fill (hhColor); rect (x*4,y*2,w,h);}
    if (hh>=16) {fill (hhColor); rect (x*5,y*2,w,h);}
    if (hh>=17) {fill (hhColor); rect (x*6,y*2,w,h);}
    if (hh>=18) {fill (hhColor); rect (x*7,y*2,w,h);}
    if (hh>=19) {fill (hhColor); rect (x*8,y*2,w,h);}
    if (hh>=20) {fill (hhColor); rect (x*9,y*2,w,h);}
    if (hh>=21) {fill (hhColor); rect (x*10,y*2,w,h);}
    if (hh>=22) {fill (hhColor); rect (x*11,y*2,w,h);}
    if (hh>=23) {fill (hhColor); rect (x*12,y*2,w,h);}

//MM Clean: Cleans the block of MM to reset a black canvas
    if (mm==0) {fill (0); rect (x,y*3,w*12,h*5);}

//MM Grid: Provides the next 5 rows for the minutes, where rectangles are colored based on the minute
    if (mm>=0) {fill (mmColor); rect (x,y*3,w,h);}
    if (mm>=1) {fill (mmColor); rect (x*2,y*3,w,h);}
    if (mm>=2) {fill (mmColor); rect (x*3,y*3,w,h);}
    if (mm>=3) {fill (mmColor); rect (x*4,y*3,w,h);}
    if (mm>=4) {fill (mmColor); rect (x*5,y*3,w,h);}
    if (mm>=5) {fill (mmColor); rect (x*6,y*3,w,h);}
    if (mm>=6) {fill (mmColor); rect (x*7,y*3,w,h);}
    if (mm>=7) {fill (mmColor); rect (x*8,y*3,w,h);}
    if (mm>=8) {fill (mmColor); rect (x*9,y*3,w,h);}
    if (mm>=9) {fill (mmColor); rect (x*10,y*3,w,h);}
    if (mm>=10) {fill (mmColor); rect (x*11,y*3,w,h);}
    if (mm>=11) {fill (mmColor); rect (x*12,y*3,w,h);}
    if (mm>=12) {fill (mmColor); rect (x,y*4,w,h);}
    if (mm>=13) {fill (mmColor); rect (x*2,y*4,w,h);}
    if (mm>=14) {fill (mmColor); rect (x*3,y*4,w,h);}
    if (mm>=15) {fill (mmColor); rect (x*4,y*4,w,h);}
    if (mm>=16) {fill (mmColor); rect (x*5,y*4,w,h);}
    if (mm>=17) {fill (mmColor); rect (x*6,y*4,w,h);}
    if (mm>=18) {fill (mmColor); rect (x*7,y*4,w,h);}
    if (mm>=19) {fill (mmColor); rect (x*8,y*4,w,h);}
    if (mm>=20) {fill (mmColor); rect (x*9,y*4,w,h);}
    if (mm>=21) {fill (mmColor); rect (x*10,y*4,w,h);}
    if (mm>=22) {fill (mmColor); rect (x*11,y*4,w,h);}
    if (mm>=23) {fill (mmColor); rect (x*12,y*4,w,h);}
    if (mm>=24) {fill (mmColor); rect (x,y*5,w,h);}
    if (mm>=25) {fill (mmColor); rect (x*2,y*5,w,h);}
    if (mm>=26) {fill (mmColor); rect (x*3,y*5,w,h);}
    if (mm>=27) {fill (mmColor); rect (x*4,y*5,w,h);}
    if (mm>=28) {fill (mmColor); rect (x*5,y*5,w,h);}
    if (mm>=29) {fill (mmColor); rect (x*6,y*5,w,h);}
    if (mm>=30) {fill (mmColor); rect (x*7,y*5,w,h);}
    if (mm>=31) {fill (mmColor); rect (x*8,y*5,w,h);}
    if (mm>=32) {fill (mmColor); rect (x*9,y*5,w,h);}
    if (mm>=33) {fill (mmColor); rect (x*10,y*5,w,h);}
    if (mm>=34) {fill (mmColor); rect (x*11,y*5,w,h);}
    if (mm>=35) {fill (mmColor); rect (x*12,y*5,w,h);}
    if (mm>=36) {fill (mmColor); rect (x,y*6,w,h);}
    if (mm>=37) {fill (mmColor); rect (x*2,y*6,w,h);}
    if (mm>=38) {fill (mmColor); rect (x*3,y*6,w,h);}
    if (mm>=39) {fill (mmColor); rect (x*4,y*6,w,h);}
    if (mm>=40) {fill (mmColor); rect (x*5,y*6,w,h);}
    if (mm>=41) {fill (mmColor); rect (x*6,y*6,w,h);}
    if (mm>=42) {fill (mmColor); rect (x*7,y*6,w,h);}
    if (mm>=43) {fill (mmColor); rect (x*8,y*6,w,h);}
    if (mm>=44) {fill (mmColor); rect (x*9,y*6,w,h);}
    if (mm>=45) {fill (mmColor); rect (x*10,y*6,w,h);}
    if (mm>=46) {fill (mmColor); rect (x*11,y*6,w,h);}
    if (mm>=47) {fill (mmColor); rect (x*12,y*6,w,h);}
    if (mm>=48) {fill (mmColor); rect (x,y*7,w,h);}
    if (mm>=49) {fill (mmColor); rect (x*2,y*7,w,h);}
    if (mm>=50) {fill (mmColor); rect (x*3,y*7,w,h);}
    if (mm>=51) {fill (mmColor); rect (x*4,y*7,w,h);}
    if (mm>=52) {fill (mmColor); rect (x*5,y*7,w,h);}
    if (mm>=53) {fill (mmColor); rect (x*6,y*7,w,h);}
    if (mm>=54) {fill (mmColor); rect (x*7,y*7,w,h);}
    if (mm>=55) {fill (mmColor); rect (x*8,y*7,w,h);}
    if (mm>=56) {fill (mmColor); rect (x*9,y*7,w,h);}
    if (mm>=57) {fill (mmColor); rect (x*10,y*7,w,h);}
    if (mm>=58) {fill (mmColor); rect (x*11,y*7,w,h);}
    if (mm>=59) {fill (mmColor); rect (x*12,y*7,w,h);}

//SS Clean: Cleans the block of SS to reset a black canvas
    if (ss==0) {fill (0); rect (x,y*8,w*12,h*5);}

//SS Grid: Provides the next 5 rows for the minutes, where rectangles are colored based on the minute
    if (ss>=0) {fill (ssColor); rect (x,y*8,w,h);}
    if (ss>=1) {fill (ssColor); rect (x*2,y*8,w,h);}
    if (ss>=2) {fill (ssColor); rect (x*3,y*8,w,h);}
    if (ss>=3) {fill (ssColor); rect (x*4,y*8,w,h);}
    if (ss>=4) {fill (ssColor); rect (x*5,y*8,w,h);}
    if (ss>=5) {fill (ssColor); rect (x*6,y*8,w,h);}
    if (ss>=6) {fill (ssColor); rect (x*7,y*8,w,h);}
    if (ss>=7) {fill (ssColor); rect (x*8,y*8,w,h);}
    if (ss>=8) {fill (ssColor); rect (x*9,y*8,w,h);}
    if (ss>=9) {fill (ssColor); rect (x*10,y*8,w,h);}
    if (ss>=10) {fill (ssColor); rect (x*11,y*8,w,h);}
    if (ss>=11) {fill (ssColor); rect (x*12,y*8,w,h);}
    if (ss>=12) {fill (ssColor); rect (x,y*9,w,h);}
    if (ss>=13) {fill (ssColor); rect (x*2,y*9,w,h);}
    if (ss>=14) {fill (ssColor); rect (x*3,y*9,w,h);}
    if (ss>=15) {fill (ssColor); rect (x*4,y*9,w,h);}
    if (ss>=16) {fill (ssColor); rect (x*5,y*9,w,h);}
    if (ss>=17) {fill (ssColor); rect (x*6,y*9,w,h);}
    if (ss>=18) {fill (ssColor); rect (x*7,y*9,w,h);}
    if (ss>=19) {fill (ssColor); rect (x*8,y*9,w,h);}
    if (ss>=20) {fill (ssColor); rect (x*9,y*9,w,h);}
    if (ss>=21) {fill (ssColor); rect (x*10,y*9,w,h);}
    if (ss>=22) {fill (ssColor); rect (x*11,y*9,w,h);}
    if (ss>=23) {fill (ssColor); rect (x*12,y*9,w,h);}
    if (ss>=24) {fill (ssColor); rect (x,y*10,w,h);}
    if (ss>=25) {fill (ssColor); rect (x*2,y*10,w,h);}
    if (ss>=26) {fill (ssColor); rect (x*3,y*10,w,h);}
    if (ss>=27) {fill (ssColor); rect (x*4,y*10,w,h);}
    if (ss>=28) {fill (ssColor); rect (x*5,y*10,w,h);}
    if (ss>=29) {fill (ssColor); rect (x*6,y*10,w,h);}
    if (ss>=30) {fill (ssColor); rect (x*7,y*10,w,h);}
    if (ss>=31) {fill (ssColor); rect (x*8,y*10,w,h);}
    if (ss>=32) {fill (ssColor); rect (x*9,y*10,w,h);}
    if (ss>=33) {fill (ssColor); rect (x*10,y*10,w,h);}
    if (ss>=34) {fill (ssColor); rect (x*11,y*10,w,h);}
    if (ss>=35) {fill (ssColor); rect (x*12,y*10,w,h);}
    if (ss>=36) {fill (ssColor); rect (x,y*11,w,h);}
    if (ss>=37) {fill (ssColor); rect (x*2,y*11,w,h);}
    if (ss>=38) {fill (ssColor); rect (x*3,y*11,w,h);}
    if (ss>=39) {fill (ssColor); rect (x*4,y*11,w,h);}
    if (ss>=40) {fill (ssColor); rect (x*5,y*11,w,h);}
    if (ss>=41) {fill (ssColor); rect (x*6,y*11,w,h);}
    if (ss>=42) {fill (ssColor); rect (x*7,y*11,w,h);}
    if (ss>=43) {fill (ssColor); rect (x*8,y*11,w,h);}
    if (ss>=44) {fill (ssColor); rect (x*9,y*11,w,h);}
    if (ss>=45) {fill (ssColor); rect (x*10,y*11,w,h);}
    if (ss>=46) {fill (ssColor); rect (x*11,y*11,w,h);}
    if (ss>=47) {fill (ssColor); rect (x*12,y*11,w,h);}
    if (ss>=48) {fill (ssColor); rect (x,y*12,w,h);}
    if (ss>=49) {fill (ssColor); rect (x*2,y*12,w,h);}
    if (ss>=50) {fill (ssColor); rect (x*3,y*12,w,h);}
    if (ss>=51) {fill (ssColor); rect (x*4,y*12,w,h);}
    if (ss>=52) {fill (ssColor); rect (x*5,y*12,w,h);}
    if (ss>=53) {fill (ssColor); rect (x*6,y*12,w,h);}
    if (ss>=54) {fill (ssColor); rect (x*7,y*12,w,h);}
    if (ss>=55) {fill (ssColor); rect (x*8,y*12,w,h);}
    if (ss>=56) {fill (ssColor); rect (x*9,y*12,w,h);}
    if (ss>=57) {fill (ssColor); rect (x*10,y*12,w,h);}
    if (ss>=58) {fill (ssColor); rect (x*11,y*12,w,h);}
    if (ss>=59) {fill (ssColor); rect (x*12,y*12,w,h);}


}
