var MapWrapper = function(divContainer, coordinates, zoomLevel){
  this.googleMap = new google.maps.Map(divContainer, {
    center: coordinates,
    zoom: zoomLevel
  })
}

MapWrapper.prototype = {
  addMarker: function(coordinates){
    var marker = new google.maps.Marker({
      position: coordinates,
      map: this.googleMap
    })
  },
  // addInfoWindow = function(){
  //   var marker = this.addMarker(coordinates);
  //   marker.addListener("click", function(){
  //     var infoWindow = new.google.maps.InfoWindow({
  //       content: text;
  //     });
  //   infoWindow.open(this.map, marker);
  // });
  // }





}
