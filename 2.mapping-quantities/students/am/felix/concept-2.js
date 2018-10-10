/*
TODO:
1. Interactive scale
*/
// Constants
const testScale = 1.65;
const h = 1620
const w = 840
const decenterTimeline = 2.64

// d3
d3.json('data/all.json')

.then((data) => {
  console.log(data);
  var margin = {top: 20, right: 165, bottom: 20, left: 95},
    width = h - margin.left - margin.right,
    height = w - margin.top - margin.bottom;

  const yStartUnderground = height/decenterTimeline+10;
  const yStartAtmospheric = height/decenterTimeline-20;

  // Set the svg and a rect around it
  var svg = d3.select('#chart').append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)

  svg.append('rect').classed('svg-bg', true)
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', h)
    .attr('height', w)

  svg = svg.append('g').classed('transform', true)
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  // Legend
  let legend = svg.append('g').classed('legend', true);

  legend.append('text')
    .text('Number of Underground Tests')
    .attr('text-anchor', 'middle')
      .attr('x', -50)
      .attr('y', ((yStartUnderground)+(275*testScale)/2))
      .attr('transform', (d,i) => {
        let a = -90;
        let x = -50;
        let y = ((yStartUnderground)+(275*testScale)/2)
        return `rotate(${a}, ${x}, ${y})`;
      })


  legend.append('text')
    .text('Number of Atmospheric Tests')
    .attr('text-anchor', 'middle')
      .attr('x', -50)
      .attr('y', ((yStartAtmospheric)-(150*testScale)/2))
      .attr('transform', (d,i) => {
        let a = -90;
        let x = -50;
        let y = ((yStartAtmospheric)-(150*testScale)/2)
        return `rotate(${a}, ${x}, ${y})`;
      })

  /*
  legend.append('text')
    .text('Number of Tests')
    .attr('text-anchor', 'middle')
      .attr('x', -50)
      .attr('y', height/decenterTimeline)
      .attr('transform', (d,i) => {
        let a = -90;
        let x = -70;
        let y = height/decenterTimeline
        return `rotate(${a}, ${x}, ${y})`;
      })
  */

  let colorLegend = legend.append('g').classed('colorLegend', true);

  colorLegend.selectAll('text')
    .data(data.countries)
    .enter()
    .append('text')
      .text((d,i) => {
        console.log(d[i]);
        return d;
      })
      .attr('x', width+20+15)
      .attr('y', (d, i) => {
        return 10+i*20+10
      })



  colorLegend.selectAll('rect')
    .data(data.countries)
    .enter()
    .append('rect')
      .attr('class', (d,i) => {
        return camelize(d);
      })
      .attr('x', width+20)
      .attr('y', (d, i) => {
        return 10+i*20
      })
      .attr('width', 10)
      .attr('height', 10)


  // Timeline
  let timeline = legend.append('g').classed('timeline', true);

  let hLinesT = timeline.append('g').classed('hLines', true)
    hLinesT.append('line')
      .attr('x1', 0)
      .attr('x2', width)
      .attr('y1', yStartAtmospheric)
      .attr('y2', yStartAtmospheric)

    hLinesT.append('line')
      .attr('x1', 0)
      .attr('x2', width)
      .attr('y1', yStartUnderground)
      .attr('y2', yStartUnderground)

  timeline.append('g').classed('text', true)
    .selectAll('text')
    .data(data.years.filter((element, i) => {
      if (i % 5 == 0) {
        return element;
      }
    }))
    .enter()
    .append('text')
      .text((d, i) => {
          return `${d.year} – ${d.year+5 == 2020 ? 2017 : d.year+5}`;
      })
      .attr('x', (d, i) => {
        return 13+i*(width/15);
      })
      .attr('y', height/decenterTimeline)

    let vLines = timeline.append('g').classed('vLines', true)
    for (var i = 0; i < 16; i++) {
      vLines.append('line')
          .attr('x1', () => {
            return i*((width)/15);
          })
          .attr('x2', () => {
            return i*((width)/15);
          })
          .attr('y1', height/decenterTimeline-30)
          .attr('y2', yStartAtmospheric)
      vLines.append('line')
          .attr('x1', () => {
            return i*((width)/15);
          })
          .attr('x2', () => {
            return i*((width)/15);
          })
          .attr('y1', yStartUnderground)
          .attr('y2', height/decenterTimeline+20)
    }


    // Y-Axis
    let yAxis = legend.append('g').classed('yAxis', true);

    // Underground
    yAxis.append('g').classed('yLineSub', true)
      .append('line')
      .attr('x1', 0)
      .attr('x2', 0)
      .attr('y1', yStartUnderground)
      .attr('y2', (yStartUnderground)+(290*testScale))

    yTicks = yAxis.append('g').classed('yTicksSub', true)

    for (var i = 0; i <= 11; i++) {
      // Ticks
      d3.select('.yTicksSub')
        .append('line')
          .attr('x1', -4)
          .attr('x2', 4)
          .attr('y1', (yStartUnderground)+(275/11*i*testScale))
          .attr('y2', (yStartUnderground)+(275/11*i*testScale))

      // Grid
      d3.select('.yTicksSub')
        .append('line')
          .attr('x1', 4)
          .attr('x2', width)
          .attr('y1', (yStartUnderground)+(275/11*i*testScale))
          .attr('y2', (yStartUnderground)+(275/11*i*testScale))
          .attr('stroke', '#ddd')
          .attr('stroke-dasharray', 2)

      // Scale
      d3.select('.yTicksSub')
        .append('text')
          .text(() => {
            return i*25;
          })
          .attr('x', -10)
          .attr('y', yStartUnderground+(275/11*i*testScale+4))
          .attr('text-anchor', 'end')
    }
    // Atmospheric
    yAxis.append('g').classed('yLineAtmos', true)
      .append('line')
      .attr('x1', 0)
      .attr('x2', 0)
      .attr('y1', yStartAtmospheric)
      .attr('y2', (yStartAtmospheric)-(165*testScale))

    yTicks = yAxis.append('g').classed('yTicksAtmos', true)

    for (var i = 0; i <= 6; i++) {
      // Ticks
      d3.select('.yTicksAtmos')
        .append('line')
          .attr('x1', -4)
          .attr('x2', 4)
          .attr('y1', (yStartAtmospheric)-(150/6*i*testScale))
          .attr('y2', (yStartAtmospheric)-(150/6*i*testScale))

      // Grid
      d3.select('.yTicksAtmos')
        .append('line')
          .attr('x1', 4)
          .attr('x2', width)
          .attr('y1', (yStartAtmospheric)-(150/6*i*testScale))
          .attr('y2', (yStartAtmospheric)-(150/6*i*testScale))
          .attr('stroke', '#ddd')
          .attr('stroke-dasharray', 2)

      // Scale
      d3.select('.yTicksAtmos')
        .append('text')
          .text(() => {
            return i*25;
          })
          .attr('x', -10)
          .attr('y', (yStartAtmospheric)-(150/6*i*testScale-4))
          .attr('text-anchor', 'end')
    }

  // New arryay with all the stuff every five years
  let dataEveryFiveYears = [];

  for (var i = 0; i < data.years.length; i++) {
    if (i % 5 == 0) {
      dataEveryFiveYears.push(data.years[i]);
    }
  }

  let myCounter = -1;
  for (var i = 0; i < data.years.length; i++) {
    if (i % 5 == 0) {
      myCounter++
    }
    // Each country
    for (var country in data.years[i].details) {
      for (var type in dataEveryFiveYears[myCounter].details[country]) {
        dataEveryFiveYears[myCounter].details[country][type] += data.years[i].details[country][type];
      }
    }
    // Total
    for (var type in data.years[i].total) {
      dataEveryFiveYears[myCounter].total[type] += data.years[i].total[type];
    }
  }
  console.log(dataEveryFiveYears);

  // DATASET
  let dataset = svg.append('g').classed('dataset', true);

  let createCountryBars = (country, position) => {
    myClassNameSelector = dataset.append('g').classed(camelize(country), true);
    myClassNameSelector.append('g').classed('underground', true)
      .selectAll('g')
      .data(dataEveryFiveYears)
      .enter()
      .append('g')
      .append('rect')
        .attr('x', (d, i) => {
          return 5+10*position+i*(width/15);
        })
        .attr('y', yStartUnderground)
        .attr('width', 9)
        .attr('height', (d) => {
          return d.details[country].underground*testScale;
        })

    myClassNameSelector.append('g').classed('atmospheric', true)
      .selectAll('g')
      .data(dataEveryFiveYears)
      .enter()
      .append('rect')
        .attr('x', (d, i) => {
          return 5+10*position+i*(width/15);
        })
        .attr('y', (d) => {
          return yStartAtmospheric-d.details[country].atmospheric*testScale
        })
        .attr('width', 9)
        .attr('height', (d) => {
          return d.details[country].atmospheric*testScale;
        })
      }
  data.countries.forEach((element, i) => {
    createCountryBars(element, i);
  })
})

//Camelize: https://stackoverflow.com/questions/2970525/converting-any-string-into-camel-case
function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
    return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
  }).replace(/\s+/g, '');
}

// dataEveryFiveYears[counter].details['United States'].tests += data.years[i].details['United States'].tests
/*
data.years[data.years.length-1].details['United States'].tests += data.years[i].details['United States'].tests
console.log(data.years[data.years.length-1].details['United States']);
for (var element in data.years[i].details) {
}
*/
