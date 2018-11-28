// var map;
var cLon = -132.653;
var cLat = 48.592;
var zoom =3.2;
// var bearing: 50;
// var pitch: 80;
var canvas;
var quake_data;
var r = 255;
var g = 255;
var b = 255;



function preload(){
  quake_data = loadStrings('data/1.0_month.csv');
  Hel_Bold = loadFont('data/Helvetica-Bold.ttf');
  Hel_Light = loadFont('data/Helvetica-Light.ttf');

  // quake_data = loadJSON('data/month_data.json');

}



function mercX(lon){
  lon = radians(lon);
  var a = (256/PI) * pow(2,zoom);
  var b = lon + PI;
  return a * b;
}

function mercY(lat){
  // Convert LongLat to x and y
  lat = radians(lat);
  var a = (256/PI) * pow(2,zoom);
  var b = tan(PI/4 + lat/2);
  var c = PI - log(b);
  return a * c;
}

function setup(){
  //change layer order
  canvas = createCanvas(windowWidth, windowHeight);
  // canvas.position(0,0);
  canvas.style('z-index','+1');
  translate(width/2, height/2);

  var cx = mercX(cLon);
  var cy = mercY(cLat);

  //draw the circles

  for (var i = 0; i < quake_data.length;i++) {
    var data = quake_data[i].split(/,/);
    var lat = data[1];
    var lon = data[2];
    var depth = data[3];
    var mag = data[4];

    var x = mercX(lon) - cx;
    var y = mercY(lat) - cy;

      noStroke();
      fill(182,247,201, 110);
      ellipse(x, y , mag*8,mag*8);

      stroke('black');
      strokeWeight(0.15);
      noFill(0);
      ellipse(x,y,depth/1,depth/1);

  }

  textSize(82);
  fill("black");
  textFont(Hel_Bold);
  text('N', -windowWidth/3 - 200, windowHeight/3 +80);
  text('o', -windowWidth/3 - 146, windowHeight/3 +80);
  text('r', -windowWidth/3 - 101, windowHeight/3 +80);
  text('t', -windowWidth/3 - 74, windowHeight/3 +80);
  text('h', -windowWidth/3 - 50, windowHeight/3 +80);
  text('A', -windowWidth/3 + 5, windowHeight/3 +80);
  text('m', -windowWidth/3 + 58, windowHeight/3 +80);
  text('e', -windowWidth/3 + 125, windowHeight/3 +80);
  text('r', -windowWidth/3 + 165, windowHeight/3 +80);
  text('i', -windowWidth/3 + 193, windowHeight/3 +80);
  text('c', -windowWidth/3 + 210, windowHeight/3 +80);
  text('a', -windowWidth/3 + 252, windowHeight/3 +80);

  textSize(30);
  // fill('#b72525');
  fill('black');
  textFont(Hel_Light);
  text('earthquakes in', -windowWidth/3 - 197, windowHeight/3+5 );

  textSize(82);
  fill("black");
  text('/', -windowWidth/3 + 302 , windowHeight/3 +82);
  textSize(30);
  fill('black');
  text('month', -windowWidth/3 + 329 , windowHeight/3 +70);

  // print(quake_data);

  //legend
  // noFill();
  // stroke('black');
  // strokeWeight(0.5);
  // rect(-windowWidth/3 - 195, windowHeight/3-140, 500, 80);

  textSize(60);
  fill('black');
  textFont(Hel_Bold);
  text('[', -windowWidth/3 - 200, windowHeight/3-85 );
  text(']', -windowWidth/3+75, windowHeight/3-85 );


  textSize(15);
  fill('black');
  textFont(Hel_Light);
  text('magnitude      |', -windowWidth/3-140, windowHeight/3-95 );

  noStroke();
  fill(182,247,201);
  ellipse(-windowWidth/3 - 160, windowHeight/3-100, 15,15);

  noFill();
  stroke('black');
  strokeWeight(0.5);
  ellipse(-windowWidth/3, windowHeight/3-100, 15,15);

  textSize(15);
  fill('black');
  textFont(Hel_Light);
  text('depth', -windowWidth/3+20, windowHeight/3-95 );



}

function resetSketch(){
  draw()
  setTimeout(resetSketch,1000);
}
