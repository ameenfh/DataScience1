// JavaScript source code


var data = [
            { x: -10, y: 10 },
            { x: 12, y:90}
        ];

var data2 = [
        {x: -10, y:60},
        {x: 12, y: 80}
    ];

var data3 = [
        {x: -8, y:5},
        {x: -4, y: 60},
        {x: 0, y:10},
        {x:12, y:50}
    ];

var data4 = [
        {x: -9, y:25},
        {x: -2, y: 60},
        {x: 0, y:40},
        {x:12, y:70}
    ];

var data5 = [
        {x: -10, y:15},
        {x: -6, y: 30},
        {x: 2, y:80},
        {x:12, y:70}
    ];

var data6 = [
        {x: -5, y:50},
        {x: -2, y: 70},
        {x: 5, y:40},
        {x:12, y:33}
    ];

var data7 = [
        {x: -7, y:10},
        {x: -2, y: 45},
        {x: 6, y:10},
        {x:12, y:20}
    ];

var data8 = [
        {x: 0, y:20},
        {x: 3, y: 42},
        {x: 4, y:20},
        {x:12, y:65}
];

var data9 = [
        {x: -4, y:30},
        {x: 0, y: 32},
        {x: 7, y:47},
        {x:12, y:58}
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
            .domain([-10, 12])
            .range([0, width]);

        var yScale = d3.scaleLinear()
            .domain([0, 100])
            .range([height, 0]);

        // Define the line
        var line = d3.line()
            .x(function(d) { return xScale(d.x); })
            .y(function(d) { return yScale(d.y); });


        // Append line 2 to the chart
        var path2 = svg.append("path")
            .data([data2])
            .attr("class", "line")
            .attr("d", line)
            .attr("fill", "none")
            .attr("stroke", "#bababa")
            .attr("stroke-width", 3)
            .style('opacity', 0.25);
            

            // Add text on the line 2
            var text2 = svg.append("text")
                .append("textPath")
                .attr("href", "#text-path2")
                .style("text-anchor", "middle")
                .attr("startOffset", "50%")
                .attr("fill", "#0a77f5")
                .style("font-family", "Verdana, sans-serif")
                .style("font-size", "20px")
                .text("Michael Jackson - You Are Not Alone")
                .style('opacity', 0);


        // Add a hidden path for textPath to reference
            svg.append("defs").append("path")
                .attr("id", "text-path2")
                .data([data2])
                .attr("d", line)
                .style("fill", "none")
                .style("stroke", "none");


        // Add event listeners for hover effect
        path2.on("mouseover", function() {
            d3.select(this).attr("stroke", "#0a77f5").attr("stroke-width", 5).style('opacity', 1);
            text2.style('opacity', 1);
        })
        .on("mouseout", function() {
            d3.select(this).attr("stroke", "#bababa").attr("stroke-width", 3).style('opacity', 0.25);
            text2.style('opacity', 0);
        });

        



        // Append line 3 to the chart
        var path3 = svg.append("path")
            .data([data3])
            .attr("class", "line")
            .attr("d", line)
            .attr("fill", "none")
            .attr("stroke", "#bababa")
            .attr("stroke-width", 3)
            .style('opacity', 0.25);

        // Add text on the line 3
            var text3 = svg.append("text")
                .append("textPath3")
                .attr("href", "#text-path3")
                .style("text-anchor", "middle")
                .attr("startOffset", "50%")
                .attr("fill", "#0a77f5")
                .style("font-family", "Verdana, sans-serif")
                .style("font-size", "20px")
                .text("Will Smith - Wild Wild West")
                .style('opacity', 0);


        // Add a hidden path for textPath to reference
            svg.append("defs").append("path")
                .attr("id", "text-path3")
                .data([data3])
                .attr("d", line)
                .style("fill", "none")
                .style("stroke", "none");

        // Add event listeners for hover effect
        path3.on("mouseover", function() {
            d3.select(this).attr("stroke", "#0a77f5").attr("stroke-width", 5).style('opacity', 1);
            text3.style('opacity', 1);
        })
        .on("mouseout", function() {
            d3.select(this).attr("stroke", "#bababa").attr("stroke-width", 3).style('opacity', 0.25);
            text3.style('opacity', 0);
        });


        



        // Append line 4 to the chart
        var path4 = svg.append("path")
            .data([data4])
            .attr("class", "line")
            .attr("d", line)
            .attr("fill", "none")
            .attr("stroke", "#bababa")
            .attr("stroke-width", 3)
            .style('opacity', 0.25);

        // Add event listeners for hover effect
        path4.on("mouseover", function() {
            d3.select(this).attr("stroke", "#0a77f5").attr("stroke-width", 5).style('opacity', 1);
        })
        .on("mouseout", function() {
            d3.select(this).attr("stroke", "#bababa").attr("stroke-width", 3).style('opacity', 0.25);
        });

        
        
        // Append line 5 to the chart
        var path5 = svg.append("path")
            .data([data5])
            .attr("class", "line")
            .attr("d", line)
            .attr("fill", "none")
            .attr("stroke", "#bababa")
            .attr("stroke-width", 3)
            .style('opacity', 0.25);

        // Add event listeners for hover effect
        path5.on("mouseover", function() {
            d3.select(this).attr("stroke", "#0a77f5").attr("stroke-width", 5).style('opacity', 1);
        })
        .on("mouseout", function() {
            d3.select(this).attr("stroke", "#bababa").attr("stroke-width", 3).style('opacity', 0.25);
        });
        
        
        // Append line 6 to the chart
        var path6 = svg.append("path")
            .data([data6])
            .attr("class", "line")
            .attr("d", line)
            .attr("fill", "none")
            .attr("stroke", "#bababa")
            .attr("stroke-width", 3)
            .style('opacity', 0.25);

        // Add event listeners for hover effect
        path6.on("mouseover", function() {
            d3.select(this).attr("stroke", "#0a77f5").attr("stroke-width", 5).style('opacity', 1);
        })
        .on("mouseout", function() {
            d3.select(this).attr("stroke", "#bababa").attr("stroke-width", 3).style('opacity', 0.25);
        });


        // Append line 7 to the chart
        var path7 = svg.append("path")
            .data([data7])
            .attr("class", "line")
            .attr("d", line)
            .attr("fill", "none")
            .attr("stroke", "#bababa")
            .attr("stroke-width", 3)
            .style('opacity', 0.25);

        // Add event listeners for hover effect
        path7.on("mouseover", function() {
            d3.select(this).attr("stroke", "#0a77f5").attr("stroke-width", 5).style('opacity', 1);
        })
        .on("mouseout", function() {
            d3.select(this).attr("stroke", "#bababa").attr("stroke-width", 3).style('opacity', 0.25);
        });
        
        
        // Append line 8 to the chart
        var path8 = svg.append("path")
            .data([data8])
            .attr("class", "line")
            .attr("d", line)
            .attr("fill", "none")
            .attr("stroke", "#bababa")
            .attr("stroke-width", 3)
            .style('opacity', 0.25);

        // Add event listeners for hover effect
        path8.on("mouseover", function() {
            d3.select(this).attr("stroke", "#0a77f5").attr("stroke-width", 5).style('opacity', 1);
        })
        .on("mouseout", function() {
            d3.select(this).attr("stroke", "#bababa").attr("stroke-width", 3).style('opacity', 0.25);
        });


        // Append line 9 to the chart
        var path9 = svg.append("path")
            .data([data9])
            .attr("class", "line")
            .attr("d", line)
            .attr("fill", "none")
            .attr("stroke", "#bababa")
            .attr("stroke-width", 3)
            .style('opacity', 0.25);

        // Add event listeners for hover effect
        path9.on("mouseover", function() {
            d3.select(this).attr("stroke", "#0a77f5").attr("stroke-width", 5).style('opacity', 1);
        })
        .on("mouseout", function() {
            d3.select(this).attr("stroke", "#bababa").attr("stroke-width", 3).style('opacity', 0.25);
        });



        
        
        // Append the line to the chart
        var path1 = svg.append("path")
            .data([data])
            .attr("class", "line")
            .attr("d", line)
            .attr("fill", "none")
            .attr("stroke", "#c74ab0")
            .attr("stroke-width", 3);

        // Add text on the line 1
            var popText = svg.append("text")
                .append("textPath")
                .attr("href", "#text-path")
                .style("text-anchor", "middle")
                .attr("startOffset", "50%")
                .attr("fill", "#c74ab0")
                .style("font-family", "Verdana, sans-serif")
                .style("font-size", "20px")
                .text("Popular Average")
                .style('opacity', 0);


        // Add a hidden path for textPath to reference
            svg.append("defs").append("path")
                .attr("id", "text-path")
                .data([data])
                .attr("d", line)
                .style("fill", "none")
                .style("stroke", "none");
        

        // Add event listeners for hover effect
        path1.on("mouseover", function() {
            d3.select(this).attr("stroke", "#0a77f5").attr("stroke-width", 5);
            popText.style('opacity', 1);
            
        })
        .on("mouseout", function() {
            d3.select(this).attr("stroke", "#c74ab0").attr("stroke-width", 3);
            popText.style('opacity', 0);
        });

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
            .text("Age in year that song was released");


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
            .text("% of People Who Know Song");

        