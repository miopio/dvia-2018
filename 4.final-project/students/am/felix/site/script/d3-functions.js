const appendGroupTo = (name, appendTo) => {
    return appendTo
      .append('g')
        .attr('id', name)
}

const appendGroupClassTo = (name, appendTo) => {
  return appendTo
    .append('g')
      .attr('class', name)
}

class D3Template {
  constructor (selection, width, height, t, r, b, l) {
    this.margin = {top: t, right: r, bottom: b, left: l};
      this.w = width - this.margin.left - this.margin.right;
      this.h = height - this.margin.top - this.margin.bottom;
        this.svg = selection
          .append('svg')
            .attr('width', this.w + this.margin.left + this.margin.right)
            .attr('height', this.h + this.margin.top + this.margin.bottom)
            .style('opacity', 0)

      this.marginContainer = appendGroupTo('marginContainer', this.svg)
        this.chart = appendGroupTo('chart', this.marginContainer);
          this.data = appendGroupTo('data', this.chart);
          this.axes = appendGroupTo('axes', this.chart);
            this.xAxisCont = appendGroupTo('xAxisCont', this.axes);
            this.yAxisCont = appendGroupTo('yAxisCont', this.axes);
        this.modal = appendGroupTo('modal', this.marginContainer);

      this.marginContainer.attr('transform', `translate(${this.margin.left}, ${this.h+this.margin.top})`)
  }
}











// D3 Template:
/*
const margin = {top: 20, right: 100, bottom: 40, left: 40};
  let w = height - margin.left - margin.right;
  let h = height - margin.top - margin.bottom;

let graph = d3.select(selection)
  .append('svg')
    .attr('width', w + margin.left + margin.right)
    .attr('height', h + margin.top + margin.bottom)
    .style('opacity', 0)

let marginContainer = appendGroupTo('marginContainer', graph)
  let chart = appendGroupTo('chart', mContainer);
    let data = appendGroupTo('data', chart);
    let axes = appendGroupTo('axes', chart);
      let xAxisCont = appendGroupTo('xAxisCont', axes);
      let yAxisCont = appendGroupTo('yAxisCont', axes);
  let modal = appendGroupTo('modal', mContainer);

marginContainer.attr('transform', `translate(${margin.left}, ${h+margin.top})`)
*/
