// ----------------------------------------------------------------------------
// This is the Data codeblock: restructuring the WID data for US
// ----------------------------------------------------------------------------

function reMapUsData() {
  let usData = [];

  let myIndicators = [];
  for (var indicator in data.us) {
    let indicatorArr = [];
    data.us[indicator].forEach((e, i) => {
      // console.log(e.share);
      let yearArr = Object.entries(e);
      yearArr = yearArr.filter( x => x[0] != 'share' )
      yearArr = yearArr.map( x => {
        // console.log(x)
        return {'year': x[0], 'value': x[1]}
      })
      let myShareObj = {'share': e.share};
      myShareObj['years'] = yearArr; // years or indicator?
      myIndicatorObj = {'shares': myShareObj}
      myIndicatorObj['indicator'] = indicator;
      indicatorArr.push(myShareObj);
    })
    myIndicators.push(indicatorArr);
  }

  myIndicators[0].forEach((e, i) => {
    myIndicators[0][i] = {'share': e.share, 'avgIncomeTaxRate': myIndicators[0][i], 'incomeShare': myIndicators[1][i], 'incomeTaxShare': myIndicators[2][i]};
  })

  usData = myIndicators[0]
  usData = usData.map((x, i) => {
    for (var indicator in x) {
      // console.log(x, indicator)
      delete x[indicator].share;
      x[indicator]['name'] = indicator;
    }
    return x;
  })
  usData = usData.map((x, i) => {
    let myObj = {'share': x.share}
    const myIndicatorArr = [x.incomeShare, x.incomeTaxShare, x.avgIncomeTaxRate]
    myObj['indicators'] = myIndicatorArr;
    const lastChar = x.share.substr(-1);
    const percentage = x.share.slice(0, -1);
    if (lastChar == 't') {
      myObj['start'] = 100 - parseFloat(percentage);
      myObj['end'] = 100;
      myObj['name'] = `Top ${percentage}%`;
    } else if (lastChar == 'b') {
      myObj['start'] = 0;
      myObj['end'] = parseFloat(percentage);
      myObj['name'] = `Bottom ${percentage}%`;
    } else {
      myObj['start'] = 0;
      myObj['end'] = 100;
      myObj['name'] = 'Total';
    }
    return myObj;
  })

  usData = usData.reverse()
  const removeValFromIndex = [1,2,6,7,9];
  for (var i = removeValFromIndex.length -1; i >= 0; i--) usData.splice(removeValFromIndex[i],1);

  data.us = {};
  data.us['minMaxShares'] = usData;



} // reMapUsData

afterDataLoadArr.push(reMapUsData)

// ----------------------------------------------------------------------------
// This is the part where the D3 Graph will be drawn – AVG TAX
// ----------------------------------------------------------------------------

let d3USAvgTax = new D3Template(d3.select('#us').select('#taxes'), 550, 800, 30, 70, 30, 30)

d3USAvgTax.svg.style('opacity', '1')

// ----------------------------------------------------------------------------
// x axis

let usCreateAxesAvgTax = () => {

  let tomorrow = new Date("2015");
  tomorrow.setDate(tomorrow.getDate() + 1);
  d3USAvgTax['xScale'] = d3.scaleTime()
    .domain([new Date("2006"), tomorrow])
    .range([0, d3USAvgTax.w])

  d3USAvgTax.xAxisCont.append("g").attr('class', 'axis')
      .call(d3.axisBottom(d3USAvgTax.xScale).ticks(d3.timeYear));

  d3USAvgTax.xAxisCont.selectAll(".tick text")
    .attr("y", function(d,i){
        if(i%3 != 0) d3.select(this).remove();
        return 12;
    });

  d3USAvgTax.xAxisCont.selectAll('.tick line')
    .attr("y2", function(d,i) {
      if (i % 3 == 0) {
        return 8;
      } else {
        return 4;
      }
    });

  d3USAvgTax.xAxisCont.append('text')
    .text('Year')
    .attr('x', `${d3USAvgTax.w+20}`)
    .attr('y', `${20}`)

// ----------------------------------------------------------------------------
// y Axis

  d3USAvgTax['yScale'] = d3.scaleTime()
    .domain([0, 30])
    .range([0, -d3USAvgTax.h])

  d3USAvgTax.yAxisCont.append("g").attr('class', 'axis')
    .call(d3.axisLeft(d3USAvgTax.yScale).ticks(8).tickFormat(d3.format(".2s")));

  d3USAvgTax.yAxisCont.append('text')
    .text('Average income tax rate in %')
    .attr('x', `${0}`)
    .attr('y', `${-d3USAvgTax.h-12}`)

} // createAxes ----------------------------------------------------------------

afterDataLoadArr.push(usCreateAxesAvgTax)

const usUpdateAvgTax = () => {
  for (var i = 0; i < 15; i++) {
    usUpdateAvgTaxGraph(i, 2,);
  }
}

const usUpdateAvgTaxGraph = (share, indicator) => {

  const linesCont = d3USAvgTax.data.append('g').attr('id', 'linesCont');
  const labelCont = d3USAvgTax.data.append('g').attr('id', 'labelCont');

  const myLineData = data.us.minMaxShares[share].indicators[indicator].years;

  let valueline = d3.line()
    .x(function(d) { return d3USAvgTax.xScale(new Date(d.year)); })
    .y(function(d) { return d3USAvgTax.yScale(d.value); });

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
    .attr('stroke', myColors())
    .attr('stroke-width', function() {
      if (share == 14) {
        return 4;
      } else {
        return 2;
      }
    })
    .attr('fill', 'none')

  let myText = labelCont.append('text')
    .attr("class", "label")
    // .style('font-size', '10px')
    .attr('x', function() { return d3USAvgTax.w+4})
    .attr('y', function() { return d3USAvgTax.yScale(data.us.minMaxShares[share].indicators[indicator].years[9].value)+3; })
    .text(function() { return `${data.us.minMaxShares[share].name}` })
    .attr('fill', myColors())

  if (share == 14) {
    myText.attr('font-weight', 'bold')
  }


}
afterDataLoadArr.push(usUpdateAvgTax)
