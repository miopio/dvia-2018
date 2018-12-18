// ----------------------------------------------------------------------------
// This is the Data codeblock: restructuring the WID data for india
// ----------------------------------------------------------------------------

const restructreWIDData = (arr) => {
  let restructredData = {};

  // Filter by percentiles (2x top, middle, bottom) and make an array for each.
  percentiles = [
    ['top1', 'p99p100'],
    ['top10', 'p90p100'],
    ['bottom50', 'p0p50'],
    ['middle40', 'p50p90'],
  ];

  percentiles.forEach((p, i) => {
    restructredData[p[0]] = data.india[arr].filter(e => e.percentile==p[1] && e.share != '');
    restructredData[p[0]] = restructredData[p[0]].map((e) => {
      let resObj = {"year": parseInt(e.year), "share": parseFloat(e.share)*100}
      return resObj;
    });
  })
  data.india[arr] = restructredData;
}

const restructreIndiaData = () => {
  for (var key in data.india) {
    // console.log(key);
    restructreWIDData(key);
  }
}

afterDataLoadArr.push(restructreIndiaData)

// ----------------------------------------------------------------------------
// This is the part where the D3 Graph will be drawn
// ----------------------------------------------------------------------------

let d3India = new D3Template(d3.select('#india').select('#graph'), 500, 500, 30, 30, 30, 30)

d3India.svg.style('opacity', '1')

let createAxes = () => {
// If the range of years varies use min and max
// const max = d3.max(data.india.income, function(d) { return +d.year;});
// console.log(max);

// ----------------------------------------------------------------------------
// x axis

  let tomorrow = new Date("2015");
  tomorrow.setDate(tomorrow.getDate() + 1);
  d3India['xScale'] = d3.scaleTime()
    .domain([new Date("1961"), tomorrow])
    .range([0, d3India.w])

  d3India.xAxisCont.append("g").attr('class', 'axis')
      .call(d3.axisBottom(d3India.xScale).ticks(d3.timeYear));

  d3India.xAxisCont.selectAll(".tick text")
    .attr("y", function(d,i){
        if(i%10 != 0) d3.select(this).remove();
        return 12;
    });

  d3India.xAxisCont.selectAll('.tick line')
    .attr("y2", function(d,i) {
      if (i % 5 == 0) {
        return 8;
      } else {
        return 4;
      }
    });

  d3India.xAxisCont.append('text')
    .text('Year')
    .attr('x', `${d3India.w+4}`)
    .attr('y', `${-4}`)

// ----------------------------------------------------------------------------
// y Axis

  d3India['yScale'] = d3.scaleTime()
    .domain([0, 70])
    .range([0, -d3India.h])

  d3India.yAxisCont.append("g").attr('class', 'axis')
    .call(d3.axisLeft(d3India.yScale).ticks(8).tickFormat(d3.format(".2s")));

  d3India.yAxisCont.append('text')
    .text('Share of Wealth or Income in %')
    .attr('x', `${4}`)
    .attr('y', `${-d3India.h-4}`)

} // createAxes ----------------------------------------------------------------
afterDataLoadArr.push(createAxes)

const updateIndiaData = (wealthOrIncome, percentile) => {
  const percentileArr = ['bottom50', 'middle40', 'top10', 'top1'];
  percentileArr.reverse();
  const myData = data.india[wealthOrIncome][percentile].map((e, i) => {
    return [e.year.toString(), e.share];
  });

  if ( d3India.data.select(`#${wealthOrIncome}${percentile}`).empty()) {
    // console.log('happened');
    const myIndicatorPercentileContainer = d3India.data.append('g').attr('id', `${wealthOrIncome}${percentile}`).style('opacity', 0)
    // console.log(linesCont);
    const myLineData = myData;
    // Object.values(data.india.income.top10);

    function myColor() {
      // console.log(wealthOrIncome)
      if (wealthOrIncome == 'wealth') {
        return d3.schemeBrBG[11][1+percentileArr.indexOf(percentile)];
      } else {
        return d3.schemeBrBG[11][9-percentileArr.indexOf(percentile)];
      }
    }
    let valueline = d3.line()
      .x(function(d) { return d3India.xScale(new Date(d[0])); })
      .y(function(d) { return d3India.yScale(d[1]); });

    myIndicatorPercentileContainer.append("path")
      .attr("class", "dataLine")
      // .attr("class", function(d) {
      //   return `line-${indicator}`
      // })
      .attr("d", valueline(myLineData))
      .attr('stroke', myColor())
      .attr('stroke-width', 2)
      .attr('fill', 'none')

    myIndicatorPercentileContainer.selectAll('circle')
      .data(myData)
      .enter()
      .append('circle')
      .attr('cx', function(d) { return d3India.xScale(new Date(d[0])); })
      .attr('cy', function(d) { return d3India.yScale(d[1]); })
      .attr('r', 3)
      .attr('fill', myColor())
      .attr('stroke', 'none')

      myIndicatorPercentileContainer.transition().duration(500).style('opacity', 1)
  } else {
    const mySelection = d3.select(`#${wealthOrIncome}${percentile}`)
    const myOpacity = mySelection.style('opacity')
    if (myOpacity > 0) {
      mySelection.transition().duration(500).style('opacity', 0)
    } else if (myOpacity < 1) {
      mySelection.transition().duration(500).style('opacity', 1)
    }
  }

}

const toggleIndia = () => {

  const labelArr = ['Top 1%', 'Top 10%', 'Middle 40%', 'Bottom 50%'];
  const indicatorArr = ['top1', 'top10', 'middle40', 'bottom50']
  const iOrW = ['wealth', 'income'];

  labelArr.forEach((e, i) => {
    iOrW.forEach((iw, j) => {
      d3.select('#india').select('.legend').select(`.${iw}`)
          .append('div')
          .classed('active', false)
          .classed('legend-button', true)
          .attr('id', `${iw}${indicatorArr[i]}`)
          .style('background', '#777')
          .on('click', function() {
            if (d3.select(this).classed('active')) {
              d3.select(this).classed('active', false)
                .transition()
                .duration(500)
                .style('background', '#777')
                updateIndiaData(`${iw}`, `${indicatorArr[i]}`);
            } else {
              d3.select(this).classed('active', true)
                .transition()
                .duration(500)
                .style('background', function() {
                  if (iw == 'wealth') {
                    return d3.schemeBrBG[11][1+i]
                  } else {
                    return d3.schemeBrBG[11][9-i]
                  }
                })
                updateIndiaData(`${iw}`, `${indicatorArr[i]}`)
            }

          })
          .text(`${e}`)
        })
    })
}

const initIndia = () => {
  d3.select(`#wealthtop10`).dispatch("click");
}

afterDataLoadArr.push(toggleIndia)
afterDataLoadArr.push(initIndia);


/*
var max = d3.max(data.map(x => parseFloat(x[1])));
yScale = d3.scaleLinear()
  .domain([0, max+1])
  .range([0, -h])
  .nice()
// Adjust to specific scale
yAxis = d3.axisLeft(yScale)
yAxisCont.append("g").attr('class', 'axis')
    .call(yAxis.ticks(8).tickFormat(d3.format(".2s")));
*/
// var max = d3.max(data, function(d) { return +d.field_goal_attempts;} );
