// var map;
var cLon = 20.201302;
var cLat = 8.841081;
var zoom = 1.3;
var canvas;
var lonlat_data;


var lat = 24.7136;
var lon = 46.6753;

function preload(){
  all_data = loadJSON('data/all.json');
  total_data = loadStrings('data/totals.csv');
  lonlat_data = loadStrings('data/johnstons-archive-us-ussr.csv');
  Ubuntu_Bold = loadFont('data/UbuntuMono-Bold.ttf');
  Ubuntu_Regular = loadFont('data/UbuntuMono-Regular.ttf');
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

  // image(map, 0, 0);

  var cx = mercX(cLon);
  var cy = mercY(cLat);

  for (var i = 0; i < lonlat_data.length;i++) {
    var data = lonlat_data[i].split(/,/);
    var lat = data[9];
    var lon = data[10];
    var x = mercX(lon) - cx;
    var y = mercY(lat) - cy;
    noStroke();
    //ussr
    if (i <= 982){
      fill (0,255,170,50);
      ellipse(x, y, 20,20);
    }
    //USA
    if (i >= 983 && i <= 1971){
      fill(255,0,75,70);
      ellipse(x, y, 20,20);
    }

  }


  // print(total_data);
  // print(lonlat_data);


  //legend
  fill(45,45,45,170);
  rect(-windowWidth/3-20,80, 450, 300);


  textFont(Ubuntu_Bold);
  noStroke();
  textAlign(LEFT);
  fill(255);
  textSize(10);
  textFont(Ubuntu_Regular);
  text('Soviet Union', -windowWidth/3+30, 160);
  text('United States', -windowWidth/3+138, 160);

  fill(255);
  textFont(Ubuntu_Bold);
  textSize(30);
  text('Nuclear Tests Sites', -windowWidth/3+10, 130);


  noStroke();
  fill (0,255,170);
  ellipse(-windowWidth/3+15, 157,10,10);

  noStroke();
  fill(255,0,75);
  ellipse(-windowWidth/3+123, 157,10,10);


  stroke(255);
  strokeWeight(0.3);
  line(-windowWidth/3+12,270,-160,270);

  noStroke();
  fill(255,0,75,100);
  ellipse(-windowWidth/3+80, 270,20,20);
  ellipse(-windowWidth/3+90, 270,30,30);
  ellipse(-windowWidth/3+100, 270,20,20);
  ellipse(-windowWidth/3+110, 270,35,35);
  ellipse(-windowWidth/3+120, 270,70,70);
  ellipse(-windowWidth/3+130, 270,30,30);
  ellipse(-windowWidth/3+140, 270,50,50);
  ellipse(-windowWidth/3+150, 270,30,30);
  ellipse(-windowWidth/3+160, 270,5,5);
  ellipse(-windowWidth/3+170, 270,20,20);
  ellipse(-windowWidth/3+180, 270,10,10);





}

function resetSketch(){
  draw()
  setTimeout(resetSketch,1000);
}
