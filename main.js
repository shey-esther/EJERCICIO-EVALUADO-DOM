
var asiento =[];//el arreglo con el numero de todo los asientos almacenados
var asientos = document.getElementsByTagName('td');
for (var i = 0; i < asientos.length; i++) {
    asientos[i].addEventListener('click',redirect,false);
}
function redirect(event){
    document.getElementById("mostrar").innerHTML=(event.target.textContent);
   // event.target.style.backgroundColor="red"
   celdita=event.target;
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
 
}
//esta funcion debe cancelar los datos ingresados al momento de reservar
//   function cancelar(){
//   document.getElementById("mostrar").textContent=" ";
//   document.getElementById("nombre").value="";
//   document.getElementById("apellidos").value=" ";
//   document.getElementById("dni").value=" ";
// }

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
var celdita;








