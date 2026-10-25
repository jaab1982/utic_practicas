'use strict'

var numero1 = parseInt(prompt("Ingrese el valor 1", 0));
var numero2 = parseInt(prompt("Ingrese el valor 2", 0)); 

while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1)|| isNaN(numero2)) {
    var numero1 = parseInt(prompt("Vuelva a ingresar el valor 1", 0));
    var numero2 = parseInt(prompt("Vuelva a ingresar el valor 2", 0));   
}

if (numero1 > numero2) {
    alert('El numero 1 es mayor');   
} else if (numero1 < numero2) {
    alert('El numero 2 es mayor');
} else {
    alert('El numero es igual');
}