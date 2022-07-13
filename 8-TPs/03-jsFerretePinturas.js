/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado 
(ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	
	let temperatura;
	let temperaturaCentigrados;
	let mensaje;

	

	temperatura=document.getElementById("txtIdTemperatura").value;
	temperatura=parseFloat(temperatura);

	temperaturaCentigrados= (temperatura -32)/1.8;

	mensaje= temperatura.toFixed(1) + " °F son " + temperaturaCentigrados.toFixed(1) + " °C";
	 
	alert(mensaje);
}

function CentigradosFahrenheit () 
{
	let temperatura;
	let temperaturaFahrenheit;
	let mensaje;

	

	temperatura=document.getElementById("txtIdTemperatura").value;
	temperatura=parseFloat(temperatura);

	temperaturaFahrenheit= temperatura*1.8 + 32;

	mensaje= temperatura + " °C son " + temperaturaFahrenheit + " °F";
	
	alert(mensaje);

}
