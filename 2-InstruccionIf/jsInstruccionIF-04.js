/*Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive)*/

function mostrar()
{
	let edad;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	if(edad>13 && edad<18)
	{
		alert("eres adolescente");
	}


}//FIN DE LA FUNCIÓN