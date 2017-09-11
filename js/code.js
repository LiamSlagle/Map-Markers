function initMap() {
	var mapCenter = {lat: 39, lng: -95};
	var map = new google.maps.Map(document.getElementById('map'), {zoom: 4, center: mapCenter});

	this.newMarker = function(name, x, y) {
		var newMarkerPosition = {lat: x, lng: y};
		var marker = new google.maps.Marker({position: newMarkerPosition, map: map});
	} 
}

