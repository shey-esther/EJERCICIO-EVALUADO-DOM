var celdita;
var n_asiento;
var asiento =[];//el arreglo con el numero de todo los asientos almacenados
var asientos = document.getElementsByTagName('td');
alert("Seleccione el numero antes de llenar los datos !!!!!!!");

	for (var i = 0; i < asientos.length; i++) {
    	asientos[i].addEventListener('click',redirect,false);
}

function redirect(event){
	limpiar();
    document.getElementById("mostrar").innerHTML=(event.target.textContent);
   	celdita=event.target;
  	n_asiento=parseInt(event.target.textContent);

  	console.log(n_asiento);//me muestra el numero de asiento reservado

   	for (var i = 0; i < asiento.length; i++) {
   		var ps = (asiento[i].asientoNr);

   		console.log(ps);//muestra el numero de asientos ya reservados los compara y al hacer el clic muestra los datos

		if(n_asiento==ps){
		  document.getElementById("nombre").value=asiento[i].nombre;
		  document.getElementById("apellidos").value=asiento[i].apellido;
		  document.getElementById("dni").value=asiento[i].dni;

		}
   	}
}

function DatosPasajero(asientoNr,nombre,apellido,dni){

  	this.asientoNr=asientoNr,
  	this.nombre=nombre,
  	this.apellido=apellido,
  	this.dni=dni
}
//reserva los datos de los asientos que seleccionamos y lo pinta


function reservar(){

  	var asientoNr=document.getElementById("mostrar").textContent;
  	var nombre=document.getElementById("nombre").value;
  	var apellido=document.getElementById("apellidos").value;
  	var dni=document.getElementById("dni").value;

  	var pasajero=new DatosPasajero(asientoNr,nombre,apellido,dni);
  	asiento.push(pasajero);
  	celdita.style.backgroundColor="red";
  	console.log(asiento);
 	limpiar()
}
//esta funcion limpia para hacer una nueva reserva
function limpiar(){

  	document.getElementById("mostrar").textContent=" ";
  	document.getElementById("nombre").value="";
  	document.getElementById("apellidos").value=" ";
 	document.getElementById("dni").value=" ";
}

//me muestra los datos ingresados al momento de reservar
function mostrar(){
  	var cuadro = "<table>"
  	for (var i = 0; i < asiento.length; i++) {
    	cuadro +="<tr><td>N°ASIENTO:"+asiento[i].asientoNr+"</td>"+
    	"<td>NOMBRE:"+asiento[i].nombre+"</td>"+
    	"<td>APELLIDO:"+asiento[i].apellido+"</td>"+
   		"<td>DNI:"+asiento[i].dni+"</td></tr>";
  	}
  	cuadro+="</table>"
  	document.getElementById("resultado").innerHTML=cuadro;
}
//busca con el dni comparandolos y te muestra los datos del pasajero
function buscar(){
	var dni =document.getElementById("dni1").value;
	for (var i = 0; i < asiento.length; i++) {
		   	var ps =asiento[i].dni;
		if(dni==ps){
			document.getElementById("nombre").value=asiento[i].nombre;
  			document.getElementById("apellidos").value=asiento[i].apellido;
 			document.getElementById("dni").value=asiento[i].dni;
 		}
 	}
}
 function cancelar(){
limpiar();
var n_asiento = document.getElementById("mostrar").textContent;
console.log(n_asiento);
	
 	for (var i = 0; i < asiento.length; i++) {
    	
		if(asiento[i].asientoNr == n_asiento){

			 asiento.splice(i,1);
			 console.log(asiento);

			celdita.style.backgroundColor="transparent";
 		}
	}
}











