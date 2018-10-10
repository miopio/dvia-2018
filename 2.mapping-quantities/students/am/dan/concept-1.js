var usaNdata;
var usaTrustTable;
var trustRate ;
function preload(){
  usaNdata = loadJSON('data/totals.json');
  usaTrustTable= loadTable('data/public-trust-in-government.csv', 'csv', 'header');
   img = loadImage('data/nuclear.svg');
}

function setup(){
  createCanvas(2000, 600);
  background(200);
  print(usaNdata.tests["United States"]);
  print(usaTrustTable.getRowCount() + ' total rows in table');
  print(usaTrustTable.getColumnCount() + ' total columns in table');
  print(usaTrustTable.getColumn('Trust in Government (%)'));

  trustRate= usaTrustTable.getColumn('Trust in Government (%)');
  print(trustRate[1]);

  drawNuclear();
  drawTrustLine();

//image(img, 0, 0, 10, 10);

}

function drawTrustLine(){
  var trusts=[];
  line(11*23+50,height,11*23+50,height-300);
  text('100%', 10*23+15, height-295);
  text('0%', 10*23+15, height-5);
  text('Public trust in government, United States', width/3, height-10);
  for(var i=0; i<trustRate.length; i++){
    var trust = map (trustRate[i],0,100, 0,300);
    trusts.push(trust);
  }
  for(var i=0; i<trusts.length; i++){
    line(13*23+25+i*23, height-trusts[i], 13*23+25+(i+1)*23, height-trusts[i+1]);
    textSize(8);
    text(usaTrustTable.getColumn('Year')[i], (1958-1945)*23+25+i*23, height-300);
  }

print(trusts);
}

function drawNuclear(){
  var xWidth= 23;
  var x=25;
  for (var i =0 ; i<usaNdata.years.length; i++){
      textSize(8);
      text (usaNdata.years[i], x, 50)

      if (usaNdata.tests["United States"][i]>0){
     image(img, x, 100, 10, usaNdata.tests["United States"][i]);
   }
     x+=xWidth;

  }


  // for (var testYear in usaNdata.tests){
  //   text (testYear, x, 100)
  //   x+=xWidth;
  // }

}
