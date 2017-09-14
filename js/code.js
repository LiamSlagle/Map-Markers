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

		var r = document.createElement('tr');
		var d1 = document.createElement('td');
		var d2 = document.createElement('td');
		var d3 = document.createElement('td');

		d1.appendChild(document.createTextNode(name));
		d2.appendChild(document.createTextNode(x));
		d3.appendChild(document.createTextNode(y));

		r.appendChild(d1);
		r.appendChild(d2);
		r.appendChild(d3);

		document.getElementById("markerRows").appendChild(r);

		e.preventDefault();
	});
}