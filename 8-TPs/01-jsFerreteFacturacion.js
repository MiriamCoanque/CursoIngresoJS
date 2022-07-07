/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precioUno;
	let precioDos;
	let precioTres;
	let resultadoSuma;

	precioUno= document.getElementById("txtIdPrecioUno").value;
	precioDos= document.getElementById("txtIdPrecioDos").value;
	precioTres= document.getElementById("txtIdPrecioTres").value;

	precioUno=parseInt(precioUno);
	precioDos=parseInt(precioDos);
	precioTres=parseInt(precioTres);

	resultadoSuma= precioUno + precioDos + precioTres;

	alert("la suma es: " + resultadoSuma);
}
function Promedio () 
{
	let precioUno;
	let precioDos;
	let precioTres;
	let resultadoPromedio;

	precioUno= document.getElementById("txtIdPrecioUno").value;
	precioDos= document.getElementById("txtIdPrecioDos").value;
	precioTres= document.getElementById("txtIdPrecioTres").value;

	precioUno=parseInt(precioUno);
	precioDos=parseInt(precioDos);
	precioTres=parseInt(precioTres);

	resultadoPromedio= (precioUno + precioDos + precioTres)/3;

	alert("el promedio es: " + resultadoPromedio);
}
function PrecioFinal () 
{
	let precioUno;
	let precioDos;
	let precioTres;
	let sumaPrecios;
	let precioFinal;

	precioUno= document.getElementById("txtIdPrecioUno").value;
	precioDos= document.getElementById("txtIdPrecioDos").value;
	precioTres= document.getElementById("txtIdPrecioTres").value;

	precioUno=parseInt(precioUno);
	precioDos=parseInt(precioDos);
	precioTres=parseInt(precioTres);

	sumaPrecios= precioUno + precioDos + precioTres;

	precioFinal= sumaPrecios + (sumaPrecios * 0.21);

	alert("el precio final con iva es: " + precioFinal);

}