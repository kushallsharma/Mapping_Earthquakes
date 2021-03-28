console.log("working");

 
 // We create the tile layer that will be the background of our map.
 let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      // id: 'mapbox.streets',
      accessToken: API_KEY
  });
;
  
  let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        accessToken: API_KEY
    });


  // Create the map object with a center and zoom level.
let map = L.map("mapid", {
  center: [
    30, 30
  ],
  zoom: 2,
  layers: [streets]
});

// Create a base layer that holds both maps.
let baseMaps = {
  Street: streets,
  Dark: dark
};

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);


  // Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/kushallsharma/Mapping_Earthquakes/main/majorAirports.json";

d3.json(airportData).then(function(data) {
  console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data,{
    onEachFeature: function(feature,layer) {
           //console.log(layer);
           layer.bindPopup()
           .bindPopup("<h2> Airport Code: " + feature.properties.id + "</h2> <hr> <h2> Airport Name: "+feature.properties.name + "</h2>")
         }
  }).addTo(map);

});




//   // Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};

// Grabbing our GeoJSON data.

// L.geoJson(sanFranAirport, {
//   onEachFeature: function(feature,layer) {
//     console.log(layer);
//     layer.bindPopup()
//     .bindPopup("<h2> Airport Code: " + feature.properties.id + "</h2> <hr> <h2> Airport Name: "+feature.properties.name + "</h2>")
//   }
// }).addTo(map);




// L.geoJson(sanFranAirport, {
//   // We turn each feature into a marker on the map.
//   pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     return L.marker(latlng)
//     .bindPopup("<h2>" + feature.properties.name + "</h2> <hr> <h2>"+feature.properties.city + ", " +feature.properties.country+"</h2>")
//   }

// }).addTo(map);

 

