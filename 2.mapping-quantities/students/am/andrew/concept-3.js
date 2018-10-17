d3.csv("data/decade_basic.csv", d => {
  return {
    country: d["Country"],
    year: {
      1940: +d[1940],
      1950: +d[1950],
      1960: +d[1960],
      1970: +d[1970],
      1980: +d[1980],
      1990: +d[1990],
      2000: +d[2000],
      2010: +d[2010]
    },
    total: +d["Total"]
  };
}).then(data => {
  console.log(data);
  svg(data);
});

// global variables
let margin = 100;
let marginBottom = 150;
let height = window.innerHeight - marginBottom;
let width = window.innerWidth - margin;

let svg = data => {
  // linear scale x
  // let x = d3
  //   .scaleLinear()
  //   .domain([0, 1100])
  //   .range([margin, width]);

  // // linear scale y
  // // map positions vertically
  // let y = d3
  //   .scaleLinear()
  //   .domain([0, data.length])
  //   .range([height, margin]);

  let graph = d3
    .select("body")
    .append("svg")
    .attr("width", 4000)
    .attr("height", window.innerHeight);

  // // x axis title
  // let xAxisTitle = graph
  //   .append("g")
  //   .attr("id", "xAxisTitle")
  //   .append("text")
  //   .text("Total electricity output (GWh)")
  //   .attr("x", width - 230)
  //   .attr("y", height - 10);

  // // y axis title
  // let yAxisTitle = graph
  //   .append("g")
  //   .attr("id", "yAxisTitle")
  //   .append("text")
  //   .text("Renewable Energy share (%)")
  //   .attr("x", margin + 10)
  //   .attr("y", margin + 5);

  // add scatter points and mouseover
  let group = graph.append("g").attr("id", "group");

  let point = group
    .selectAll("g")
    .data(data)
    .enter()
    .append("g")
    .attr("class", "up")

    .attr("y", (d, i) => {
      return y(i);
    })
    .attr("transform", (d, i) => {
      return `translate(0, ${y(i)})`;
    })

    .on("mouseover", function() {
      d3.select("#group")
        .selectAll("g")
        .attr("class", "inactive");
      d3.select(this).attr("class", "active");
      d3.select(this)
        .select("text")
        .text(d => {
          return `${d.country}: ${d.year[1940]}`;
        });
    })

    .on("mouseout", function() {
      d3.select("#group")
        .selectAll("g")
        .attr("class", "up");
      d3.select(this)
        .select("text")
        .text(d => {
          return d.country;
        });
    });

  // visual bars where width is test number for decade

  // 1940s
  point
    .append("rect")
    .attr("x", margin)
    .attr("width", d => {
      return d["year"][1940];
    })
    .attr("height", 50)
    .attr("id", "output")
    .attr("class", "pattern-40");

  // 1950s
  point
    .append("rect")
    .attr("x", (d, i) => {
      return x(d["year"][1940] + margin);
    })
    .attr("width", (d, i) => {
      return x(d["year"][1950]);
    })
    .attr("height", 50)
    .attr("id", "output")
    .attr("class", "pattern-50");

  // 1960s
  point
    .append("rect")
    .attr("x", (d, i) => {
      return x(d["year"][1940] + d["year"][1950] + margin);
    })
    .attr("width", (d, i) => {
      return x(d["year"][1960]);
    })
    .attr("height", 50)
    .attr("id", "output")
    .attr("class", "pattern-60");

  // 1970s
  point
    .append("rect")
    .attr("x", (d, i) => {
      return x(d["year"][1940] + d["year"][1950] + d["year"][1960] + margin);
    })
    .attr("width", (d, i) => {
      return x(d["year"][1970]);
    })
    .attr("height", 50)
    .attr("id", "output")
    .attr("class", "pattern-70");

  // 1980s
  point
    .append("rect")
    .attr("x", (d, i) => {
      return x(
        d["year"][1940] +
          d["year"][1950] +
          d["year"][1960] +
          d["year"][1970] +
          margin
      );
    })
    .attr("width", (d, i) => {
      return x(d["year"][1980]);
    })
    .attr("height", 50)
    .attr("id", "output")
    .attr("class", "pattern-80");

  // 1990s
  point
    .append("rect")
    .attr("x", (d, i) => {
      return x(
        d["year"][1940] +
          d["year"][1950] +
          d["year"][1960] +
          d["year"][1970] +
          d["year"][1980] +
          margin
      );
    })
    .attr("width", (d, i) => {
      return x(d["year"][1990]);
    })
    .attr("height", 50)
    .attr("id", "output")
    .attr("class", "pattern-90");

  // 2000s
  point
    .append("rect")
    .attr("x", (d, i) => {
      return x(
        d["year"][1940] +
          d["year"][1950] +
          d["year"][1960] +
          d["year"][1970] +
          d["year"][1980] +
          d["year"][1990] +
          margin
      );
    })
    .attr("width", d => {
      return x(d["year"][2000]);
    })
    .attr("height", 50)
    .attr("id", "output")
    .attr("class", "pattern-00");

  // 2010s
  point
    .append("rect")
    .attr("x", (d, i) => {
      return x(
        d["year"][1940] +
          d["year"][1950] +
          d["year"][1960] +
          d["year"][1970] +
          d["year"][1980] +
          d["year"][1990] +
          d["year"][2000] +
          margin
      );
    })
    .attr("width", (d, i) => {
      return x(d["year"][2010]);
    })
    .attr("height", 50)
    .attr("id", "output")
    .attr("class", "pattern-10");

  // text labels on points
  point
    .append("text")
    .text(d => {
      return d.country;
    })
    .attr("x", d => {
      return x(d.totalOutput) + 8;
    })
    .attr("y", d => {
      return y(d.renewablePercent) + 4;
    });

  // Axis ticks
  let xAxis = g =>
    g.attr("transform", `translate(0,${height})`).call(d3.axisBottom(x));

  // let yAxis = g =>
  //   g
  //     .attr("transform", `translate(${margin},0)`)
  //     .call(d3.axisLeft(y))
  //     .attr("id", "xAxis");

  graph.append("g").call(xAxis);
  // graph.append("g").call(yAxis);
};

// //Pattern injection
// var defs = svg.append("defs");
// var pattern = defs
//   .append("pattern")
//   .attr({
//     id: "hash4_4",
//     width: "8",
//     height: "8",
//     patternUnits: "userSpaceOnUse",
//     patternTransform: "rotate(-45)"
//   })
//   .append("rect")
//   .attr({
//     width: "4",
//     height: "8",
//     transform: "translate(0,0)",
//     fill: "#88AAEE"
//   });

// //Shape design
// svg
//   .append("g")
//   .attr("id", "shape")
//   .append("circle")
//   .attr({ cx: "60", cy: "60", r: "50", fill: "url(#hash4_4)" });

// d3.select("body")
//   .append("div")
//   .attr("class", "block");
// .style("background-color", d => (d < 5 ? "#FE4A49" : "#CCCCCC"));
