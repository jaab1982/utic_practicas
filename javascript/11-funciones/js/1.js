/* Funciones */

'use strict'

function calculadora() {
    var mensaje = alert("Soy una función");
}

calculadora();

function calcular(numero1, numero2, mostrar = false) {
    if (!mostrar) {

    } else {
        var suma = numero1 + numero2;
        return suma;
    }
}

var numero1 = parseInt(prompt('Ingrese el valor 1', 0));
var numero2 = parseInt(prompt('Ingrese el valor 2', 0));

alert(calcular(numero1, numero2, true));