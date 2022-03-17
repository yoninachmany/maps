var intervalId = -1;
fetch('./data/subway_construction_photograph_collection_1900_1950.geojson')
.then(response => response.json())
.then(data => {
    const features = data.features.filter(feature => feature.properties.description.includes("Above ground"));
    const PIDs = features.map(feature => feature.properties.PID);
    intervalId = setInterval(function(PIDs) {
      const randomPID = PIDs[Math.floor(Math.random() * PIDs.length)];
      document.getElementById("photo").innerHTML =`<a href="https://digitalcollections.nyhistory.org/islandora/object/${randomPID}" target="_blank"><img id="photo" src="https://digitalcollections.nyhistory.org/islandora/object/${randomPID}/datastream/JPG/view" width=700 height=400></a>`
    }, 2000, PIDs);
});

// set my mapboxgl access token
mapboxgl.accessToken = 'pk.eyJ1IjoieW9uaW5hY2htYW55IiwiYSI6ImNqYWFocjVlajBocDcyd3RleW9sZWpkN3YifQ.9dk1UZWtf_NliyYFd0DALQ';

// initialize the mapboxGL map in the div with id 'mapContainer'
const map = new mapboxgl.Map({
  container: 'mapContainer',
  style: 'mapbox://styles/yoninachmany/cl0uc2vi8000316ny7lx72pwu',
  center: [-74.2405, 40.708],
  zoom: 10.05,
  hash: true
});

// wait for the initial mapbox style to load before loading our own data
map.on('style.load', () => {
  // add geojson sources for subway routes and stops
  map.addSource('nyc-subway-routes', {
    type: 'geojson',
    data: 'data/nyc-subway-routes.geojson'
  });

  map.addSource('nyc-subway-stops', {
    type: 'geojson',
    data: 'data/nyc-subway-stops.geojson'
  });

  map.addSource('subway_construction_photographs', {
    type: 'geojson',
    data: 'data/subway_construction_photograph_collection_1900_1950.geojson'
  });

  // add layers by iterating over the styles in the array defined in subway-layer-styles.js
  subwayLayerStyles.forEach((style) => {
    map.addLayer(style)
  });
   
  map.on('mouseenter', 'subway_construction_photographs', (e) => {
    // Copy coordinates array.
    const coordinates = e.features[0].geometry.coordinates.slice();
    const PID = e.features[0].properties.PID;
    const title = e.features[0].properties.title;
    const description = e.features[0].properties.description;
    const date_created = e.features[0].properties.date_created;
     
    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }
     
    clearInterval(intervalId);
    document.getElementById("title").innerHTML = title;
    if (date_created) {
      document.getElementById("title").innerHTML += ` (${date_created})`
    }
    document.getElementById("photo").innerHTML = `<a href="https://digitalcollections.nyhistory.org/islandora/object/${PID}" target="_blank"><img id="photo" src="https://digitalcollections.nyhistory.org/islandora/object/${PID}/datastream/JPG/view" width=700 height=550></a>`;
    document.getElementById("description").innerHTML = `${description} <a href="https://digitalcollections.nyhistory.org/islandora/object/${PID}" target="_blank">https://digitalcollections.nyhistory.org/islandora/object/${PID}</a>`;
    document.getElementById("about").innerHTML = "<i>Photograph © New York Transit Museum.<i>"
  });
})