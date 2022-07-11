/*Ingresar el valor del dólar oficial y el valor del dólar blue.
Mostrar la diferencia expresada en porcentaje entre una cotización y otra.*/

{
	let dolarOficial;
	let dolarBlue;
	let diferencia;
	let porcentaje;

	dolarOficial=document.getElementById("txtIdNumeroUno").value;
	dolarBlue=document.getElementById("txtIdNumeroDos").value;

	dolarOficial=parseInt(dolarOficial);
	dolarBlue=parseInt(dolarBlue);

	diferencia=dolarBlue - dolarOficial;

	porcentaje=(diferencia*100)/dolarOficial;

	alert("la diferencia es del: " + porcentaje + "%");








}