/*
TODO:
1. Fix the country head row to the top of the page
2. Scale
3. Only every two years
*/
d3.json('data/all.json')

.then((data) => {
  console.log(data);
  const startY = 100;
  const rowHeight = 50;
  const startX = 100;
  const columnWidth = 60;
  const radiusScale = 10;
  const hLineStart = 50;
  const dash = '3';

  // MARGIN
  // const margin = {top: 20, right: 20, bottom: 20, left: 20},
      width = startX+columnWidth*data.countries.length;
      height = startY+rowHeight*data.years.length;

  let svg = d3.select('#content').append('svg')
      .attr('width', width)
      .attr('height', height);

  // Horizontal lines
  let hLines = svg.append('g').classed('hLines', true);
  hLines.selectAll('line')
      .data(data.years)
      .enter()
      .append('line')
      .attr('x1', hLineStart)
      .attr('x2', hLineStart+columnWidth*8.5)
      .attr('y1', (d, i) => {
        return i*rowHeight+startY;
      })
      .attr('y2', (d, i) => {
        return i*rowHeight+startY;
      })
      .attr('stroke', 'white')
      .attr('stroke-dasharray', dash)

  // Vertical lines
  let vLines = svg.append('g').classed('vLines', true);
  vLines.selectAll('line')
      .data(data.countries)
      .enter()
      .append('line')
      .attr('x1', (d, i) => {
        return startX+i*columnWidth;
      })
      .attr('x2', (d, i) => {
        return startX+i*columnWidth;
      })
      .attr('y1', startY-20)
      .attr('y2', height)
      .attr('stroke', 'white')
      .attr('stroke-dasharray', dash)

  // Years
  let legendYear = svg.append('g').classed('years', true);
  legendYear.selectAll('text')
      .data(data.years)
      .enter()
      .append('text')
        .text((d) => {return d.year})
        .attr('x', 20)
        .attr('y', (d,i) => {
          return i*rowHeight+startY+20;
        })
        .attr('transform', (d,i) => {
          let a = -30;
          let x = 18;
          let y = i*rowHeight+startY+x
          return `rotate(${a}, ${x}, ${y})`;
        })

  // Countries
  let legendCountries = svg.append('g').classed('countries', true);
  legendCountries.selectAll('text')
      .data(data.countries)
      .enter()
      .append('text')
        .text((d) => {return d})
        .attr('y', startY-30)
        .attr('x', (d,i) => {
          return i*columnWidth+startX;
        })
        .attr('transform', (d,i) => {
          let a = -30;
          let x = i*columnWidth+startX;
          let y = startY-30
          return `rotate(${a}, ${x}, ${y})`;
        })

  // Circles
  let createCountryCircles = (myClassName, string, position) => {
    myClassNameSelector = svg.append('g').classed(myClassName, true);
    myClassNameSelector.selectAll('g')
        .data(data.years)
        .enter()
        .append('g')
        // .attr('width', (d) => {
        //   return Math.sqrt(d.details[string]['tests']*radiusScale);
        // })
        // .attr('height', (d) => {
        //   return Math.sqrt(d.details[string]['tests']*radiusScale);
        // })
        .attr('x', position)
        .attr('y', (d,i) => {
          return i*rowHeight+startY;
        })
          .append('circle')
          .classed(myClassName, true)
          .attr('cx', position)
          .attr('cy', (d,i) => {
            return i*rowHeight+startY;
          })
          .attr('r', (d) => {
            return Math.sqrt(d.details[string]['tests']*radiusScale);
          })
  }

  data.countries.forEach((element, i) => {
    createCountryCircles(camelize(element), element, startX+ i*columnWidth);
  })



});

//Camelize: https://stackoverflow.com/questions/2970525/converting-any-string-into-camel-case
function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
    return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
  }).replace(/\s+/g, '');
}


/*
var circles = svg.selectAll('circle')
    .data(data)
    .enter()
    .append('rect')

    bars.attr('width', (d) => {
      return d*6;
    })
    .attr('height', (d) => {
      return (600-120)/data[selectedCity].temp.length;
    })
    .attr('y', (d,i) => {
      return i*600/data[selectedCity].temp.length+5;
    })
    .attr('x', 0)
    .attr('fill', (d) => {
      return color(d);
    })
    */
