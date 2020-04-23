function deviceOrientationHandler(tiltLR, tiltFB, dir){
    document.getElementById("doTiltLR").innerHTML = Math.round(tiltLR);
    document.getElementById("doTiltFB").innerHTML = Math.round(tiltFB);
    document.getElementById("doDirection").innerHTML = Math.round(dir);
}

// alert( Object.getOwnPropertyNames(DeviceOrientationEvent) );
if ( window.DeviceOrientationEvent !== undefined && typeof window.DeviceOrientationEvent.requestPermission === 'function' ) {
    window.DeviceOrientationEvent.requestPermission().then(response => {
    // alert("Orientation access status: " + response);
        if (response == 'granted') {
            if (window.DeviceOrientationEvent) {
            console.log("DeviceOrientation is supported.");
            // window.addEventListener('deviceorientation', deviceOrientationHandler, false);
            // document.getElementById("doeSupported").innerText = "Supported!";
            document.getElementById("doEvent").innerHTML = "DeviceOrientation";
            // Listen for the deviceorientation event and handle the raw data
            window.addEventListener('deviceorientation', function(eventData) {
                // gamma is the left-to-right tilt in degrees, where right is positive
                var tiltLR = eventData.gamma;

                // beta is the front-to-back tilt in degrees, where front is positive
                var tiltFB = eventData.beta;

                // alpha is the compass direction the device is facing in degrees
                var dir = eventData.alpha

                // call our orientation event handler
                deviceOrientationHandler(tiltLR, tiltFB, dir);

                // call selection handler
                // selectionGammaHandler(tiltLR);
            }, false);
            } else {
                document.getElementById("doEvent").innerHTML = "Not supported."
            } 
        }
      })
      .catch(error => {
        alert(error);
      })
  }