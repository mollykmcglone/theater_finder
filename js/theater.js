var apiKey = require('./../.env').apiKey;

Theater = function(){
};

Theater.prototype.getTheater = function(name, displayDetails) {
  $.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=10&type=restaurant&name=' + name + '&key=' + apiKey).then(function(response) {
    console.log(response);
    // displayDetails(city, response.main.name);
    // displayDetails(city, response.main.address);
  }).fail(function(error) {
    $('.showTheater').text(error.responseJSON.message);
    });
};

exports.theaterModule = Theater;
