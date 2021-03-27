console.log("working");

// Create the map object with a center and zoom level.
let map = L.map("mapid", {
    center: [
        39.0997, -94.5786
    ],
    zoom: 4
  });
 
 // We create the tile layer that will be the background of our map.
  let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      // id: 'mapbox.streets',
      accessToken: API_KEY
  });
  // Then we add our 'graymap' tile layer to the map.
  streets.addTo(map);


// Coordinates for each point to be used in the line.
// Coordinates for each point to be used in the polyline.
let line = [
    [37.6213, -122.3790],
    [30.1975, -97.6664],
    [43.6777, -79.6248],
    [40.6413, -73.7781]
  ];

  // Create a polyline using the line coordinates and make the line red.


  L.polyline(line, {
    color: "blue",
    weight: 4,
    stroke: "true",
    opacity: 0.5,
    dashArray: '10'

  }).addTo(map);


 // Get data from cities.js
// let cityData = cities;

// // Loop through the cities array and create one marker for each city.
// // Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//   console.log(city)
//   L.circleMarker(city.location, {
//     radius: (city.population/200000),
//     lineWeight: 4,
//     color: '	#FFA500',
//     fillcolor: '#FF8C00',
//     fillOpacity: 0.5
//   })
//   .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
// .addTo(map);
// });

// L.circle([34.0522, -118.2437], {
//     color: 'black',
//     fillColor: 'yellow',
//     fillOpacity: 0.5,
//     radius: 300
// }).addTo(map);

// //  Add a marker to the map for San Diego with circe marker, California.
// L.circleMarker([32.7157, -117.1611],{
//   color: 'black',
//   fillColor: '#FFFFA1',
//   fillOpacity: 0.5,
//   radius: 300
// }).addTo(map);
