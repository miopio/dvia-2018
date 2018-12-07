var fs = require('fs');

var que = JSON.parse(fs.readFileSync('que.json'));
var brk = JSON.parse(fs.readFileSync('brk.json'));
var mnh = JSON.parse(fs.readFileSync('mnh.json'));
var brx = JSON.parse(fs.readFileSync('brx.json'));
var stn = JSON.parse(fs.readFileSync('stn.json'));

var posts = mnh.concat(brk,que,brx,stn);
fs.writeFileSync('posts.json', JSON.stringify(posts));
