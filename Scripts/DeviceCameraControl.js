// Set constraints for the video stream
var constraints = { video: true, audio: true };

// Define constants
const cameraView = document.querySelector("#camera--view"),
    cameraOutput = document.querySelector("#camera--output"),
    cameraSensor = document.querySelector("#camera--sensor"),
    cameraTrigger = document.querySelector("#camera--trigger")

// Access the device camera and stream to cameraView
function cameraStart() {
    // navigator.permissions.query({name:'camera'}).then(function(result) {
    //     alert(result.state);
    //     if (result.state == 'granted') {
            alert('mediaDevices' in navigator);
            alert('getUserMedia' in navigator.mediaDevices);
            if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices){ 
                navigator.mediaDevices
                    .getUserMedia(constraints)
                    .then(function(stream) {
                    track = stream.getTracks()[0];
                    cameraView.srcObject = stream;
                })
                .catch(function(error) {
                    console.error("Oops", error);
                });
            }
    //     }

    // });
}

// Take a picture when cameraTrigger is tapped
cameraTrigger.onclick = function() {
    cameraSensor.width = cameraView.videoWidth;
    cameraSensor.height = cameraView.videoHeight;
    cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
    cameraOutput.src = cameraSensor.toDataURL("image/webp");
    cameraOutput.classList.add("taken");
    cameraSensor.style.display = "none";
    // //stop video streams
    // cameraView.srcObject.getVideoTracks().forEach(track => track.stop());
};
// Start the video stream when the window loads
// window.addEventListener("load", cameraStart, false);