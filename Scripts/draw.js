window.onload = function(){

    var svgxy = d3.select("." + "motionxy");

    var svgzy = d3.select("." + "motionzy");

    svgxy.append('circle')
            .attr('cx', 100)
            .attr('cy', 100)
            .attr('r', 10)
            .attr('stroke', 'black')
            .attr('fill', '#69a3b2')
            .attr('id', 'xycircle');

    svgzy.append('circle')
            .attr('cx', 100)
            .attr('cy', 100)
            .attr('r', 10)
            .attr('stroke', 'black')
            .attr('fill', '#db0000')
            .attr('id', 'zycircle');

    var circlexy = d3.select("#" + "xycircle");
    var circlezy = d3.select("#" + "zycircle");

    function handleMotion(event){
        var originx = 0;

        var originy = 0;

        var originz = -10;

        var xAcc = event.accelerationIncludingGravity.x;

        var yAcc = event.accelerationIncludingGravity.y;

        var zAcc = event.accelerationIncludingGravity.z;

        circlexy.transition()
                .duration(500)
                .attr("cx", 100 + xAcc - originx )
                .attr("cy", 100 + Math.abs(yAcc - originy));

        circlexy.transition()
                .duration(500)
                .attr("cx", 100 + zAcc - originz)
                .attr("cy", 100 + Math.abs(yAcc -y));

    }

    window.addEventListener('devicemotion', handleMotion);
}