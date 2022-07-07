/*Al ingresar una edad debemos informar
si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).*/

function mostrar()
{
	let edad;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	if(edad<13)
	{
		alert("eres un niño");
	}
	else
	{
		if(edad<18)
			alert("eres adolescente");
		else
		{
			alert("eres mayor de edad");
		}
	}



}//FIN DE LA FUNCIÓN