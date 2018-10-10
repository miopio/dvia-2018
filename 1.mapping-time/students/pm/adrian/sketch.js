/* Code for all three versions is outlined below.  The first two use a decent amount of the
same code, whereas the third project was an independent project - for which the code is
a lot more efficient*/

//Sets up the canvas
function setup() {
  createCanvas(1600, 1600);
  frameRate (60);
  background (0,0,0);
  stroke (0,0,0);
  strokeWeight (3);
}

// Code for all 3 clock visualizations
function draw() {

//Inserts a heading at the top of the clocks
    fill(255, 255, 255);
    textSize (20);
    text("Exercise #1: Adrian Crockett", 10, 30);

// Creates the clock variables for calculations
    var hh = hour();
    var mm = minute();
    var ss = second();

//Switch variable to control if color is stationary or dynamic
    /*
    var switchColor = 1;
    var hhColorAdjR = hh*5*switchColor;
    var mmColorAdjR = mm*2*switchColor;
    var mmColorAdjG = mm*4*switchColor;
    var ssColorAdjG = ss*2*swithcColor;
    var ssColorAdjB = SS*4*switchColor;
    var hhColor = color(120+hhColorAdjR,0,0);
    var mmColor = color(0+mmColorAdjR,240-mmColorAdjG,0);
    var ssColor = color(0,120+ssColorAdjG,240-ssColorAdjB);
    */

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

// This code is for the 2nd exhibit

//Translates 0,0 for the 2nd exhibit
    var x1Translate = 800;
    var y1Translate = 25;
    translate (x1Translate,y1Translate);

//Creates var to the middle of the 2nd exhibit this is used for the central point of the lines
    var xMiddle = 300;
    var yMiddle = 300;

//Note that the seguence of the next code is unusual and is based on layering of the elements

//HH Lines: Provides the lines for the top 2 rows for the hours, where lines are colored based on the hour
    if (hh==1+0) {stroke (hhColor); line (x,y,xMiddle,yMiddle);}
    if (hh==1+1) {stroke (hhColor); line (x*2,y,xMiddle,yMiddle);}
    if (hh==1+2) {stroke (hhColor); line (x*3,y,xMiddle,yMiddle);}
    if (hh==1+3) {stroke (hhColor); line (x*4,y,xMiddle,yMiddle);}
    if (hh==1+4) {stroke (hhColor); line (x*5,y,xMiddle,yMiddle);}
    if (hh==1+5) {stroke (hhColor); line (x*6,y,xMiddle,yMiddle);}
    if (hh==1+6) {stroke (hhColor); line (x*7,y,xMiddle,yMiddle);}
    if (hh==1+7) {stroke (hhColor); line (x*8,y,xMiddle,yMiddle);}
    if (hh==1+8) {stroke (hhColor); line (x*9,y,xMiddle,yMiddle);}
    if (hh==1+9) {stroke (hhColor); line (x*10,y,xMiddle,yMiddle);}
    if (hh==1+10) {stroke (hhColor); line (x*11,y,xMiddle,yMiddle);}
    if (hh==1+11) {stroke (hhColor); line (x*12,y,xMiddle,yMiddle);}
    if (hh==1+12) {stroke (hhColor); line (x,y*2,xMiddle,yMiddle);}
    if (hh==1+13) {stroke (hhColor); line (x*2,y*2,xMiddle,yMiddle);}
    if (hh==1+14) {stroke (hhColor); line (x*3,y*2,xMiddle,yMiddle);}
    if (hh==1+15) {stroke (hhColor); line (x*4,y*2,xMiddle,yMiddle);}
    if (hh==1+16) {stroke (hhColor); line (x*5,y*2,xMiddle,yMiddle);}
    if (hh==1+17) {stroke (hhColor); line (x*6,y*2,xMiddle,yMiddle);}
    if (hh==1+18) {stroke (hhColor); line (x*7,y*2,xMiddle,yMiddle);}
    if (hh==1+19) {stroke (hhColor); line (x*8,y*2,xMiddle,yMiddle);}
    if (hh==1+20) {stroke (hhColor); line (x*9,y*2,xMiddle,yMiddle);}
    if (hh==1+21) {stroke (hhColor); line (x*10,y*2,xMiddle,yMiddle);}
    if (hh==1+22) {stroke (hhColor); line (x*11,y*2,xMiddle,yMiddle);}
    if (hh==1+23) {stroke (hhColor); line (x*12,y*2,xMiddle,yMiddle);}

//MM Lines: Provides the next 5 rows for the minutes, where lines are colored based on the minute
    if (mm==1+0) {stroke (mmColor); line (x,y*3,xMiddle,yMiddle);}
    if (mm==1+1) {stroke (mmColor); line (x*2,y*3,xMiddle,yMiddle);}
    if (mm==1+2) {stroke (mmColor); line (x*3,y*3,xMiddle,yMiddle);}
    if (mm==1+3) {stroke (mmColor); line (x*4,y*3,xMiddle,yMiddle);}
    if (mm==1+4) {stroke (mmColor); line (x*5,y*3,xMiddle,yMiddle);}
    if (mm==1+5) {stroke (mmColor); line (x*6,y*3,xMiddle,yMiddle);}
    if (mm==1+6) {stroke (mmColor); line (x*7,y*3,xMiddle,yMiddle);}
    if (mm==1+7) {stroke (mmColor); line (x*8,y*3,xMiddle,yMiddle);}
    if (mm==1+8) {stroke (mmColor); line (x*9,y*3,xMiddle,yMiddle);}
    if (mm==1+9) {stroke (mmColor); line (x*10,y*3,xMiddle,yMiddle);}
    if (mm==1+10) {stroke (mmColor); line (x*11,y*3,xMiddle,yMiddle);}
    if (mm==1+11) {stroke (mmColor); line (x*12,y*3,xMiddle,yMiddle);}
    if (mm==1+12) {stroke (mmColor); line (x,y*4,xMiddle,yMiddle);}
    if (mm==1+13) {stroke (mmColor); line (x*2,y*4,xMiddle,yMiddle);}
    if (mm==1+14) {stroke (mmColor); line (x*3,y*4,xMiddle,yMiddle);}
    if (mm==1+15) {stroke (mmColor); line (x*4,y*4,xMiddle,yMiddle);}
    if (mm==1+16) {stroke (mmColor); line (x*5,y*4,xMiddle,yMiddle);}
    if (mm==1+17) {stroke (mmColor); line (x*6,y*4,xMiddle,yMiddle);}
    if (mm==1+18) {stroke (mmColor); line (x*7,y*4,xMiddle,yMiddle);}
    if (mm==1+19) {stroke (mmColor); line (x*8,y*4,xMiddle,yMiddle);}
    if (mm==1+20) {stroke (mmColor); line (x*9,y*4,xMiddle,yMiddle);}
    if (mm==1+21) {stroke (mmColor); line (x*10,y*4,xMiddle,yMiddle);}
    if (mm==1+22) {stroke (mmColor); line (x*11,y*4,xMiddle,yMiddle);}
    if (mm==1+23) {stroke (mmColor); line (x*12,y*4,xMiddle,yMiddle);}
    if (mm==1+24) {stroke (mmColor); line (x,y*5,xMiddle,yMiddle);}
    if (mm==1+25) {stroke (mmColor); line (x*2,y*5,xMiddle,yMiddle);}
    if (mm==1+26) {stroke (mmColor); line (x*3,y*5,xMiddle,yMiddle);}
    if (mm==1+27) {stroke (mmColor); line (x*4,y*5,xMiddle,yMiddle);}
    if (mm==1+28) {stroke (mmColor); line (x*5,y*5,xMiddle,yMiddle);}
    if (mm==1+29) {stroke (mmColor); line (x*6,y*5,xMiddle,yMiddle);}
    if (mm==1+30) {stroke (mmColor); line (x*7,y*5,xMiddle,yMiddle);}
    if (mm==1+31) {stroke (mmColor); line (x*8,y*5,xMiddle,yMiddle);}
    if (mm==1+32) {stroke (mmColor); line (x*9,y*5,xMiddle,yMiddle);}
    if (mm==1+33) {stroke (mmColor); line (x*10,y*5,xMiddle,yMiddle);}
    if (mm==1+34) {stroke (mmColor); line (x*11,y*5,xMiddle,yMiddle);}
    if (mm==1+35) {stroke (mmColor); line (x*12,y*5,xMiddle,yMiddle);}
    if (mm==1+36) {stroke (mmColor); line (x,y*6,xMiddle,yMiddle);}
    if (mm==1+37) {stroke (mmColor); line (x*2,y*6,xMiddle,yMiddle);}
    if (mm==1+38) {stroke (mmColor); line (x*3,y*6,xMiddle,yMiddle);}
    if (mm==1+39) {stroke (mmColor); line (x*4,y*6,xMiddle,yMiddle);}
    if (mm==1+40) {stroke (mmColor); line (x*5,y*6,xMiddle,yMiddle);}
    if (mm==1+41) {stroke (mmColor); line (x*6,y*6,xMiddle,yMiddle);}
    if (mm==1+42) {stroke (mmColor); line (x*7,y*6,xMiddle,yMiddle);}
    if (mm==1+43) {stroke (mmColor); line (x*8,y*6,xMiddle,yMiddle);}
    if (mm==1+44) {stroke (mmColor); line (x*9,y*6,xMiddle,yMiddle);}
    if (mm==1+45) {stroke (mmColor); line (x*10,y*6,xMiddle,yMiddle);}
    if (mm==1+46) {stroke (mmColor); line (x*11,y*6,xMiddle,yMiddle);}
    if (mm==1+47) {stroke (mmColor); line (x*12,y*6,xMiddle,yMiddle);}
    if (mm==1+48) {stroke (mmColor); line (x,y*7,xMiddle,yMiddle);}
    if (mm==1+49) {stroke (mmColor); line (x*2,y*7,xMiddle,yMiddle);}
    if (mm==1+50) {stroke (mmColor); line (x*3,y*7,xMiddle,yMiddle);}
    if (mm==1+51) {stroke (mmColor); line (x*4,y*7,xMiddle,yMiddle);}
    if (mm==1+52) {stroke (mmColor); line (x*5,y*7,xMiddle,yMiddle);}
    if (mm==1+53) {stroke (mmColor); line (x*6,y*7,xMiddle,yMiddle);}
    if (mm==1+54) {stroke (mmColor); line (x*7,y*7,xMiddle,yMiddle);}
    if (mm==1+55) {stroke (mmColor); line (x*8,y*7,xMiddle,yMiddle);}
    if (mm==1+56) {stroke (mmColor); line (x*9,y*7,xMiddle,yMiddle);}
    if (mm==1+57) {stroke (mmColor); line (x*10,y*7,xMiddle,yMiddle);}
    if (mm==1+58) {stroke (mmColor); line (x*11,y*7,xMiddle,yMiddle);}
    if (mm==1+59) {stroke (mmColor); line (x*12,y*7,xMiddle,yMiddle);}

//SS Lines: Provides the next 5 rows for the seconds, where lines are colored based on the minute
    if (ss==1+0) {stroke (ssColor); line (x,y*8,xMiddle,yMiddle);}
    if (ss==1+1) {stroke (ssColor); line (x*2,y*8,xMiddle,yMiddle);}
    if (ss==1+2) {stroke (ssColor); line (x*3,y*8,xMiddle,yMiddle);}
    if (ss==1+3) {stroke (ssColor); line (x*4,y*8,xMiddle,yMiddle);}
    if (ss==1+4) {stroke (ssColor); line (x*5,y*8,xMiddle,yMiddle);}
    if (ss==1+5) {stroke (ssColor); line (x*6,y*8,xMiddle,yMiddle);}
    if (ss==1+6) {stroke (ssColor); line (x*7,y*8,xMiddle,yMiddle);}
    if (ss==1+7) {stroke (ssColor); line (x*8,y*8,xMiddle,yMiddle);}
    if (ss==1+8) {stroke (ssColor); line (x*9,y*8,xMiddle,yMiddle);}
    if (ss==1+9) {stroke (ssColor); line (x*10,y*8,xMiddle,yMiddle);}
    if (ss==1+10) {stroke (ssColor); line (x*11,y*8,xMiddle,yMiddle);}
    if (ss==1+11) {stroke (ssColor); line (x*12,y*8,xMiddle,yMiddle);}
    if (ss==1+12) {stroke (ssColor); line (x,y*9,xMiddle,yMiddle);}
    if (ss==1+13) {stroke (ssColor); line (x*2,y*9,xMiddle,yMiddle);}
    if (ss==1+14) {stroke (ssColor); line (x*3,y*9,xMiddle,yMiddle);}
    if (ss==1+15) {stroke (ssColor); line (x*4,y*9,xMiddle,yMiddle);}
    if (ss==1+16) {stroke (ssColor); line (x*5,y*9,xMiddle,yMiddle);}
    if (ss==1+17) {stroke (ssColor); line (x*6,y*9,xMiddle,yMiddle);}
    if (ss==1+18) {stroke (ssColor); line (x*7,y*9,xMiddle,yMiddle);}
    if (ss==1+19) {stroke (ssColor); line (x*8,y*9,xMiddle,yMiddle);}
    if (ss==1+20) {stroke (ssColor); line (x*9,y*9,xMiddle,yMiddle);}
    if (ss==1+21) {stroke (ssColor); line (x*10,y*9,xMiddle,yMiddle);}
    if (ss==1+22) {stroke (ssColor); line (x*11,y*9,xMiddle,yMiddle);}
    if (ss==1+23) {stroke (ssColor); line (x*12,y*9,xMiddle,yMiddle);}
    if (ss==1+24) {stroke (ssColor); line (x,y*10,xMiddle,yMiddle);}
    if (ss==1+25) {stroke (ssColor); line (x*2,y*10,xMiddle,yMiddle);}
    if (ss==1+26) {stroke (ssColor); line (x*3,y*10,xMiddle,yMiddle);}
    if (ss==1+27) {stroke (ssColor); line (x*4,y*10,xMiddle,yMiddle);}
    if (ss==1+28) {stroke (ssColor); line (x*5,y*10,xMiddle,yMiddle);}
    if (ss==1+29) {stroke (ssColor); line (x*6,y*10,xMiddle,yMiddle);}
    if (ss==1+30) {stroke (ssColor); line (x*7,y*10,xMiddle,yMiddle);}
    if (ss==1+31) {stroke (ssColor); line (x*8,y*10,xMiddle,yMiddle);}
    if (ss==1+32) {stroke (ssColor); line (x*9,y*10,xMiddle,yMiddle);}
    if (ss==1+33) {stroke (ssColor); line (x*10,y*10,xMiddle,yMiddle);}
    if (ss==1+34) {stroke (ssColor); line (x*11,y*10,xMiddle,yMiddle);}
    if (ss==1+35) {stroke (ssColor); line (x*12,y*10,xMiddle,yMiddle);}
    if (ss==1+36) {stroke (ssColor); line (x,y*11,xMiddle,yMiddle);}
    if (ss==1+37) {stroke (ssColor); line (x*2,y*11,xMiddle,yMiddle);}
    if (ss==1+38) {stroke (ssColor); line (x*3,y*11,xMiddle,yMiddle);}
    if (ss==1+39) {stroke (ssColor); line (x*4,y*11,xMiddle,yMiddle);}
    if (ss==1+40) {stroke (ssColor); line (x*5,y*11,xMiddle,yMiddle);}
    if (ss==1+41) {stroke (ssColor); line (x*6,y*11,xMiddle,yMiddle);}
    if (ss==1+42) {stroke (ssColor); line (x*7,y*11,xMiddle,yMiddle);}
    if (ss==1+43) {stroke (ssColor); line (x*8,y*11,xMiddle,yMiddle);}
    if (ss==1+44) {stroke (ssColor); line (x*9,y*11,xMiddle,yMiddle);}
    if (ss==1+45) {stroke (ssColor); line (x*10,y*11,xMiddle,yMiddle);}
    if (ss==1+46) {stroke (ssColor); line (x*11,y*11,xMiddle,yMiddle);}
    if (ss==1+47) {stroke (ssColor); line (x*12,y*11,xMiddle,yMiddle);}
    if (ss==1+48) {stroke (ssColor); line (x,y*12,xMiddle,yMiddle);}
    if (ss==1+49) {stroke (ssColor); line (x*2,y*12,xMiddle,yMiddle);}
    if (ss==1+50) {stroke (ssColor); line (x*3,y*12,xMiddle,yMiddle);}
    if (ss==1+51) {stroke (ssColor); line (x*4,y*12,xMiddle,yMiddle);}
    if (ss==1+52) {stroke (ssColor); line (x*5,y*12,xMiddle,yMiddle);}
    if (ss==1+53) {stroke (ssColor); line (x*6,y*12,xMiddle,yMiddle);}
    if (ss==1+54) {stroke (ssColor); line (x*7,y*12,xMiddle,yMiddle);}
    if (ss==1+55) {stroke (ssColor); line (x*8,y*12,xMiddle,yMiddle);}
    if (ss==1+56) {stroke (ssColor); line (x*9,y*12,xMiddle,yMiddle);}
    if (ss==1+57) {stroke (ssColor); line (x*10,y*12,xMiddle,yMiddle);}
    if (ss==1+58) {stroke (ssColor); line (x*11,y*12,xMiddle,yMiddle);}
    if (ss==1+59) {stroke (ssColor); line (x*12,y*12,xMiddle,yMiddle);}

//Resets stroke to black for the rest of the analysis
    stroke (0,0,0);

//HH Ellipse: Provides the top 2 rows for the hours, where ellipses are colored based on the hour
    if (hh==1+0) {fill (hhColor); ellipse (x,y,w,h);}
    if (hh==1+1) {fill (hhColor); ellipse (x*2,y,w,h);}
    if (hh==1+2) {fill (hhColor); ellipse (x*3,y,w,h);}
    if (hh==1+3) {fill (hhColor); ellipse (x*4,y,w,h);}
    if (hh==1+4) {fill (hhColor); ellipse (x*5,y,w,h);}
    if (hh==1+5) {fill (hhColor); ellipse (x*6,y,w,h);}
    if (hh==1+6) {fill (hhColor); ellipse (x*7,y,w,h);}
    if (hh==1+7) {fill (hhColor); ellipse (x*8,y,w,h);}
    if (hh==1+8) {fill (hhColor); ellipse (x*9,y,w,h);}
    if (hh==1+9) {fill (hhColor); ellipse (x*10,y,w,h);}
    if (hh==1+10) {fill (hhColor); ellipse (x*11,y,w,h);}
    if (hh==1+11) {fill (hhColor); ellipse (x*12,y,w,h);}
    if (hh==1+12) {fill (hhColor); ellipse (x,y*2,w,h);}
    if (hh==1+13) {fill (hhColor); ellipse (x*2,y*2,w,h);}
    if (hh==1+14) {fill (hhColor); ellipse (x*3,y*2,w,h);}
    if (hh==1+15) {fill (hhColor); ellipse (x*4,y*2,w,h);}
    if (hh==1+16) {fill (hhColor); ellipse (x*5,y*2,w,h);}
    if (hh==1+17) {fill (hhColor); ellipse (x*6,y*2,w,h);}
    if (hh==1+18) {fill (hhColor); ellipse (x*7,y*2,w,h);}
    if (hh==1+19) {fill (hhColor); ellipse (x*8,y*2,w,h);}
    if (hh==1+20) {fill (hhColor); ellipse (x*9,y*2,w,h);}
    if (hh==1+21) {fill (hhColor); ellipse (x*10,y*2,w,h);}
    if (hh==1+22) {fill (hhColor); ellipse (x*11,y*2,w,h);}
    if (hh==1+23) {fill (hhColor); ellipse (x*12,y*2,w,h);}

//MM Grid: Provides the next 5 rows for the minutes, where ellipses are colored based on the minute
    if (mm==1+0) {fill (mmColor); ellipse (x,y*3,w,h);}
    if (mm==1+1) {fill (mmColor); ellipse (x*2,y*3,w,h);}
    if (mm==1+2) {fill (mmColor); ellipse (x*3,y*3,w,h);}
    if (mm==1+3) {fill (mmColor); ellipse (x*4,y*3,w,h);}
    if (mm==1+4) {fill (mmColor); ellipse (x*5,y*3,w,h);}
    if (mm==1+5) {fill (mmColor); ellipse (x*6,y*3,w,h);}
    if (mm==1+6) {fill (mmColor); ellipse (x*7,y*3,w,h);}
    if (mm==1+7) {fill (mmColor); ellipse (x*8,y*3,w,h);}
    if (mm==1+8) {fill (mmColor); ellipse (x*9,y*3,w,h);}
    if (mm==1+9) {fill (mmColor); ellipse (x*10,y*3,w,h);}
    if (mm==1+10) {fill (mmColor); ellipse (x*11,y*3,w,h);}
    if (mm==1+11) {fill (mmColor); ellipse (x*12,y*3,w,h);}
    if (mm==1+12) {fill (mmColor); ellipse (x,y*4,w,h);}
    if (mm==1+13) {fill (mmColor); ellipse (x*2,y*4,w,h);}
    if (mm==1+14) {fill (mmColor); ellipse (x*3,y*4,w,h);}
    if (mm==1+15) {fill (mmColor); ellipse (x*4,y*4,w,h);}
    if (mm==1+16) {fill (mmColor); ellipse (x*5,y*4,w,h);}
    if (mm==1+17) {fill (mmColor); ellipse (x*6,y*4,w,h);}
    if (mm==1+18) {fill (mmColor); ellipse (x*7,y*4,w,h);}
    if (mm==1+19) {fill (mmColor); ellipse (x*8,y*4,w,h);}
    if (mm==1+20) {fill (mmColor); ellipse (x*9,y*4,w,h);}
    if (mm==1+21) {fill (mmColor); ellipse (x*10,y*4,w,h);}
    if (mm==1+22) {fill (mmColor); ellipse (x*11,y*4,w,h);}
    if (mm==1+23) {fill (mmColor); ellipse (x*12,y*4,w,h);}
    if (mm==1+24) {fill (mmColor); ellipse (x,y*5,w,h);}
    if (mm==1+25) {fill (mmColor); ellipse (x*2,y*5,w,h);}
    if (mm==1+26) {fill (mmColor); ellipse (x*3,y*5,w,h);}
    if (mm==1+27) {fill (mmColor); ellipse (x*4,y*5,w,h);}
    if (mm==1+28) {fill (mmColor); ellipse (x*5,y*5,w,h);}
    if (mm==1+29) {fill (mmColor); ellipse (x*6,y*5,w,h);}
    if (mm==1+30) {fill (mmColor); ellipse (x*7,y*5,w,h);}
    if (mm==1+31) {fill (mmColor); ellipse (x*8,y*5,w,h);}
    if (mm==1+32) {fill (mmColor); ellipse (x*9,y*5,w,h);}
    if (mm==1+33) {fill (mmColor); ellipse (x*10,y*5,w,h);}
    if (mm==1+34) {fill (mmColor); ellipse (x*11,y*5,w,h);}
    if (mm==1+35) {fill (mmColor); ellipse (x*12,y*5,w,h);}
    if (mm==1+36) {fill (mmColor); ellipse (x,y*6,w,h);}
    if (mm==1+37) {fill (mmColor); ellipse (x*2,y*6,w,h);}
    if (mm==1+38) {fill (mmColor); ellipse (x*3,y*6,w,h);}
    if (mm==1+39) {fill (mmColor); ellipse (x*4,y*6,w,h);}
    if (mm==1+40) {fill (mmColor); ellipse (x*5,y*6,w,h);}
    if (mm==1+41) {fill (mmColor); ellipse (x*6,y*6,w,h);}
    if (mm==1+42) {fill (mmColor); ellipse (x*7,y*6,w,h);}
    if (mm==1+43) {fill (mmColor); ellipse (x*8,y*6,w,h);}
    if (mm==1+44) {fill (mmColor); ellipse (x*9,y*6,w,h);}
    if (mm==1+45) {fill (mmColor); ellipse (x*10,y*6,w,h);}
    if (mm==1+46) {fill (mmColor); ellipse (x*11,y*6,w,h);}
    if (mm==1+47) {fill (mmColor); ellipse (x*12,y*6,w,h);}
    if (mm==1+48) {fill (mmColor); ellipse (x,y*7,w,h);}
    if (mm==1+49) {fill (mmColor); ellipse (x*2,y*7,w,h);}
    if (mm==1+50) {fill (mmColor); ellipse (x*3,y*7,w,h);}
    if (mm==1+51) {fill (mmColor); ellipse (x*4,y*7,w,h);}
    if (mm==1+52) {fill (mmColor); ellipse (x*5,y*7,w,h);}
    if (mm==1+53) {fill (mmColor); ellipse (x*6,y*7,w,h);}
    if (mm==1+54) {fill (mmColor); ellipse (x*7,y*7,w,h);}
    if (mm==1+55) {fill (mmColor); ellipse (x*8,y*7,w,h);}
    if (mm==1+56) {fill (mmColor); ellipse (x*9,y*7,w,h);}
    if (mm==1+57) {fill (mmColor); ellipse (x*10,y*7,w,h);}
    if (mm==1+58) {fill (mmColor); ellipse (x*11,y*7,w,h);}
    if (mm==1+59) {fill (mmColor); ellipse (x*12,y*7,w,h);}

//SS ellipse: Provides the next 5 rows for the seconds, where ellipses are colored based on the minute
    if (ss==1+0) {fill (ssColor); ellipse (x,y*8,w,h);}
    if (ss==1+1) {fill (ssColor); ellipse (x*2,y*8,w,h);}
    if (ss==1+2) {fill (ssColor); ellipse (x*3,y*8,w,h);}
    if (ss==1+3) {fill (ssColor); ellipse (x*4,y*8,w,h);}
    if (ss==1+4) {fill (ssColor); ellipse (x*5,y*8,w,h);}
    if (ss==1+5) {fill (ssColor); ellipse (x*6,y*8,w,h);}
    if (ss==1+6) {fill (ssColor); ellipse (x*7,y*8,w,h);}
    if (ss==1+7) {fill (ssColor); ellipse (x*8,y*8,w,h);}
    if (ss==1+8) {fill (ssColor); ellipse (x*9,y*8,w,h);}
    if (ss==1+9) {fill (ssColor); ellipse (x*10,y*8,w,h);}
    if (ss==1+10) {fill (ssColor); ellipse (x*11,y*8,w,h);}
    if (ss==1+11) {fill (ssColor); ellipse (x*12,y*8,w,h);}
    if (ss==1+12) {fill (ssColor); ellipse (x,y*9,w,h);}
    if (ss==1+13) {fill (ssColor); ellipse (x*2,y*9,w,h);}
    if (ss==1+14) {fill (ssColor); ellipse (x*3,y*9,w,h);}
    if (ss==1+15) {fill (ssColor); ellipse (x*4,y*9,w,h);}
    if (ss==1+16) {fill (ssColor); ellipse (x*5,y*9,w,h);}
    if (ss==1+17) {fill (ssColor); ellipse (x*6,y*9,w,h);}
    if (ss==1+18) {fill (ssColor); ellipse (x*7,y*9,w,h);}
    if (ss==1+19) {fill (ssColor); ellipse (x*8,y*9,w,h);}
    if (ss==1+20) {fill (ssColor); ellipse (x*9,y*9,w,h);}
    if (ss==1+21) {fill (ssColor); ellipse (x*10,y*9,w,h);}
    if (ss==1+22) {fill (ssColor); ellipse (x*11,y*9,w,h);}
    if (ss==1+23) {fill (ssColor); ellipse (x*12,y*9,w,h);}
    if (ss==1+24) {fill (ssColor); ellipse (x,y*10,w,h);}
    if (ss==1+25) {fill (ssColor); ellipse (x*2,y*10,w,h);}
    if (ss==1+26) {fill (ssColor); ellipse (x*3,y*10,w,h);}
    if (ss==1+27) {fill (ssColor); ellipse (x*4,y*10,w,h);}
    if (ss==1+28) {fill (ssColor); ellipse (x*5,y*10,w,h);}
    if (ss==1+29) {fill (ssColor); ellipse (x*6,y*10,w,h);}
    if (ss==1+30) {fill (ssColor); ellipse (x*7,y*10,w,h);}
    if (ss==1+31) {fill (ssColor); ellipse (x*8,y*10,w,h);}
    if (ss==1+32) {fill (ssColor); ellipse (x*9,y*10,w,h);}
    if (ss==1+33) {fill (ssColor); ellipse (x*10,y*10,w,h);}
    if (ss==1+34) {fill (ssColor); ellipse (x*11,y*10,w,h);}
    if (ss==1+35) {fill (ssColor); ellipse (x*12,y*10,w,h);}
    if (ss==1+36) {fill (ssColor); ellipse (x,y*11,w,h);}
    if (ss==1+37) {fill (ssColor); ellipse (x*2,y*11,w,h);}
    if (ss==1+38) {fill (ssColor); ellipse (x*3,y*11,w,h);}
    if (ss==1+39) {fill (ssColor); ellipse (x*4,y*11,w,h);}
    if (ss==1+40) {fill (ssColor); ellipse (x*5,y*11,w,h);}
    if (ss==1+41) {fill (ssColor); ellipse (x*6,y*11,w,h);}
    if (ss==1+42) {fill (ssColor); ellipse (x*7,y*11,w,h);}
    if (ss==1+43) {fill (ssColor); ellipse (x*8,y*11,w,h);}
    if (ss==1+44) {fill (ssColor); ellipse (x*9,y*11,w,h);}
    if (ss==1+45) {fill (ssColor); ellipse (x*10,y*11,w,h);}
    if (ss==1+46) {fill (ssColor); ellipse (x*11,y*11,w,h);}
    if (ss==1+47) {fill (ssColor); ellipse (x*12,y*11,w,h);}
    if (ss==1+48) {fill (ssColor); ellipse (x,y*12,w,h);}
    if (ss==1+49) {fill (ssColor); ellipse (x*2,y*12,w,h);}
    if (ss==1+50) {fill (ssColor); ellipse (x*3,y*12,w,h);}
    if (ss==1+51) {fill (ssColor); ellipse (x*4,y*12,w,h);}
    if (ss==1+52) {fill (ssColor); ellipse (x*5,y*12,w,h);}
    if (ss==1+53) {fill (ssColor); ellipse (x*6,y*12,w,h);}
    if (ss==1+54) {fill (ssColor); ellipse (x*7,y*12,w,h);}
    if (ss==1+55) {fill (ssColor); ellipse (x*8,y*12,w,h);}
    if (ss==1+56) {fill (ssColor); ellipse (x*9,y*12,w,h);}
    if (ss==1+57) {fill (ssColor); ellipse (x*10,y*12,w,h);}
    if (ss==1+58) {fill (ssColor); ellipse (x*11,y*12,w,h);}
    if (ss==1+59) {fill (ssColor); ellipse (x*12,y*12,w,h);}

//This is the code for the 3rd exhibit

//Translates 0,0 for the 3rd exhibit and create a section break
   translate (-x1Translate, 640);
   fill (255,255,255); rect (0,0,1600,10);

//HH Rectagles: This code creates the two rectangles to represent the hour
    var x1 = 50+hh*30;
    var y1 = 50;
    var w1 = 30;
    var h1 = 720;
    fill (hhColor); rect (x1,y1,w1,h1);

    var x2 = 50;
    var y2 = 50+hh*30;
    var w2 = 720;
    var h2 = 30;
    fill (hhColor); rect (x2,y2,w2,h2);

//MM Rectagles: This code create the two rectangles to represent the minute
    var x3 = 50+mm*12;
    var y3 = 50;
    var w3 = 12;
    var h3 = 720;
    fill (mmColor); rect (x3,y3,w3,h3);

    var x4 = 50;
    var y4 = 50+mm*12;
    var w4 = 720;
    var h4 = 12;
    fill (mmColor); rect (x4,y4,w4,h4);

//SS Rectangles: This code create the two rectangles to represent the second
    var x5 = 50+ss*12;
    var y5 = 50;
    var w5 = 12;
    var h5 = 720;
    fill (ssColor); rect (x5,y5,w5,h5)

    var x6 = 50;
    var y6 = 50+ss*12;
    var w6 = 720;
    var h6 = 12;
    fill (ssColor); rect (x6,y6,w6,h6);

}
