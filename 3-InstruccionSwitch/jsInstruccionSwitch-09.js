/*una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, 
se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20%, cataratas y Cordoba tiene un descuento del 10%, Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20%, cataratas y Cordoba tiene un aumento del 10%, Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10%, cataratas 
tiene un aumento del 10%, Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento*/

function mostrar()
{
	let estacion;
	let destino;
	let estadia;
	let precioTotal;

	estacion=document.getElementById("txtIdEstacion").value;
	destino=document.getElementById("txtIdDestino").value;

	estadia=15000;

	switch(estacion)
	{
		case "Invierno":
		switch(destino)
		{
			case "Bariloche":
			precioTotal=estadia + (estadia*0.20);
			alert("En " + destino + " el precio total es de " + precioTotal + " cuando es " + estacion);
			break;

			case "Cordoba":
			case "Cataratas":
			precioTotal=estadia-(estadia*0.1);
			alert("En " + destino + " el precio total es de " + precioTotal + " cuando es " + estacion);
			break;

			case "Mar del plata":
			precioTotal=estadia-(estadia*0.20);
			alert("En " + destino + " el precio total es de " + precioTotal + " cuando es " + estacion);
			break;
		}
		break;

		case "Verano":
		switch(destino)
		{
			case "Bariloche":
			precioTotal=estadia-(estadia*0.20);
			alert("En " + destino + " el precio total es de " + precioTotal + " cuando es " + estacion);
			break;

			case "Cataratas":
			case "Cordoba":
			precioTotal=estadia+(estadia*0.1);
			alert("En " + destino + " el precio total es de " + precioTotal + " cuando es " + estacion);
			break;

			case "Mar del plata":
			precioTotal=estadia+(estadia*0.20);
			alert("En " + destino + " el precio total es de " + precioTotal + " cuando es " + estacion);
			break;
		}
		break;

		case "Otoño":
		case "Primavera":
		switch(destino)
		{
			case "Bariloche":
			case "Cataratas":
			case "Mar del plata":
			precioTotal=estadia+(estadia*0.1);
			alert("En " + destino + " el precio total es de " + precioTotal + " cuando es " + estacion);
			break;

			default:
			precioTotal=estadia;
			alert("En " + destino + " el precio total es de " + precioTotal + " cuando es " + estacion);
			break;
		}
	}

}//FIN DE LA FUNCIÓN