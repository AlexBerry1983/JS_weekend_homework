
var mountains;
var app = function(){
  var url = "https://munroapi.herokuapp.com/api/munros";
  var request = new XMLHttpRequest();
  var div = document.querySelector("#search");

  request.open("GET", url);
  request.addEventListener("load", function(){
    var jsonString = request.responseText;
    mountains = JSON.parse(jsonString);
    // createSearchInput()
    createSelect(mountains, div);
    var select = document.getElementById("select");
    select.addEventListener("change", handleSelectChanged);
    initialize();
  })
  request.send();
}

var initialize = function(){
  var coordinates = {lat: 56.796849, lng: -5.003525}
  var zoom = 10
  var divContainer = document.querySelector("#main-map")
  var mainMap = new MapWrapper(divContainer, coordinates, zoom);

  mainMap.addMarker(coordinates);
}

var createSearchInput = function(){
  var searchInput = document.createElement("input");
  var div = document.querySelector("#search");
  div.appendChild(searchInput);
}

var searchResult = function(){
  var searchInput = document.getElementById("#input");
  searchInput.addEventListener("keyup", function(){
    searchText = this.value;
  })
}

var createSelect = function(mountains, div){
  var select = document.createElement("select");
  select.id = "select";
    mountains.forEach(function(mountain, index){
      var option = document.createElement("option");
      option.value = index;
      option.text = mountain.name;
      select.appendChild(option);
    });
  div.appendChild(select);
}

var handleSelectChanged = function(){
  var index = this.value
  var mountain = mountains[index];
    var liName = document.getElementById("mountain-name");
    liName.innerText = "Name: " + mountain.name;
    var liMeaning = document.getElementById("mountain-name-meaning");
    liMeaning.innerText = "Meaning: " + mountain.meaning;
    var liRegion = document.getElementById("mountain-region");
    liRegion.innerText = "Region: " + mountain.region;
    console.log(mountain.latlng_lat);
    var coordinates = {lat: mountain.latlng_lat, lng: mountain.latlng_lng}
    var zoom = 12
    var divContainer = document.querySelector("#main-map")
    var mainMap = new MapWrapper(divContainer, coordinates, zoom);
    mainMap.addMarker(coordinates);
    // marker.addInfoWindow(coordinates, mountain.meaning);
}




window.addEventListener("load", app);
