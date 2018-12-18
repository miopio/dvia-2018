// ----------------------------------------------------------------------------
// This is the part where the D3 Graph will be drawn – Income Share
// ----------------------------------------------------------------------------

let d3USTaxShareRel = new D3Template(d3.select('#us').select('#tax-share-relation'), 240, 800, 45, 70, 30, 30)

d3USTaxShareRel.svg.style('opacity', '1')

// ----------------------------------------------------------------------------
// x axis

let usCreateAxesTaxShareRel = () => {

  let tomorrow = new Date("2015");
  tomorrow.setDate(tomorrow.getDate() + 1);
  d3USTaxShareRel['xScale'] = d3.scaleTime()
    .domain([new Date("2006"), tomorrow])
    .range([0, d3USTaxShareRel.w])

  d3USTaxShareRel.xAxisCont.append("g").attr('class', 'axis')
      .call(d3.axisBottom(d3USTaxShareRel.xScale).ticks(d3.timeYear));

  d3USTaxShareRel.xAxisCont.selectAll(".tick text")
    .attr("y", function(d,i){
        if(i%3 != 0) d3.select(this).remove();
        return 12;
    });

  d3USTaxShareRel.xAxisCont.selectAll('.tick line')
    .attr("y2", function(d,i) {
      if (i % 3 == 0) {
        return 8;
      } else {
        return 4;
      }
    });

  d3USTaxShareRel.xAxisCont.append('text')
    .text('Year')
    .attr('x', `${d3USTaxShareRel.w+20}`)
    .attr('y', `${20}`)

// ----------------------------------------------------------------------------
// y Axis

  d3USTaxShareRel['yScale'] = d3.scaleTime()
    .domain([0, 100])
    .range([0, -d3USTaxShareRel.h])

  d3USTaxShareRel.yAxisCont.append("g").attr('class', 'axis')
    .call(d3.axisLeft(d3USTaxShareRel.yScale).ticks(0).tickFormat(d3.format(".2s")));

  d3USTaxShareRel.yAxisCont.append('text')
    .text('Income taxes share in %')
    .attr('x', `${0}`)
    .attr('y', `${-d3USTaxShareRel.h-12}`)

} // createAxes ----------------------------------------------------------------

afterDataLoadArr.push(usCreateAxesTaxShareRel)

const usUpdateTaxShareRel = () => {
  for (var i = 3; i < 14; i++) {
    usUpdateTaxShareRelGraph(i, 1);
  }
}

const usUpdateTaxShareRelGraph = (share, indicator) => {

  const linesCont = d3USTaxShareRel.data.append('g').attr('id', 'linesCont');
  const areaCont = d3USTaxShareRel.data.append('g').attr('id', 'areaCont');
  const labelCont = d3USTaxShareRel.data.append('g').attr('id', 'labelCont');

  const myLineData = data.us.minMaxShares[share].indicators[indicator].years;
  let myRelativeFactor;

  let valueline = d3.line()
    .x(function(d) { return d3USTaxShareRel.xScale(new Date(d.year)); })
    .y(function(d, i) {
      myRelativeFactor = parseFloat(data.us.minMaxShares[14].indicators[2].years[i].value)/100;
      // console.log(i, d.value, myRelativeFactor);
      return d3USTaxShareRel.yScale(d.value*myRelativeFactor);
    });

  let area = d3.area()
    .x(function(d) { return d3USTaxShareRel.xScale(new Date(d.year)); })
    .y0(0)
    .y1(function(d, i) {
      myRelativeFactor = parseFloat(data.us.minMaxShares[14].indicators[2].years[i].value)/100;
      // console.log(i, d.value, myRelativeFactor);
      return d3USTaxShareRel.yScale(d.value*myRelativeFactor);
    });

  function myColors() {
    if (share == 14) {
      return 'black'
    } else if (share >= 11 && share < 14) {
      return d3.schemeOranges[5][share-9];
    } else if (share >= 6 && share < 11) {
      return d3.schemeBlues[8][share-3];
    } else if (share >= 3 && share < 6) {
      return d3.schemeGreens[5][share-2]
    } else if (share >= 0 && share < 3) {
      return d3.schemePurples[4][2-share+1]
    } else {
      return 'black'
    }
  }

  linesCont.append("path")
    .attr("class", "dataLine")
    .attr("d", valueline(myLineData))
    .attr('stroke', d3.color(myColors()).darker(0.1))
    .attr('stroke-width', function() {
      if (share == 14) {
        return 3;
      } else {
        return 2;
      }
    })
    .attr('fill', 'none')

  areaCont.append("path")
      .attr("class", "area")
      .attr("d", area(myLineData))
      .attr('fill', d3.color(myColors()).brighter(0.1))
  if (share == 3 || share == 5 || share == 10 || share == 13) {
  labelCont.append('text')
    .attr("class", "label")
    .attr('x', function() { return d3USTaxShareRel.w+4})
    .attr('y', function() { return d3USTaxShareRel.yScale(data.us.minMaxShares[share].indicators[indicator].years[9].value)*myRelativeFactor+10; })
    .text(function() { return `${data.us.minMaxShares[share].name}` })
    .attr('fill', myColors())
  }
}
afterDataLoadArr.push(usUpdateTaxShareRel)

const usUpdateTaxShareRelTotal = () => {

  const linesCont = d3USTaxShareRel.data.append('g').attr('id', 'linesCont');
  const labelCont = d3USTaxShareRel.data.append('g').attr('id', 'labelCont');

  const myLineData = data.us.minMaxShares[14].indicators[2].years;

  let valueline = d3.line()
    .x(function(d) { return d3USTaxShareRel.xScale(new Date(d.year)); })
    .y(function(d, i) { return d3USTaxShareRel.yScale(d.value); });


  linesCont.append("path")
    .attr("class", "dataLine")
    .attr("d", valueline(myLineData))
    .attr('stroke', 'black')
    .attr('stroke-width', 3)
    .attr('stroke-dasharray', '12  3')
    .attr('fill', 'none')


  let totalTaxIncome = labelCont.append('text')
    .attr("class", "label")
    .attr('x', function() { return d3USTaxShareRel.w+4})
    .attr('y', function() { return d3USTaxShareRel.yScale(data.us.minMaxShares[14].indicators[2].years[9].value)-30; })
    .attr('fill', 'black')
    .style('font-weight', 'bold')

  totalTaxIncome.append('tspan')
      .text('Total')
    .append('tspan')
      .attr('dy', '14px')
      .attr('x', function() { return d3USIncShare.w+4; })
      .text('taxes')
    .append('tspan')
      .attr('dy', '14px')
      .attr('x', function() { return d3USIncShare.w+4; })
      .text('paid')

    //.text('Total Taxed Income')
  // --------------------------------------------------------------------------
  // Top line total income
  // --------------------------------------------------------------------------

  linesCont.append('line')
        .attr('x1', '0')
        .attr('y1', `${-d3USTaxShareRel.h}`)
        .attr('x2', `${d3USTaxShareRel.w}`)
        .attr('y2', `${-d3USTaxShareRel.h}`)
        .attr('stroke', 'black')
        .attr('stroke-width', 4)
        .attr('fill', 'none')
        .attr("class", "dataLine")

  let totalIncome = labelCont.append('text')
    .attr("class", "label")
    .attr('x', function() { return d3USTaxShareRel.w+4})
    .attr('y', function() { return -d3USTaxShareRel.h-12; })
    .attr('fill', 'black')
    .style('font-weight', 'bold')


  totalIncome.append('tspan')
      .text('Total')
    .append('tspan')
      .attr('dy', '14px')
      .attr('x', function() { return d3USIncShare.w+4; })
      .text('income')
// ----------------------------------------------------------------------------
// Untaxed Income
// ----------------------------------------------------------------------------

  let untaxedIncome = labelCont.append('text')
      .attr("class", "label")
      .attr('x', function() { return d3USTaxShareRel.w/2})
      .attr('y', function() { return d3USTaxShareRel.yScale(62); })
      .attr('fill', 'black')
      .attr('text-anchor', 'middle')
      .style('font-weight', 'bold')

  untaxedIncome.append('tspan')
      .text('Income')
    .append('tspan')
      .attr('dy', '14px')
      .attr('x', function() { return d3USTaxShareRel.w/2; })
      .text('after')
    .append('tspan')
      .attr('dy', '14px')
      .attr('x', function() { return d3USTaxShareRel.w/2; })
      .text('taxes')
}
afterDataLoadArr.push(usUpdateTaxShareRelTotal)
