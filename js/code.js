function init() {
	var mapCenter = {lat: 39, lng: -95};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 4, 
		center: mapCenter
	});

	document.getElementById("submitBtn").addEventListener("click", function(e){
		var name = document.getElementById("name").value;
		var x = parseFloat(document.getElementById("lng").value);
		var y = parseFloat(document.getElementById("lat").value);
		var latLng = {lng: x, lat: y};

		var newMarker = new google.maps.Marker({
			position: latLng,
			map: map, 
			title: name
		});

		e.preventDefault();
	});
}