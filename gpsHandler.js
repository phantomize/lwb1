// JavaScript Document

// Wait for Cordova to load
    //


    // Cordova is ready
    //
    function onDeviceReady() {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }

    // onSuccess Geolocation
    //

// onSuccess Callback
//   This method accepts a `Position` object, which contains
//   the current GPS coordinates
//
var onSuccess = function(position) {
//    alert('Latitude: '          + position.coords.latitude          + '\n' +
//          'Longitude: '         + position.coords.longitude         + '\n' +
//          'Altitude: '          + position.coords.altitude          + '\n' +
//          'Accuracy: '          + position.coords.accuracy          + '\n' +
//          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
//          'Heading: '           + position.coords.heading           + '\n' +
//          'Speed: '             + position.coords.speed             + '\n' +
//          'Timestamp: '         + position.timestamp                + '\n');

    var vars = [position.coords.latitude, position.coords.longitude, position.timestamp]

    alert(vars[0] + ", " + vars[1] + ", " + vars[2])

    //return vars
};

// onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
                'message: ' + error.message + '\n');
    }


// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}