var Incidents = require('./db/collections/incidents.js');
var Incident = require('./db/models/incident.js');

var inc = new Incident({
  latitude: 37.792432, 
  longitude: -122.397477
}).save().then(function (newIncident) {
  Incidents.add(newIncident);
  console.log('added new incident!');
});

module.exports = inc;
