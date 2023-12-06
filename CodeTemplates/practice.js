// JavaScript source code
// Sample data for the histogram
  var data = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  // Set up the SVG dimensions
  var svgWidth = 400;
  var svgHeight = 200;

  // Set up the histogram dimensions
  var margin = { top: 20, right: 20, bottom: 30, left: 50 };
  var width = svgWidth - margin.left - margin.right;
  var height = svgHeight - margin.top - margin.bottom;

  // Create an SVG element
  var svg = d3.select("#histogram-container")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // Create a histogram scale
  var x = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, width]);

  // Create histogram bins
  var bins = d3.histogram()
    .domain(x.domain())
    .thresholds(x.ticks(10))
    (data);

  // Create the histogram bars
  svg.selectAll("rect")
    .data(bins)
    .enter()
    .append("rect")
    .attr("x", 1)
    .attr("transform", function (d) {
      return "translate(" + x(d.x0) + "," + height + ")";
    })
    .attr("width", function (d) {
      return x(d.x1) - x(d.x0) - 1;
    })
    .attr("height", function (d) {
      return height - x(d.length);
    });

 