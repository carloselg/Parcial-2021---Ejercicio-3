/**
 * 
Enunciado:
Bienvenidos.
debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas, de cada persona debemos optener los siguientes datos:
Nombre,
estado civil ("soltero", "casado" o "viudo"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con estado "viudo" de mas de 60 años.
b) el nombre y edad de la mujer soltera mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% del pasaje que tiene mas de. 60 años , el precio final tiene un descuento del 25%, que solo mostramos si corresponde.

		CARLOS LOPEZ DIVISION G

*/
function mostrar()
{
	//Declaraciones
	var nombreIngresado;
	var estadoCivil;
	var edadIngresada;
	var temperaturaCorporal;
	var sexoIngresado;
	var respuesta;
	//Contador
	var contadorPasajeros=0;
	var contadorViudosViejos=0;
	var contadorViejos=0;

	var edadSolteraJoven;
	var nombreSolteraJoven;

	var importeSinDescuento;
	var importeConDescuento;
	var descuento;
	var flag=0;
	
	

	do {
		
		do {
			nombreIngresado = prompt("Ingrese el nombre del pasajero");

		} while (isNaN(nombreIngresado) == false);

		do {
			estadoCivil = prompt("Ingrese su estado civil (soltero-casado-viudo)");

		} while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo");

		do {
			edadIngresada = parseInt(prompt("Ingrese su edad (mayor a 18)"));

		} while (isNaN(edadIngresada) || edadIngresada < 17 || edadIngresada > 100);

		do {
			temperaturaCorporal = parseInt(prompt("Ingrese su temperatura corporal"));

		} while (isNaN(temperaturaCorporal) || temperaturaCorporal < 35 || temperaturaCorporal > 40);

		do {
			sexoIngresado = prompt("Ingrese su sexo (Masculino o Femenino)");

		} while (sexoIngresado != "masculino" && sexoIngresado != "femenino");

		contadorPasajeros++;

		if(flag == 0 && estadoCivil == "soltero" && sexoIngresado == "femenino"){
			nombreSolteraJoven=nombreIngresado;
			edadSolteraJoven=edadIngresada;
			flag++;
		}
		else if (estadoCivil == "soltero" && sexoIngresado == "femenino" && edadIngresada < edadSolteraJoven){
			nombreSolteraJoven=nombreIngresado;
			edadSolteraJoven=edadIngresada;
		}

		if(edadIngresada > 65 && estadoCivil == "viudo"){
			contadorViudosViejos++;
		}
		else if(edadIngresada > 65){
			contadorViejos++;
		}


	} while (respuesta = confirm("Quiere ingresar otro pasajero?"));
	
	importeSinDescuento = contadorPasajeros * 600;

	if(contadorViudosViejos != 0)
	{
		document.write("La cantidad de viudos mayores a 60 años es :"+contadorViudosViejos+"<br>");
	}

	if(flag != 0)
	{
		document.write("La mujer soltera mas joven su nombre es :"+nombreSolteraJoven+" y su edad es :"+edadSolteraJoven+"<br>");
	}

	document.write("El precio sin descuento es :"+importeSinDescuento+"<br>");

	if(contadorViejos != 0){
		comparador = contadorViejos * 100 / contadorPasajeros;
		if(comparador > 50){
			descuento = 0.25;
			importeConDescuento = importeSinDescuento - (importeSinDescuento * 0.25);
			document.write("El precio final con descuento es :"+importeConDescuento);
		}
	}


}
