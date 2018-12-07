//require Modules
var request = require('request');
var async = require('async');
var fs = require('fs');

var apiKey = process.env.GOOGLE_MAP;
var locationinfo = [];


var rawData = fs.readFileSync('posts.json');
var data = JSON.parse(rawData);
var latlon = data.map(i => i.geotag);
// fs.writeFileSync('latlons.json', JSON.stringify(latlon));
// var lat;
// var lon;
// var array = [];
// for (var i=0; i<latlon.length; i++){
//   if (latlon[i]!=undefined){
//
//   }
//   lat = latlon[i][0];
//   lon = latlon[i][1];
//   array.push(lat+','+lon)
// }
// var x = latlon[1][0];
// console.log(x);

async.eachSeries(
  latlon,

  // requesting geo coords from API
  function(value, callback) {
    var apiRequest = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=';
    // apiRequest += 'streetAddress=' + value.split(' ').join('%20');
    apiRequest += value[0]+','+value[1];
    apiRequest += '&key=' + apiKey;
    request(
      apiRequest,
      function(err, resp, body) {
        if (err) {
          throw err;
        } else {
            var geoCode = JSON.parse(body);
            locationinfo.push(geoCode);
        }
      }
    );
    setTimeout(callback, 2000); // increase from 2000 to get complete list
  },

  // write into json file
  function() {
    fs.writeFileSync('postsGeocodes.json', JSON.stringify(locationinfo));
    console.log('*** *** *** *** ***');
    console.log(locationinfo.length);
  }
);
