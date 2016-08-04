Map = function() {
};

Map.prototype.displayMap = function() {
  console.log("made it this far!");
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 45.5231, lng: -122.6765},
    scrollwheel: false,
    zoom: 12,
    MapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var load = google.maps.event.addDomListener(window, 'load');

  var contentString = "Regal Cinemas, 111 SW 5th Avenue, Portland, OR. Beer? No! Childcare? No! Independent Movies? No!";

  var infowindow = new google.maps.InfoWindow({
     content: contentString
   });

  var regal = new google.maps.Marker({
    map: map,
    position: {lat: 45.5231, lng: -122.6765},
    label: "1",
    title: "Regal Cinemas"
  });

  regal.addListener('click', function() {
   infowindow.open(map, regal);
  });
};

Map.prototype.locateUser = function() {
  // If the browser supports the Geolocation API
  if (navigator.geolocation){
    var positionOptions = {
      enableHighAccuracy: true,
      timeout: 10 * 1000 // 10 seconds
    };
    navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError, positionOptions);
  }
  else {
    alert("Your browser doesn't support the Geolocation API");
  }
};

function geolocationSuccess(position) {
  var userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

  var myOptions = {
    zoom : 16,
    center : userLatLng,
    mapTypeId : google.maps.MapTypeId.ROADMAP
  };

  var mapObject = new google.maps.Map(document.getElementById("map"), myOptions);
  new google.maps.Marker({
    map: mapObject,
    position: userLatLng
  });
}

function geolocationError(positionError) {
  alert(positionError);
}

exports.mapModule = Map;
