// var map;
var cLon = 20.201302;
var cLat = 8.841081;
var zoom = 1.2;
var canvas;
var lonlat_data;

var lat = 24.7136;
var lon = 46.6753;

function preload(){
  all_data = loadJSON('data/all.json');
  total_data = loadJSON('data/totals.json');
  lonlat_data = loadStrings('data/johnstons-archive.csv');
  Ubuntu_Regular = loadFont('data/Ubuntu-Regular.ttf');
  Ubuntu_Bold = loadFont('data/Ubuntu-Bold.ttf');
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
    fill (0,255,170,50);
    ellipse(x, y, 10,10);
    //ussr
    if (i <= 983){
      fill(255,0,75,130);
      ellipse(x, y, 10,10);
    }
    //France
    if (i >= 984 && i <= 1192){
      fill(255,182,0,80);
      ellipse(x, y, 10,10);
    }
    //USA
    if (i >= 1193 && i <= 2319){
      fill(0,230,255,100);
      ellipse(x, y, 10,10);
    }
    //UK
    if (i >= 2320 && i <= 2364){
      fill(255,99,13,140);
      ellipse(x, y, 10,10);
    }

    //China < green
  }
  print(all_data);
  print(total_data);
  print(lonlat_data);
  fill(45);
  rect(-windowWidth/3, 275, 270, 100);


  textFont(Ubuntu_Regular);
  noStroke();
  textAlign(LEFT);
  fill(220);
  textSize(10);
  text('USSR', -windowWidth/3+40, 310);
  text('FRANCE', -windowWidth/3+40, 345);
  text('USA', -windowWidth/3+130, 310);
  text('UK', -windowWidth/3+130, 345);
  text('PRC', -windowWidth/3+220, 310);

  fill(200);
  textFont(Ubuntu_Bold);
  textSize(18);
  text('Nuclear Tests ', -windowWidth/3+40, 255);

  noStroke();
  fill(255,0,75,130);
  ellipse(-windowWidth/3+27, 306,10,10);

  fill(255,182,0,130);
  ellipse(-windowWidth/3+27, 341,10,10);

  fill(0,230,255,130);
  ellipse(-windowWidth/3+117, 306,10,10);

  fill(255,99,13,130);
  ellipse(-windowWidth/3+117, 341,10,10);

  fill(0,255,170,130);
  ellipse(-windowWidth/3+207, 306,10,10);


}

function resetSketch(){
  draw()
  setTimeout(resetSketch,1000);
}
