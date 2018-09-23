// p5.js
// Greg Costanzo (gcostanz@cisco.com)
// with snippits from github @shiffman for cartesian to mercator and more!

var clon = '10';

var mapimg;

var drawSpotX;
var drawSpotY;

var clat = 43.11;
var clon = -70.11;
//var clat = 30;
//var clon = -40;

var ww = 1024;
var hh = 512;

// var zoom = 6; i like this
var zoom = 6;
var bookings;
var streetAddress;


function preload() {
  // The clon and clat in this url are edited to be in the correct order.
  mapimg = loadImage('https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/' +
    clon + ',' + clat + ',' + zoom + '/' + ww + 'x' + hh +
    '?access_token=pk.eyJ1IjoiZ2Nvc3RhbnpvIiwiYSI6ImNqZ3pycHR3MzJzeWgzM3AxZDhia3BvcTMifQ.ueuFmMkw2K8voIB46XeUHg');
//  bookings = loadStrings('./marBookingsGNE.csv');
  bookings = loadTable('http://localhost:8000/marBookingsGNE.csv', 'csv', 'header');
}

function gotLocation(result) {
  console.log(queryResult.results[0].geometry.location.lat);
  console.log(queryResult.results[0].geometry.location.lng);
  var drawX = mercX(queryResult.results[0].geometry.location.lng) - mercX(clon);
  var drawY = mercY(queryResult.results[0].geometry.location.lat) - mercY(clat);
  console.log('drawXY: ' + drawX + ' ' + drawY)
  console.log('centerXY: ' +  mercX(clon) + ' ' + mercY(clat)); // weird numbers - map can fix but am i in the wrong place?
  console.log('offsetXY: ' + mercX(queryResult.results[0].geometry.location.lng) + ' ' + mercY(queryResult.results[0].geometry.location.lat))
  drawSpotX = drawX;
  drawSpotY = drawY;
}

function setup() {
  // put setup code here
  createCanvas(ww,hh);
  image(mapimg,0,0);

  streetAddress = '71 Washington Rd, Rye NH';
  streetAddress = streetAddress.replace(/ /gi, '+'); // replace ' ' with +
  addressQuery = 'https://maps.googleapis.com/maps/api/geocode/json?address=' +
    streetAddress +
    '&key=AIzaSyATi8uBxQKqoImoXapD2O_YI2X9OUgQfCQ';
  queryResult = loadJSON(addressQuery, gotLocation);

}

function draw() {
  translate(width/2,height/2);
  if(drawSpotY) {
    ellipse(drawSpotX,drawSpotY,10,10);
  }
}


function mercX(lon) {
  lon = radians(lon);
  var a = (256 / PI) * pow(2, zoom);
  var b = lon + PI;
  return a * b;
}

function mercY(lat) {
  lat = radians(lat);
  var a = (256 / PI) * pow(2, zoom);
  var b = tan(PI / 4 + lat / 2);
  var c = PI - log(b);
  return a * c;
}
