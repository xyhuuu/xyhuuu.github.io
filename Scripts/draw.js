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
        var xAcc = event.accelerationIncludingGravity.x;

        var yAcc = event.accelerationIncludingGravity.y;

        var zAcc = event.accelerationIncludingGravity.z;


    }

    window.addEventListener('devicemotion', handleMotion);
}