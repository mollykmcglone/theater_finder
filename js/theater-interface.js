var Theater = require('./../js/theater.js').theaterModule;

var displayDetails = function(name, address) {
  $('.showTheater').text("The " + name + " is located at " + address + ".");
};

$(document).ready(function() {
  var currentTheaterObject = new Theater();
  $('#theaterName').click(function() {
    var name = $('#name').val();
    $('#name').val("");
    currentTheaterObject.getTheater(name, displayDetails);
  });
});
