var fs = require('fs');
var toJSON = require('plain-text-data-to-json');

var doc = fs.readFileSync('deardiary_momentsinwork2.txt', 'utf8');

var data = toJSON(doc);

fs.writeFileSync('output.json', JSON.stringify(data, null, 2) + '\n');
