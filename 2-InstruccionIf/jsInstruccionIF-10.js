/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/

function mostrar()
{
	let min;
	let max;
	let nota;
	
	min=1;
	max=10;

	nota= Math.floor(Math.random()* (max-min + 1)+min);

	if(nota==9 || nota==10)
	{
		alert(nota + ", excelente");
	}
	else
	{
		if(nota>4 && nota<9)
		{
			alert(nota + ", aprobó");
		}
		else
		{
			alert(nota + ", vamos, la proxima se puede");
		}
	}

}//FIN DE LA FUNCIÓN