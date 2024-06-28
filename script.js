navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  setupMap([-2.24, 53.48]);
}

mapboxgl.accessToken =
  'pk.eyJ1IjoidGhpc2lzYnVuIiwiYSI6ImNseHliMnY2eTBjMHYya3BzYXF2cWRweG4ifQ.JiYUf0CW_SQx7z-OYTnOSQ';

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center,
    zoom: 12,
  });

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  const directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  });
  map.addControl(directions, 'top-left');

  map.setLayoutProperty('country-label');
}
