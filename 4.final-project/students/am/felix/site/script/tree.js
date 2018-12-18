function createTree(container) {
let myHeight = 220;
//console.log(container);

var fields =  [
        "Material",
        "Immaterial",
        "Material.Consumption.A",
        "Material.Consumption.B",
        "Material.Income.Before Taxes",
        "Material.Income.After Taxes",
        "Material.Weatlh",
        "Material.Poverty",
        "Material.Health",
        "Material.Housing",
        "Material.Incarceration",
        "Material.Labor",
        "Immaterial.Representation",
        "Immaterial.Discrimination",
        "Immaterial.Safety Net",
        "Immaterial.Social Mobility",

    ]

var key = "Material.Income.Before Taxes";

const buildTree = (fields) => {
  let tree = {
    "name": "Inequality",
    "children": []
  }

  const addNodes = (tag) => {
    for (let i = 0; i < root.children.length; i++) {
      if (tag === root.children[i].name) {
        root = root.children[i];
        return;
      }
    }
    root.children.push({
      'name': tag,
      children: []
    })
    root = root.children[root.children.length-1]
  }

  fields.forEach((field) => {
    tags = field.split('.');
    root = tree;
    tags.forEach(addNodes)
  })
  return tree;
}

var treeData = buildTree(fields)
  // {
  //   "name": "Top Level",
  //   "children": [
  //     {
  //       "name": "Level 2: A",
  //       "children": [
  //         { "name": "Son of A" },
  //         { "name": "Daughter of A" }
  //       ]
  //     },
  //     { "name": "Level 2: B",
  //       "children":[
  //         { "name": "Son of B" },
  //         { "name": "Daughter of B" }
  //       ]
  //     }
  //   ]
  // };

// Set the dimensions and margins of the diagram
var margin = {top: 20, right: 70, bottom: 20, left: 70},
    width = window.innerWidth - margin.left - margin.right,
    height = myHeight - margin.top - margin.bottom;




// append the svg object to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select(`#${container}`).append("svg")
    .attr("id", "svg")
    .attr("width", width + margin.right + margin.left)
    .attr("height", height + margin.top + margin.bottom)
// .attr("preserveAspectRatio", "xMinYMin meet")
//   .attr("viewBox", `0 0 ${width} ${height}`)
  .append("g")
    .attr("transform", "translate("
          + margin.left + "," + margin.top + ")");



// declares a tree layout and assigns the size
var treemap = d3.tree().size([height, width]);
var i = 0,
    duration = 750,
    root;
// Assigns parent, children, height, depth
root = d3.hierarchy(treeData, function(d) { return d.children; });
root.x0 = 0;
root.y0 = 0;

// Collapse after the second level
// root.children.forEach(collapse);

// collapse all
collapse(root)
expandOnKey(key, root);
update(root);


//Expand the tree based on key
function expandOnKey(key, root) {
  var node = root;
  var tags = key.split(".");
  while (tags.length > 0) {
    var found = false;
    var next = tags[0]
    if (node._children) {
      node._children.forEach((child) => {
        if (child.data.name === next) {
          // expand this node
          node.children = node._children;
          node._children = null;
          // change fill color
          node.class = 'match'
          child.class = 'match';
          node = child;
          found = true;
        }
      })
    }
    if (found) {
      tags.shift()
    } else {
      return;
    }
  }
}


// Collapse the node and all it's children
function collapse(d) {
  if(d.children) {
    d._children = d.children
    d._children.forEach(collapse)
    d.children = null
  }
}
function getHeight(root) {
  if (!root) {
    return 0
  }
  let expandChildren = [0]
  // if root has expanded children
  if (root.children) {
    expandChildren = root.children.map(ea => getHeight(ea))
  }
  const max = expandChildren.reduce((a, b) => Math.max(a,b))
  return 1 + max
}

function update(source) {
  var currentHeight = getHeight(root);
  var newWidth = document.getElementById(`${container}`).offsetWidth;
  document.getElementById("svg").style.width = newWidth;
  // Assigns the x and y position for the nodes
  var treeData = treemap(root);

  // Compute the new tree layout.
  var nodes = treeData.descendants(),
      links = treeData.descendants().slice(1);

  // Normalize for current-depth.
  nodes.forEach(function(d){ d.y = d.depth * newWidth / (currentHeight+ Math.log(currentHeight-1))});
  // ****************** Nodes section ***************************
  // create tip for nodes
  // var tip = d3.tip()
  //   .attr('class', 'd3-tip')
  //   .offset([-10, 0])
  //   .html(function(d) {
  //     return getPath(d)
  //   })

  // Update the nodes...
  var node = svg.selectAll('g.node')
      .data(nodes, function(d) {return d.id || (d.id = ++i);    });



  // Enter any new modes at the parent's previous position.
  var nodeEnter = node.enter().append('g')
      .attr('class', 'node')
      .attr("transform", function(d) {
        return "translate(" + source.y0 + "," + source.x0 + ")";
    })
    .on('click', click);
  // nodeEnter.call(tip);

  // Maybe add a rectangle here?
  /*
  nodeEnter.append('rect')
    .attr('x', 0)
    .attr('y', "-.4em")
    .attr('width', 120)
    .attr('height', 14)
    .attr('rx', 0)
    .attr('ry', 0)
    .style('fill', 'white')
    .style('stroke', '#111');
  */

  // Add Circle for the nodes
  nodeEnter.append('circle')
      .attr('class', 'node')
      .attr('r', 1e-6)
      .style("fill", function(d) {
          return d._children ? "black" : "#fff";
      })
      // .on('mouseover', tip.show) // add tip
      // .on('mouseout', tip.hide);

  // Add labels for the nodes
  nodeEnter.append('text')
      .attr("dy", ".35em")
      .attr("x", function(d) {
          return d.children || d._children ? -13 : 13;
      })
      .attr("text-anchor", function(d) {
          return d.children || d._children ? "end" : "start";
      })
      .text(function(d) { return d.data.name; })
      .clone(true).lower()
        .attr('class', 'clone')
        .style('fill', 'none')
        .style("stroke", "white")
        .style('stroke-width', 4)
        .style('stroke-opacity', '1');


  // UPDATE
  var nodeUpdate = nodeEnter.merge(node);
  // Transition to the proper position for the node
  nodeUpdate.transition()
    .duration(duration)
    .style('stroke-opacity', '1')
    .attr("transform", function(d) {
        return "translate(" + d.y + "," + d.x + ")";
     })

  // Update the node attributes and style
  nodeUpdate.select('circle.node')
    .attr('r', 2)
    .style("fill", function(d) {
        if (getPath(d) === key) {
            // clicked leaf node
            return '#d73333';
        } else if (d.class === 'match') {
          return '#ff5e5e';
        }
        return d._children ? "#555" : "#fff";
    })



  // Remove any exiting nodes
  var nodeExit = node.exit().transition()
      .duration(duration)
      .attr("transform", function(d) {
          return "translate(" + source.y + "," + source.x + ")";
      })
      .remove();

  // On exit reduce the node circles size to 0
  nodeExit.select('circle')
    .attr('r', 1e-6);

  // On exit reduce the opacity of text labels
  nodeExit.selectAll('text')
    .style('stroke-opacity', 1e-6)
    .style('fill-opacity', 1e-6);

  // ****************** links section ***************************

  // Update the links...
  var link = svg.selectAll('path.link')
      .data(links, function(d) { return d.id; });

  // Enter any new links at the parent's previous position.
  var linkEnter = link.enter().insert('path', "g")
      .attr("class", "link")
      .attr('d', function(d){
        var o = {x: source.x0, y: source.y0}
        return diagonal(o, o)
      });

  // UPDATE
  var linkUpdate = linkEnter.merge(link);

  // Transition back to the parent element position
  linkUpdate.transition()
      .duration(duration)
      .attr('d', function(d){ return diagonal(d, d.parent) })
      .style("stroke", function(d){
          if(d.class === 'match') {
            return '#ff5e5e'
          }
        });

  // Remove any exiting links
  var linkExit = link.exit().transition()
      .duration(duration)
      .attr('d', function(d) {
        var o = {x: source.x, y: source.y}
        return diagonal(o, o)
      })
      .remove();

  // Store the old positions for transition.
  nodes.forEach(function(d){
    d.x0 = d.x;
    d.y0 = d.y;
  });

  // Creates a curved (diagonal) path from parent to the child nodes
  function diagonal(s, d) {

    var path = `M ${s.y} ${s.x}
            C ${(s.y + d.y) / 2} ${s.x},
              ${(s.y + d.y) / 2} ${d.x},
              ${d.y} ${d.x}`

    return path;
  }

  // Toggle children on click.
  function click(d) {
    if (!d.children && !d._children) {
      //leaf node
      key = getPath(d);
      d.path = key;
    }
    //d.children is expanded children
    //d._children is collapes children
    if (d.children) {
        d._children = d.children;
        d.children = null;
      } else {
        d.children = d._children;
        d._children = null;
      }
    update(d);
  }
  // return the path from root to this node
  function getPath(d) {
    var path = [];
    while (d.parent !== null) {
      path.unshift(d.data.name)
      d=d.parent
    }
    return path.join('.')
  }
}
// resize the chart width based on window size
window.addEventListener('resize', _.debounce(function(){
  update(root)
}, 500));
}

createTree('inequality');
//createTree('context');
