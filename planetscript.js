var gmercurio = 3.7;
var gvenus = 8.87;
var gtierra = 9.8;
var gmarte = 3.71;
var gjupiter = 24.79;
var gsaturno = 10.44;
var gurano = 8.69;
var gneptuno = 11.15;
var peso_final;

function obtenerPeso() {
	var peso = document.getElementById("pesoX").value;
	let seleccion = document.querySelectorAll("input[name=planetsel]");
	if (peso=="") {
		alert("Debe poner su peso para continuar");
		document.getElementById("pesoX").focus();
		return("pesoObtenido");
	}

	else if (seleccion[0].checked) {
            peso_final = peso * gmercurio / gtierra;
            peso_final = parseInt(peso_final);
            nombremer = " Mercurio ";
            nombre = nombremer;
           
	}

	else if (seleccion[1].checked) {
		    peso_final = peso * gvenus / gtierra;
		    peso_final = parseInt(peso_final);
		    nombreven = " Venus ";
		    nombre = nombreven;
		   
	}

	else if (seleccion[2].checked) {
		    peso_final = peso * gmarte / gtierra;
		    peso_final = parseInt(peso_final);
		    nombremar = " Marte ";
		    nombre = nombremar;
		   
	}

	else if (seleccion[3].checked) {
		    peso_final = peso * gjupiter / gtierra;
		    peso_final = parseInt(peso_final);
		    nombrejup = " Jupiter ";
		    nombre = nombrejup;
		    
	}

	else if (seleccion[4].checked) {
		    peso_final = peso * gsaturno / gtierra;
		    peso_final = parseInt(peso_final);
		    nombresat = " Saturno ";
		    nombre = nombresat;
		   
	}

	else if (seleccion[5].checked) {
		    peso_final = peso * gurano / gtierra;
		    peso_final = parseInt(peso_final);
		    nombreura = " Urano ";
		    nombre = nombreura;
		    
	}

	else if (seleccion[6].checked) {
		    peso_final = peso * gneptuno / gtierra;
		    peso_final = parseInt(peso_final);
		    nombrenep = " Neptuno ";
		    nombre = nombrenep;
		    
	}
	document.getElementById("pesoObtenido").innerHTML = "Tu peso en " + nombre + " es " + peso_final + " kg ";
}