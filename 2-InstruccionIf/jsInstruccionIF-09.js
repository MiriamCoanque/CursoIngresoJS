/*Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive*/

function mostrar()
{
	let min;
	let max;
	let random;
	
	min=1;
	max=10;

	random= Math.floor(Math.random()* (max-min + 1)+min);

	alert(random);
	

}//FIN DE LA FUNCIÓN