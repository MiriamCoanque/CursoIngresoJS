/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

function sumar()
{	
	let numeroUno;
	let numeroDos;
	let resultadoSuma;

	numeroUno=document.getElementById("txtIdNumeroUno").value;
	numeroDos=document.getElementById("txtIdNumeroDos").value;

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	resultadoSuma= numeroUno + numeroDos;

	alert("tu resultado es: " + resultadoSuma);	
}

function restar()
{
	let numeroUno;
	let numeroDos;
	let resultadoResta;

	numeroUno=document.getElementById("txtIdNumeroUno").value;
	numeroDos=document.getElementById("txtIdNumeroDos").value;

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	resultadoResta= numeroUno - numeroDos;

	alert("tu resultado es: " + resultadoResta);
	
}

function multiplicar()
{ 
	let numeroUno;
	let numeroDos;
	let resultadoMultiplicar;

	numeroUno=document.getElementById("txtIdNumeroUno").value;
	numeroDos=document.getElementById("txtIdNumeroDos").value;

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	resultadoMultiplicar= numeroUno * numeroDos;

	alert("tu resultado es: " + resultadoMultiplicar);
	
}

function dividir()
{
	let numeroUno;
	let numeroDos;
	let resultadoDividir;

	numeroUno=document.getElementById("txtIdNumeroUno").value;
	numeroDos=document.getElementById("txtIdNumeroDos").value;

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	resultadoDividir= numeroUno / numeroDos;

	alert("tu resultado es: " + resultadoDividir);
	
}

