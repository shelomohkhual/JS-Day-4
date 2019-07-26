// TODO: Write your JS code in here
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// TODO: Write your JS code in here
// eslint-disable-next-line no-unused-vars

var autoCompleteList = document.getElementById("results");
var button = document.querySelector(".search_icon");

var myAPI = "pk.eyJ1Ijoic2hlbG9tb2giLCJhIjoiY2p5ZWZjaDMwMTEycjNtczgxaWl5MHR1eiJ9.sjNwfYXDTPr0PAkVPlvZAg";

button.addEventListener("click",fetchSearch);
button.addEventListener("keypress", function (e) {
  var key = e.which || e.keyCode;
  if (key === 13) {
    fetchSearch();
  }
});


function fetchSearch(){
  var searchInput = document.querySelector(".search_input");
  fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/"+ searchInput.value +".json?access_token=" + myAPI)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      mapboxgl.accessToken = myAPI;
      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v9",
        zoom: 12,
        center: data.features[0].center
      });
    });

}




// mapboxgl.accessToken = "pk.eyJ1Ijoic2hlbG9tb2giLCJhIjoiY2p5ZWZjaDMwMTEycjNtczgxaWl5MHR1eiJ9.sjNwfYXDTPr0PAkVPlvZAg";
// const map = new mapboxgl.Map({
//   container: "map",
//   style: "mapbox://styles/mapbox/streets-v9",
//   zoom: 12
// });

// map.addControl(new MapboxGeocoder({
//   accessToken: mapboxgl.accessToken,
//   mapboxgl: mapboxgl
// }));