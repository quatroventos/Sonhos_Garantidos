var map;
var idInfoBoxAberto;
var infoBox = [];
var markers = [];
var pontoss_pins = [];

function initialize() {	
    var options = {
        zoom: 5,
		center: new google.maps.LatLng(-18.8800397, -47.05878999999999),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("mapa"), options);
}
initialize();

function abrirInfoBox(id, marker) {
	if (typeof(idInfoBoxAberto) == 'number' && typeof(infoBox[idInfoBoxAberto]) == 'object') {
		infoBox[idInfoBoxAberto].close();
	}
	infoBox[id].open(map, marker);
	idInfoBoxAberto = id;
}

function fecharInfoBox() {
	console.log(pontoss_pins);
	$.each(pontoss_pins, function($key, $value) {
		infoBox[$value].close();
	});
}
