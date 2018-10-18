// var map;
var cLon = -120.541136;
var cLat = 38.793934;
var zoom = 5.6;
var canvas;


var lat = 24.7136;
var lon = 46.6753;

function preload(){
  nevada_data = loadStrings('data/nevada_nt.csv');

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

  for (var i = 1; i < nevada_data.length; i++) {
    var data = nevada_data[i].split(/,/);
    var lat = data[1];
    // print(lon)
    var lon = data[2];
    // print(lat)
    var x = mercX(lon) - cx;
    var y = mercY(lat) - cy;
    noStroke();
    fill (0,255,170,50);
    ellipse(x, y, 20,20);

  // var Freq = [];
  //   for(var i=0; i<Freq.length; i++){
  //     if (Freq[i] > 2){
  //     var radius = map(Freq[i],1,15,1,50)
  //     ellipse(x, y, radius, radius);
  //     }
  //   }


  }
  print(nevada_data);
  // fill(45);
  // rect(-windowWidth/3, 275, 270, 100);


  noStroke();
  textAlign(LEFT);
  fill(255);
  textSize(60);
  text('Nuclear Tests', -windowWidth/2+50, -350);
  text('in Nevada', -windowWidth/2+50, -290);



}

function resetSketch(){
  draw()
  setTimeout(resetSketch,1000);
}
