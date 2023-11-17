// JavaScript source code

var data = [
            { x: 0, y: 0 },
            {x: 1, y:9},
            {x:4, y:4},
            {x:5, y:3},
            {x:8, y:7},
            {x:9, y:2},
            { x: 10, y:10}
        ];

// Set up the SVG container
        var margin = { top: 20, right: 20, bottom: 50, left: 50 };
        var width = 500;
        var height = 500;

        var svg = d3.select("#chart")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Set up scales
        var xScale = d3.scaleLinear()
            .domain([0, 10])
            .range([0, width]);

        var yScale = d3.scaleLinear()
            .domain([0, 10])
            .range([height, 0]);

// Add x axis
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(xScale)
                .ticks(5) // Number of ticks
                .tickFormat(d3.format(".0f")) // Format the tick values as integers
            );

// Add x axis label
        svg.append("text")
            .attr("transform", "translate(" + (width / 2) + " ," + (height + margin.top + 20) + ")")
            .style("text-anchor", "middle")
            .text("X Label");


// Add y axis
        svg.append("g")
            .call(d3.axisLeft(yScale)
                .ticks(6) // Number of ticks
                .tickFormat(d3.format(".0f")) // Format the tick values as integers
            );

// Add y axis label
        svg.append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 0 - margin.left)
            .attr("x", 0 - (height / 2))
            .attr("dy", "1em")
            .style("text-anchor", "middle")
            .text("Y Label");

// Define the line
        var line = d3.line()
            .x(function(d) { return xScale(d.x); })
            .y(function(d) { return yScale(d.y); });

// Append line 1 to the chart
        var path = svg.append("path")
            .data([data])
            .attr("class", "line")
            .attr("d", line)
            .attr("fill", "none")
            .attr("stroke", "#bababa")
            .attr("stroke-width", 3)
            .style('opacity', 0.25);
            

            // Add text on the line 2
            var text1 = svg.append("text")
                .append("textPath")
                .attr("href", "#text-path")
                .style("text-anchor", "middle")
                .attr("startOffset", "50%")
                .attr("fill", "#0a77f5")
                .style("font-family", "Verdana, sans-serif")
                .style("font-size", "20px")
                .text("Line 1")
                .style('opacity', 0);


        // Add a hidden path for textPath to reference
            svg.append("defs").append("path")
                .attr("id", "text-path")
                .data([data])
                .attr("d", line)
                .style("fill", "none")
                .style("stroke", "none");


        // Add event listeners for hover effect
        path.on("mouseover", function() {
            d3.select(this).attr("stroke", "#0a77f5").attr("stroke-width", 5).style('opacity', 1);
            text1.style('opacity', 1);
        })
        .on("mouseout", function() {
            d3.select(this).attr("stroke", "#bababa").attr("stroke-width", 3).style('opacity', 0.25);
            text1.style('opacity', 0);
        });