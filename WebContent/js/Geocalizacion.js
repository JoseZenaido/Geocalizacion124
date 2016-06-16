/**
 * Icon in markers
 */
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;
google.maps.event.addDomListener(window, 'load', 
function(){
	var directionsRerenderOptions = {
			markerOptions:{
			icon: new google.maps.MarkerImage("image/p.jpg")
	
			}};
	directionsDisplay = new google.maps.DirectionsRenderer();
	directionsDisplay.setOptions(directionsRerenderOptions);
	map=new google.maps.Map(document.getElementById('map-canvas'),{
		zoom:6,
		center: new google.maps.LatLng(19.430, -99.100),
		mapTypeId:google.maps.MapTypeId.ROADMAP
	});
	directionsDisplay.setMap(map);
	/*dibuja linea
	var lineSymbol = {
			path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
			scale: 5,
			strokeColor: '#393'
		};
		
		
		var polyOptions = {
			icons: [{
				icon: lineSymbol,
				offset: '0%'
			}],
			strokeColor: '#000000',
			strokeOpacity: 1.0,
			strokeWeight: 3
		}
		poly = new google.maps.Polyline(polyOptions);
		
		poly.setMap(map); */
		
		/**/
	var info1=new google.maps.InfoWindow;
	var clickMarker1= function(){
		var marker= this;
		var latLng= marker.getPosition();
		info1.setContent('<h3>Dolores Hidalgo </h3><img src="image/Dolores.jpg"/>'+"latitude "+latLng+
				"<a href='http://doloreshidalgo.gob.mx/'>Link of site Dolores</a>");
		info1.open(map, marker);
	};
	
	google.maps.event.addListener(map, 'mouseout',function(){
			info1.close();
	});
	
	//var iconMarker=new google.maps.MarkerImage("img/Oil-Barrel-icon.png");
		
	var marker1=new google.maps.Marker({
		map:map,//elemento
		position:new google.maps.LatLng(21.1561, -100.9308),
	//	icon:iconMarker
	});
	google.maps.event.addListener(marker1,'mouseover',clickMarker1);
	
	
	
	 function calcRoute(){
			var start = document.getElementById("start").value;
			var end = document.getElementById("end").value;
			var request = { origin: start, destination: end,
				travelMode: google.maps.DirectionsTravelMode.DRIVING
			};
			directionsService.route(request, function(directionsResult, status){
				if(status==google.maps.DirectionsStatus.OK){
					handleDirectionsResponse(
							start, end, directionsResult);
				}
			});
	 }
	 
	  
	 
/*Veracruz*/
var info2=new google.maps.InfoWindow;
var clickMarker2= function(){
	var marker= this;
	var latLng= marker.getPosition();
	info2.setContent('<h3>Veracruz </h3><image src="image/3.jpg"/>'
			+"latitude "+latLng+
			"<a href='http://veracruz.gob.mx/'>Link of site Veracruz</a>");
	info2.open(map, marker);
};

google.maps.event.addListener(map, 'mouseout',function(){
		info2.close();
});

//var iconMarker=new google.maps.MarkerImage("image/Oil-Barrel-icon.png");
	
var marker2=new google.maps.Marker({
	map:map,//elemento
	position:new google.maps.LatLng(19.1738,  -96.1342),
	//icon:iconMarker
});
google.maps.event.addListener(marker2,'mouseover',clickMarker2);


/*SE AGREGA TAMPICO*/

var info3=new google.maps.InfoWindow;
var clickMarker3= function(){
	var marker= this;
	var latLng= marker.getPosition();
	info3.setContent('<h3>TAMPICO </h3>Coordenadas: 22° 15´19" latitud norte 97° 52´07" longitud oeste.<img src="image/gas1.PNG"/>');
	info3.open(map, marker);
};

google.maps.event.addListener(map, 'mouseout',function(){
		info3.close();
});

//var iconMarker=new google.maps.MarkerImage("image/Oil-Barrel-icon.png");
	
var marker3=new google.maps.Marker({
	map:map,//elemento
	position:new google.maps.LatLng(25.1667, -100.6333),
	//icon:iconMarker
});
google.maps.event.addListener(marker3,'mouseover',clickMarker3);

/*agergando tamaulipas*/

var info4=new google.maps.InfoWindow;
var clickMarker4= function(){
	var marker= this;
	var latLng= marker.getPosition();
	info4.setContent('<h3>TAMAULIPAS </h3><img src="image/Oil-Barrel-icon.png"/>'+"<br /><br />"
			+"latitude "+latLng+"<br /><br />"+
			"<a href='http://tamaulipas.gob.mx//'>Link of site TAMAULIAS</a>");
	info4.open(map, marker);
};

google.maps.event.addListener(map, 'mouseout',function(){
		info4.close();
});

//var iconMarker=new google.maps.MarkerImage("img/Oil-Barrel-icon.png");
	
var marker4=new google.maps.Marker({
	map:map,//elemento
	position:new google.maps.LatLng(23.3557 , -99.1845),
	//icon:iconMarker
});
google.maps.event.addListener(marker4,'mouseover',clickMarker4);

/*agergando CAMPECHE*/

var info5=new google.maps.InfoWindow;
var clickMarker5= function(){
	var marker= this;
	var latLng= marker.getPosition();
	info5.setContent('<h3>CAMPECHE </h3><img src="image/Oil-Barrel-icon.png"/>'+"<br /><br />"
			+"latitude "+latLng+"<br /><br />"+
			"<a href='http://campeche.gob.mx//'>Link of site Campeche</a>");
	info5.open(map, marker);
};

google.maps.event.addListener(map, 'mouseout',function(){
		info5.close();
});

var marker5=new google.maps.Marker({
	map:map,//elemento
	position:new google.maps.LatLng(19.4333,-96.9),
	
});
google.maps.event.addListener(marker5,'mouseover',clickMarker5);
/*guadalajara*/
var info6=new google.maps.InfoWindow;
var clickMarker6= function(){
	var marker= this;
	var latLng= marker.getPosition();
	info6.setContent('<h3>Guadalajara</h3><img src="image/Oil-Barrel-icon.png"/>'+"<br /><br />"
			+"latitude "+latLng+"<br /><br />"+
			"<a href='http://guadalajara.gob.mx//'>Link of site Campeche</a>");
	info6.open(map, marker);
};

google.maps.event.addListener(map, 'mouseout',function(){
		info6.close();
});

var marker6=new google.maps.Marker({
	map:map,//elemento
	position:new google.maps.LatLng(20.5, -103.0582),
	
});
google.maps.event.addListener(marker6,'mouseover',clickMarker6);

/*Aguascalientes*/
var info7=new google.maps.InfoWindow;
var clickMarker7= function(){
	var marker= this;
	var latLng= marker.getPosition();
	info7.setContent('<h3>Aguascalientes</h3><img src="image/Oil-Barrel-icon.png"/>'+"<br /><br />"
			+"latitude "+latLng+"<br /><br />"+
			"<a href='http://guadalajara.gob.mx//'>Link of site Campeche</a>");
	info7.open(map, marker);
};

google.maps.event.addListener(map, 'mouseout',function(){
		info7.close();
});

var marker7=new google.maps.Marker({
	map:map,//elemento
	position:new google.maps.LatLng(21.8833,  -102.283),
	
});
google.maps.event.addListener(marker7,'mouseover',clickMarker7);


/*Durango*/

var info8=new google.maps.InfoWindow;
var clickMarker8= function(){
	var marker= this;
	var latLng= marker.getPosition();
	info8.setContent('<h3>Durango</h3><img src="image/Oil-Barrel-icon.png"/>'+"<br /><br />"
			+"latitude "+latLng+"<br /><br />"+
			"<a href='http://guadalajara.gob.mx//'>Link of site Campeche</a>");
	info8.open(map, marker);
};

google.maps.event.addListener(map, 'mouseout',function(){
		info8.close();
});

var marker8=new google.maps.Marker({
	map:map,//elemento
	position:new google.maps.LatLng(19.0333,  -96.5125),
	
});
google.maps.event.addListener(marker8,'mouseover',clickMarker8);

});/*close/Open*/
function handleDirectionsResponse(start, end, directionsResult){
	directionsDisplay.setDirections(directionsResult);
	var routes = directionsResult.routes;
	for(var i=0; i<routes.length; i++){
		var totalDistance = 0;
		var legs = routes[i].legs;
		for(j=0; j<legs.length; j++){
			totalDistance += legs[j].distance.value;
		}
		document.getElementById("distance").innerHTML= Math.round(totalDistance/1000);
	}

	  var info1=new google.maps.InfoWindow;
		var clickMarker1= function(){
			var marker= this;
			var latLng= marker.getPosition();
			info1.setContent('<h3>Tabasco </h3><image src="image/gas2.PNG"/>'+"latitude "+latLng+
					"<a href='http://Tabasco.gob.mx/'>Link of site Tabasco</a>");
			info1.open(map, marker);
		};
		
		google.maps.event.addListener(map, 'mouseout',function(){
				info1.close();
		});
		
		var iconMarker=new google.maps.MarkerImage("image/Oil-Barrel-icon.png");
			
		var marker1=new google.maps.Marker({
			map:map,//elemento
			position:new google.maps.LatLng(21.8667, -102.9167),
			icon:iconMarker
		});
		google.maps.event.addListener(marker1,'mouseover',clickMarker1);


	
  }

  function calcRoute(){
	var start = document.getElementById("start").value;
	var end = document.getElementById("end").value;
	var request = { origin: start, destination: end,
		travelMode: google.maps.DirectionsTravelMode.DRIVING
	};
	directionsService.route(request, function(directionsResult, status){
		if(status==google.maps.DirectionsStatus.OK){
			handleDirectionsResponse(
					start, end, directionsResult);
		}
	});
	

	
  }
 
