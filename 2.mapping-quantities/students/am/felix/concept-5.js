// Functions
let aIncludesValueBAtKeyC = (arrayA, arrayB, keyC) => {
  let arr = arrayA,
    brr = arrayB,
    // Add an exclamation mark to throw things out!
        //f => b.includes(f['Country Code'])
    res = arrayA.filter(f => arrayB.includes(f[keyC]));
    return res;
}

// https://codepen.io/vlad-bezden/pen/OMEXJz?editors=0012
let arrayOfUniqueValues = (array, key) => {
  return [...new Set(array.map(item => item[key]))];
}

// https://stackoverflow.com/questions/3895478/does-javascript-have-a-method-like-range-to-generate-a-range-within-the-supp
let range = (size, startAt = 0) => {
    return [...Array(size).keys()].map(i => i + startAt);
}

// https://stackoverflow.com/questions/24440403/returning-only-certain-properties-from-an-array-of-objects-in-javascript
let pluck = (array, key) => {
  return array.map(function(item) { return item[key]; });
}

// D3
d3.csv(`data/johnstons-archive.csv`)

.then((data) => {
  // console.log(data);
  data.forEach((e, i) => {

    let yieldArray = [
      parseFloat(e.yield)    != undefined ? parseFloat(e.yield) : 0,
      parseFloat(e.yieldest) != undefined ? parseFloat(e.yieldest) : 0,
      parseFloat(e.yieldmax) != undefined ? parseFloat(e.yielmax) : 0,
      parseFloat(e.yieldmin)  != undefined ? parseFloat(e.yieldmin) : 0,
    ];

    e['yieldStats'] = {};
      e.yieldStats['min'] = d3.min(yieldArray);
      e.yieldStats['max'] = d3.max(yieldArray);
      e.yieldStats['mean'] = d3.mean(yieldArray);
      e.yieldStats['deviation'] = d3.deviation(yieldArray);
        delete e.yield;
        delete e.yieldest;
        delete e.yieldmax;
        delete e.yieldmin;

    e['name'] = e.shot;
      delete e.shot;
      // e['size'] = e.yieldStats.mean != 0 ? Math.sqrt(e.yieldStats.mean) : 1;
    e['size'] = e.yieldStats.mean != 0 ? e.yieldStats.mean : 1;

    e['date'] = {};
      e.date['string'] = new Date(Date.parse(`${e.day} ${e.month} ${e.year} ${e.time != '' ? e.time : '12:34:56'}+0000`)).toUTCString();
      e.date['year'] = parseFloat(e.year);
      e.date['month'] = new Date(Date.parse(`${e.month} 1 1945`)).getMonth()+1;
      e.date['day'] = parseFloat(e.day);
      e.date['time'] = e.time != '' ? e.time : null;
        // delete e.year;
        delete e.month;
        delete e.day;
        delete e.time;

    e['location'] = {};

  })

  // Create an array with the hierarchy structure
  cleanerData = [];
  myMaxSum = 0;
  // I’ll work with five decades
  for (var i = 0; i < 5; i++) {

    // Node depth: 0, decades
    let decade = {name: `19${i+4}5 - ’${i+5}4`, children: [], meanSum: 0};
    // Filter the date by the years of the decade, use the range function
    // let items = range(10, 1945);
    let dataFilteredByDecade = aIncludesValueBAtKeyC(data, range(10, 1945+i*10).toString(), 'year')
    let meanArray = dataFilteredByDecade.map((item) => { return item.yieldStats.mean; });
    decade.meanSum = d3.sum(meanArray);
    if (myMaxSum < decade.meanSum) {
      myMaxSum = decade.meanSum
    }

    // Node depth: 1, countries
    // uniqueCountries = arrayOfUniqueValues(data, 'country');
    arrayOfUniqueValues(data, 'country').forEach((e, i) => {
      decade.children.push({name: e, children: []});
    })

    // Node depth: 2, tests
    decade.children.forEach((e, i) => {
      let dataFilteredByDecadeAndCountry = aIncludesValueBAtKeyC(dataFilteredByDecade, [e.name], 'country');
      e.children = dataFilteredByDecadeAndCountry;
    })

    // Finally push the temporary decade object to the cleanerData array
    cleanerData.push(decade);
  }
  // console.log(cleanerData);

  cleanerData.forEach((e, i) => {
    console.log(e);
    let scaleFactor = e.meanSum / myMaxSum;
    createCirclePack(e, i, window.innerHeight*0.85*scaleFactor);
    // createCirclePack(e, i, 315);
  })
  d3.select('#tests')
  .attr('height', window.innerHeight)

  // console.log(aIncludesValueBAtKeyC(data, ['ussr'], 'country'));

})

let createCirclePack = (e, i, relativeDiameter) => {
  let root = e;
  // console.log(root);

  // We first have the svg with a certain width and height, that then determines the diameter of the outermost circle (pack)
  let svg = d3.select(`#decade-${i+1}`)
    .insert('svg', '.label')
      .attr('width', relativeDiameter)
      .attr('height', relativeDiameter),
    margin = 20,
    diameter = relativeDiameter,
    g = svg.append("g").attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");
  // This is where the color scheme is defined
  let color = d3.scaleLinear()
      .domain([-1, 5])
      .range(["hsl(0,0%,99%)", "hsl(0,0%,80%)"])
      .interpolate(d3.interpolateHcl);

  // This is where the size of the pack is defined (program this later)
  let pack = d3.pack()
        .size([diameter - margin, diameter - margin])
        .padding(2);


  // create a hierarchy of your input
  root = d3.hierarchy(root)
      .sum(function(d) { return d.size; })
      .sort(function(a, b) { return b.value - a.value; });

  let focus = root,
      nodes = pack(root).descendants(),
      view;

  let circle = g.selectAll("circle")
    .data(nodes)
    .enter().append("circle")
      .attr("class", function(d) { return d.parent ? d.children ? "node" : "node node--leaf" : "node node--root"; })
      .style("fill", function(d) {
        // console.log(d.depth, d.data.name);
        // console.log(d.data.height);
        if (d.depth == 2) {
          if (d.data.size == 1) {
            console.log('yes');
            if (d.data.height < 0) {
              return d3.rgb(171,217,233).darker(2)
            }
            else {
              return d3.rgb(253,204,138).darker(2)
            }
           }
           else {
             if (d.data.height < 0) {
               return d3.rgb(171,217,233);
             }
             else {
              return d3.rgb(253,204,138);
            }
          }
        }
        else {
          return 'rgba(0,0,0,0)';
        }
      })
      .style('stroke', function(d) {
        if (d.depth == 1) {
          if (d.data.name == 'usa') {
            // console.log('yes');
            return 'rgba(55,126,184,0.9)'
          } else if (d.data.name == 'ussr') {
            return 'rgba(228,26,28,0.9)'
          } else if (d.data.name == 'fr') {
            return 'rgba(77,175,74,0.9)'
          } else if (d.data.name == 'uk') {
            return 'rgba(152,78,163,0.9)'
          } else if (d.data.name == 'prc') {
            return 'rgba(255,127,0,0.9)'
          }
        } else if (d.depth == 0) {
          return '#eee';
        }
      })
      .on("click", function(d) { if (focus !== d) zoom(d), d3.event.stopPropagation(); });

  // let text = g.selectAll("text")
  //   .data(nodes)
  //   .enter().append("text")
  //     .attr("class", "label")
  //     .style("fill-opacity", function(d) { return d.parent === root ? 1 : 0; })
  //     .style("display", function(d) { return d.parent === root ? "inline" : "none"; })
  //     .text(function(d) { return d.data.name; });

  let node = g.selectAll("circle,text");

  svg
      // .style("background", color(-1))
      .on("click", function() { zoom(root); });

  zoomTo([root.x, root.y, root.r * 2 + margin]);

  function zoom(d) {
    let focus0 = focus; focus = d;

    let transition = d3.transition()
        .duration(d3.event.altKey ? 7500 : 750)
        .tween("zoom", function(d) {
          let i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2 + margin]);
          return function(t) { zoomTo(i(t)); };
        });

    // transition.selectAll("text")
    //   .filter(function(d) { return d.parent === focus || this.style.display === "inline"; })
    //     .style("fill-opacity", function(d) { return d.parent === focus ? 1 : 0; })
    //     .on("start", function(d) { if (d.parent === focus) this.style.display = "inline"; })
    //     .on("end", function(d) { if (d.parent !== focus) this.style.display = "none"; });
  }

  function zoomTo(v) {
    let k = diameter / v[2]; view = v;
    node.attr("transform", function(d) {
      return "translate(" + (d.x - v[0]) * k + "," + (d.y - v[1]) * k + ")";
    });
    circle.attr("r", function(d) {
      // console.log(d);
      return d.r * k;
    });
  }

}
