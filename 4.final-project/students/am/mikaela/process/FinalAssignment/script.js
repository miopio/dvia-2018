// load data file
d3.json('allstates.json')
.then( (stateData) => {

    console.log(stateData);

    // creating the svg 
    var svg = d3.select("#allstates")
        .append("svg")
        .attr('height', 500)
        .attr('width', 920);
        //.attr('fill', 'pink');
    
    var colors = ['#fde5da', '#faae93', '#f96b4f', '#f92b2b', '#db2f2e', '#a3131d'];
    // var opacity = ['0.6', '0.6', '0.7', '0.8', '0.9', '1'];
    
    var sortedData = stateData.sort( function (a,b) {
        return b.noClinic-a.noClinic
    });
    
    // creating circles for each state 
    var circles = svg.selectAll('circle')
        .data(sortedData)
        .enter()
        .append('circle');
        
    var colorRect = svg.selectAll('rect')
        .append('rect');
       
     
    // creating text for states    
    let states = svg.selectAll('text.s')
        .data(sortedData)
        .enter()
        .append('text')
        .text(function(d){
                    return d.Abr + " = " + d.noClinic + "%";
                });
                
     //scale for noClinic data
    let scale = d3.scaleLinear()
        .domain([0, 100])
        .range([0, 15])
    
    //styling the circles 
    circles.attr('cx', function(d,i) {
            return 50+(i%10)*90;
        })
        .attr('cy', function(d,i) {
            return 90+Math.floor(i/10)*70;
        })
        .attr('r', function (d) {
            return scale(d.noClinic);
        })
        .style('fill', function (d) {
            return colors[d.Limits];
        });
        // .attr("fill-opacity", function (d) {
        //     return opacity[d.Limits];
        // })
        
    colorRect.attr('x', 50)
        .attr('y', 600);
        
        
    //Styling the states text 
    states.attr('x', function(d,i) {
            return 50+(i%10)*90
        })
        .attr('y', function(d,i) {
            return 125+Math.floor(i/10)*70;
        })
        .attr('text-anchor', 'middle')
        .style('font-size', '10px');
        
////////////Individual State/////////////////////

// const healthInsuranceCalifornia = [ 
// {'ethn': 'black', 'value': 9},
// {'ethn': 'white', 'value': 7.8},
// {'ethn': 'hispanic', 'value': 19.6},
// {'ethn': 'AA', 'value': 12.3},
// {'ethn': 'Other', 'value': 7.5}
// ]
// const healthInsuranceM = [ 
// {'ethn': 'black', 'value': 27.2},
// {'ethn': 'white', 'value': 20},
// {'ethn': 'hispanic', 'value': 49.8},
// {'ethn': 'AA', 'value': 37.4},
// {'ethn': 'Other', 'value': 23.6}
// ]

const blackCalifornia = [
{'factor': 'insurance', 'value': 9},
{'factor': 'poverty', 'value': 24},
{'factor': 'deaths', 'value': 15},
] 

const whiteCalifornia = [
{'factor': 'insurance', 'value': 8},
{'factor': 'poverty', 'value': 11},
{'factor': 'deaths', 'value': 6},
] 

// let scaleIndiState = d3.scaleLinear()
//         .domain([0, 50])
//         .range([20, 100])

// // console.log(healthInsuranceCalifornia)
// // console.log(healthInsuranceM)
// console.log(blackCalifornia)

// //////////////////BLACK CALIFORNIA///////////////////////
//  // creating the svg for Health Insurance 
//     var blackCali = d3.select("#California")
//         .append("svg")
//         .attr('height', 400)
//         .attr('width', 200)
//         .attr('class', 'blackCali');
        
        
// // creating circles for California Health Insurance 
//     var circlesBlackCali = blackCali.selectAll('circle')
//         .data(blackCalifornia)
//         .enter()
//         .append('circle');
        

// var blackCaliCounter = 50;
// var blackCaliData = [0,0,0];
    
//     for(var i = 0;i<blackCalifornia.length;i++ ){
//         blackCaliData[i] = blackCalifornia[i].value;
//         console.log("->"+blackCaliData[i])
//     }
    
// //styling the circles for California Health Insurance 
//     circlesBlackCali.attr('cx', 100)
//         .attr('cy', function(d,i) {
//         return i ? (blackCaliCounter += scaleIndiState(blackCaliData[i - 1]) + scaleIndiState(blackCaliData[i])) : blackCaliCounter;
//         })
//         .attr('r', function (d) {
//             console.log("r:"+d.value) 
//             return scaleIndiState(d.value);
//         })
//         .attr('class', 'blackCaliCircle')
//         .style('fill', 'red');

// //////////////////WHITE CALIFORNIA///////////////////////
//  // creating the svg for Health Insurance 
//     var whiteCali = d3.select("#California")
//         .append("svg")
//         .attr('height', 400)
//         .attr('width', 400)
//         .attr('class', 'whiteCali');

// // creating circles for California Health Insurance 
//     var circlesWhiteCali = whiteCali.selectAll('circle')
//         .data(whiteCalifornia)
//         .enter()
//         .append('circle');

// var whiteCaliCounter = 50;
// var whiteCaliData = [0,0,0];
    
//     for(var i = 0;i<whiteCalifornia.length;i++ ){
//         whiteCaliData[i] = whiteCalifornia[i].value;
//         console.log("->"+whiteCaliData[i])
//     }
    
// //styling the circles for California Health Insurance 
//     circlesWhiteCali.attr('cx', 300)
//         .attr('cy', function(d,i) {
//         return i ? (whiteCaliCounter += scaleIndiState(whiteCaliData[i - 1]) + scaleIndiState(whiteCaliData[i])) : whiteCaliCounter;
//         })
//         .attr('r', function (d) {
//             console.log("r:"+d.value) 
//             return scaleIndiState(d.value);
//         });




// // HEALTH INSURANCE CALIFORNIA //
//  // creating the svg for Health Insurance 
//     var healthInsuranceC = d3.select("#healthInsuranceCalifornia")
//         .append("svg")
//         .attr('height', 400)
//         .attr('width', 400);

// // creating circles for California Health Insurance 
//     var circlesHealthCal = healthInsuranceC.selectAll('circle')
//         .data(healthInsuranceCalifornia)
//         .enter()
//         .append('circle');

// //styling the circles for California Health Insurance 
//     circlesHealthCal.attr('cx', function(d,i) {
//             return 50+(i%5)*70;
//         })
//         .attr('cy', 100)
//         .attr('r', function (d) {
//             console.log(d) 
//             return d.value;
//         });

});
