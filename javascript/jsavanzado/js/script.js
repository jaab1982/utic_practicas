
/* DOM */

'user strict'

// ingresar el elementopor su id
// var caja = document.getElementById("micaja").innerHTML = "Texto cambiado con DOM";
// console.log(caja);

function cambiarColor(color, color2) {
    caja.style.background = color;
    otraforma.style.background = color2;
}
// seleccionar por id
var caja = document.getElementById("micaja");
caja.innerHTML = "¡Texto cambiado por segunda vez!.";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "micaja-conclase";
console.log(caja);
// seleccionar por query
var otraforma = document.querySelector("#micaja2");
otraforma.style.color = "blue";
console.log(otraforma);
// seleccionar elementos por etiquetas
var todosLosDiv = document.getElementsByTagName('div');
var valorDivSelected = todosLosDiv[2].textContent;
console.log(valorDivSelected);

var cambiarSeleccionado = todosLosDiv[2];
cambiarSeleccionado.style.background = "green";
