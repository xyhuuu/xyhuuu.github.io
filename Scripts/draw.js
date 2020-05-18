window.onload = function(){

    var svgxy = d3.select("." + "motionxy");

    var svgzy = d3.select("." + "motionzy");

    svgxy.append('circle')
            .attr('cx', 50)
            .attr('cy', 50)
            .attr('r', 25)
            .attr('stroke', 'black')
            .attr('fill', '#69a3b2')

    svgzy.append('circle')
            .attr('cx', 50)
            .attr('cy', 50)
            .attr('r', 25)
            .attr('stroke', 'black')
            .attr('fill', '#db0000')
}