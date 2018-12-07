Promise.all([
  d3.csv('WEALTH_28112018160834746.csv'),
  d3.csv('IDD_28112018160641351.csv')
])
.then(([wealth, income]) => {
  wealth = wealth.filter(x => x.COUNTRY == 'USA' && x.VAR == 'ST10');
  income = income.filter(x => x.LOCATION == 'USA');
  ginib = income.filter(x => x.MEASURE == 'GINIB' && x.METHODO == "METH2012" && x.AGE == "TOT");
  gini = income.filter(x => x.MEASURE == 'GINI' && x.METHODO == "METH2012" && x.AGE == "TOT");
  ginibArr = ginib.map((x) => {
    const time = x.TIME
    const value = x.Value
    return [time, value]
  })
  giniArr = gini.map((x) => {
    const time = x.TIME
    const value = x.Value
    return [time, value]
  })
  console.log(ginibArr);
  console.log(giniArr);
  updateGraph(ginibArr, "#ginib", "USA Gini Index before taxes and social welfare", "ginib");
  updateGraph(giniArr, "#gini", "USA Gini Index after taxes and social welfare", "ginib");
});



function updateGraph(data, selection, label, indicator) {

  d3.select(selection).select('svg').remove();

  const margin = {top: 40, right: 100, bottom: 40, left: 40};
  let w = 680 - margin.left - margin.right;
  let h = 500 - margin.top - margin.bottom;

  let graph = d3.select(selection)
  .append('svg')
    .attr('width', w + margin.left + margin.right)
    .attr('height', h + margin.top + margin.bottom)
    .style('opacity', 0)

  let appendGroupTo = (name, appendTo) => {
      return appendTo
        .append('g')
          .attr('id', name)
  }

  let appendGroupClassTo = (name, appendTo) => {
    return appendTo
      .append('g')
        .attr('class', name)
  }

  let mContainer = appendGroupTo('mContainer', graph)

  // Chart branch
  let chart = appendGroupTo('chart', mContainer);
    // Data container
    let dataCont = appendGroupTo('dataCont', chart);
      // indivdual structure per country defined later
    // Axes
    let axes = appendGroupTo('axes', chart);

  // Modal branch
  let modal = appendGroupTo('modal', mContainer);


  mContainer.attr('transform', `translate(${margin.left}, ${h+margin.top})`)

    /* ++++++++++++++++++++++++++++++++++++++ */
    /*                Axes                    */
    /* -------------------------------------- */


  let xScale, xAxis, yScale, yAxis;
  let createAxes = () => {

  // Remove those to general later
  let xAxisCont = appendGroupTo('xAxisCont', axes);
  let yAxisCont = appendGroupTo('yAxisCont', axes);
  // console.log(new Date(data[0][0]))

  // https://stackoverflow.com/questions/3674539/incrementing-a-date-in-javascript
  // https://stackoverflow.com/questions/36561064/last-tick-not-being-displayed-in-d3-charts
  var tomorrow = new Date(data[data.length-1][0]);
  tomorrow.setDate(tomorrow.getDate() + 1);

  xScale = d3.scaleTime()
      .domain([new Date(data[0][0]), tomorrow])
      .range([0, w])
  xAxis = d3.axisBottom(xScale)

  xAxisCont.append("g").attr('class', 'axis')
      .call(xAxis.ticks(2));

  var max = d3.max(data.map(x => parseFloat(x[1])));
  yScale = d3.scaleLinear()
    .domain([0.38, 0.55])
    .range([0, -h])
    .nice()
  // Adjust to specific scale
  yAxis = d3.axisLeft(yScale)
  yAxisCont.append("g").attr('class', 'axis')
      .call(yAxis.ticks(8).tickFormat(d3.format(".3")));

  yAxisCont.selectAll('.tick')
    .filter(function(d, i,list) {
      return i === list.length - 1;
    })
    .select('text')
    .style('font-weight','bold')
    .style('font-size','12px');

  // https://bl.ocks.org/d3noob/23e42c8f67210ac6c678db2cd07a747e
  xAxisCont.append("text").attr('class', 'label')
      .attr("transform",
            "translate(" + (w + 30) + " ," +
                           (margin.bottom - 40) + ")")
      .style("text-anchor", "middle")
      .text("Year");

  yAxisCont.append("text").attr('class', 'label')
      .attr("y", `${-h - 10}`)
      .attr("x", `${0}`)
      .text(`${label}`);
  }
  createAxes()

let svg = () => {

  // g Container for each country!
  let countryCont = dataCont.append('g')
      .attr('id', indicator)
      .attr('class', 'countryCont');

    let scatterplotCont = appendGroupClassTo('scatterplotCont', countryCont);
    let lineCont = appendGroupClassTo('lineCont', countryCont);

  let myColor;
  // console.log(selection)
  if (selection == '#svg-graph-1') {
    myColor = d3.rgb(254, 178, 76);
  } else {
    myColor = d3.rgb(0,0,0);
  }


  // Add the scatterplotCont http://bl.ocks.org/d3noob/38744a17f9c0141bcd04
  scatterplotCont.selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
        .attr("r", 2.5)
        .attr("cx", function(d) {
          return xScale(new Date(d[0]));
        })
        .attr("cy", function(d) {
          return yScale(d[1]);

        })
        .attr('fill', myColor)
        .attr("class", function(d) {
          return `circle-${indicator}`
        })

  // Add the line
  let valueline = d3.line()
    .x(function(d) { return xScale(new Date(d[0])); })
    .y(function(d) { return yScale(d[1]); });

  lineCont.append("path")
    .attr("class", "dataLine")
    .attr("class", function(d) {
      return `line-${indicator}`
    })
    .attr("d", valueline(data))
    .attr('stroke', myColor)
    .attr('stroke-width', 2)
    .attr('fill', 'none')

    lineCont.append("path")
      .attr("class", "selectLine")
      .attr('fill', 'none')
      .attr("d", valueline(data))
      .attr('stroke', 'rgba(0,0,0,0)')
      .attr('stroke-width', 9)

      // d3.select(selection).select('svg')
      graph.transition(500).delay(500).style('opacity', 1.0);
}
svg(data);
}
