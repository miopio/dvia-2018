var data;
var stateBattle;
var StateBased;
function preload(){
  data = loadJSON('data/totals.json')
  stateBattle= loadTable('data/state-based-battle-related-deaths-per-100000-since-1946.csv', 'csv', 'header');
}

function setup(){
  createCanvas(2000, 600)

   print(stateBattle.getRows(['State-based conflicts']));
  print(stateBattle.findRows('State-based conflicts', 'Entity'));
  stateBased= stateBattle.findRows('State-based conflicts', 'Entity');
  print(stateBased[0].obj['Rate of violent deaths in conflicts and one-sided violence (per 100,000)']);
  print(stateBased[1].arr[2])

  drawStateBattle();
}


function drawStateBattle(){
var deaths=[];
var x =25;
var xWidth= 20;
text ('Rate of Violent Deaths in State Based Conflicts', 20, 30)
  for (var i=0; i< stateBased.length; i++){
      textSize(8);
      text (stateBased[i].arr[2], x, 100)

    x+=xWidth;
      var death =map(stateBased[i].arr[3],0.0000000,22, 20,300);
      deaths.push(death);

  }
  scale(1, -1);
  translate(0, -height);
  for (var i=0; i< deaths.length; i++){
    rect(25+i*20, 150, 15, deaths[i]);

  }



}
