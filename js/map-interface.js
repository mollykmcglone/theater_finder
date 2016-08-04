var apiKey = require('./../.env').apiKey;
var Map = require('./../js/map.js').mapModule;

$(document).ready(function() {
  var portlandMap = new Map();
  portlandMap.displayMap();
});
