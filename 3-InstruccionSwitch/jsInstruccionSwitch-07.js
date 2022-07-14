/*Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste*/

function mostrar()
{
	let destino;

	destino=document.getElementById("txtIdDestino").value;

	switch(destino)
	{
		case "Bariloche":
		alert("Esta en el Oeste");
		break;

		case "Cataratas":
		alert("Esta en el Norte");
		break;

		case "Mar del plata":
		alert("Esta en el Este");
		break;

		case "Ushuaia":
		alert("Esta en el Sur");
		break;
	}

}//FIN DE LA FUNCIÓN