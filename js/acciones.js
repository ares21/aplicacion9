// JavaScript Document
$(document).ready(function(e) {
    //watchID se refiere a actual
	
	var watcID=null;
	document.addEventListener("deviceready",Dispositivo_Listo,false);
	
	//Cuando este listo el dispositivo
	function Dispositivo_Listo(){
		Comineza();
	}
	
	//Empieza la observacion de la aceleracion
	function Comienza(){
		
		//Actualiza la aceleracion cada 2 segundos
		//
		var opciones={frequency:2000};
		
		watchID=navigator.accelerometer.watchAcceleration(Correo,Error,Opciones);
		navigator.geolocation.getCurrentPosition(Localiza, ErrorLocalizacion);
	}
	//Detine la observacion de la aceleracion
	
	function Detente(){
		if(watchID){
			navigator .accelerometer.clearWatch (watchID);
			watchID=null;
		}
	}
	//Correcto:Toma una captura de la aceleracion
	function Correcto(acceleration){
		var element=document.getElementById('acelerometro');
		
		Element.innerHTML='Acelracion en X:'+acceleration.x+'<br/>'+
		'Aceleracion en Y:'+acceleracion.y+'<br/>'+
		'intervalo:'+acceleracion.timestamp+'<br/>';
	}
	
	//eRROR:FALLA al obtener la aceleracion
	function Error(){
		alert('Error!');
	}
	//Exito al locaclizar
	function Localiza(posicion){
		var element=document.getElementById('geolocalizacion');
		element.innerHTML='Latitud:' +posicion.coords.latitude +'<br/>'+
		'Longitud:' +posicion.coords.longitude +'<br/>'+
		'Precision:' +posicion.coords.accuracy +'<br/>'+
		'Intervalo:' +posicion.timestamp +'<br/>';
	}
	//Error en la geollocalizacion
	function ErrorLocalizacion(error){
		alert('codigo:' +error.code +'\n'+
		'mensaje:'+error.message+'\n');
	}
});//document ready
