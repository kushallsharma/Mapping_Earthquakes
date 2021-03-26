console.log("working");

// Create the map object with a center and zoom level.
let map = L.map("mapid", {
    center: [
      34.0522, -118.2437
    ],
    zoom: 4
  });
 
 // We create the tile layer that will be the background of our map.
  let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      // id: 'mapbox.streets',
      accessToken: API_KEY
  });
  // Then we add our 'graymap' tile layer to the map.
  streets.addTo(map);
  
 //  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

L.circle([34.0522, -118.2437], {
    color: 'black',
    fillColor: 'yellow',
    fillOpacity: 0.5,
    radius: 300
}).addTo(map);

//  Add a marker to the map for San Diego with circe marker, California.
L.circleMarker([32.7157, -117.1611],{
  color: 'black',
  fillColor: '#FFFFA1',
  fillOpacity: 0.5,
  radius: 300
}).addTo(map);
