// var apiKey = require('./../.env').apiKey;
//
// Theater = function(){
// };
//
// Theater.prototype.getTheater = function(name, displayDetails) {
//   $.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=45.5231,-122.6765&radius=10&type=movie_theater&name=' + name + '&key=' + apiKey).then(function(response) {
//     console.log(response);
//     displayDetails(name);
//     // displayDetails(city, response.main.address);
//   }).fail(function(error) {
//     $('.showTheater').text(error.responseJSON.message);
//     });
// };
//
// exports.theaterModule = Theater;
