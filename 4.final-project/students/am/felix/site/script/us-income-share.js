// ----------------------------------------------------------------------------
// This is the part where the D3 Graph will be drawn – Income Share
// ----------------------------------------------------------------------------

let d3USIncShare = new D3Template(d3.select('#us').select('#income-share'), 240, 800, 45, 70, 30, 30)

d3USIncShare.svg.style('opacity', '1')

// ----------------------------------------------------------------------------
// x axis

let usCreateAxesIncShare = () => {



  let tomorrow = new Date("2015");
  tomorrow.setDate(tomorrow.getDate() + 1);
  d3USIncShare['xScale'] = d3.scaleTime()
    .domain([new Date("2006"), tomorrow])
    .range([0, d3USIncShare.w])

  d3USIncShare.xAxisCont.append("g").attr('class', 'axis')
      .call(d3.axisBottom(d3USIncShare.xScale).ticks(d3.timeYear));

  d3USIncShare.xAxisCont.selectAll(".tick text")
    .attr("y", function(d,i){
        if(i%3 != 0) d3.select(this).remove();
        return 12;
    });

  d3USIncShare.xAxisCont.selectAll('.tick line')
    .attr("y2", function(d,i) {
      if (i % 3 == 0) {
        return 8;
      } else {
        return 4;
      }
    });

  d3USIncShare.xAxisCont.append('text')
    .text('Year')
    .attr('x', `${d3USIncShare.w+20}`)
    .attr('y', `${20}`)

// ----------------------------------------------------------------------------
// y Axis

  d3USIncShare['yScale'] = d3.scaleTime()
    .domain([0, 100])
    .range([0, -d3USIncShare.h])

  d3USIncShare.yAxisCont.append("g").attr('class', 'axis')
    .call(d3.axisLeft(d3USIncShare.yScale).ticks(8).tickFormat(d3.format(".2s")));

  d3USIncShare.yAxisCont.append('text')
    .text('Income share in % ')
    .attr('x', `${0}`)
    .attr('y', `${-d3USIncShare.h-12}`)

} // createAxes ----------------------------------------------------------------

afterDataLoadArr.push(usCreateAxesIncShare)

const usUpdateIncShare = () => {
  for (var i = 3; i < 15; i++) {
    usUpdateIncShareGraph(i, 0,);
  }
}

const usUpdateIncShareGraph = (share, indicator) => {

  const linesCont = d3USIncShare.data.append('g').attr('id', 'linesCont');
  const areaCont = d3USIncShare.data.append('g').attr('id', 'areaCont');
  const labelCont = d3USIncShare.data.append('g').attr('id', 'labelCont');

  const myLineData = data.us.minMaxShares[share].indicators[indicator].years;

  var area = d3.area()
    .x(function(d) { return d3USIncShare.xScale(new Date(d.year)); })
    .y0(0)
    .y1(function(d) { return d3USIncShare.yScale(d.value); });

  let valueline = d3.line()
    .x(function(d) { return d3USIncShare.xScale(new Date(d.year)); })
    .y(function(d) { return d3USIncShare.yScale(d.value); });

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
        return 4;
      } else {
        return 2;
      }
    })
    .attr('fill', 'none')

  if (share < 14) {
    areaCont.append("path")
        .attr("class", "area")
        .attr("d", area(myLineData))
        .attr('fill', d3.color(myColors()).brighter(0.1))
  }


  let myText = labelCont.append('text')
    .attr("class", "label")
    .attr('x', function() { return d3USIncShare.w+4})
    .attr('y', function() { return d3USIncShare.yScale(data.us.minMaxShares[share].indicators[indicator].years[9].value)+10; })
    .attr('fill', myColors())

  if (share < 14) {
    myText.text(function() { return `${data.us.minMaxShares[share].name}` })
  } else {
    myText.style('font-weight', 'bold').attr('y', `${-d3USIncShare.h-12}`).append('tspan')
        .text('Total')
      .append('tspan')
        .attr('dy', '14px')
        .attr('x', function() { return d3USIncShare.w+4; })
        .text('income')


  }


}
afterDataLoadArr.push(usUpdateIncShare)
