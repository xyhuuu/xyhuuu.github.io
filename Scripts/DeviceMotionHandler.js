function deviceMotionHandler(xAcceleration, yAcceleration, zAcceleration, rotationRate){
    document.getElementById("xMotion").innerHTML = Math.round(xAcceleration);
    document.getElementById("yMotion").innerHTML = Math.round(yAcceleration);
    document.getElementById("zMotion").innerHTML = Math.round(zAcceleration);
    document.getElementById("rotationRate").innerHTML = Math.round(rotationRate);
  }

  function requestMotionPermission() {
    if ( window.DeviceMotionEvent !== undefined && typeof window.DeviceMotionEvent.requestPermission === 'function' ) {
        window.DeviceMotionEvent.requestPermission().then(permissionState => {
        alert("Motion access status: " + permissionState);
        if (permissionState === 'granted') {
            if (window.DeviceMotionEvent) {
                window.addEventListener('devicemotion', function(eventData) {
            
                  document.getElementById("doEventMotion").innerHTML = "DeviceMotion";
            
                  // var xAcceleration = eventData.accelerationIncludingGravity.x;
            
                  var yAcceleration = eventData.accelerationIncludingGravity.y;
            
                  // var zAcceleration = eventData.accelerationIncludingGravity.z;

                  var xAcceleration = eventData.acceleration.x;
            
                  var yAcceleration = eventData.accelerationIncludingGravity.y;
            
                  var zAcceleration = eventData.acceleration.z;

                  var rotationRate = eventData.rotationRate;
            
                  // call our orientation event handler
                  deviceMotionHandler(xAcceleration, yAcceleration, zAcceleration, rotationRate);
            
                  
              }, false);
            } else {
                  document.getElementById("doEventMotion").innerHTML = "Not supported."
              } 
        }
    }).catch(error => {
        alert(error);
    });
    }
    else
    {
        if (window.DeviceMotionEvent) {
            window.addEventListener('devicemotion', function(eventData) {
        
              document.getElementById("doEventMotion").innerHTML = "DeviceMotion";
        
              var xAcceleration = eventData.accelerationIncludingGravity.x;
        
              var yAcceleration = eventData.accelerationIncludingGravity.y;
        
              var zAcceleration = eventData.accelerationIncludingGravity.z;
        
              // call our orientation event handler
              deviceMotionHandler(xAcceleration, yAcceleration, zAcceleration);
        
              // call selection handler
              selectionAccelerationHandler(xAcceleration, yAcceleration, zAcceleration);
          }, false);
        }
    }
  }