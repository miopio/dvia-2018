const skyscraper = (myClass, bottomPercent, bPercentile) => {

  // console.log(topPercent);
  const barWidth = 40;
  const distFromThresh = 3;
  const margin = {top: 0, right: 0, bottom: 0, left: 0},
      width = barWidth - margin.left - margin.right,
      height = 520 - margin.top - margin.bottom;

      const bottomPercentile = bPercentile;
      let topPercentile = 100 - bottomPercentile;
      if (topPercentile % 1 != 0) {
        topPercentile = topPercentile.toFixed(1);
      }
      let topPercent = 100 - bottomPercent;
      if (topPercent % 1 != 0) {
        topPercent = topPercent.toFixed(1);
      }

  const myClassSelect = d3.select(`#skyscraper`).select(`.${myClass}`)


  const svg = myClassSelect.select('.svg').append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
    .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  const y = d3.scaleLinear()
    .domain([0, 100])
    .range([0, height]);

  const barRotate = svg.append('g')
    .attr('transform', (d,i) => {
      let a = 180;
      let x = barWidth/2;
      let y = height/2;
      return `rotate(${a}, ${x}, ${y})`; //translate(${-width/2+barWidth/2},0)
    })

  barRotate.append('rect')
    .attr('x', 0)
    .attr('y', y(bottomPercent))      // this.percentage
    .attr('width', barWidth)
    .attr('height', y(100-bottomPercent))  // other.percentage
    .style('fill', '#d73333');

  barRotate.append('rect')
    .attr('x', 0)
    .attr('y', y(0))
    .attr('width', barWidth)
    .attr('height', y(bottomPercent))
    .style('fill', '#111');

    const labels = myClassSelect.select('.sky-label');
    // console.log(labels);
    labels.append('p')
      .attr('class', 'top').html(`<span class='em'>The Top ${topPercentile} % </span> accounted for <span class='em'>${topPercent} %</span> of all ­income`)
    labels.append('p')
      .attr('class', 'bottom').html(`<span class='em'>The Bottom ${bottomPercentile} %</span> accounted for <span class='em'>${bottomPercent} %</span> of all ­income`)

  const topPara = labels.select('.top');
  const topParaHeight = topPara.node().getBoundingClientRect().height
  topPara
    .attr('style', `top: ${y(100-bottomPercent)-topParaHeight-distFromThresh}px`)
  // console.log(topParaHeight);

  const bottomPara = labels.select('.bottom')
  // const bottomParaHeight = bottomPara.node().getBoundingClientRect().height
  // console.log(bottomParaHeight);

  bottomPara
    .attr('style', `top: ${y(100-bottomPercent)-topParaHeight+distFromThresh}px`)
};

skyscraper('moderate', 9.9, 50);
skyscraper('inbetween', 44.4, 90);
skyscraper('dramatic', 81.1, 99.9);
