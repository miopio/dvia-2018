
var data;


function preload() {
      data = loadTable("data/GunEvents2018.csv", "csv", "header");
      console.log(data);
      // console.log(data.length);
}

function setup() {
      createCanvas(3000, windowHeight);
      background('#111');
      drawDataPoints();
}

function setupMap() {

}

function drawDataPoints(){

      console.log(data.rows);

      //var incident_id = data.rows[0].obj.incident_id;
      var incident_id = data.getColumn('incident_id');
      var numberOfEvents = data.rows.length;
      var latitude = data.getColumn('latitude');
      var longitude = data.getColumn('longitude');

      var n_guns_involved = data.getColumn('n_guns_involved');
      var max_guns_involved = max(n_guns_involved); console.log(max_guns_involved);

      var n_injured = data.getColumn('n_injured');
      var max_injured = max(n_injured); console.log(max_injured);

      //map(value, start1, stop1, start2, stop2, [withinBounds])
      //map (max_injured, 0, 100);

      var n_killed = data.getColumn('n_killed');
      var max_n_killed = max(n_killed); console.log(max_n_killed);

      var participant_age = data.getColumn('participant_age');
      // var max_participant_age = max(participant_age);
      // console.log(participant_age.split(' || '));

      var gun_type = data.getColumn('gun_type');

      // for(i=0;i<data.rows.length){
      //
      // }
}
