// JavaScript source code
// Sample data
var data = [1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5, 5];

// Set up the SVG container
var svgWidth = 500;
var svgHeight = 300;
var margin = { top: 20, right: 30, bottom: 30, left: 40 };

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

var svg = d3
  .select("#histogram-container")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Create a histogram function
var histogram = d3.histogram()
  .domain(d3.extent(data))
  .thresholds(d3.range(1, 7)); // You can adjust the range and number of bins

// Use the histogram function to calculate the bins
var bins = histogram(data);

// Create the x and y scales
var x = d3.scaleLinear().domain([1, 6]).range([0, width]);
var y = d3.scaleLinear().domain([0, d3.max(bins, d => d.length)]).range([height, 0]);

// Create and append the bars
svg.selectAll("rect")
  .data(bins)
  .enter()
  .append("rect")
  .attr("x", d => x(d.x0))
  .attr("y", d => y(d.length))
  .attr("width", d => x(d.x1) - x(d.x0) - 1)
  .attr("height", d => height - y(d.length))
  .style("fill", "#69b3a2");

// Add x-axis
svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x));

// Add y-axis
svg.append("g")
  .call(d3.axisLeft(y));