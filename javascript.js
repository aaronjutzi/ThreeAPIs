let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 43.321594, lng: -80.835751 },
    zoom: 14,
  });
}