//var externalData; // declare a global variable to store the data
var table;

function preload() {
  // start fetching the data and assign it to your global
  //externalData = loadJSON('http://example.com/some/file.json');
  table = loadTable('Nuclear Tests 1945–2017.csv', 'csv', 'header');
}

function setup(){
    // ... use the global externalData variable here (or in draw)
    print(table.getRowCount() + ' total rows in table');
    print(table.getColumnCount() + ' total columns in table');

    print(table.getColumn('year'));

     for (var r = 0; r < table.getRowCount(); r++)
     for (var c = 0; c < table.getColumnCount(); c++) {
     print(table.getString(r, c));
   }
}
